import { differenceInDays, parseISO } from "date-fns";
import { ContratoDto } from "@/src/generated/graphql";
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
