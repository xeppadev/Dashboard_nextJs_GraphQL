import React from "react";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { options } from "@/app/options";
export default async function Home() {
  const session = await getServerSession(options);

  if (session?.nivelUser === "admin") return redirect("/dashboard");
  if (session?.nivelUser === "tecnico")
    return redirect("/dashboard/registrar-mantenimiento");
  if (session?.nivelUser === "cliente")
    return redirect("/dashboard/vehiculos/historial_clinico");

  return <div>homePage</div>;
}
