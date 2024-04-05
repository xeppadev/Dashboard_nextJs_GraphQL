import * as z from "zod";

export const formSchemaProveedor = z.object({
  nombre: z
    .string()
    .min(2, { message: "Invalido." })
    .max(30, { message: "Demasiado extenso. " }),

  ruc: z.string().length(11, { message: "Debe ser un numero." }),
  direccion: z.string().min(1, { message: "Invalido." }),

  numeroContacto: z.string().length(9, { message: "Debe ser un numero." }),
  nombreContacto: z.string().min(1, { message: "Invalido." }),
  email: z.string().email({ message: "Ingresa un correo valido." }),
  rubro: z.string().min(1, { message: "Invalido." }),

  });
