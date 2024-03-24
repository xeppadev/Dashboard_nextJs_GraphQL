/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export type CalendarAndMantenimientosDto = {
  __typename?: 'CalendarAndMantenimientosDTO';
  calendar?: Maybe<Array<Maybe<MaintenanceCountDto>>>;
  mantenimientos?: Maybe<Array<Maybe<HomeMantDto>>>;
};

export type CarInfo = {
  __typename?: 'CarInfo';
  Mantenimientos?: Maybe<Array<MantenimientoInfo>>;
  Puntaje: Scalars['Float']['output'];
  cliente: Scalars['String']['output'];
  fechaSoat: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  kmActual: Scalars['Float']['output'];
  placa: Scalars['String']['output'];
  propietario: Scalars['String']['output'];
  vigenciaContrato: Scalars['DateTime']['output'];
};

export type ClienteDto = {
  __typename?: 'ClienteDto';
  _id?: Maybe<Scalars['String']['output']>;
  contratos?: Maybe<Array<Maybe<ContratoDto>>>;
  direccion: Scalars['String']['output'];
  documentos?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  email: Scalars['String']['output'];
  nombre: Scalars['String']['output'];
  nombreCliente?: Maybe<Scalars['String']['output']>;
  numeroContacto?: Maybe<Scalars['Float']['output']>;
  rubro: Scalars['String']['output'];
  ruc: Scalars['String']['output'];
};

export type ClienteInput = {
  _id?: InputMaybe<Scalars['String']['input']>;
  contratos?: InputMaybe<Array<InputMaybe<ContratoInput>>>;
  direccion: Scalars['String']['input'];
  documentos?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  email: Scalars['String']['input'];
  nombre: Scalars['String']['input'];
  nombreCliente?: InputMaybe<Scalars['String']['input']>;
  numeroContacto?: InputMaybe<Scalars['Float']['input']>;
  rubro: Scalars['String']['input'];
  ruc: Scalars['String']['input'];
};

export type ClienteUserInput = {
  cliente: ClienteInput;
  users?: InputMaybe<Array<CreateUserDto>>;
};

export type ContratoDto = {
  __typename?: 'ContratoDto';
  fechaFin: Scalars['DateTime']['output'];
  fechaInicio: Scalars['DateTime']['output'];
  numeroContrato: Scalars['String']['output'];
};

export type ContratoInput = {
  fechaFin: Scalars['DateTime']['input'];
  fechaInicio: Scalars['DateTime']['input'];
  numeroContrato: Scalars['String']['input'];
};

export type Costos = {
  __typename?: 'Costos';
  costoCorrectivos?: Maybe<Scalars['Float']['output']>;
  costoMesPasado?: Maybe<Scalars['Float']['output']>;
  costoPreventivos?: Maybe<Scalars['Float']['output']>;
  costoTotal?: Maybe<Scalars['Float']['output']>;
};

export type CreateCarDto = {
  cliente: Scalars['String']['input'];
  fechaRevision: Scalars['DateTime']['input'];
  fechaSoat: Scalars['DateTime']['input'];
  kmRegistroInicial: Scalars['Int']['input'];
  placa: Scalars['String']['input'];
  propietario: Scalars['String']['input'];
  puntaje?: InputMaybe<Scalars['Float']['input']>;
  tipoContrato: Scalars['String']['input'];
  vigenciaContrato: Scalars['DateTime']['input'];
};

export type CreateFacturaDto = {
  detraccion?: InputMaybe<Scalars['Float']['input']>;
  documentos?: InputMaybe<Array<Scalars['String']['input']>>;
  fecha: Scalars['DateTime']['input'];
  igv?: InputMaybe<Scalars['Float']['input']>;
  involucrado?: InputMaybe<Scalars['String']['input']>;
  monto: Scalars['Float']['input'];
  notificacion: Scalars['Boolean']['input'];
  numeroFactura?: InputMaybe<Scalars['String']['input']>;
  tipo: Scalars['String']['input'];
};

export type CreateRepuestoAjusteDto = {
  cantidad: Scalars['Float']['input'];
  id: Scalars['String']['input'];
  marca: Scalars['String']['input'];
  precio: Scalars['Float']['input'];
  producto: Scalars['String']['input'];
};

export type CreateRepuestoDto = {
  cantidad: Scalars['Float']['input'];
  cantidadReserva: Scalars['Float']['input'];
  marca: Scalars['String']['input'];
  precio: Scalars['Float']['input'];
  producto: Scalars['String']['input'];
};

