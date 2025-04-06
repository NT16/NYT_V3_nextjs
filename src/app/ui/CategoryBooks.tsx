import { fetchBooks } from "@/app/lib/data";

export default async function CategoryBooks({
  category,
}: {
  category: string;
}) {
  const { results: books } = await fetchBooks(category);

  return (
    <div>
      {" "}
      <h2 className="category-title">{books.list_name}</h2>
      {category}
    </div>
  );
}
