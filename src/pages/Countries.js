import useCountries from "../hooks/useCountries";
import Card from "../components/Card";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { numberWithCommas } from "../utils/numbersComma";

function Countries() {
  const url = "https://restcountries.com/v3.1/all";
  const { countries, isPending, error } = useCountries(url);

  return (
    <section className="mt-5">
      <div className="container">
        <div className="m-5 border-bottom bg-transparent text-center">
          <h1>List Of countries</h1>
        </div>
        <div className="row text-center">
          {isPending && <Loading />}
          {error && <Error />}
          {countries &&
            countries.map((country) => (
              <Card
                name={country.name}
                img={country.flag}
                population={numberWithCommas(country.population)}
              />
            ))}
        </div>
      </div>
    </section>
  );
}

export default Countries;
