function Card({ name, img, population }) {
  return (
    <div className="card m-5">
      <img
        src={img}
        alt=""
        className="card-img-top img-fluid"
        style={{ height: "10rem", width: "18rem" }}
      />
      <div className="card-body">
        <h4>{name}</h4>
        <h5>{population}</h5>
      </div>
    </div>
  );
}

export default Card;
