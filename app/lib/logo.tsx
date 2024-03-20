"use client";
import * as React from "react"
import { SVGProps } from "react"
import { useTheme } from "next-themes";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => 
{
    // const { setTheme, theme } = useTheme();
    // const fillcolor = theme === "light" ? "#2870FF" : "#fff";
return(

  <svg
  xmlns="http://www.w3.org/2000/svg"
  id="Capa_1"
  data-name="Capa 1"
  viewBox="0 0 713.88 570.65"
  width="2.6em"
  height="2.6em"
  {...props}
>
  <defs>
    <style>{".cls-1{fill:#2870FF}"}</style>
  </defs>
  <path
    d="M713.88 374.99c0 80.66-67.12 146.06-150 146.06a157.05 157.05 0 0 1-17-.93 44.12 44.12 0 0 1-9 .93h-41.8a42 42 0 0 0 4.39-18.75V253.62a42.13 42.13 0 0 0-42.13-42.13H251.57a42.13 42.13 0 0 0-42.13 42.13V502.3a41.92 41.92 0 0 0 3.56 17 43.7 43.7 0 0 1-17.92-10.38c-2.74.16-5.52.22-8.33.22C83.59 509.14 0 427.71 0 327.28c0-94.38 73.83-172 168.33-181C195.38 61.66 279 0 378 0c120.94 0 218.94 91.99 218.94 205.4a197.42 197.42 0 0 1-1.82 26.69c67.82 14.01 118.76 72.68 118.76 142.9Z"
    className="cls-1"
  />
  <path
    d="M450.17 232.33H263.7a26.43 26.43 0 0 0-26.43 26.44v257a26.43 26.43 0 0 0 26.43 26.43h2.42a15.52 15.52 0 0 0-1.29 1.16 16 16 0 0 0 11.33 27.34h25.6a16 16 0 0 0 10.05-28.5h101.13a15.52 15.52 0 0 0-1.29 1.16 16 16 0 0 0 11.33 27.34h25.6a16 16 0 0 0 8.66-29.46 26.46 26.46 0 0 0 19.36-25.47v-257a26.46 26.46 0 0 0-26.43-26.44Zm-6.09 270.12H269.79v-57.48h174.29Zm0-83.71H269.79v-72.87h174.29Zm0-103H269.79v-57.5h174.29Z"
    className="cls-1"
  />
  <circle cx={418.55} cy={286.26} r={14.39} className="cls-1" />
  <circle cx={418.55} cy={396.04} r={14.39} className="cls-1" />
  <circle cx={418.55} cy={468.04} r={14.39} className="cls-1" />
</svg>
    
 
)}
export default SvgComponent
