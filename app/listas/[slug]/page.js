import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "../../../components/Footer";
import MovieTable from "../../../components/MovieTable";
import Navbar from "../../../components/Navbar";
import { getListBySlug, getLists, normalizeImagePath } from "../../../lib/data";

export function generateStaticParams() {
  return getLists().map((list) => ({ slug: list.slug }));
}

export function generateMetadata({ params }) {
  const list = getListBySlug(params.slug);

  if (!list) {
    return { title: "Lista não encontrada | Cinema com o Rafa" };
  }

  return {
    title: `${list.title} | Cinema com o Rafa`,
    description: list.description
  };
}

export default function ListaPage({ params }) {
  const list = getListBySlug(params.slug);

  if (!list) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <div className="critica-hero">
        <Image
          src={normalizeImagePath(list.heroImage)}
          alt={`Capa da lista ${list.title}`}
          fill
          priority
          className="hero-bg-image"
        />
        <div className="critica-hero-content">
          <div className="critica-meta">{list.category}</div>
          <h1>{list.title}</h1>
          {list.quote ? <p className="hero-quote">{list.quote}</p> : null}
        </div>
      </div>

      <main className="critica-container">
        <Link href="/listas" className="btn-voltar">
          ← Voltar para Listas
        </Link>
        <MovieTable items={list.items} />
      </main>

      <Footer />
    </>
  );
}
