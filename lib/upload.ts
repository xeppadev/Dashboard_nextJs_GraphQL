import { getServerSession } from "next-auth";
import { options } from "@/app/options";
import { Backend_URL } from "./contants";

type queries = {
  query1: string;
  query2: string | undefined;
};
// const apiURL = process.env.NEXT_API_URL;

export async function sentToExternalAPI(formData: FormData, queries: queries) {
  const session = await getServerSession(options);
  const url = new URL(`${Backend_URL}/documentos/upload`);
  url.searchParams.append("query1", queries.query1);
  if (queries.query2) {
    url.searchParams.append("query2", queries.query2);
  }
  try {
    await fetch(url.toString(), {
      method: "POST",
      body: formData,
      headers: {
        Authorization: `Bearer ${session?.access_token}`,
      },
    });

    console.log("Enviado a la API externa");
  } catch (error) {
    console.log(error);
  }
}

