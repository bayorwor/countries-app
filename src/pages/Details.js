import Error from "../components/Error";
import Loading from "../components/Loading";
import useCountries from "../hooks/useCountries";
import { numberWithCommas } from "../utils/numbersComma";

function Details({ match }) {
  const name = match.params.name;

  const { error, isPending, countries } = useCountries(
    `https://restcountries.com/v3.1/name/${name}`
  );

  return (
    <div className="container">
      <h1 className="m-5 border-bottom bg-transparent text-center">
        country's infromation
      </h1>
      <div>
        {isPending && <Loading />}
        {error && <Error />}
        {countries &&
          countries.map((country, index) => (
            <div className="row" key={index}>
              <img
                src={country.flags.svg}
                style={{ height: 300, width: "auto" }}
                alt={country.name.common}
              />
              <div className="m-2 p-3 card text-muted">
                <h2 className="mb-3 text-info">country : {country.name.common}</h2>
                <h2>Region : {country.region}</h2>
                <h3>Sub_region : {country.subregion}</h3>
                <h2 className="mb-3 text-warning">
                  Pops : {numberWithCommas(country.population)}
                </h2>
                <h2>Capital city : {country.capital}</h2>
                <h2>Start of Weeks : {country.startOfWeek}</h2>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Details;
