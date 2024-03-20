import AccountForm from "./formularioperson"


export default function FormClientes() {
  return (
    <>
      <AccountForm
        fields1={[
          {
            name: "name",
            label: "Nombre del Trabajador",
            placeholder: "Ingrese un nombre",

            
          },
          {
            name: "dni",
            label: "Numero de DNI",
            placeholder: "Ingrese un numero de DNI",

          
          },
          {
            name: "numero",
            label: "Numero del  Trabajador",
            placeholder: "Numero de Contacto",

            
          },
          {
            name: "address",
            label: "Direccion de Trabajador",
            placeholder: "Ingrese una direccion",

            
          },
        
         
        ]}
       
        fields3={[
          {
            name: "numerodocumento",
            label: "Nombre o Numero de Documento",
            placeholder: "Ingrese un nombre o numero de documento",

            
          },

          {
            name: "dob",
            label: "Fecha de Registro",
            placeholder: "Elegir una fecha",
          },
          {
            name: "dob",
            label: "Fecha de Vencimiento Contrato",
            placeholder: "Elegir una fecha",
          },
        ]}
        buttonText="Registrar"
      />
    </>
  );
}
