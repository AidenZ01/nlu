import { useParams } from "react-router-dom";
import QuoteForm from "../components/QuoteForm";
import "./Category.css";

function Category({ data }) {
  const { id } = useParams();

  const categorizedData = () => {
    let products = [];
    data.forEach((item) => {
      if (item[1] === id) {
        products.push(item[2]);
      }
    });
    return products;
  };
  const itemsArray = categorizedData();

  return (
    <div className="category-container">
      <div>
        <h3>{id.toUpperCase()}</h3>
        <ul>
          {itemsArray.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
      <QuoteForm />
    </div>
  );
}

export default Category;
