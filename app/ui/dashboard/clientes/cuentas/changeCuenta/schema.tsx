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

export const formSchemaContratos = z.object({
  agregarContratoId: z.string().min(1, { message: "Invalido." }),
  numeroContrato: z.string().min(1, { message: "invalido." }),
  fechaInicio: z.string().min(1, { message: "Requiere una fecha." }),
  fechaFin: z.string().min(1, { message: "Requiere una fecha." }),
});

export const formSchemaUsuarios = z.object({
  idCliente: z.string().min(1, { message: "Invalido." }),
  name: z.string().min(1, { message: "Invalido." }),
  email: z.string().email({ message: "Invalido." }),
  password: z.string().min(1, { message: "Invalido." }),
  username: z.string().min(1, { message: "Invalido." }),
});

export const formSchemaDocumentos = z.object({
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
});