export type CreateUserDto = {
  _id?: InputMaybe<Scalars['String']['input']>;
  clienteAsociado?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  nivelUser: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type EstadisticWebDto = {
  __typename?: 'EstadisticWebDTO';
  cantidadMatDenegados?: Maybe<Scalars['Float']['output']>;
  cantidadMatenimientos?: Maybe<Scalars['Float']['output']>;
  costos: Costos;
  kmRecorrido: Array<KmRecorridoPorMes>;
  operatividad: Array<OperatividadPorMes>;
  puntaje?: Maybe<Scalars['Float']['output']>;
  repuestosConsumidos: Array<RepuestosMasConsumidosPorMes>;
};

export type GeneralReportDto = {
  __typename?: 'GeneralReportDto';
  detracciones: Scalars['Float']['output'];
  egresosFact: Scalars['Float']['output'];
  egresosTotalFact: Scalars['Float']['output'];
  igvEgresos: Scalars['Float']['output'];
  igvIngresos: Scalars['Float']['output'];
  ingresoFact: Scalars['Float']['output'];
  mesYear: Scalars['String']['output'];
};

export type GetForPlacasDto = {
  __typename?: 'GetForPlacasDto';
  _id: Scalars['String']['output'];
  cliente: Scalars['String']['output'];
  fechaSoat: Scalars['DateTime']['output'];
  kmActual: Scalars['Float']['output'];
  placa: Scalars['String']['output'];
  propietario: Scalars['String']['output'];
  tipoContrato: Scalars['String']['output'];
};

export type GetPlacasDto = {
  __typename?: 'GetPlacasDto';
  _id: Scalars['String']['output'];
  cliente: Scalars['String']['output'];
  fechaSoat: Scalars['DateTime']['output'];
  placa: Scalars['String']['output'];
  propietario: Scalars['String']['output'];
  tipoContrato: Scalars['String']['output'];
};

export type HomeAdminDto = {
  __typename?: 'HomeAdminDTO';
  cantidadCompletada: Scalars['Int']['output'];
  cantidadRevision: Scalars['Int']['output'];
  cantidadTotal: Scalars['Int']['output'];
  mantenimientos: Array<MantenimientoInfoDto2>;
};

export type KmRecorridoPorMes = {
  __typename?: 'KmRecorridoPorMes';
  kmRecorridoTotal?: Maybe<Scalars['Float']['output']>;
  mes?: Maybe<Scalars['String']['output']>;
};

export type MaintenanceCountDto = {
  __typename?: 'MaintenanceCountDto';
  cantidad?: Maybe<Scalars['Float']['output']>;
  dayMes?: Maybe<Scalars['String']['output']>;
};

export type MantenimientoInfo = {
  __typename?: 'MantenimientoInfo';
  fecha: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  repuestosUsados: Scalars['Float']['output'];
  tipo: Scalars['String']['output'];
};

export type MantenimientoInfoDto = {
  __typename?: 'MantenimientoInfoDto';
  anotaciones?: Maybe<Scalars['String']['output']>;
  cambiosSolicitados?: Maybe<Scalars['String']['output']>;
  cliente?: Maybe<Scalars['String']['output']>;
  diagnostico?: Maybe<Scalars['String']['output']>;
  diagnosticoFinal?: Maybe<Scalars['String']['output']>;
  documentos?: Maybe<Array<Scalars['String']['output']>>;
  estado?: Maybe<Scalars['String']['output']>;
  fecha?: Maybe<Scalars['DateTime']['output']>;
  fechaFin?: Maybe<Scalars['DateTime']['output']>;
  fechaInicio?: Maybe<Scalars['DateTime']['output']>;
  fechaSoat?: Maybe<Scalars['DateTime']['output']>;
  kmMedido?: Maybe<Scalars['Float']['output']>;
  kmPrevio?: Maybe<Scalars['Float']['output']>;
  placa: Scalars['String']['output'];
  repuestos?: Maybe<Array<RepuestoType>>;
  repuestosAjuste?: Maybe<Array<RepuestoType>>;
  tecnico?: Maybe<Scalars['String']['output']>;
  tipo?: Maybe<Scalars['String']['output']>;
};

export type MantenimientoInfoDto2 = {
  __typename?: 'MantenimientoInfoDto2';
  _id: Scalars['String']['output'];
  anotaciones?: Maybe<Scalars['String']['output']>;
  cliente?: Maybe<Scalars['String']['output']>;
  diagnostico?: Maybe<Scalars['String']['output']>;
  diagnosticoFinal?: Maybe<Scalars['String']['output']>;
  documentos?: Maybe<Array<Scalars['String']['output']>>;
  estado?: Maybe<Scalars['String']['output']>;
  fecha?: Maybe<Scalars['DateTime']['output']>;
  fechaFin?: Maybe<Scalars['DateTime']['output']>;
  fechaInicio?: Maybe<Scalars['DateTime']['output']>;
  fechaSoat?: Maybe<Scalars['DateTime']['output']>;
  kmMedido?: Maybe<Scalars['Float']['output']>;
  kmPrevio?: Maybe<Scalars['Float']['output']>;
  placa: Scalars['String']['output'];
  repuestos?: Maybe<Array<RepuestoType2>>;
  repuestosAjuste?: Maybe<Array<RepuestoType2>>;
  tecnico?: Maybe<Scalars['String']['output']>;
  tipo?: Maybe<Scalars['String']['output']>;
};

export type MantenimientoInfoDto56 = {
  __typename?: 'MantenimientoInfoDto56';
  _id: Scalars['String']['output'];
  anotaciones?: Maybe<Scalars['String']['output']>;
  cambiosSolicitados?: Maybe<Scalars['String']['output']>;
  cliente?: Maybe<Scalars['String']['output']>;
  diagnostico?: Maybe<Scalars['String']['output']>;
  diagnosticoFinal?: Maybe<Scalars['String']['output']>;
  documentos?: Maybe<Array<Scalars['String']['output']>>;
  estado?: Maybe<Scalars['String']['output']>;
  fecha?: Maybe<Scalars['DateTime']['output']>;
  fechaFin?: Maybe<Scalars['DateTime']['output']>;
  fechaInicio?: Maybe<Scalars['DateTime']['output']>;
  fechaSoat?: Maybe<Scalars['DateTime']['output']>;
  kmMedido?: Maybe<Scalars['Float']['output']>;
  kmPrevio?: Maybe<Scalars['Float']['output']>;
  placa: Scalars['String']['output'];
  repuestos?: Maybe<Array<RepuestoType>>;
  repuestosAjuste?: Maybe<Array<RepuestoType>>;
  tecnico?: Maybe<Scalars['String']['output']>;
  tipo?: Maybe<Scalars['String']['output']>;
};

export type MantenimientoResult = {
  __typename?: 'MantenimientoResult';
  cantidad: Scalars['Int']['output'];
  mantenimientos: Array<MantenimientoInfoDto>;
};

export type MesRepuestos = {
  __typename?: 'MesRepuestos';
  mesYear: Scalars['String']['output'];
  otros?: Maybe<ProductoConsumido>;
  prod1?: Maybe<ProductoConsumido>;
  prod2?: Maybe<ProductoConsumido>;
  prod3?: Maybe<ProductoConsumido>;
  prod4?: Maybe<ProductoConsumido>;
  prod5?: Maybe<ProductoConsumido>;
};

export type MonthlySummaryDto = {
  __typename?: 'MonthlySummaryDto';
  detraccion: Scalars['Float']['output'];
  fact: Scalars['Float']['output'];
  igv: Scalars['Float']['output'];
  igvOtros: Scalars['Float']['output'];
  mesYear: Scalars['String']['output'];
  otros: Scalars['Float']['output'];
  personalTotal: Scalars['Float']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Esta Función agrega un nuevo contrato al cliente en la base de datos y retorna el documento actualizado */
  Agregar_Contrato_Cliente: ClienteDto;
  /** Esta Función agrega un nuevo salario y una fecha al personal en la base de datos y retorna el documento actualizado */
  Agregar_Salario_Fecha: PersonalDto;
  /** Esta Función actualiza la información de un usuario en la base de datos */
  actualizar_datos_usuario_por_id: Scalars['String']['output'];
  /** Esta Función elimina un cliente de la base de datos y retorna un booleano indicando si se eliminó correctamente o no */
  borrar_Cliente: Scalars['Boolean']['output'];
  /** Esta Función elimina un personal de la base de datos y retorna un booleano indicando si se eliminó correctamente o no */
  borrar_Personal: Scalars['Boolean']['output'];
  /** Esta Función elimina un usuario de la base de datos */
  borrar_usuario_por_id: Scalars['String']['output'];
  /** Esta función cambia el estado de un mantenimiento a "revision" y realiza una corrección de repuestos, esta corrección es quitar los repuestos que estaban reservados */
  cambiar_estado_revision_o_denegado: Scalars['Boolean']['output'];
  /** Esta función actualiza el campo diagnosticoFinal de un mantenimiento y cambia su estado a "completado" */
  completar_mantenimiento: Scalars['String']['output'];
  /** Esta Función registra un nuevo cliente en la base de datos y retorna el id del documento creado */
  crear_Cliente: Scalars['String']['output'];
  /** Esta Función registra un nuevo persoanl en la base de datos y retorna el id del documento creado */
  crear_Personal: Scalars['String']['output'];
  /** Esta Función registra un auto en la base de datos */
  crear_auto: Scalars['String']['output'];
  /** Esta Función registra una factura en la base de datos y retorna el id de la factura creada */
  crear_factura: Scalars['String']['output'];
  /** Esta Función crea multiples usuarios en la base de datos */
  crear_multiples_users: Scalars['Boolean']['output'];
  /** Esta Función registra un repuesto en la base de datos y retorna true si se registro correctamente */
  crear_repuesto: Scalars['Boolean']['output'];
  createUser: Scalars['Boolean']['output'];
  /** Esta funcion programa un mantenimiento */
  programar_mantenimiento: Scalars['String']['output'];
  /** Esta funcion registra un mantenimiento que no haya sido previamente programado, ademas en el apartado de repuestos, solo pide entregar una id y la cantidad */
  regisrar_mantenimiento_no_programado: Scalars['String']['output'];
  /** Esta Función registra un mantenimiento que ya haya sido previamente programado, ademas en el apartado de repuestos, pide entregar una id y la cantidad */
  regisrar_mantenimiento_programado: Scalars['String']['output'];
  updatePassword: Scalars['Boolean']['output'];
  /** Esta Función se usa internamente para actualizar repuestos en la base de datos y retorna true si se actualizo correctamente, no usar en el cliente */
  verficar_repuestos: Scalars['Boolean']['output'];
};


export type MutationAgregar_Contrato_ClienteArgs = {
  contrato: ContratoInput;
  id: Scalars['String']['input'];
};


export type MutationAgregar_Salario_FechaArgs = {
  id: Scalars['String']['input'];
  salarioFecha: SalarioFechaInput;
};


export type MutationActualizar_Datos_Usuario_Por_IdArgs = {
  _id: Scalars['String']['input'];
  newPassword?: InputMaybe<Scalars['String']['input']>;
  newUsername?: InputMaybe<Scalars['String']['input']>;
};


export type MutationBorrar_ClienteArgs = {
  id: Scalars['String']['input'];
};


export type MutationBorrar_PersonalArgs = {
  id: Scalars['String']['input'];
};


export type MutationBorrar_Usuario_Por_IdArgs = {
  _id: Scalars['String']['input'];
};


export type MutationCambiar_Estado_Revision_O_DenegadoArgs = {
  cambiosSolicitados?: InputMaybe<Scalars['String']['input']>;
  denegado: Scalars['Boolean']['input'];
  id: Scalars['String']['input'];
  repuestosAjuste: Array<CreateRepuestoAjusteDto>;
  revision: Scalars['Boolean']['input'];
};


export type MutationCompletar_MantenimientoArgs = {
  diagnosticoFinal: Scalars['String']['input'];
  id: Scalars['String']['input'];
};


export type MutationCrear_ClienteArgs = {
  cliente: ClienteUserInput;
};


export type MutationCrear_PersonalArgs = {
  input: PersonalUserInput;
};


export type MutationCrear_AutoArgs = {
  createCarInput: CreateCarDto;
};


export type MutationCrear_FacturaArgs = {
  createFacturaInput: CreateFacturaDto;
};


export type MutationCrear_Multiples_UsersArgs = {
  users: Array<CreateUserDto>;
};


export type MutationCrear_RepuestoArgs = {
  createRepuestoInput: CreateRepuestoDto;
};


export type MutationCreateUserArgs = {
  username: CreateUserDto;
};


export type MutationProgramar_MantenimientoArgs = {
  programarMantInput: PrograMantenimientoDto;
};


export type MutationRegisrar_Mantenimiento_No_ProgramadoArgs = {
  updateOneMantenimientoInput: UpdateOneMantenimientoDto;
};


export type MutationRegisrar_Mantenimiento_ProgramadoArgs = {
  registrarMantInput: UpdateMantenimientoDto;
};


export type MutationUpdatePasswordArgs = {
  newPassword: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type MutationVerficar_RepuestosArgs = {
  verifyRepuestoInput: VerifyRepuestoDto;
};

export type OperatividadPorMes = {
  __typename?: 'OperatividadPorMes';
  mes?: Maybe<Scalars['String']['output']>;
  operatividad?: Maybe<Scalars['Float']['output']>;
};

export type PersonalDto = {
  __typename?: 'PersonalDto';
  _id: Scalars['String']['output'];
  documentos?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  email?: Maybe<Scalars['String']['output']>;
  fechaIngreso?: Maybe<Scalars['DateTime']['output']>;
  nombre: Scalars['String']['output'];
  numero?: Maybe<Scalars['Int']['output']>;
  salarioFecha?: Maybe<Array<Maybe<SalarioFechaDto>>>;
};

export type PersonalInput = {
  _id?: InputMaybe<Scalars['String']['input']>;
  documentos?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  email?: InputMaybe<Scalars['String']['input']>;
  fechaIngreso?: InputMaybe<Scalars['DateTime']['input']>;
  nombre: Scalars['String']['input'];
  numero?: InputMaybe<Scalars['Int']['input']>;
  salarioFecha?: InputMaybe<Array<InputMaybe<SalarioFechaInput>>>;
};

export type PersonalUserInput = {
  personal: PersonalInput;
  user?: InputMaybe<CreateUserDto>;
};

export type ProductoConsumido = {
  __typename?: 'ProductoConsumido';
  cantidadConsumida: Scalars['Int']['output'];
  producto: Scalars['String']['output'];
};

export type PrograMantenimientoDto = {
  anotaciones: Scalars['String']['input'];
  fecha: Scalars['DateTime']['input'];
  placa: Scalars['String']['input'];
  tecnico: Scalars['String']['input'];
  tipo: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  /** Esta funcion retorna los mantenimientos desde el día de hoy para la pestaña de actividades */
  Actividades: Array<HomeMantDto>;
  /** Esta funcion retorna la informacion de un mantenimiento por id */
  Mantenimiento_Info_por_ID: MantenimientoInfoDto;
  /** Esta funcion retorna la informacion de un mantenimiento por placa */
  Mantenimiento_Info_por_Placa: Array<MantenimientoInfoDto56>;
  /** Esta funcion retorna el calendario de mantenimientos programados del mes, y ademas los mantenimientos para el dia de hoy */
  Query_Calendar_Hoy_Tecnico?: Maybe<CalendarAndMantenimientosDto>;
  /** Esta Función retorna la información de un auto ademas de sus mantenimientos (id, fecha, tipo, repuestosUsados) por medio de su placa */
  admin_history_cars: CarInfo;
  /** Esta Función retorna la información de los clientes en base a su nombre */
  buscar_Clientes: Array<ClienteDto>;
  /** Esta Función retorna la información del personal en base a su nombre */
  buscar_Pesonal: Array<PersonalDto>;
  /** Esta Función retorna las placas de los autos */
  buscar_placas_autos: Array<Scalars['String']['output']>;
  /** Esta Función r */
  buscar_repuestos: Array<RepuestoType>;
  /** Esta función retorna una matriz con las fechas de los mantenimientos que tengan de estado "programado" */
  calendar: Array<Scalars['DateTime']['output']>;
  /** Esta función retorna: 1. el kilometraje recorrido por mes de un vehiculo, la matriz de salida tendra un formato de [mes, kmRecorridoTotal] donde mes es "MM/YYYY" y kmRecorridoTotal es un numero, 2. los costos de mantenimiento por mes, la matriz de salida tendra un formato de [mes, costoTotal] donde mes es "MM/YYYY" y costoTotal es un numero, 3. el puntaje de un vehiculo, 4. la cantidad de mantenimientos realizados por mes, 5. la cantidad de mantenimientos denegados por mes, 6. los repuestos mas consumidos por mes, la matriz de salida tendra un formato de [mes, repuesto1, repuesto2, repuesto3, repuesto4, otros] donde mes es "MM/YYYY" y repuesto1, repuesto2, repuesto3, repuesto4, otros son objetos con la estructura de RepuestoConsumido */
  estadisticas_web: EstadisticWebDto;
  /** Obtiene el resumen mensual de gastos */
  grafica_gastos_generales: Array<MonthlySummaryDto>;
  /** Obtiene el resumen mensual de ingresos y egresos */
  grafica_ingresos_egresos: Array<GeneralReportDto>;
  /** Esta función retorna los repuestos consumidos en los ultimos x meses, para el reporte de repuestos */
  grafica_repuesto_xmeses: Array<MesRepuestos>;
  /** Esta funcion se usa en el home del admin y retorna la cantidad de mantenimientos programados, la cantidad total de mantenimientos y los mantenimientos programados */
  home_admin: HomeAdminDto;
  /** Esta funcion retorna la cantidad de mantenimientos por estado y los mantenimientos (información compleja) por estado y fecha */
  mantenimientoChanges: MantenimientoResult;
  /** Esta Función retorna la información de un cliente en base a su ID */
  obtener_Cliente_ID: ClienteDto;
  /** Esta Función retorna la información de un personal por su id */
  obtener_Personal_Por_Id: PersonalDto;
  /** Esta Función retorna la información de todo el personal en la base de datos */
  obtener_Todo_Personal: Array<PersonalDto>;
  /** Esta Función retorna la información de todos los clientes en la base de datos */
  obtener_Todos_Clientes: Array<ClienteDto>;
  /** Esta Función retorna la información de los usuarios asociados a un cliente */
  obtener_Usuarios_por_IDcliente: Array<UserOutput>;
  /** Esta Función retorna la información de un auto por medio de su placa */
  obtener_info_for_placa: GetForPlacasDto;
  /** Esta Función retorna la información de los carros (id, placa, cliente, propietarios fechaSoat) */
  obtener_info_placas: Array<GetPlacasDto>;
  /** Esta Función retorna la información de todos los repuestos (id, producto, marca, cantidad, cantidadReserva, precio) */
  obtener_todos_los_repuestos: Array<RepuestoType>;
};


export type QueryMantenimiento_Info_Por_IdArgs = {
  id: Scalars['String']['input'];
};


export type QueryMantenimiento_Info_Por_PlacaArgs = {
  placa: Scalars['String']['input'];
};


export type QueryAdmin_History_CarsArgs = {
  placa: Scalars['String']['input'];
};


export type QueryBuscar_ClientesArgs = {
  nombreCliente: Scalars['String']['input'];
};


export type QueryBuscar_PesonalArgs = {
  nombre: Scalars['String']['input'];
};


export type QueryBuscar_Placas_AutosArgs = {
  placa: Scalars['String']['input'];
};


export type QueryBuscar_RepuestosArgs = {
  producto: Scalars['String']['input'];
};


export type QueryEstadisticas_WebArgs = {
  fecha: Scalars['String']['input'];
  placa: Scalars['String']['input'];
};


export type QueryGrafica_Gastos_GeneralesArgs = {
  inputDate: Scalars['String']['input'];
};


export type QueryGrafica_Ingresos_EgresosArgs = {
  inputDate: Scalars['String']['input'];
};


export type QueryGrafica_Repuesto_XmesesArgs = {
  months: Scalars['Float']['input'];
  startDate: Scalars['String']['input'];
};


export type QueryHome_AdminArgs = {
  fecha: Scalars['DateTime']['input'];
};


export type QueryMantenimientoChangesArgs = {
  estado: Scalars['String']['input'];
  fecha: Scalars['DateTime']['input'];
};


export type QueryObtener_Cliente_IdArgs = {
  id: Scalars['String']['input'];
};


export type QueryObtener_Personal_Por_IdArgs = {
  id: Scalars['String']['input'];
};


export type QueryObtener_Usuarios_Por_IDclienteArgs = {
  clienteId: Scalars['String']['input'];
};


export type QueryObtener_Info_For_PlacaArgs = {
  placa: Scalars['String']['input'];
};

export type RepuestoConsumido = {
  __typename?: 'RepuestoConsumido';
  costo?: Maybe<Scalars['Float']['output']>;
  producto?: Maybe<Scalars['String']['output']>;
};

export type RepuestoDto = {
  __typename?: 'RepuestoDTO';
  cantidad?: Maybe<Scalars['Float']['output']>;
  cantidadReserva?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  marca?: Maybe<Scalars['String']['output']>;
  precio?: Maybe<Scalars['Float']['output']>;
  producto?: Maybe<Scalars['String']['output']>;
};


export type RepuestoType = {
  __typename?: 'RepuestoType';
  cantidad: Scalars['Float']['output'];
  cantidadReserva?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  marca?: Maybe<Scalars['String']['output']>;
  precio?: Maybe<Scalars['Float']['output']>;
  producto?: Maybe<Scalars['String']['output']>;
};

export type RepuestoType2 = {
  __typename?: 'RepuestoType2';
  _id: Scalars['String']['output'];
  cantidad: Scalars['Float']['output'];
  cantidadReserva?: Maybe<Scalars['Float']['output']>;
  marca?: Maybe<Scalars['String']['output']>;
  precio?: Maybe<Scalars['Float']['output']>;
  producto?: Maybe<Scalars['String']['output']>;
};

export type RepuestosMasConsumidosPorMes = {
  __typename?: 'RepuestosMasConsumidosPorMes';
  mes?: Maybe<Scalars['String']['output']>;
  otros?: Maybe<Scalars['Float']['output']>;
  repuesto1: RepuestoConsumido;
  repuesto2: RepuestoConsumido;
  repuesto3: RepuestoConsumido;
  repuesto4: RepuestoConsumido;
};

export type SalarioFechaDto = {
  __typename?: 'SalarioFechaDto';
  fecha: Scalars['DateTime']['output'];
  salario: Scalars['Float']['output'];
};

export type SalarioFechaInput = {
  fecha: Scalars['DateTime']['input'];
  salario: Scalars['Float']['input'];
};

export type Subscription = {
  __typename?: 'Subscription';
  /** Esta funcion retorna los mantenimientos desde el día de hoy para la pestaña de actividades */
  Actividades: Array<HomeMantDto>;
  /** Esta funcion retorna el calendario de mantenimientos programados del mes, y ademas los mantenimientos para el dia de los ultimos 7 días */
  Calendar_Hoy_Tecnico?: Maybe<CalendarAndMantenimientosDto>;
  Personal: Array<PersonalDto>;
};

export type UpdateMantenimientoDto = {
  Cliente: Scalars['String']['input'];
  _id: Scalars['String']['input'];
  diagnostico: Scalars['String']['input'];
  fecha: Scalars['DateTime']['input'];
  fechaInicio: Scalars['DateTime']['input'];
  fechaSoat: Scalars['DateTime']['input'];
  kmMedido: Scalars['Float']['input'];
  kmPrevio: Scalars['Float']['input'];
  repuestos?: InputMaybe<Array<RepuestoDto>>;
};

export type UpdateOneMantenimientoDto = {
  Cliente: Scalars['String']['input'];
  diagnostico: Scalars['String']['input'];
  fecha: Scalars['DateTime']['input'];
  fechaInicio: Scalars['DateTime']['input'];
  fechaSoat: Scalars['DateTime']['input'];
  kmMedido: Scalars['Float']['input'];
  kmPrevio: Scalars['Float']['input'];
  placa: Scalars['String']['input'];
  repuestos?: InputMaybe<Array<RepuestoDto>>;
  tecnico: Scalars['String']['input'];
  tipo: Scalars['String']['input'];
};

export type UserOutput = {
  __typename?: 'UserOutput';
  _id: Scalars['String']['output'];
  clienteAsociado?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  name: Scalars['String']['output'];
  nivelUser: Scalars['String']['output'];
  username: Scalars['String']['output'];
};

export type VerifyRepuestoDto = {
  repuestos?: InputMaybe<Array<RepuestoDto>>;
};

export type HomeMantDto = {
  __typename?: 'homeMantDTO';
  _id?: Maybe<Scalars['ID']['output']>;
  anotaciones?: Maybe<Scalars['String']['output']>;
  cambiosSolicitados?: Maybe<Scalars['String']['output']>;
  cliente?: Maybe<Scalars['String']['output']>;
  diagnostico?: Maybe<Scalars['String']['output']>;
  diagnosticoFinal?: Maybe<Scalars['String']['output']>;
  documentos?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  estado?: Maybe<Scalars['String']['output']>;
  fecha?: Maybe<Scalars['DateTime']['output']>;
  fechaFin?: Maybe<Scalars['DateTime']['output']>;
  fechaInicio?: Maybe<Scalars['DateTime']['output']>;
  fechaSoat?: Maybe<Scalars['DateTime']['output']>;
  kmMedido?: Maybe<Scalars['Float']['output']>;
  kmPrevio?: Maybe<Scalars['Float']['output']>;
  placa?: Maybe<Scalars['String']['output']>;
  repuestos?: Maybe<Array<Maybe<RepuestoDto>>>;
  repuestosAjuste?: Maybe<Array<Maybe<RepuestoDto>>>;
  tecnico?: Maybe<Scalars['String']['output']>;
  tipo?: Maybe<Scalars['String']['output']>;
};

export type Buscar_ClientesQueryVariables = Exact<{
  nombreCliente: Scalars['String']['input'];
}>;


export type Buscar_ClientesQuery = { __typename?: 'Query', buscar_Clientes: Array<{ __typename?: 'ClienteDto', _id?: string | null, direccion: string, documentos?: Array<string | null> | null, email: string, nombre: string, nombreCliente?: string | null, numeroContacto?: number | null, rubro: string, ruc: string, contratos?: Array<{ __typename?: 'ContratoDto', fechaFin: any, fechaInicio: any, numeroContrato: string } | null> | null }> };

export type Crear_ClienteMutationVariables = Exact<{
  cliente: ClienteUserInput;
}>;


export type Crear_ClienteMutation = { __typename?: 'Mutation', crear_Cliente: string };

export type Cliente_IdQueryVariables = Exact<{
  obtenerClienteIdId: Scalars['String']['input'];
}>;


export type Cliente_IdQuery = { __typename?: 'Query', obtener_Cliente_ID: { __typename?: 'ClienteDto', _id?: string | null, documentos?: Array<string | null> | null, direccion: string, email: string, nombre: string, nombreCliente?: string | null, numeroContacto?: number | null, rubro: string, ruc: string, contratos?: Array<{ __typename?: 'ContratoDto', fechaFin: any, fechaInicio: any, numeroContrato: string } | null> | null } };

export type Obtener_Usuarios_Por_IDclienteQueryVariables = Exact<{
  clienteId: Scalars['String']['input'];
}>;


export type Obtener_Usuarios_Por_IDclienteQuery = { __typename?: 'Query', obtener_Usuarios_por_IDcliente: Array<{ __typename?: 'UserOutput', _id: string, clienteAsociado?: string | null, email: string, name: string, nivelUser: string, username: string }> };

export type Buscar_PesonalQueryVariables = Exact<{
  nombre: Scalars['String']['input'];
}>;


export type Buscar_PesonalQuery = { __typename?: 'Query', buscar_Pesonal: Array<{ __typename?: 'PersonalDto', _id: string, documentos?: Array<string | null> | null, email?: string | null, fechaIngreso?: any | null, nombre: string, numero?: number | null, salarioFecha?: Array<{ __typename?: 'SalarioFechaDto', fecha: any, salario: number } | null> | null }> };

export type Crear_PersonalMutationVariables = Exact<{
  input: PersonalUserInput;
}>;


export type Crear_PersonalMutation = { __typename?: 'Mutation', crear_Personal: string };

export type Obtener_Personal_Por_IdQueryVariables = Exact<{
  obtenerPersonalPorIdId: Scalars['String']['input'];
}>;


export type Obtener_Personal_Por_IdQuery = { __typename?: 'Query', obtener_Personal_Por_Id: { __typename?: 'PersonalDto', _id: string, documentos?: Array<string | null> | null, email?: string | null, fechaIngreso?: any | null, nombre: string, numero?: number | null, salarioFecha?: Array<{ __typename?: 'SalarioFechaDto', fecha: any, salario: number } | null> | null } };

export type Buscar_RepuestosQueryVariables = Exact<{
  producto: Scalars['String']['input'];
}>;


export type Buscar_RepuestosQuery = { __typename?: 'Query', buscar_repuestos: Array<{ __typename?: 'RepuestoType', cantidad: number, cantidadReserva?: number | null, id?: string | null, marca?: string | null, precio?: number | null, producto?: string | null }> };

export type Crear_Multiples_UsersMutationVariables = Exact<{
  users: Array<CreateUserDto> | CreateUserDto;
}>;


export type Crear_Multiples_UsersMutation = { __typename?: 'Mutation', crear_multiples_users: boolean };


export const Buscar_ClientesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Buscar_Clientes"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"nombreCliente"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"buscar_Clientes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"nombreCliente"},"value":{"kind":"Variable","name":{"kind":"Name","value":"nombreCliente"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"contratos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fechaFin"}},{"kind":"Field","name":{"kind":"Name","value":"fechaInicio"}},{"kind":"Field","name":{"kind":"Name","value":"numeroContrato"}}]}},{"kind":"Field","name":{"kind":"Name","value":"direccion"}},{"kind":"Field","name":{"kind":"Name","value":"documentos"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"nombre"}},{"kind":"Field","name":{"kind":"Name","value":"nombreCliente"}},{"kind":"Field","name":{"kind":"Name","value":"numeroContacto"}},{"kind":"Field","name":{"kind":"Name","value":"rubro"}},{"kind":"Field","name":{"kind":"Name","value":"ruc"}}]}}]}}]} as unknown as DocumentNode<Buscar_ClientesQuery, Buscar_ClientesQueryVariables>;
export const Crear_ClienteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Crear_Cliente"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cliente"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ClienteUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"crear_Cliente"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"cliente"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cliente"}}}]}]}}]} as unknown as DocumentNode<Crear_ClienteMutation, Crear_ClienteMutationVariables>;
export const Cliente_IdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Cliente_ID"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"obtenerClienteIdId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"obtener_Cliente_ID"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"obtenerClienteIdId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"contratos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fechaFin"}},{"kind":"Field","name":{"kind":"Name","value":"fechaInicio"}},{"kind":"Field","name":{"kind":"Name","value":"numeroContrato"}}]}},{"kind":"Field","name":{"kind":"Name","value":"documentos"}},{"kind":"Field","name":{"kind":"Name","value":"direccion"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"nombre"}},{"kind":"Field","name":{"kind":"Name","value":"nombreCliente"}},{"kind":"Field","name":{"kind":"Name","value":"numeroContacto"}},{"kind":"Field","name":{"kind":"Name","value":"rubro"}},{"kind":"Field","name":{"kind":"Name","value":"ruc"}}]}}]}}]} as unknown as DocumentNode<Cliente_IdQuery, Cliente_IdQueryVariables>;
export const Obtener_Usuarios_Por_IDclienteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Obtener_Usuarios_por_IDcliente"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"clienteId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"obtener_Usuarios_por_IDcliente"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"clienteId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"clienteId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"clienteAsociado"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nivelUser"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]} as unknown as DocumentNode<Obtener_Usuarios_Por_IDclienteQuery, Obtener_Usuarios_Por_IDclienteQueryVariables>;
export const Buscar_PesonalDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Buscar_Pesonal"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"nombre"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"buscar_Pesonal"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"nombre"},"value":{"kind":"Variable","name":{"kind":"Name","value":"nombre"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"documentos"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"fechaIngreso"}},{"kind":"Field","name":{"kind":"Name","value":"nombre"}},{"kind":"Field","name":{"kind":"Name","value":"numero"}},{"kind":"Field","name":{"kind":"Name","value":"salarioFecha"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fecha"}},{"kind":"Field","name":{"kind":"Name","value":"salario"}}]}}]}}]}}]} as unknown as DocumentNode<Buscar_PesonalQuery, Buscar_PesonalQueryVariables>;
export const Crear_PersonalDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Crear_Personal"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PersonalUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"crear_Personal"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<Crear_PersonalMutation, Crear_PersonalMutationVariables>;
export const Obtener_Personal_Por_IdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Obtener_Personal_Por_Id"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"obtenerPersonalPorIdId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"obtener_Personal_Por_Id"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"obtenerPersonalPorIdId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"documentos"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"fechaIngreso"}},{"kind":"Field","name":{"kind":"Name","value":"nombre"}},{"kind":"Field","name":{"kind":"Name","value":"numero"}},{"kind":"Field","name":{"kind":"Name","value":"salarioFecha"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fecha"}},{"kind":"Field","name":{"kind":"Name","value":"salario"}}]}}]}}]}}]} as unknown as DocumentNode<Obtener_Personal_Por_IdQuery, Obtener_Personal_Por_IdQueryVariables>;
export const Buscar_RepuestosDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Buscar_repuestos"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"producto"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"buscar_repuestos"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"producto"},"value":{"kind":"Variable","name":{"kind":"Name","value":"producto"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cantidad"}},{"kind":"Field","name":{"kind":"Name","value":"cantidadReserva"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"marca"}},{"kind":"Field","name":{"kind":"Name","value":"precio"}},{"kind":"Field","name":{"kind":"Name","value":"producto"}}]}}]}}]} as unknown as DocumentNode<Buscar_RepuestosQuery, Buscar_RepuestosQueryVariables>;
export const Crear_Multiples_UsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Crear_multiples_users"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"users"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateUserDto"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"crear_multiples_users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"users"},"value":{"kind":"Variable","name":{"kind":"Name","value":"users"}}}]}]}}]} as unknown as DocumentNode<Crear_Multiples_UsersMutation, Crear_Multiples_UsersMutationVariables>;
