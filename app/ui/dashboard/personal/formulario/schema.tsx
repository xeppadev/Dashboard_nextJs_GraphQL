import * as z from "zod";

const MAX_FILE_SIZE = 500000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const formSchemaClient = z.object({
  name: z
    .string()
    .min(2, { message: "Invalido." })
    .max(30, { message: "Demasiado extenso. " }),
  
  dni: z.string().length(8, { message: "Debe ser un numero." }),
  address: z.string().min(1, { message: "Invalido." }),
 
  numero: z.string().length(9, { message: "Debe ser un numero." }),
  
  // phone: z.string().length(9, { message: "Debe ser un numero." }),
  dob: z.date({
    required_error: "Requiere una fecha.",
  }),
  type: z.enum(["contrato", "dni", "examen medico", "SCTR" , "CV" , "otros"], {
    required_error: "You need to select a notification type.",
  }),
  numerodocumento: z.string().length(9, { message: "Debe ser un numero." }),
  // minera: z.string({
  //   required_error: "Selecciona una opcion.",
  // }),
  bio: z
    .string()
    .min(10, {
      message: "Bio must be at least 10 characters.",
    })
    .max(160, {
      message: "Bio must not be longer than 30 characters.",
    }),

  file: z
    .any()
    .refine((files) => files?.length == 1, "Image is required.")
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
      `Max file size is 5MB.`
    )
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      ".jpg, .jpeg, .png and .webp files are accepted."
    ),
  // alias: z.string().min(1, { message: "Invalido." }),
  // contraseña: z
  //   .string()
  //   .min(8, { message: "La contraseña invalida." })
  //   .max(50, { message: "La contraseña es demasiado larga." }),
    items: z.array(
      z.object({
        name: z
          .string()
          .min(2, { message: "Invalido." })
          .max(30, { message: "Demasiado extenso. " }),
  
        alias: z.string().min(1, { message: "Invalido." }),
        email: z.string().email({ message: "Ingresa un correo valido." }),
        contraseña: z
          .string()
          .min(8, { message: "La contraseña invalida." })
          .max(50, { message: "La contraseña es demasiado larga." }),
      })
    ).optional(),
});