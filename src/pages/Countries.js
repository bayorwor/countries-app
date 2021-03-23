import useCountries from "../hooks/useCountries";
import Card from "../components/Card";

function Countries() {
  const url = "https://restcountries.eu/rest/v2/all";
  const { countries, isPending, error } = useCountries(url);

  return (
    <section>
      <div>
        <h1>List Of countries</h1>
      </div>
      <div className="row">
        {isPending && <div>loading</div>}
        {error && <div>oops!! something went wrong</div>}
        {countries &&
          countries.map((country) => (
            <Card
              name={country.name}
              img={country.flag}
              population={country.population}
            />
          ))}
      </div>
    </section>
  );
}

export default Countries;
