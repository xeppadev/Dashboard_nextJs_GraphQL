import { Regist, columns } from "./columns";
import { DataTable } from "../../../components/data-table";

import { data } from "./data/datosfetch";

async function getData(): Promise<Regist[]> {
  // Fetch data from your API here.
  return data;
}

export default async function TableProveedor() {
  const data = await getData();

  return (
    <div className="   ">
      <DataTable
        showHeader={true}
        columns={columns}
        data={data}
        paginationComponet={true}
        toolBarComponet2={false}
        paginationComponet2={false}
        type={"list"}
      />
    </div>
  );
}
