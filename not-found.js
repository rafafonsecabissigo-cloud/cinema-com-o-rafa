import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="critica-container">
        <h2 className="page-title">Página não encontrada</h2>
        <p style={{ marginTop: "12px", marginBottom: "24px" }}>
          O conteúdo que você procurou não existe ou foi movido.
        </p>
        <Link href="/" className="btn-voltar">
          ← Voltar para o Início
        </Link>
      </main>
      <Footer />
    </>
  );
}
