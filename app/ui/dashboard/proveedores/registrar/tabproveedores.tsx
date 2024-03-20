

import AccountForm from "./formProveedor";


export default function TabsDemo() {
  return (
    
      <>
       
            <AccountForm
              fields1={[
                {
                  name: "name",
                  label: "Nombre del Proveedor",
                  placeholder: "Ingrese un nombre",
                  
                  
                },
                {
                  name: "ruc",
                  label: "Numero de RUC",
                  placeholder: "Ingrese un numero de RUC",
                 
                  
                },
                {
                  name: "address",
                  label: "Direccion de Proveedor",
                  placeholder: "Ingrese una direccion",
                  
                },
              ]}
              fields2={[
                {
                  name: "contacto",
                  label: "Nombre de Proveedor",
                  placeholder: "Ingrese el nombre de Proveedor",
                  
                 
                },
                {
                  name: "numero",
                  label: "Numero de Contacto",
                  placeholder: "Numero de Proveedor",
                  
                  
                },
                {
                  name: "email",
                  label: "Correo de Proveedor",
                  placeholder: "Ingrese el correo de Proveedor",
                  
                  
                },
                {
                    name: "rubro",
                    label: "Rubro de Proveedor",
                    placeholder: "Ingrese el rubro de Proveedor",
                    
                    
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
