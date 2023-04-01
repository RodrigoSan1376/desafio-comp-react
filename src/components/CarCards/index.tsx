import "./styles.css";
import carImg from "../../assets/car.png";

export default function CarCards() {
  return (
    <>
      <div className="dsct-car-card-container">
        <div className="dsct-car-card ">
          <img src={carImg} alt="Carro" />
          <h3>Lorem ipsum dolor</h3>
        </div>
      </div>
    </>
  );
}
