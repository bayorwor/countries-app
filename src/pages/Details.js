import Error from "../components/Error";
import Loading from "../components/Loading";
import useCountries from "../hooks/useCountries";

function Details({ match }) {
  const name = match.params.name;

  const { error, isPending, countries } = useCountries(
    `https://restcountries.eu/rest/v2/name/${name}`
  );

  return (
    <div className="container">
      <h1>Details page</h1>
      <div>
        {isPending && <Loading />}
        {error && <Error />}
        {countries &&
          countries.map((country) => (
            <div className="row">
              <img src={country.flag} style={{ height: 200, width: "auto" }} />
              <div className="m-3">
                <h2>country : {country.name}</h2>
                <h2>Continent : {country.region}</h2>
                <h2>Pops : {country.population}</h2>
                <h2>Capital city : {country.capital}</h2>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Details;
