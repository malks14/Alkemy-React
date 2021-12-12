import React, { useState, useEffect } from "react";
import heroesapi from "../../api/heroesapi";
import LoadingSpinner from "../UI/LoadingSpinner";
import CardsResults from "../Cards/CardsResults";
import styles from "./SearchForm.module.css";

const SearchForm = () => {
  const [searchData, setSearchData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchHeroes = async () => {
    let heroresponse = await heroesapi.get(`/search/${searchData}`);
    setIsLoading(false);
    console.log(heroresponse.data);
    setSearchData(heroresponse.data);
  };

  const dataChangeHandler = (event) => {
    setSearchData(event.target.value);
  };

  useEffect(() => {
    fetchHeroes();
  }, []);

  const submitHandler = (event) => {
    event.preventDefault();
    setIsLoading(true);
    fetchHeroes();
    setSearchData([]);
  };
  return (
    <div
      className={`${styles["heroes__search"]} ${styles["section__padding"]}`}
    >
      <h3 className={styles["heroes__form-alert"]}>
        Tu equipo debe estar compuesto por 3 heroes y 3 villanos
      </h3>
      <form
        onSubmit={submitHandler}
        className={styles["heroes__header-content"]}
      >
        <div className={styles["heroes__search-input"]}>
          <input
            className={styles.input}
            type="text"
            placeholder="Buscar Heroe"
            onChange={dataChangeHandler}
          />
          <button className={styles.button} type="submit">
            Buscar
          </button>
        </div>
      </form>
      {isLoading && <LoadingSpinner />}
      {searchData.response === "success" ? (
        <div className={styles["heroes__search-result"]}>
          {searchData.results.map((character, i) => {
            return (
              <div className={styles["heroes__search-result_content"]}>
                <CardsResults searchData={character} key={i} />
              </div>
            );
          })}
        </div>
      ) : (
        <p className={styles.message}>Recuerda buscar tu Heroe en ingles</p>
      )}
    </div>
  );
};

export default React.memo(SearchForm);
