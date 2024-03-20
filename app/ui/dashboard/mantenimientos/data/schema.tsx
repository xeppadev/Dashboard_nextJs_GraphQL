import * as z from "zod";

const MAX_FILE_SIZE = 500000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const formSchemaClient = z.object({
  licensePlate: z.string().min(1,{ message: "La placa del vehículo es inválida." }),
  
  maintenanceType: z.enum(["mantenimiento preventivo", "mantenimiento predictivo", "mantenimiento correctivo"], {
    required_error: "Debes seleccionar un tipo de mantenimiento.",
  }),
  
  mileage: z.number().min(1, { message: "El kilometraje es inválido." }),
  
  yesNoSelect: z.enum(["si", "no"], {
    required_error: "Debes seleccionar sí o no.",
  }),
  
  description: z
    .string()
    .min(1, { message: "La descripción es inválida." })
    .max(500, { message: "La descripción es demasiado larga." }),
  
  file: z
    .any()
    .refine((files) => files?.length == 1, "Se requiere una imagen.")
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
      `El tamaño máximo del archivo es 5MB.`
    )
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      "Se aceptan archivos .jpg, .jpeg, .png y .webp."
    ),
});