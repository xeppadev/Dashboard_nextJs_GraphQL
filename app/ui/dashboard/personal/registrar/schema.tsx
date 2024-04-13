import * as z from "zod";

const MAX_FILE_SIZE = 500000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const formSchemaPersonal = z.object({
  nombre: z
    .string()
    .min(2, { message: "Invalido." })
    .max(30, { message: "Demasiado extenso. " }),

  email: z.string().email({ message: "Ingresa un correo valido." }),
  numero: z.string().length(9, { message: "Debe ser un numero." }),

  // phone: z.string().length(9, { message: "Debe ser un numero." }),
  fecha: z.string().min(1, { message: "Requiere una fecha." }),
  salario: z.string().min(1, { message: "Requiere un salario." }),
  fechaIngreso: z.string().min(1, { message: "Requiere una fecha." }),

  file: z
    .array(
      z.object({
        file: z
          .any()
          .refine((file) => file != null, "Image is required.")
          .refine(
            (file) => file?.size <= MAX_FILE_SIZE,
            `Max file size is 5MB.`
          )
          .refine(
            (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
            ".jpg, .jpeg, .png and .webp files are accepted."
          ),
      })
    )
    .min(1, { message: "Debe subir al menos un archivo." }),

  username: z.string().min(1, { message: "Invalido." }),
  correo : z.string().email({ message: "Ingresa un correo valido." }),
   name: z.string().min(1, { message: "Invalido." }),
  password: z
    .string()
    .min(8, { message: "La contraseña invalida." })
    .max(50, { message: "La contraseña es demasiado larga." }),
  nivelUser: z.string().min(1, { message: "Invalido." }),
  
});
