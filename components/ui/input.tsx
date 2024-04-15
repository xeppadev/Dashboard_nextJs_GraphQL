import * as React from "react";
import { cn } from "@/lib/utils";
import { FilePlusIcon } from "@radix-ui/react-icons";
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    if (type === "file") {
      return (
        <div className="relative hover:bg-gray-50 hover:rounded-xl dark:hover:bg-background ">
          <input
            type={type}
            className={cn(
              "absolute opacity-0 w-full h-full cursor-pointer ",
              className
            )}
            ref={ref}
            {...props}
          />
          <div
            className={cn(
              "flex justify-center items-center flex-col md:flex-row border-input rounded-xl border-dashed border text-muted-foreground  bg-transparent px-3 py-1.5  text-sm  transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
              className
            )}
          >
            <div className="bg-[#e5e7eb] dark:bg-[#1c2536] rounded-full p-[19px] ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 24 24"
              className="inline-block text-black dark:text-white"
            >
              <path
                fill="currentColor"
                d="M11 16V7.85l-2.6 2.6L7 9l5-5l5 5l-1.4 1.45l-2.6-2.6V16zm-5 4q-.825 0-1.412-.587T4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413T18 20z"
              />
            </svg>
            </div>
            <div className="ml-2 text-muted-foreground flex flex-col">
              <span className=" text-base font-medium  text-[#111927] dark:text-foreground">Haga clic para cargar o arrastre y suelte</span>
                 <span className="text-sm text-[#6c737f]"> (pdf, doc, docx, xls, xlsx, ppt, pptx, jpg, png)</span>
                </div>
               
          </div>
        </div>
      );
    } else if (type === "material") {
      const { placeholder, ...inputProps } = props;
      return (
        <div className="relative">
          <input
            type="text"
            className={cn(
              "flex h-12 w-full rounded-lg border border-input bg-transparent px-3 py-1 text-sm  transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 material-input",
              className,
              "pt-2"
            )}
            ref={ref}
            {...inputProps}
          />
          <label
            htmlFor={props.id || props.name}
            className="absolute top-0 left-3 transition-all duration-200 pointer-events-none text-sm material-label bg-white dark:bg-card Z-40"
          >
              {placeholder} 
          </label>
        </div>
      );
    } else {
    return (
      <input
        type={type}
        className={cn(
          "flex h-[42px] w-full rounded-lg border  border-input bg-transparent px-3 py-1 text-sm  transition-colors file:border-0 file:bg-transparent  file:text-sm file:font-medium placeholder:text-muted-foreground dark:placeholder:text-[#A0AEC0] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
  }
);

Input.displayName = "Input";

export { Input };
