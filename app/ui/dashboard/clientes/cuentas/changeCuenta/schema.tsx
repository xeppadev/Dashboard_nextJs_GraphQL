import * as z from "zod";

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
