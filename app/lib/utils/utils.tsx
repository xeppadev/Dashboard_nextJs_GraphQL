import { differenceInDays, parseISO } from "date-fns";
import { ContratoDto } from "@/src/generated/graphql";
import { SalarioFechaDto } from "@/src/generated/graphql";
import { es } from "date-fns/locale";
import { format, parse } from "date-fns";
export type Maybe<T> = T | null;
type StatusComponentProps = {
  contratos?: Maybe<Array<Maybe<ContratoDto>>>;
};

export const StatusComponent: React.FC<StatusComponentProps> = ({
  contratos,
}) => {
  let status;
  let closestContract = null;
  let closestDaysUntilVigencia = Infinity;
  if (contratos) {
    contratos.forEach((contract) => {
      const vigenciaDate = parseISO(contract?.fechaFin);
      const today = new Date();
      const daysUntilVigencia = differenceInDays(vigenciaDate, today);
      if (daysUntilVigencia < closestDaysUntilVigencia) {
        closestContract = contract;
        closestDaysUntilVigencia = daysUntilVigencia;
      }
    });
  }
  if (closestDaysUntilVigencia < 0) {
    status = "Vencido";
  } else if (closestDaysUntilVigencia < 5) {
    status = "Por vencer";
  } else {
    status = "Vigente";
  }
  return (
    <div
      className={`flex max-w-fit items-center font-bold  text-xs px-1.5 py-1 rounded-md ${
        status == "Vigente"
          ? "text-green-500 bg-active-green"
          : status == "Por vencer"
          ? "text-[#f79009] bg-paused"
          : "text-[#f79009] bg-paused"
      } `}
    >
      {status}
    </div>
  );
};

type StockStatusProps = {
  cantidad: number | undefined;
};

export const StockStatus: React.FC<StockStatusProps> = ({ cantidad }) => {
  let state;
  if (cantidad !== undefined) {
    if (cantidad > 5) {
      state = "Normal Stock";
    } else if (cantidad <= 5 && cantidad > 0) {
      state = "Bajo Stock";
    } else {
      state = "Sin Stock";
    }
  }

  return (
    <div
      className={`flex max-w-fit items-center font-bold  text-xs px-1.5 py-1 rounded-md ${
        state === "Normal Stock"
          ? "text-green-500 bg-active-green"
          : state === "Bajo Stock"
          ? "text-[#f79009] bg-paused"
          : "text-[#f79009] bg-paused"
      } `}
    >
      {state}
    </div>
  );
};

export function getInitials(name: string): string {
  const names = name.split(" ");
  let initials =
    names.length > 1
      ? `${names[0].charAt(0)}${names[1].charAt(0)}`
      : names[0].charAt(0);
  return initials.toUpperCase();
}

export function processColumn(column: string) {
  const fileName = column.replace(/[\\/]/g, "/").split("/").pop() || "";

  const fileType = fileName.split(".").pop() || "";

  return { fileName, fileType };
}

// Esta función toma un array de objetos salarioFecha y devuelve el salario más reciente
export function salarioMasReciente(
  salarioFecha: Maybe<Maybe<SalarioFechaDto>[]> | undefined
) {
  if (!salarioFecha || salarioFecha.length === 0) {
    return null;
  }

  const salarioMasReciente = salarioFecha
    .slice()
    .sort(
      (a, b) => new Date(b!.fecha).getTime() - new Date(a!.fecha).getTime()
    )[0];

  return salarioMasReciente;
}

export const generatePagination = (currentPage: number, totalPages: number) => {
  // If the total number of pages is 7 or less,
  // display all pages without any ellipsis.
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // If the current page is among the first 3 pages,
  // show the first 3, an ellipsis, and the last 2 pages.
  if (currentPage <= 3) {
    return [1, 2, 3, "...", totalPages - 1, totalPages];
  }

  // If the current page is among the last 3 pages,
  // show the first 2, an ellipsis, and the last 3 pages.
  if (currentPage >= totalPages - 2) {
    return [1, 2, "...", totalPages - 2, totalPages - 1, totalPages];
  }

  // If the current page is somewhere in the middle,
  // show the first page, an ellipsis, the current page and its neighbors,
  // another ellipsis, and the last page.
  return [
    1,
    "...",
    currentPage - 1,
    currentPage,
    currentPage + 1,
    "...",
    totalPages,
  ];
};

export function convertMonth(monthYear: string) {
  // Parse the month and year from the string
  const [month, year] = monthYear.split("/").map(Number);

  // Create a new Date object with the parsed month and year
  const date = new Date(year, month - 1);

  // Format the date to get the month name
  const monthName = format(date, "MMMM" , { locale: es }).toUpperCase();

  return monthName;
}
