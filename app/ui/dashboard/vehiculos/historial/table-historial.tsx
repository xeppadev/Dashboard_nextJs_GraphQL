import { Regist, columns } from "./columns";
import { DataTable } from "../../../components/data-table";
import BarraOptions from "./barraoptions";
import { data } from "./data/datosfetch";

async function getData(): Promise<Regist[]> {
  // Fetch data from your API here.
  return data;
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <div className=" flex flex-col space-y-6  ">
      <BarraOptions />
      <DataTable
        showHeader={true}
        columns={columns}
        data={data}
      
        toolBarComponet2={true}
        paginationComponet={true}
        paginationComponet2={false}
    
        type={"list"}
      />
    </div>
  );
}
