import "./styles.css";
import carImg from "../../assets/car.png";

export default function CarCardsSection() {
  return (
    <>
      <section id="dsct-car-cards-section">
        <div className="dsct-car-card">
          <img src={carImg} alt="Carro" />
          <h3>Lorem ipsum dolor</h3>
        </div>
      </section>
    </>
  );
}
