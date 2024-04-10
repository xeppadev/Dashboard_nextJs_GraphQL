import * as z from "zod";

const MAX_FILE_SIZE = 500000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const formSchemaStock = z.object({
  oldStock: z.array(
    z.object({
      _id: z.string().min(1, { message: "Invalido." }),
      producto: z
        .string()
        .min(2, { message: "Invalido." })
        .max(20, { message: "Demasiado extenso. " }),

      marca: z
        .string()
        .min(2, { message: "Invalido." })
        .max(15, { message: "Demasiado extenso. " }),

      cantidad: z.string().min(1, { message: "Invalido." }),

      cantidadactual: z.string().min(1, { message: "Invalido." }),
      precio: z.string().min(1, { message: "Invalido." }),
    })
  ).optional(),

  newStock: z.array(
    z.object({
      producto: z
        .string()
        .min(2, { message: "Invalido." })
        .max(20, { message: "Demasiado extenso. " }),

      marca: z
        .string()
        .min(2, { message: "Invalido." })
        .max(15, { message: "Demasiado extenso. " }),

      cantidad: z.string().min(1, { message: "Invalido." }),

      precio: z.string().min(1, { message: "Invalido." }),
    })
  ).optional(),
});

export const formSchemaStockSend = z.object({
  oldStock: z.array(
    z.object({
      _id: z.string().min(1, { message: "Invalido." }),

      cantidad: z.string().min(1, { message: "Invalido." }),

      precio: z.string().min(1, { message: "Invalido." }),
    })
  ),

  newStock: z.array(
    z.object({
      producto: z
        .string()
        .min(2, { message: "Invalido." })
        .max(20, { message: "Demasiado extenso. " }),

      marca: z
        .string()
        .min(2, { message: "Invalido." })
        .max(15, { message: "Demasiado extenso. " }),

      cantidad: z.string().min(1, { message: "Invalido." }),

      precio: z.string().min(1, { message: "Invalido." }),
    })
  )
});
