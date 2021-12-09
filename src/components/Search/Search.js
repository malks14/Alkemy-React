import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import heroesapi from "../../api/heroesapi";
import CardsResults from "../Cards/CardsResults";
import LoadingSpinner from "../UI/LoadingSpinner";

import "./Search.css";

const Search = () => {
  const [searchData, setSearchData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="heroes__search section__padding">
      <Formik
        initialValues={{
          hero: "",
        }}
        validate={(values) => {
          let errores = {};
          if (!values.hero) {
            errores.hero = "Por favor ingrese un Superheroe";
          }
          return errores;
        }}
        onSubmit={async (values) => {
          setIsLoading(true);
          try {
            const heroresponse = await heroesapi.get(`/search/${values.hero}`);
            setSearchData(heroresponse.data);
            setIsLoading(false);

            console.log(heroresponse.data);
          } catch (error) {
            console.log(error.message);
            setIsLoading(false);
          }
        }}
      >
        {({ errors }) => (
          <Form className="heroes__header-content">
            <div className="heroes__search-input">
              <Field type="text" placeholder="Buscar Superheroe" name="hero" />
              <button type="submit">Buscar</button>
            </div>
            <ErrorMessage
              name="hero"
              component={() => <div className="error">{errors.hero}</div>}
            />
          </Form>
        )}
      </Formik>
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

export default Search;
// useEffect(() => {
//   const fetchHeroes = async () => {
//     let response = await axios.get(`/search/${values.hero}`);
//     response.data.response === "success"s
//       ? setSearchData(response.data.results)
//       : setError(response.data.error);
//   };
//   fetchHeroes();
// }, []);
