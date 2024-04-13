"use client";
import { Button } from "@/components/ui/button";
import { Backend_URL } from "@/lib/contants";
import { useSession } from "next-auth/react";
export default function ButtonReporte({
  date1,
  date2,
  buttonName,
}: {
  date1: string;
  date2: string;
  buttonName: string;
}) {
  const { data: session } = useSession();
  const handleDownload = async (
    fechaDesde: string,
    fechaHasta: string,
    filename: string
  ) => {
    const Url = new URL(`${Backend_URL}/report`);
    Url.searchParams.append("fechaDesde", fechaDesde);
    Url.searchParams.append("fechaHasta", fechaHasta);
    try {
      const res = await fetch(Url.toString(), {
        method: "GET",
        headers: {
          Authorization: `Bearer ${session?.access_token}`,
        },
      });

      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      a.click();
      a.remove();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Button
      onClick={() => handleDownload(date1, date2, "reporte.pdf")}
      className="bg-[#2970FF] text-white rounded-[10px] px-4 py-2"
    >
      {buttonName}
    </Button>
  );
}
