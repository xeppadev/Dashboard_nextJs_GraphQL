import { redirect } from "next/navigation";

export default async function Page() {
  redirect("https://api.whatsapp.com/send/?phone=%2B51933735851&text&type=phone_number&app_absent=0");
  return <div>support</div>;
}
