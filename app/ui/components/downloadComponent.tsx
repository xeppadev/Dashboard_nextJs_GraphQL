import {
  SolarTrashBinTrashBoldDuotone,
  SolarFileDownloadBoldDuotone,
} from "@/app/lib/icons";
import { useSession } from "next-auth/react";
import { Backend_URL } from "@/lib/contants";

export default function DownloadFile({
  file,
  fileName,
}: {
  file: string;
  fileName: string;
}) {
  const { data: session } = useSession();
  const handleDownload = async (file: string, fileName: string) => {
    try {
      const res = await fetch(`${Backend_URL}/documentos/download/${file}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${session?.access_token}`,
        },
      });
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = fileName;
      a.click();
      a.remove();
    } catch (error) {
      console.log(error);
    }
  };
  
  const handleDelete = async (file: string) => {
    try {
      await fetch(`${Backend_URL}/documentos/delete/${file}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${session?.access_token}`,
        },
        });
    } catch (error) {
        console.log(error);
        }
    }

  return (
    <div className="flex float-right justify-center mr-2  items-center  max-w-[70px] ">
      <button onClick={() => handleDownload(file || "", fileName || "")}>
        <SolarFileDownloadBoldDuotone className="h-7 w-7 text-[#2970FF]" />
      </button>
      <button onClick={() => handleDelete(file || "")} >
        <SolarTrashBinTrashBoldDuotone className="h-7 w-7 ml-1.5  text-[#f44336]" />
      </button>
    </div>
  );
}
