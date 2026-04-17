import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ReviewCard from "../components/ReviewCard";
import { getReviews, normalizeImagePath } from "../lib/data";

export const metadata = {
  title: "Cinema com o Rafa | Crítica Cinematográfica",
  description:
    "Críticas, listas e cobertura de festivais por Rafael Bissigo. Um olhar editorial sobre o cinema em português e inglês.",
};

export default function HomePage() {
  const reviews = getReviews() || [];
  const featured = reviews.length > 0 ? reviews[0] : null;
  const recentes = reviews.slice(1, 4);

  return (
    <>
      <Navbar />
      
      <main>
        {/* --- HERO SECTION (Usando sua classe .critica-hero) --- */}
        <section className="critica-hero" style={{ marginBottom: "5rem" }}>
          <Image
            src={featured ? normalizeImagePath(featured.posterImage) : "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba"}
            alt="Cinema com o Rafa Hero"
            fill
            className="hero-bg-image"
            priority
          />
          <div className="critica-hero-content">
            <p className="critica-meta">CRÍTICA CINEMATOGRÁFICA · JOÃO PESSOA, PB</p>
            <h1>Cinema com o Rafa</h1>
            <p className="hero-quote">
              "A verdadeira viagem de descobrimento não consiste em procurar novas paisagens, mas em ter novos olhos."
            </p>
            <p className="hero-quote" style={{ fontSize: "0.85rem", marginTop: "5px" }}>— Marcel Proust</p>
          </div>
        </section>

        {/* Container para centralizar o conteúdo abaixo do Hero */}
        <div className="critica-container">
          
          {/* --- CRÍTICA EM DESTAQUE (Usando sua classe .featured-review) --- */}
          {featured && (
            <section className="featured-review">
              <div className="featured-media">
                <Image
                  src={normalizeImagePath(featured.posterImage)}
                  alt={featured.title}
                  width={340}
                  height={500}
                  className="featured-poster"
                  priority
                />
              </div>
              <div className="featured-content">
                <p className="featured-kicker">Crítica em destaque</p>
                <h2>{featured.title}</h2>
                <p className="featured-meta">{featured.year} · {featured.director}</p>
                <p className="featured-rating">{featured.rating}</p>
                <p className="featured-summary">{featured.summary}</p>
                <div className="featured-actions">
                  <Link href={`/criticas/${featured.slug}`} className="btn-featured-primary">
                    Ler Crítica
                  </Link>
                  <Link href="/listas" className="btn-featured-secondary">
                    Explorar Listas
                  </Link>
                </div>
              </div>
            </section>
          )}

          <div className="lingua-divider"></div>

          {/* --- ÚLTIMAS CRÍTICAS --- */}
          <section className="list-section">
            <h2>Últimas críticas</h2>
            <div className="reviews-grid">
              {recentes.map((review) => (
                <ReviewCard key={review.slug} review={review} />
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: "3rem" }}>
               <Link href="/criticas" className="btn-ler-mais">
                  Ver todas as críticas →
               </Link>
            </div>
          </section>

        </div>
      </main>
      
      <Footer />
    </>
  );
}
