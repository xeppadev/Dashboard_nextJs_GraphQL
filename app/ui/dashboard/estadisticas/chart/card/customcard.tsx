'use client';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import { MyResponsiveLine } from "../linecardcomponent";



// Define la interfaz para las props
interface CustomCardProps {
    title: string;
    value: string;
    percentage: string;
    color: string;
    data: {
      id: string;
      data: {
        x: string;
        y: number;
      }[];
    }[];
  }

  export const CustomCard = ({ title, value, percentage, color, data }:CustomCardProps ) => (
    <Card className="overflow-hidden flex flex-row items-center ">
      <CardContent className=" justify-between items-center  w-full py-6 ">
        <div className="flex items-start flex-col space-y-4 ">
          <p className="text-[15px] font-medium">{title}</p>
          <p className="text-3xl font-semibold">{value}</p>
          <div className="flex-row flex space-x-1 items-center">
            <div className="rounded-full p-1 bg-active-green">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 512 512"
              className="text-[#16a34a]"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="32"
                d="M352 144h112v112"
              />
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="32"
                d="m48 368l121.37-121.37a32 32 0 0 1 45.26 0l50.74 50.74a32 32 0 0 0 45.26 0L448 160"
              />
            </svg>
            </div>
            <div className="flex-row flew space-x-1">
            <span className="text-[13px] font-medium">{percentage}</span>
            <span className="text-[13px] text-[#637381]">que el mes pasado</span>
            </div>
          </div>
        </div>
      </CardContent>
      <MyResponsiveLine
        className="w-1/5 md:w-2/5 h-[50px] pr-6"
        color={color}
        data={data}
      />
    </Card>
  );