import { fetchBooks } from "@/app/lib/data";

export default async function CategoryBooks({
  category,
}: {
  category: string;
}) {
  const response = await fetchBooks(category);

  if (!response || !response.results) return;
  const books = response.results;

  return (
    <div>
      {" "}
      <h2 className="category-title">{books.list_name}</h2>
      {category}
    </div>
  );
}
