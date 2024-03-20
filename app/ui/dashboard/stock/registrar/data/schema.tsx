import * as z from "zod";

const MAX_FILE_SIZE = 500000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const formSchemaClient = z.object({
 
   
     
    invoices: z.array(
       
      z.object({
        factura: z
   .string()
   .min(2, { message: "Invalido." })
   .max(15, { message: "Demasiado extenso. " }),


  dob1: z.date({
    required_error: "Requiere una fecha.",
  }).optional(),
  dob2: z.date({
    required_error: "Requiere una fecha.",
  }).optional(),
 
  
  type: z.string({
    required_error: "Please select an email to display.",
  }),
  file: z
     .any()
    .refine((files) => files?.length == 1, "Image is required.")
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
      `Max file size is 5MB.`
    )
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      ".jpg, .jpeg, .png and .webp files are accepted."
    )
    ,
    })
    ),

 
    items: z.array(
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
      
       cantidadactual: z.string().min(1, { message: "Invalido." }),
       precio: z.string().min(1, { message: "Invalido." }),	
       total: z.string().min(1, { message: "Invalido." }),






       
       
    
      })
    ).optional(),
});