import Footer from "../../components/Footer";
import ListCard from "../../components/ListCard";
import Navbar from "../../components/Navbar";
import { getLists } from "../../lib/data";

export const metadata = {
  title: "Listas | Cinema com o Rafa"
};

const sectionTitlesByCategory = {
  "Temporada 2026": "Temporada 2026 🎬",
  "Rankings de Diretores": "Rankings de Diretores 🏆",
  "Impacto Pessoal": "Impacto Pessoal ✨"
};

const categoryOrder = ["Temporada 2026", "Rankings de Diretores", "Impacto Pessoal"];

export default function ListasPage() {
  const lists = getLists();
  const groupedLists = lists.reduce((acc, list) => {
    const category = list.category || "Outras Listas";
    if (!acc[category]) acc[category] = [];
    acc[category].push(list);
    return acc;
  }, {});
  const sortedCategories = Object.keys(groupedLists).sort((a, b) => {
    const indexA = categoryOrder.indexOf(a);
    const indexB = categoryOrder.indexOf(b);
    const safeA = indexA === -1 ? 999 : indexA;
    const safeB = indexB === -1 ? 999 : indexB;
    return safeA - safeB;
  });

  return (
    <>
      <Navbar />
      <main>
        {sortedCategories.map((category) => (
          <section className="list-section" key={category}>
            <h2>{sectionTitlesByCategory[category] || category}</h2>
            <div className="list-grid">
              {groupedLists[category].map((list) => (
                <ListCard key={list.slug} list={list} />
              ))}
            </div>
          </section>
        ))}
      </main>
      <Footer />
    </>
  );
}
