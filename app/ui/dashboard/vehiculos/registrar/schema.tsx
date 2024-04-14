import * as z from "zod";

const MAX_FILE_SIZE = 25000000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const formSchemaRegist = z.object({
  placa: z
    .string()
    .min(1, { message: "La placa del vehículo es inválida." })
    .max(10, { message: "La placa del vehículo es demasiado larga." }),

  kmRegistroInicial: z
    .string()
    .min(1, { message: "El kilometraje es inválido." }),

  fechaSoat: z.string({
    required_error: "Se requiere una fecha de vencimiento.",
  }),
  fechaRevision: z.string({
    required_error: "Se requiere una fecha de revisión.",
  }),

  tipoContrato: z
    .string()
    .min(1, { message: "El tipo de contrato es inválido." }),

  propietario: z
    .string()
    .min(1, { message: "El nombre de la persona es inválido." })
    .max(20, { message: "El nombre de la persona es demasiado largo." }),

  vigenciaContrato: z.string({
    required_error: "Se requiere una fecha de vencimiento.",
  }),

  cliente: z.string({ required_error: "El cliente es requerido." }),

  

  puntaje: z.string({ required_error: "El puntaje es requerido." }),

  estados: z.array(z.number()),
});
