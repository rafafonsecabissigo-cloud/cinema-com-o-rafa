import Image from "next/image";
import Link from "next/link";
import { normalizeImagePath } from "../lib/data";

export default function ReviewCard({ review }) {
  return (
    <article>
      <h2>
        {review.title} ({review.year}) <span className="estrelas">{review.rating}</span>
      </h2>
      <div className="review-conteudo">
        <div className="poster-container">
          <Image
            src={normalizeImagePath(review.posterImage)}
            alt={review.title}
            className="poster-filme"
            width={100}
            height={150}
          />
        </div>
        <div className="review-texto">
          <p className="review-resumo">{review.summary}</p>
          <Link href={`/criticas/${review.slug}`} className="btn-ler-mais">
            Ler Review Completa ↗
          </Link>
        </div>
      </div>
    </article>
  );
}
