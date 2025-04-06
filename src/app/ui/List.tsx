import Link from "next/link";
import { ListType } from "@/app/lib/types";

const List = ({ list }: { list: ListType[] | undefined }) => {
  return list?.map((category: ListType) => (
    <Link
      href={"/books?category=" + category.list_name_encoded}
      key={category.list_name_encoded}
      className="m-2 px-4 py-1 text-[16px] bg-emerald-200 rounded-lg hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-opacity-50 transition duration-200 ease-in-out whitespace-nowrap">
      {category.display_name}
    </Link>
  ));
};

export default List;
