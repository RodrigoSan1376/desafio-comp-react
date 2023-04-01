import CarCards from "./components/CarCards";
import CommentCards from "./components/CommentCards";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <section id="dsct-car-cards-section">
          <h2>Venha nos visitar</h2>
          <CarCards />
          <CarCards />
        </section>
        <section id="dsct-comment-cards-section">
          <h2>O que estão dizendo</h2>
          <CommentCards />
          <CommentCards />
          <CommentCards />
          <CommentCards />
          <CommentCards />
        </section>
      </main>
      <Footer />
    </>
  );
}
