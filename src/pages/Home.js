import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="d-flex align-items-center" style={{ height: "100vh" }}>
      <div className="container text-white  d-flex justify-content-between align-items-center">
        <div className="text-white">
          <h1 className="mb-5 text-success">Know Your Countries</h1>
          <h2>
            This site allows you to have access to <br></br>all the countries
            around the Globe
          </h2>
          <Link to="/countries" className="btn btn-warning">
            SEE MORE
          </Link>
        </div>
        <img src="./globe.svg" alt="legend" style={{ height: "50vh" }} />
      </div>
    </section>
  );
}

export default Home;
