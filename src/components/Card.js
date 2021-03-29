import { Link } from "react-router-dom";
import truncate from "../utils/truncate";
function Card({ name, img, population }) {
  return (
    <div
      className="card border-primary m-3 shadow"
      style={{ height: "18rem", width: "18rem" }}
    >
      <img
        src={img}
        alt=""
        className="card-img-top img-fluid"
        style={{ height: "10rem", width: "18rem" }}
      />
      <div className="card-body">
        <Link to={`/details/${name}`} className="nav-link text-white">
          <h4 className="border-bottom">{truncate(name)}</h4>
          <h5>{population}</h5>
        </Link>
      </div>
    </div>
  );
}

export default Card;
