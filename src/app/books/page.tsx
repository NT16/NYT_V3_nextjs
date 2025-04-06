import BookDetails from "@/app/ui/BookDetails";
import { fetchBooks } from "@/app/lib/data";

export default async function Page({
  searchParams,
}: {
  searchParams: { category: string };
}) {
  const query = await searchParams;
  if (!query?.category) return;

  const response = await fetchBooks(query?.category);
  if (!response || !response.results) return;
  const books = response.results;

  return (
    <div className="mx-auto">
      <h2 className="mx-auto w-fit text-xl font-normal text-center tracking-wide mb-4 py-2 px-8 rounded-md bg-emerald-50">
        {books.list_name}
      </h2>
      <div className="flex flex-wrap gap-4 justify-center">
        {books.books.map((book: any) => (
          <BookDetails key={book.title} book={book} />
        ))}
      </div>
    </div>
  );
}
