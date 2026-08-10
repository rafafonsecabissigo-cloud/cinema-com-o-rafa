import Link from "next/link";

export default function ListCard({ list }) {
  return (
    <Link href={`/listas/${list.slug}`} className="list-card">
      <div>
        <h3>{list.cardTitle || list.title}</h3>
        <p>{list.description}</p>
      </div>
      <span>Explorar Lista</span>
    </Link>
  );
}
