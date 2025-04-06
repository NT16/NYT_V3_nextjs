import Image from "next/image";
import { BookType } from "@/app/lib/types";
export default async function BookDetails({ book }: { book: BookType }) {
  return (
    <div className="w-[250px] h-auto m-2 p-3 rounded-md bg-emerald-50 relative">
      <div className="flex flex-col grow">
        <div className="flex font-mono  font-medium text-black-500 my-3">
          <p className="rounded-full px-2 justify-self-start">{book.rank}</p>
          <h3 className="mx-auto text-center  text-black-500 text-wrap">
            {book.title}
          </h3>
        </div>

        <Image
          src={book.book_image}
          alt={`${book.title} cover`}
          width={200}
          height={350}
          className="mx-auto my-2 bg-emerald-50"
        />
        <div className="mx-auto  align-top font-mono text-xs/6 font-medium text-black-500">
          <div className="grid grid-cols-6 gap-2">
            <p className="col-span-2 px-2 py-2 text-gray-500">Author</p>
            <p className="col-span-4 text-wrap self-center">{book.author}</p>
          </div>
          <div className="grid grid-cols-6 gap-4">
            <p className="col-span-2 px-2 py-2 text-gray-500">Publisher</p>
            <p className="col-span-4 text-wrap self-center">{book.publisher}</p>
          </div>
          <div className="my-3 pb-4">{book.description}</div>
        </div>
      </div>
      {book.weeks_on_list !== 0 && (
        <div className="my-2 absolute bottom-0">
          <small className="text-gray-500">
            {book.weeks_on_list} {book.weeks_on_list === 1 ? "week" : "weeks"}{" "}
            on the list
          </small>
        </div>
      )}
    </div>
  );
}
