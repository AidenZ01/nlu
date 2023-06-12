import certification from "../imgs/certification.jpg";
import design from "../imgs/design.jpg";
import production from "../imgs/production.jpg";
import { Link } from "react-router-dom";
import "./Home.css";
import Carousel from "react-bootstrap/Carousel";
import QuoteForm from "../components/QuoteForm";

function Home() {
  return (
    <>
      <div className="carousel-container">
        <Carousel>
          <Carousel.Item>
            <Link to="/design">
              <img className="d-block w-100" src={design} alt="design" />
            </Link>
            <Carousel.Caption>
              <h3>Design</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Link to="/production">
              <img
                className="d-block w-100"
                src={production}
                alt="production"
              />
            </Link>
            <Carousel.Caption>
              <h3>Production</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Link to="/certification">
              <img
                className="d-block w-100"
                src={certification}
                alt="certification"
              />
            </Link>
            <Carousel.Caption>
              <h3>Certification</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="home-container">
        <div className="text-container">
          <h1>Design. Manufacture. Deliver.</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem unde
            ipsa temporibus molestias quis quia hic. Ratione, dolores. Alias
            repellendus quam et quidem, debitis at est nemo quibusdam ex iusto,
            libero vel. Nam hic quam, accusantium pariatur beatae rem quo
            repudiandae, amet explicabo veniam voluptatem exercitationem
            excepturi accusamus cupiditate ea! Deserunt quos doloremque
            perferendis praesentium sunt laborum vitae repellat nesciunt ipsa
            nobis, odit et ut. Incidunt eveniet sapiente voluptatum repellendus
            odio provident sint illum fuga praesentium ipsum. Reiciendis
            placeat, dolor beatae, iure, dicta quis id ut cum enim impedit
            accusantium amet labore ullam voluptatibus libero quia qui ipsam
            neque? Incidunt fugit recusandae reprehenderit molestias ab
            similique dolorem est quos unde ipsam nulla temporibus quidem
            accusantium, quaerat eum nobis dolore odit harum soluta. Aspernatur,
            ab numquam ducimus sed ad eius ratione sequi voluptatibus amet
            molestias harum excepturi rem! Minus, eius. Nemo porro nulla omnis,
            minima unde hic commodi suscipit! Odio minima molestiae nesciunt
            quis facere, provident ex. Nulla, odio fugit!
          </p>
        </div>
        <QuoteForm />
      </div>
    </>
  );
}

export default Home;
