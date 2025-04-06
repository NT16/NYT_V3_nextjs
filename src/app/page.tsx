import List from "@/app/ui/List";
import { fetchLists } from "@/app/lib/data";

export default async function Home() {
  const data = await fetchLists();

  return (
    <div className="flex flex-wrap">
      <List list={data?.results} />
    </div>
  );
}
