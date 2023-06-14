import Header from "../components/Header";
import Footer from "../components/Footer";
import OrderDetailsComponent from "../components/OrderDetailsComponent";

export default function OrderDetails() {
  return (
    <div className="order-details-container-main">
      <Header />
      <OrderDetailsComponent />
      <Footer />
    </div>
  );
}
