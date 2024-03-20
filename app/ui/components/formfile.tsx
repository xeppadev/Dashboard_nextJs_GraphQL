import { FieldValues } from "react-hook-form";
import { Container } from "@/components/ui/container";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React from "react";
import Image from "next/image";

export const FormFileComponent: React.FC<FieldValues> = ({
  control,
  name,
  label,
}) => {
  const [selectedFiles, setSelectedFiles] = React.useState<File[]>([]);
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files ? Array.from(event.target.files) : [];
    setSelectedFiles(prevFiles => [...prevFiles, ...files]);
  };

  const handleFileRemove = (index: number) => {
    setSelectedFiles(prevFiles => prevFiles.filter((file, i) => i !== index));
  };

  // Función para convertir el tamaño del archivo a MB o KB
  const fileSizeInMBorKB = (file: File) => {
    const sizeInMB = file.size / (1024 * 1024);
    if (sizeInMB < 1) {
      return (file.size / 1024).toFixed(2) + " KB"; // Si es menor a 1 MB, devuelve en KB
    } else {
      return sizeInMB.toFixed(2) + " MB"; // Si es 1 MB o más, devuelve en MB
    }
  };

  const getFileTypeIcon = (file: File) => {
    const extension = file.name.split('.').pop()?.toLowerCase();
    switch (extension) {
      case 'jpg':
      case 'jpeg':
      case 'png':
        return '/icons/imagen.png';
      case 'pdf':
        return '/icons/pdf.png';
      case 'doc':
      case 'docx':
        return '/icons/doc.png';
      default:
        return '/icons/texto.png'; // Icono por defecto para otros tipos de archivos
    }
  };



  return (
    <>
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>{label}</FormLabel>
            <FormControl className="w-full  p-12 mb-6">
              <Input
                placeholder="Suba un archivo"
                {...field}
                type="file"
                {...control.register("file")}
                onChange={handleFileChange}
                multiple
              />
            </FormControl>
            {selectedFiles.map((file, index) => (
              <div key={index} className="flex flex-row  ">
                <Container className="w-full justify-between ">
                  <div className="flex flex-row items-center space-x-4">
                    <Image
                      src={getFileTypeIcon(file)}
                      width={45}
                      height={51}
                      alt="Picture of the author"
                    />
                    <div className="flex flex-col space-y-0.5 ">
                      <span className="text-sm text-[#111927] dark:text-foreground font-medium">
                        {file.name}
                      </span>
                      <span className=" text-[#6c737f]">
                        {fileSizeInMBorKB(file)}
                      </span>
                    </div>
                  </div>
                  <button
                  type="button"
                    onClick={() => handleFileRemove(index)}
                    className=" px-4  rounded-full hover:bg-gray-50 hover:bg-background hover:rounded-full "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      className="text-[#6c737f]"
                    >
                      <path
                        fill="#6c737f"
                        fillRule="evenodd"
                        d="M1.707.293A1 1 0 0 0 .293 1.707L5.586 7L.293 12.293a1 1 0 1 0 1.414 1.414L7 8.414l5.293 5.293a1 1 0 0 0 1.414-1.414L8.414 7l5.293-5.293A1 1 0 0 0 12.293.293L7 5.586z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </Container>
              </div>
            ))}
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};
