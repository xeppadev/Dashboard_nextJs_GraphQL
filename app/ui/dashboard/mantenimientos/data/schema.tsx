
import * as z from "zod";

const MAX_FILE_SIZE = 25000000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const formSchemaMantenimiento = z.object({
  tipo: z.string().min(1, { message: "El tipo de mantenimiento es inválido." }),

  placa: z.string().min(1, { message: "La placa es inválida." }),
  kmMedido: z.string().min(1, { message: "El kilometraje es inválido." }),
  
  fecha: z.string().min(1, { message: "La fecha es inválida." }),
  fechaSoat: z.string().min(1, { message: "La fecha es inválida." }), 
  Cliente: z.string().min(1, { message: "El cliente es inválido." }),
  kmPrevio: z.string().min(1, { message: "El kilometraje es inválido." }),

  tecnico: z.string().min(1, { message: "El técnico es inválido." }),

  diagnostico: z
    .string()
    .min(1, { message: "La descripción es inválida." })
    .max(500, { message: "La descripción es demasiado larga." }),

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
