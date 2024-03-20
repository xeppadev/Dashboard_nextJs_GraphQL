import * as z from "zod";

const MAX_FILE_SIZE = 500000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const formSchemaClient = z.object({
  nombreCliente: z
    .string()
    .min(2, { message: "Invalido." })
    .max(30, { message: "Demasiado extenso. " }),
  ruc: z.string().length(11, { message: "Debe ser un numero." }),
  direccion: z.string().min(1, { message: "Invalido." }),
  nombre: z.string().min(1, { message: "Invalido." }),
  numeroContacto: z.string().length(9, { message: "Debe ser un numero." }),
  email: z.string().email({ message: "Ingresa un correo valido." }),
  rubro : z.string().min(1, { message: "Invalido." }),
  fechaInicio: z.date({
    required_error: "Requiere una fecha.",
  }),
  fechaFin: z.date({
    required_error: "Requiere una fecha.",
  }),

  numeroContrato: z.string().min(9, { message: "Debe ser un numero." }),

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

  items: z
    .array(
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
    )
    .optional(),
});

export const formSchemaregis = z.object({
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
  ),
});
