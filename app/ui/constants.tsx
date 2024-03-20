import { SideNavItem } from "./types";

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    postitle: "Principal",
    title: "Dashboard",
    path: "/dashboard",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="23"
        height="23"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M13.106 22h-2.212c-3.447 0-5.17 0-6.345-1.012c-1.175-1.012-1.419-2.705-1.906-6.093l-.279-1.937c-.38-2.637-.57-3.956-.029-5.083c.54-1.127 1.691-1.813 3.992-3.183l1.385-.825C9.8 2.622 10.846 2 12 2c1.154 0 2.199.622 4.288 1.867l1.385.825c2.3 1.37 3.451 2.056 3.992 3.183c.54 1.127.35 2.446-.03 5.083l-.278 1.937c-.487 3.388-.731 5.081-1.906 6.093C18.276 22 16.553 22 13.106 22"
          opacity=".5"
        />
        <path
          fill="currentColor"
          d="M8.25 18a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75"
        />
      </svg>
    ),
  },
  {
    postitle: "Principal",
    title: "Estadisticas",
    path: "/dashboard/estadisticas",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="23"
        height="23"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22"
          opacity=".5"
        />
        <path
          fill="currentColor"
          d="M12 5.25a.75.75 0 0 1 .75.75v12a.75.75 0 0 1-1.5 0V6a.75.75 0 0 1 .75-.75m-5 3a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-1.5 0V9A.75.75 0 0 1 7 8.25m10 4a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 1 .75-.75"
        />
      </svg>
    ),
  },
  {
    postitle: "Factor Humano",
    title: "Clientes",
    path: "/clientes",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="23"
        height="23"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M3.172 7.922C2 9.093 2 10.979 2 14.75c0 3.771 0 5.657 1.172 6.828C4.343 22.75 6.229 22.75 10 22.75h4c3.771 0 5.657 0 6.828-1.172C22 20.407 22 18.521 22 14.75c0-3.771 0-5.657-1.172-6.828C19.657 6.75 17.771 6.75 14 6.75h-4c-3.771 0-5.657 0-6.828 1.172"
          opacity=".5"
        />
        <path
          fill="currentColor"
          d="M16 10.75a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-7-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0M12.052 2h-.104c-.899 0-1.648 0-2.242.08c-.628.084-1.195.27-1.65.725c-.456.456-.642 1.023-.726 1.65c-.08.595-.08 1.345-.08 2.243v.078c.457-.015.955-.021 1.5-.024V6.75c0-.964.002-1.612.067-2.095c.062-.461.169-.659.3-.789c.13-.13.327-.237.788-.3c.483-.064 1.131-.066 2.095-.066c.964 0 1.612.002 2.095.067c.461.062.659.169.789.3c.13.13.237.327.3.788c.064.483.066 1.131.066 2.095v.002a54.53 54.53 0 0 1 1.5.024v-.078c0-.898 0-1.648-.08-2.242c-.084-.628-.27-1.195-.726-1.65c-.455-.456-1.022-.642-1.65-.726C13.7 2 12.95 2 12.052 2"
        />
      </svg>
    ),
    submenu: true,
    subMenuItems: [
      {
        title: "Registrar Clientes",
        path: "/clientes/registrar_clientes",
      },
      { title: "Listar Clientes", path: "/clientes/listar_clientes" },
      
    ],
  },
  {
    postitle: "Factor Humano",
    title: "Personal",
    path: "/personal",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M14 4h-4C6.229 4 4.343 4 3.172 5.172C2 6.343 2 8.229 2 12c0 3.771 0 5.657 1.172 6.828C4.343 20 6.229 20 10 20h4c3.771 0 5.657 0 6.828-1.172C22 17.657 22 15.771 22 12c0-3.771 0-5.657-1.172-6.828C19.657 4 17.771 4 14 4"
          opacity=".5"
        />
        <path
          fill="currentColor"
          d="M13.25 9a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75m1 3a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75m1 3a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75M9 11a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 6c4 0 4-.895 4-2s-1.79-2-4-2s-4 .895-4 2s0 2 4 2"
        />
      </svg>
    ),
    submenu: true,
    subMenuItems: [
      {
        title: "Registrar Personal",
        path: "/personal/registrar_personal",
      },
      { title: "Listar Personal", path: "/personal/listar_personal" },
      
    ],
  },
  {
    postitle: "Insumos",
    title: "Stock",
    path: "/stock",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M11.5 21h1c3.771 0 5.657 0 6.828-1.172C20.5 18.657 20.5 16.771 20.5 13V6.998C20.355 7 20.15 7 20 7H4c-.15 0-.355 0-.5-.002V13c0 3.771 0 5.657 1.172 6.828C5.843 21 7.729 21 11.5 21m-2.424-9.883C9 11.301 9 11.534 9 12s0 .699.076.883a1 1 0 0 0 .541.54c.184.077.417.077.883.077h3c.466 0 .699 0 .883-.076a1 1 0 0 0 .54-.541C15 12.699 15 12.466 15 12s0-.699-.076-.883a1 1 0 0 0-.541-.54c-.184-.077-.417-.077-.883-.077h-3c-.466 0-.699 0-.883.076a1 1 0 0 0-.54.541"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M2 5c0-.943 0-1.414.293-1.707C2.586 3 3.057 3 4 3h16c.943 0 1.414 0 1.707.293C22 3.586 22 4.057 22 5c0 .943 0 1.414-.293 1.707C21.414 7 20.943 7 20 7H4c-.943 0-1.414 0-1.707-.293C2 6.414 2 5.943 2 5"
          opacity=".5"
        />
      </svg>
    ),
    submenu: true,
    subMenuItems: [
      {
        title: "Registrar Stock",
        path: "/stock/registrar_stock",
      },
      { title: "Listar Stock", path: "/stock/listar_stock" },
     
    ],
  },
  {
    postitle: "Insumos",
    title: "Proveedores",
    path: "/proveedores",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M14.5 21.991V18.5c0-.935 0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.549C13.402 16 12.935 16 12 16s-1.402 0-1.75.201a1.5 1.5 0 0 0-.549.549c-.201.348-.201.815-.201 1.75v3.491z"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M5.732 12c-.89 0-1.679-.376-2.232-.967V14c0 3.771 0 5.657 1.172 6.828c.943.944 2.348 1.127 4.828 1.163h5c2.48-.036 3.885-.22 4.828-1.163C20.5 19.657 20.5 17.771 20.5 14v-2.966a3.06 3.06 0 0 1-5.275-1.789l-.073-.728a3.167 3.167 0 1 1-6.307.038l-.069.69A3.06 3.06 0 0 1 5.732 12m8.768 6.5v3.491h-5V18.5c0-.935 0-1.402.201-1.75a1.5 1.5 0 0 1 .549-.549C10.598 16 11.065 16 12 16s1.402 0 1.75.201a1.5 1.5 0 0 1 .549.549c.201.348.201.815.201 1.75"
          clipRule="evenodd"
          opacity=".5"
        />
        <path
          fill="currentColor"
          d="M9.5 2h5l.652 6.517a3.167 3.167 0 1 1-6.304 0z"
        />
        <path
          fill="currentColor"
          d="M3.33 5.351c.178-.89.267-1.335.448-1.696a3 3 0 0 1 1.889-1.548C6.057 2 6.51 2 7.418 2h2.083l-.725 7.245a3.06 3.06 0 1 1-6.044-.904zm17.34 0c-.178-.89-.267-1.335-.448-1.696a3 3 0 0 0-1.888-1.548C17.944 2 17.49 2 16.582 2H14.5l.725 7.245a3.06 3.06 0 1 0 6.043-.904z"
          opacity=".7"
        />
      </svg>
    ),
    submenu: true,
    subMenuItems: [
      {
        title: "Registrar Proveedores",
        path: "/proveedores/registrar_proveedores",
      },
      { title: "Listar Proveedores", path: "/proveedores/listar_proveedores" },
      
    ],
  },
  {
    postitle: "Mantenimiento",
    title: "Vehiculos",
    path: "/vehiculos",
    icon: (
      <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className="duoicon duoicon-car    "
      
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
     
    ),
    submenu: true,
    subMenuItems: [
      {
        title: "Registrar Vehiculos",
        path: "/vehiculos/registrar_vehiculos",
      },
      { title: "Historial Clinico", path: "/vehiculos/historial_clinico" },
      
    ],
  },
  {
    postitle: "Mantenimiento",
    title: "Mantenimiento",
    path: "/dashboard/mantenimiento",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="23"
        height="23"
        viewBox="0 0 24 24"
        className=" "
      >
        <g fill="none" fillRule="evenodd">
          <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
          <path
            fill="currentColor"
            d="M7.527 2.657a7.001 7.001 0 0 1 8.26 9.347l4.599 3.893a3.3 3.3 0 1 1-4.651 4.65l-3.891-4.597a7.001 7.001 0 0 1-9.35-8.26a1.01 1.01 0 0 1 1.72-.432l3.045 3.307l2.297-.845l.847-2.3l-3.309-3.04a1.01 1.01 0 0 1 .433-1.723"
          />
        </g>
      </svg>
    ),
  },
  {
    postitle: "Otros",
    title: "Soporte",
    path: "/soporte",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M10.3 7.32L9.13 4.54a7.984 7.984 0 0 0-4.59 4.59l2.78 1.15c.51-1.38 1.6-2.46 2.98-2.96m-2.98 6.4l-2.78 1.15c.81 2.1 2.48 3.78 4.59 4.59l1.17-2.78a4.984 4.984 0 0 1-2.98-2.96m9.35-3.45l2.78-1.15a8.007 8.007 0 0 0-4.58-4.58l-1.15 2.78c1.37.51 2.45 1.58 2.95 2.95m.01 3.44a5.004 5.004 0 0 1-2.95 2.97l1.15 2.78c2.1-.81 3.77-2.48 4.58-4.58z"
          opacity=".3"
        />
        <path
          fill="currentColor"
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m2.87 2.54c2.1.81 3.77 2.48 4.58 4.58l-2.78 1.15a4.982 4.982 0 0 0-2.95-2.94zm-5.74 0l1.17 2.78a5 5 0 0 0-2.98 2.97L4.54 9.13a7.984 7.984 0 0 1 4.59-4.59m0 14.92a8.013 8.013 0 0 1-4.59-4.59l2.78-1.15a4.968 4.968 0 0 0 2.97 2.96zM9 12c0-1.66 1.34-3 3-3s3 1.34 3 3s-1.34 3-3 3s-3-1.34-3-3m5.88 7.46l-1.15-2.78a4.978 4.978 0 0 0 2.95-2.97l2.78 1.17a8.007 8.007 0 0 1-4.58 4.58"
        />
      </svg>
    ),
  },
];
