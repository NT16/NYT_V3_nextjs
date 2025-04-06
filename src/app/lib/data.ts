import { ListResponseType } from "@/app/lib/types";


export async function fetchLists():Promise<ListResponseType | undefined> {
    const url = process.env.LIST_API || "";
    console.log("LIST URL ", url)
    
    try {
        if(!url) throw new Error("URL is not defined");
       //NOTE: cache is maintained till a day
        const response = await fetch(url, {cache: "force-cache", next: { revalidate: 216000 }});
       
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        console.log("[BE][LIST]  response :", json);
        return { results : json.results}
    } catch(error){
        console.error("[ERROR][FETCH][List] ",error);
    }
}

export async function fetchBooks(categoryName : string):Promise<any | undefined>{
    const url = process.env.CATEGORY_A_API + categoryName + process.env.CATEGORY_B_API || "";
    
    try {
        if(!url) throw new Error("URL is not defined");
        //NOTE: cache is maintained till a day
        const response = await fetch(url, {cache: "force-cache", next: { revalidate: 216000 }});
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        console.log("[BE][BOOKS] response :", json);
        return { 
            results : json.results , 
            copyright : json.copyright
        }
    } catch(error){
        console.error("[ERROR][FETCH][Books] ",error);
    }
}