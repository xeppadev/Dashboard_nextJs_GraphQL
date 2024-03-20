import FormCliente from "@/app/ui/dashboard/clientes/registrar/tabsregis";
import Breadcrumbs from "@/app/ui/components/breadcrumbs";

export default function RegistarCli() {
  return (
    <div className="flex flex-col items-stretch mx-10 space-y-5  w-full sm:w-auto">
      <div className="flex  items-center  ">
        <Breadcrumbs
          breadcrumbs={[
            {
              label: "Clientes",
              href: "/dashboard/clientes/listar_clientes",
            },
            {
              label: "Registrar Cliente",
              href: "/dashboard/clientes/registrar_clientes",
              active: true,
            },
          ]}
        />
      </div>
      <FormCliente />
    </div>
  );
}
