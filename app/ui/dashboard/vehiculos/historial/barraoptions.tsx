"use client";
import { Separator } from "@/components/ui/separator";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";

export default function BarraOptions() {
  return (
    <Card className=" flex-inline flex 2xl:p-6 p-4  2xl:space-x-5 space-x-1 overflow-x-auto">
      <div className="flex items-center 2xl:space-x-4 pr-2 space-x-1 justify-center w-full min-w-[160px]   border-r border-dashed ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="62"
          height="62"
          viewBox="0 0 24 24"
          className="duoicon duoicon-car  rounded-full p-2.5  bg-freelance"
          style={{ color: "#2970FF" }}
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M5.553 5.658A3 3 0 0 1 8.236 4h7.528a3 3 0 0 1 2.683 1.658l1.386 2.771c.244-.1.484-.208.72-.324a1 1 0 0 1 .894 1.79c-.24.107-.482.211-.725.312l.961 1.923c.209.417.317.877.317 1.343V16a2.991 2.991 0 0 1-1 2.236V19.5a1.5 1.5 0 0 1-3 0V19H6v.5a1.5 1.5 0 0 1-3 0v-1.264c-.614-.55-1-1.348-1-2.236v-2.528c0-.466.109-.925.317-1.341l.953-1.908c-.241-.102-.48-.21-.715-.327a1.01 1.01 0 0 1-.45-1.343 1 1 0 0 1 1.342-.448c.236.117.477.224.72.324l1.386-2.77v-.001Z"
            className="duoicon-secondary-layer"
            opacity=".3"
          ></path>
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M7.342 6.553A.998.998 0 0 1 8.236 6h7.528c.379 0 .725.214.894.553l1.27 2.538C16.38 9.555 14.294 10 12 10s-4.38-.445-5.927-.91l1.269-2.537ZM16.5 16a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM9 14.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
            className="duoicon-primary-layer"
          ></path>
        </svg>

        <CardContent className="space-y-0.5 py-1 px-1 ">
          <CardTitle className="text-sm 2xl:text-[1rem] ">Placa: AEH-742</CardTitle>
          <CardDescription>Minera Barrick</CardDescription>
        </CardContent>
        
      </div>

      <div className="flex items-center  2xl:space-x-4 space-x-1 justify-center min-w-[150px] w-full   border-r border-dashed">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="62"
          height="62"
          viewBox="0 0 24 24"
          className="  rounded-full p-2.5  bg-active-green "
        >
          <path
            fill="#16a34a"
            d="M10 20h4c3.771 0 5.657 0 6.828-1.172C22 17.657 22 15.771 22 12c0-.442-.002-1.608-.004-2H2c-.002.392 0 1.558 0 2c0 3.771 0 5.657 1.171 6.828C4.343 20 6.23 20 10 20"
            opacity=".5"
          />
          <path
            fill="#16a34a"
            d="M5.25 13.5a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75m0 3a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75"
          />
          <path
            fill="#16a34a"
            fillRule="evenodd"
            d="M17.197 12.293c-.323-.043-.72-.043-1.152-.043h-.09c-.433 0-.83 0-1.152.043c-.356.048-.731.16-1.04.47c-.31.309-.422.684-.47 1.04c-.043.323-.043.72-.043 1.152v.09c0 .433 0 .83.043 1.152c.048.356.16.731.47 1.04c.309.31.684.422 1.04.47c.323.043.72.043 1.152.043h.09c.433 0 .83 0 1.152-.043c.356-.048.731-.16 1.04-.47c.31-.309.422-.684.47-1.04c.043-.323.043-.72.043-1.152v-.09c0-.433 0-.83-.043-1.152c-.048-.356-.16-.731-.47-1.04c-.309-.31-.684-.422-1.04-.47m-2.371 1.529l-.003.001l-.001.003a.703.703 0 0 0-.042.177c-.028.21-.03.504-.03.997s.002.787.03.997a.702.702 0 0 0 .042.177l.001.003l.003.001a.702.702 0 0 0 .177.042c.21.028.504.03.997.03s.787-.002.997-.03a.702.702 0 0 0 .177-.042l.003-.001l.001-.003a.702.702 0 0 0 .042-.177c.028-.21.03-.504.03-.997s-.002-.787-.03-.997a.703.703 0 0 0-.042-.177l-.001-.003l-.003-.001a.702.702 0 0 0-.177-.042c-.21-.028-.504-.03-.997-.03s-.787.002-.997.03a.702.702 0 0 0-.177.042"
            clipRule="evenodd"
          />
          <path
            fill="#16a34a"
            d="M9.995 4h4.01c3.781 0 5.672 0 6.846 1.116c.846.803 1.083 1.96 1.149 3.884v1H2V9c.066-1.925.303-3.08 1.149-3.884C4.323 4 6.214 4 9.995 4"
          />
        </svg>

        <CardContent className="space-y-0.5 py-1 px-1 ">
          <CardTitle className="text-sm 2xl:text-[1rem]">Vigencia SOAT</CardTitle>
          <CardDescription>11 Nov 2024</CardDescription>
        </CardContent>
  
      </div>
      <div className="flex items-center  2xl:space-x-4  space-x-1 justify-center min-w-[160px] w-full   border-r border-dashed">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="68"
          height="60"
          viewBox="0 0 24 24"
          className="  rounded-full lg:p-2.5  p-1.5 bg-paused "
        >
          <path
            fill="#f79009"
            d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12"
            opacity=".5"
          />
          <path
            fill="#f79009"
            fillRule="evenodd"
            d="M22 6.72c0 2.607-2.122 4.72-4.74 4.72c-.477 0-1.565-.11-2.094-.549l-.661.659c-.389.387-.284.501-.11.689c.071.078.155.17.22.299c0 0 .551.768 0 1.537c-.33.439-1.256 1.053-2.314 0l-.22.22s.66.768.11 1.536c-.331.439-1.213.878-1.985.11l-.771.768c-.53.527-1.176.22-1.433 0l-.661-.659c-.617-.614-.257-1.28 0-1.536l5.731-5.708s-.55-.878-.55-2.086c0-2.607 2.121-4.72 4.739-4.72C19.878 2 22 4.113 22 6.72m-3.086 0c0 .91-.74 1.647-1.653 1.647a1.65 1.65 0 0 1-1.654-1.647c0-.91.74-1.647 1.654-1.647a1.65 1.65 0 0 1 1.653 1.647"
            clipRule="evenodd"
          />
        </svg>

        <CardContent className="space-y-0.5 py-1 px-1 ">
          <CardTitle className="text-sm 2xl:text-[1rem] ">Ultima Revision Tecnica</CardTitle>
          <CardDescription>17 Dic 2023</CardDescription>
        </CardContent>
        
      </div>
      <div className="flex items-center  2xl:space-x-4  space-x-1 justify-center w-full min-w-[160px]   border-r border-dashed">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="60"
          viewBox="0 0 24 24"
          className="  rounded-full   p-2.5  bg-inactive-red-2"
        >
          <path
            fill="#e11d48"
            fillRule="evenodd"
            d="M14 22h-4c-3.771 0-5.657 0-6.828-1.172C2 19.657 2 17.771 2 14v-4c0-3.771 0-5.657 1.172-6.828C4.343 2 6.239 2 10.03 2c.606 0 1.091 0 1.5.017c-.013.08-.02.161-.02.244l-.01 2.834c0 1.097 0 2.067.105 2.848c.114.847.375 1.694 1.067 2.386c.69.69 1.538.952 2.385 1.066c.781.105 1.751.105 2.848.105h4.052c.043.534.043 1.19.043 2.063V14c0 3.771 0 5.657-1.172 6.828C19.657 22 17.771 22 14 22"
            clipRule="evenodd"
            opacity=".5"
          />
          <path
            fill="#e11d48"
            d="M6 13.75a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5zm0 3.5a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5zm5.51-14.99l-.01 2.835c0 1.097 0 2.066.105 2.848c.114.847.375 1.694 1.067 2.385c.69.691 1.538.953 2.385 1.067c.781.105 1.751.105 2.848.105h4.052c.013.155.022.321.028.5H22c0-.268 0-.402-.01-.56a5.322 5.322 0 0 0-.958-2.641c-.094-.128-.158-.204-.285-.357C19.954 7.494 18.91 6.312 18 5.5c-.81-.724-1.921-1.515-2.89-2.161c-.832-.556-1.248-.834-1.819-1.04a5.488 5.488 0 0 0-.506-.154c-.384-.095-.758-.128-1.285-.14z"
          />
        </svg>

        <CardContent className="space-y-0.5 py-1 px-1 ">
          <CardTitle className="text-sm 2xl:text-[1rem] ">Vigencia Contrato</CardTitle>
          <CardDescription>10 Oct 2025</CardDescription>
        </CardContent>
      </div>
      <div className="flex items-center  2xl:space-x-3  space-x-1 justify-center w-full min-w-[150px]    border-dashed">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="62"
          height="62"
          viewBox="0 0 24 24"
          className="duoicon duoicon-car  rounded-full p-2.5  bg-time"
          style={{ color: "#6366f1" }}
        >
          <path
            fill="currentColor"
            d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2Z"
            className="duoicon-secondary-layer"
            opacity=".3"
          ></path>
          <path
            fill="currentColor"
            d="M11.44 6.507a1 1 0 0 0-1.276-.61 7.015 7.015 0 0 0-3.73 3.1A1 1 0 1 0 8.166 10a5.02 5.02 0 0 1 2.665-2.216 1 1 0 0 0 .61-1.276l-.001-.001ZM12 10c-1.54 0-2.502 1.667-1.732 3 .357.619 1.017 1 1.732 1 1.54 0 2.502-1.667 1.732-3A1.999 1.999 0 0 0 12 10Z"
            className="duoicon-primary-layer"
          ></path>
        </svg>
        <CardContent className="space-y-0.5 py-1 px-1 ">
          <CardTitle className="text-sm 2xl:text-[1rem] ">Kilometraje Actual</CardTitle>
          <CardDescription>22 000km</CardDescription>
        </CardContent>
        
      </div>
      <div className="flex items-center justify-center 2xl:space-x-3 min-w-[150px]  space-x-1 w-full  border-l border-dashed">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="62"
          height="62"
          viewBox="0 0 24 24"
          className="duoicon duoicon-car  rounded-full p-2.5  bg-gris"
        >
          <path
            fill="#212b36"
            fillRule="evenodd"
            d="M12 2C7.867 2 5.8 2 5.198 3.3a2.521 2.521 0 0 0-.13.346c-.41 1.387 1.052 2.995 3.974 6.21L11 12h2l1.958-2.143c2.922-3.216 4.383-4.824 3.974-6.21a2.507 2.507 0 0 0-.13-.348C18.2 2 16.133 2 12 2"
            clipRule="evenodd"
          />
          <path
            fill="#212b36"
            d="M5.198 20.7C5.8 22 7.867 22 12 22c4.133 0 6.2 0 6.802-1.3a2.51 2.51 0 0 0 .13-.346c.41-1.387-1.052-2.995-3.974-6.21L13 12h-2l-1.958 2.143c-2.922 3.216-4.383 4.824-3.974 6.21c.035.12.078.236.13.348"
            opacity=".5"
          />
        </svg>

        <CardContent className="space-y-0.5 py-1 px-1 ">
          <CardTitle className="text-sm 2xl:text-[1rem] ">Operatividad</CardTitle>
          <CardDescription>62%</CardDescription>
        </CardContent>
      </div>
    </Card>
  );
}
