import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import { getReviewBySlug, getReviews, normalizeImagePath } from "../../../lib/data";

export function generateStaticParams() {
  return getReviews().map((review) => ({ slug: review.slug }));
}

export function generateMetadata({ params }) {
  const review = getReviewBySlug(params.slug);

  if (!review) {
    return { title: "Crítica não encontrada | Cinema com o Rafa" };
  }

  return {
    title: `${review.title} | Cinema com o Rafa`,
    description: review.summary
  };
}

export default function ReviewPage({ params }) {
  const review = getReviewBySlug(params.slug);

  if (!review) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <div className="critica-hero">
        <Image
          src={normalizeImagePath(review.heroImage)}
          alt={`Cena de ${review.title}`}
          fill
          priority
          className="hero-bg-image"
        />
        <div className="critica-hero-content">
          <div className="critica-meta">
            {review.year} • Dirigido por {review.director}
          </div>
          <h1>{review.title}</h1>
          <div className="critica-rating">
            <span className="estrelas">{review.rating}</span>
          </div>
        </div>
      </div>

      <main className="critica-container">
        <Link href="/criticas" className="btn-voltar">
          ← Voltar para Críticas
        </Link>

        <section className="critica-section" dangerouslySetInnerHTML={{ __html: "<h2>English Review</h2>" + review.textEN }} />

        <div className="lingua-divider"></div>

        <section
          className="critica-section"
          dangerouslySetInnerHTML={{ __html: "<h2>Review em Português</h2>" + review.textPT }}
        />
      </main>

      <Footer />
    </>
  );
}
