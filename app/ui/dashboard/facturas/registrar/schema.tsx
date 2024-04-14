import * as z from "zod";

const MAX_FILE_SIZE = 25000000;
const ACCEPTED_IMAGE_TYPES = [
  "application/pdf", // PDF
  "image/jpeg", // JPEG images
  "image/png", // PNG images
  "image/gif", // GIF images
  "image/heic", // HEIC images (iOS)
  "image/heif", // HEIF images (iOS),
];

export const formSchemaFactura = z
  .object({
    tipoFactura: z.string().min(1, { message: "Invalido." }),
    involucrado: z.string().optional(),
    fecha: z.string().min(1, { message: "Invalido." }),
    montoParcial: z.string().min(1, { message: "Invalido." }),
    igv: z.string().min(1, { message: "Invalido." }),
    numeroFactura: z.string().optional(),
    detraccion: z.string().optional(),
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
  })
  .refine(
    (data) => {
      if (
        ["Factura a Propietario Vehicular", "Factura a Cliente", "Compra de Repuestos" ].includes(
          data.tipoFactura
        )
      ) {
        return data.involucrado && data.involucrado.length > 0;
      }
      return true;
    },
    {
      message:
        "El campo involucrado es requerido para Factura a Propietario Vehicular y Factura a Cliente.",
      path: ["involucrado"],
    }
  )
  .refine(
    (data) => {
      if (
        [
          "Factura a Propietario Vehicular",
          "Factura a Cliente",
          "Compra de Repuestos",
        ].includes(data.tipoFactura)
      ) {
        return data.numeroFactura && data.numeroFactura.length > 0;
      }
      return true;
    },
    {
      message:
        "El campo numerofactura es requerido para Factura a Propietario Vehicular, Factura a Cliente y Compra de Repuestos.",
      path: ["numerofactura"],
    }
  )
  .refine(
    (data) => {
      if (["Factura a Propietario Vehicular"].includes(data.tipoFactura)) {
        return data.detraccion && data.detraccion.length > 0;
      }
      return true;
    },
    {
      message:
        "El campo detraccion es requerido para Factura a Propietario Vehicular.",
      path: ["detraccion"],
    }
  );

export const formSchemaFacturadatos = z
  .object({
    tipoFactura: z.string().min(1, { message: "Invalido." }),
    involucrado: z.string().optional(),
    fecha: z.string().min(1, { message: "Invalido." }),
    montoParcial: z.string().min(1, { message: "Invalido." }),
    igv: z.string().min(1, { message: "Invalido." }),
    numeroFactura: z.string().optional(),
    detraccion: z.string().optional(),
  })
  .refine(
    (data) => {
      if (
        ["Factura a Propietario Vehicular", "Factura a Cliente"].includes(
          data.tipoFactura
        )
      ) {
        return data.involucrado && data.involucrado.length > 0;
      }
      return true;
    },
    {
      message:
        "El campo involucrado es requerido para Factura a Propietario Vehicular y Factura a Cliente.",
      path: ["involucrado"],
    }
  )
  .refine(
    (data) => {
      if (
        [
          "Factura a Propietario Vehicular",
          "Factura a Cliente",
          "Compra de Repuestos",
        ].includes(data.tipoFactura)
      ) {
        return data.numeroFactura && data.numeroFactura.length > 0;
      }
      return true;
    },
    {
      message:
        "El campo numerofactura es requerido para Factura a Propietario Vehicular, Factura a Cliente y Compra de Repuestos.",
      path: ["numerofactura"],
    }
  )
  .refine(
    (data) => {
      if (["Factura a Propietario Vehicular"].includes(data.tipoFactura)) {
        return data.detraccion && data.detraccion.length > 0;
      }
      return true;
    },
    {
      message:
        "El campo detraccion es requerido para Factura a Propietario Vehicular.",
      path: ["detraccion"],
    }
  );
