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
        {/* --- CABEÇALHO DA HOME --- */}
        <div style={{ textAlign: "center", marginBottom: "70px", padding: "0 20px" }}>
          <p style={{ color: "var(--accent-color)", textTransform: "uppercase", letterSpacing: "2px", fontSize: "0.85rem", fontWeight: "600", marginBottom: "15px" }}>
            João Pessoa, PB
          </p>
          <h1 className="page-title" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", marginBottom: "25px", lineHeight: "1.1" }}>
            Cinema com o Rafa
          </h1>
          <p style={{ color: "#a0a0ab", fontSize: "1.15rem", maxWidth: "700px", margin: "0 auto", lineHeight: "1.8" }}>
            Um espaço editorial de crítica cinematográfica com voz autoral, foco em curadoria e cobertura para festivais. Publicações em português e inglês.
          </p>
          
          <blockquote style={{ marginTop: "40px", fontStyle: "italic", color: "#d1d1d7", borderLeft: "2px solid var(--accent-color)", paddingLeft: "20px", display: "inline-block", textAlign: "left", maxWidth: "600px" }}>
            <p>"A verdadeira viagem de descobrimento não consiste em procurar novas paisagens, mas em ter novos olhos."</p>
            <footer style={{ marginTop: "10px", fontSize: "0.9rem", color: "var(--accent-color)", fontWeight: "600" }}>— Marcel Proust</footer>
          </blockquote>
        </div>

        {/* --- CRÍTICA EM DESTAQUE --- 
            (Usando as classes originais do seu globals.css!) */}
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

        {/* --- ÚLTIMAS CRÍTICAS --- 
            (Usando o seu componente ReviewCard que já está perfeitamente estilizado) */}
        <section className="list-section" style={{ marginTop: "80px" }}>
          <h2>Últimas críticas</h2>
          <div className="reviews-grid">
            {recentes.map((review) => (
              <ReviewCard key={review.slug} review={review} />
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "50px" }}>
             <Link href="/criticas" className="btn-ler-mais" style={{ fontSize: "1rem" }}>
                Ver todas as críticas →
             </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
