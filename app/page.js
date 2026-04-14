import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ReviewCard from "../components/ReviewCard";
import { getReviews, normalizeImagePath } from "../lib/data";

export default function HomePage() {
  const reviews = getReviews();
  const [featuredReview, ...otherReviews] = reviews;

  return (
    <>
      <Navbar />
      <main id="inicio">
        {featuredReview ? (
          <section className="featured-review">
            <div className="featured-media">
              <Image
                src={normalizeImagePath(featuredReview.posterImage)}
                alt={featuredReview.title}
                width={340}
                height={510}
                className="featured-poster"
                priority
              />
            </div>
            <div className="featured-content">
              <p className="featured-kicker">Crítica em Destaque</p>
              <h2>
                {featuredReview.title} ({featuredReview.year})
              </h2>
              <p className="featured-meta">Dirigido por {featuredReview.director}</p>
              <p className="featured-rating">{featuredReview.rating}</p>
              <p className="featured-summary">{featuredReview.summary}</p>
              <div className="featured-actions">
                <Link href={`/criticas/${featuredReview.slug}`} className="btn-featured-primary">
                  Ler crítica completa
                </Link>
                <Link href="/criticas" className="btn-featured-secondary">
                  Ver todas as críticas
                </Link>
              </div>
            </div>
          </section>
        ) : null}

        <div className="section-title-wrap">
          <h2 className="page-title">Últimas Críticas</h2>
        </div>
        <section id="criticas" className="reviews-grid">
          {otherReviews.map((review) => (
            <ReviewCard key={review.slug} review={review} />
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
