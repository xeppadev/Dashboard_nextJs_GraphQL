import { km } from "date-fns/locale";
import * as z from "zod";


export const formSchemantenimientoDatos = z.object({
  placa: z
    .string()
    .min(1, { message: "La placa del vehículo es inválida." })
    .max(10, { message: "La placa del vehículo es demasiado larga." }),

    tecnico: z
    .string()
    .min(1, { message: "El kilometraje es inválido." }),

    kmRegistroInicial: z
    .string()
    .min(1, { message: "El kilometraje es inválido." }),

    fechaSoat: z.string({
    required_error: "Se requiere una fecha de vencimiento.",
    }),
    kmRevision: z.string({
    required_error: "Se requiere una fecha de revisión.",
    }),
    
    fechaInicio: z.string({ 
    required_error: "Se requiere una fecha de inicio.",
    }),
    fechaFin: z.string({
    required_error: "Se requiere una fecha de fin.",
    }),
    tipo : z.string({
    required_error: "Se requiere un tipo de mantenimiento.",
    }),

});
