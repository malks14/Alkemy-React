import { useState, useEffect } from "react";
import heroesapi from "../../api/heroesapi";
import LoadingSpinner from "../UI/LoadingSpinner";
import CardsResults from "../Cards/CardsResults";

const SearchForm = () => {
  const [searchData, setSearchData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  //   const [error, setError] = useState("");

  const fetchHeroes = async () => {
    let heroresponse = await heroesapi.get(`/search/${searchData}`);
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
    setIsLoading(false);
    fetchHeroes();
    setSearchData("");
  };
  return (
    <div className="heroes__search section__padding">
      <form onSubmit={submitHandler}>
        <div>
          <input
            value={searchData}
            className="input"
            type="text"
            placeholder="Find a hero"
            onChange={dataChangeHandler}
          />
        </div>
        <div className="control">
          <button type="submit" className="button is-link">
            Search
          </button>
        </div>
      </form>
      {isLoading && <LoadingSpinner />}
      {searchData.response === "success" ? (
        <div className="heroes__search-result">
          {searchData.results.map((character, i) => {
            return (
              <div className="heroes__search-result_content">
                <CardsResults searchData={character} key={i} />
              </div>
            );
          })}
        </div>
      ) : (
        <p className="error">Heroe no encontrado</p>
      )}
    </div>
  );
};

export default SearchForm;
