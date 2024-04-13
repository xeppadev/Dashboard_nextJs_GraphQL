import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { SolarTrashBinTrashBoldDuotone } from "@/app/lib/icons";
export function AlertDialogDemo({
  buttonText,
  handleDelete,
}: {
  buttonText?: string;
  handleDelete: () => Promise<void>; // Agrega esta línea
  id?: string;
}) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        {buttonText ? (
          <Button variant="destructive" className="rounded-[10px] ">
            {" "}
            {buttonText}
          </Button>
        ) : (
          <button>
            <SolarTrashBinTrashBoldDuotone className="w-6 h-6 text-red-500" />
          </button>
        )}
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>¿Estás absolutamente seguro?</AlertDialogTitle>
          <AlertDialogDescription>
            Esta acción no se puede deshacer. Esto eliminará permanentemente tu
            cuenta y eliminar sus datos de nuestros servidores.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            className="bg-destructive hover:bg-destructive/80"
            onClick={() => handleDelete()}
          >
            Eliminar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
