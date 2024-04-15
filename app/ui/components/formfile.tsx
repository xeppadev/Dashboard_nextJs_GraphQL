import { FieldValues } from "react-hook-form";
import { Container } from "@/components/ui/container";
import { MingcuteCloseLine } from "@/app/lib/icons";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useFieldArray } from "react-hook-form";
import { Input } from "@/components/ui/input";
import React from "react";
import Image from "next/image";

export const FormFileComponent: React.FC<FieldValues> = ({
  name,

  control,
}) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name,
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files ? Array.from(event.target.files) : [];
    const newFields = files.map((file) => ({ file }));
    append(newFields);
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
    const extension = file.name.split(".").pop()?.toLowerCase();
    switch (extension) {
      case "jpg":
      case "jpeg":
      case "png":
        return "/icons/imagen.png";
      case "pdf":
        return "/icons/pdf.png";
      case "doc":
      case "docx":
        return "/icons/doc.png";
      default:
        return "/icons/texto.png"; // Icono por defecto para otros tipos de archivos
    }
  };

  return (
    <>
      {" "}
      <Input
        placeholder="Suba un archivo"
        type="file"
        onChange={handleFileChange}
        multiple
        className="p-12 mb-6"
      />
      {fields.map((field, index) => (
        <div key={field.id} className="flex flex-row mb-2 ">
          <FormField
            control={control}
            name={`${name}[${index}].file`}
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Container className="w-full justify-between " {...field}>
                    <div className="flex flex-row items-center space-x-4">
                      <Image
                        src={getFileTypeIcon(field.value)}
                        width={45}
                        height={51}
                        alt="Picture of the author"
                      />
                      <div className="flex flex-col space-y-0.5 ">
                        <span className="text-sm text-[#111927] dark:text-foreground font-medium">
                          {field.value.name}
                        </span>
                        <span className=" text-[#6c737f]">
                          {fileSizeInMBorKB(field.value)}
                        </span>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => remove(index)}
                      className=" px-3  rounded-full hover:bg-gray-50 dark:hover:bg-background  hover:bg-background hover:rounded-full "
                    >
                      <MingcuteCloseLine className="h-5 w-5 text-[#6c737f]" />
                    </button>
                  </Container>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      ))}
    </>
  );
};
