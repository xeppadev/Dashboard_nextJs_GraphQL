import * as z from "zod";

const MAX_FILE_SIZE = 500000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const formSchemaClient = z.object({
  placa: z
    .string()
    .min(1, { message: "La placa del vehículo es inválida." })
    .max(10, { message: "La placa del vehículo es demasiado larga." }),

  kmRegistroInicial: z.string().min(1, { message: "El kilometraje es inválido." }),

  yesNoSelect: z.enum(["Sí", "No"], {
    required_error: "Debes seleccionar sí o no.",
  }),

  fechaSoat: z.string({
    required_error: "Se requiere una fecha de vencimiento.",
  }),
  fechaRevision: z.string({
    required_error: "Se requiere una fecha de revisión.",
  }),

  description: z
    .string()
    .min(1, { message: "La descripción es inválida." })
    .max(500, { message: "La descripción es demasiado larga." }),

  propietario: z
    .string()
    .min(1, { message: "El nombre de la persona es inválido." })
    .max(20, { message: "El nombre de la persona es demasiado largo." }),

  startDate: z.date({
    required_error: "Se requiere una fecha de inicio.",
  }),

  endDate: z.date({
    required_error: "Se requiere una fecha de término.",
  }),
  select1: z.enum(["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"], {
    required_error: "Debes seleccionar una opcion.",
  }),
  select2: z.enum(["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"], {
    required_error: "Debes seleccionar una opcion.",
  }),
  select3: z.enum(["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"], {
    required_error: "Debes seleccionar una opcion.",
  }),
  select4: z.enum(["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"], {
    required_error: "Debes seleccionar una opcion.",
  }),
  select5: z.enum(["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"], {
    required_error: "Debes seleccionar una opcion.",
  }),

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
