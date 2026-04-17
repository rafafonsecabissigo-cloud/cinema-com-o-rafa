"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { getReviews, normalizeImagePath } from "../../lib/data";

// Converte a string de estrelas para número para facilitar o filtro
function starsToNumber(rating) {
  const count = (rating.match(/★/g) || []).length;
  const hasHalf = rating.includes("½");
  return count + (hasHalf ? 0.5 : 0);
}

const reviews = getReviews().map((r) => ({
  ...r,
  stars: starsToNumber(r.rating),
}));

export default function CriticasPage() {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("default");
  const [ratingFilter, setRatingFilter] = useState("all");

  const filtered = useMemo(() => {
    let result = reviews.filter((r) => {
      const q = query.toLowerCase();
      const matchQ =
        !q ||
        r.title.toLowerCase().includes(q) ||
        r.director.toLowerCase().includes(q);

      const matchR =
        ratingFilter === "all" ||
        (ratingFilter === "5" && r.stars === 5) ||
        (ratingFilter === "4" && r.stars >= 4) ||
        (ratingFilter === "2" && r.stars <= 2);

      return matchQ && matchR;
    });

    if (sort === "year-desc") result.sort((a, b) => b.year - a.year);
    else if (sort === "year-asc") result.sort((a, b) => a.year - b.year);
    else if (sort === "title") result.sort((a, b) => a.title.localeCompare(b.title));
    else if (sort === "rating-desc") result.sort((a, b) => b.stars - a.stars);

    return result;
  }, [query, sort, ratingFilter]);

  const ratingOptions = [
    { value: "all", label: "Todas" },
    { value: "5", label: "★★★★★" },
    { value: "4", label: "★★★★+" },
    { value: "2", label: "★★" },
  ];

  return (
    <>
      <Navbar />
      <main>
        <section className="section-title-wrap">
          <h2 className="page-title">Críticas</h2>
        </section>

        {/* Barra de filtros */}
        <section className="filters-bar">
          <input
            className="search-input"
            type="text"
            placeholder="Buscar por título ou diretor..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <select
            className="sort-select"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="default">Ordem padrão</option>
            <option value="year-desc">Ano (mais recente)</option>
            <option value="year-asc">Ano (mais antigo)</option>
            <option value="title">Título (A–Z)</option>
            <option value="rating-desc">Melhor nota</option>
          </select>

          <div className="rating-chips">
            <span className="chips-label">Nota:</span>
            {ratingOptions.map((opt) => (
              <button
                key={opt.value}
                className={`chip ${ratingFilter === opt.value ? "chip--active" : ""}`}
                onClick={() => setRatingFilter(opt.value)}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </section>

        {/* Contagem */}
        <p className="results-count">
          {filtered.length === reviews.length
            ? `${reviews.length} críticas`
            : `${filtered.length} de ${reviews.length} críticas`}
        </p>

        {/* Grid de críticas */}
        {filtered.length === 0 ? (
          <p className="no-results">Nenhuma crítica encontrada.</p>
        ) : (
          <section className="reviews-grid">
            {filtered.map((review) => (
              <article key={review.slug} className="review-card">
                <div className="poster-container">
                  <Image
                    src={normalizeImagePath(review.posterImage)}
                    alt={review.title}
                    className="poster-filme"
                    width={100}
                    height={150}
                  />
                </div>
                <div className="review-corpo">
                  <div className="review-header">
                    <h2 className="review-titulo">{review.title}</h2>
                    <span className="estrelas">{review.rating}</span>
                  </div>
                  <p className="review-meta">
                    {review.year} · {review.director}
                  </p>
                  <p className="review-resumo">{review.summary}</p>
                  <Link
                    href={`/criticas/${review.slug}`}
                    className="btn-ler-mais"
                  >
                    Ler Review Completa ↗
                  </Link>
                </div>
              </article>
            ))}
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
