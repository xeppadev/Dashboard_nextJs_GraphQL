import * as z from "zod";

const MAX_FILE_SIZE = 2500000;
const ACCEPTED_IMAGE_TYPES = [
  "application/pdf", // PDF
  "image/jpeg", // JPEG images
  "image/png", // PNG images
  "image/gif", // GIF images
  "image/heic", // HEIC images (iOS)
  "image/heif", // HEIF images (iOS),

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
  rubro: z.string().min(1, { message: "Invalido." }),

  contratos: z
    .array(
      z.object({
        numeroContrato: z.string().min(1, { message: "invalido." }),
        fechaInicio: z.string().min(1, { message: "Requiere una fecha." }),
        fechaFin: z.string().min(1, { message: "Requiere una fecha." }),
      })
    )
    .optional(),
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
  items: z
    .array(
      z.object({
        name: z
          .string()
          .min(2, { message: "Invalido." })
          .max(30, { message: "Demasiado extenso. " }),

        username: z.string().min(1, { message: "Invalido." }),
        email: z.string().email({ message: "Ingresa un correo valido." }),
        password: z
          .string()
          .min(8, { message: "La contraseña invalida." })
          .max(50, { message: "La contraseña es demasiado larga." }),
        nivelUser: z.string().min(1, { message: "Invalido." }),
        clienteAsociado: z.string().min(1, { message: "Invalido." }),
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
