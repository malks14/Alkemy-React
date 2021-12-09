import { Fragment, useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import heroesapi from "../api/heroesapi";
import LoadingSpinner from "../components/UI/LoadingSpinner";

import HeroesDetails from "../components/HeroeDetails/HeroesDetails";

const HeroesDetailPage = () => {
  const { heroId } = useParams();
  const history = useHistory();
  const [hero, setHero] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchHeroDetails = async () => {
      let response = await heroesapi.get(`/${heroId}`);
      setLoading(false);
      response.data.response === "success"
        ? setHero(response.data)
        : setError(response.data.error);
    };
    fetchHeroDetails();
  }, []);
  const { image, biography, appearance, name, work } = hero;
  return (
    <Fragment>
      {loading && <LoadingSpinner />}
      {error ? (
        <div>
          Hubo un error: <span>{error}</span>
        </div>
      ) : hero ? (
        <div>
          <HeroesDetails
            name={name}
            image={image}
            biography={biography}
            appearance={appearance}
            work={work}
          />
        </div>
      ) : null}
      <button onClick={() => history.replace("/home")}>Back</button>
    </Fragment>
  );
};

export default HeroesDetailPage;
