import "./whyChoose.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/fontawesome-free-solid";

export default function WhyChoose() {
  return (
    <div className="why-container">
      <h1>Why Choose Us</h1>
      <div className="why-content">
        <div className="why-80">
          <div className="why-cart">
            <FontAwesomeIcon icon={faTruck} />
            <h3>Fast Delivary</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec.
            </p>
          </div>
          <div className="why-cart">
            <FontAwesomeIcon icon={faTruck} />
            <h3>Fast Delivary</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec.
            </p>
          </div>
          <div className="why-cart">
            <FontAwesomeIcon icon={faTruck} />
            <h3>Fast Delivary</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec.
            </p>
          </div>
          <div className="why-cart">
            <FontAwesomeIcon icon={faTruck} />
            <h3>Fast Delivary</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
