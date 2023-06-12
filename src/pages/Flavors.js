import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import image from "../imgs/food.jpg";
import QuoteForm from "../components/QuoteForm";
import "./Flavors.css";

function Flavors({ data }) {
  const flavorsArr = data
    .map((flavor) => flavor[1])
    .filter((item, i, ar) => ar.indexOf(item) === i);

  return (
    <div className="card-container">
      <div className="cards">
        {flavorsArr.map((flavor, idx) => (
          <Link to={`/flavors/${flavor}`} style={{ textDecoration: "none" }}>
            <Card style={{ width: "17rem" }} key={idx}>
              <Card.Img variant="top" src={image} alt="food image" />
              <Card.Body>
                <Card.Title style={{ textAlign: "center", color: "#575757" }}>
                  {flavor}
                </Card.Title>
              </Card.Body>
            </Card>
          </Link>
        ))}
      </div>
      <QuoteForm />
    </div>
  );
}

export default Flavors;
