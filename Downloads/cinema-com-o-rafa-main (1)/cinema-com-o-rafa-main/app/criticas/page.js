import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import ReviewCard from "../../components/ReviewCard";
import { getReviews } from "../../lib/data";

export const metadata = {
  title: "Críticas | Cinema com o Rafa"
};

export default function CriticasPage() {
  const reviews = getReviews();

  return (
    <>
      <Navbar />
      <main>
        <section className="section-title-wrap">
          <h2 className="page-title">Críticas</h2>
        </section>
        <section className="reviews-grid">
          {reviews.map((review) => (
            <ReviewCard key={review.slug} review={review} />
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
