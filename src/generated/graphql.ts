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

export type CalendarGrafica = {
  __typename?: 'CalendarGrafica';
  cantidad?: Maybe<Scalars['Float']['output']>;
  fecha?: Maybe<Scalars['DateTime']['output']>;
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

export type Cliente2Dto = {
  __typename?: 'Cliente2Dto';
  _id?: Maybe<Scalars['String']['output']>;
  contratos?: Maybe<Array<Maybe<Contrato2Dto>>>;
  direccion: Scalars['String']['output'];
  documentos?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  email: Scalars['String']['output'];
  nombre: Scalars['String']['output'];
  nombreCliente?: Maybe<Scalars['String']['output']>;
  numeroContacto?: Maybe<Scalars['Float']['output']>;
  rubro: Scalars['String']['output'];
  ruc: Scalars['String']['output'];
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

export type ClientesResult = {
  __typename?: 'ClientesResult';
  clientes: Array<ClienteDto>;
  totalPages: Scalars['Int']['output'];
};

export type Contrato2Dto = {
  __typename?: 'Contrato2Dto';
  clienteId: Scalars['String']['output'];
  fechaFin: Scalars['DateTime']['output'];
  fechaInicio: Scalars['DateTime']['output'];
  numeroContrato: Scalars['String']['output'];
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

export type ContratoIntDto = {
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

export type CreateClientUserDto = {
  email: Scalars['String']['input'];
  idCliente?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
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

export type CreateNotiDto = {
  canal: Scalars['String']['input'];
  descripcion: Scalars['String']['input'];
  fecha: Scalars['DateTime']['input'];
  identificador: Scalars['String']['input'];
  leido: Scalars['Boolean']['input'];
  tipo: Scalars['String']['input'];
  titulo: Scalars['String']['input'];
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

export type DashRepuestos = {
  __typename?: 'DashRepuestos';
  otros?: Maybe<ProductoConsumidoDash>;
  prod1?: Maybe<ProductoConsumidoDash>;
  prod2?: Maybe<ProductoConsumidoDash>;
  prod3?: Maybe<ProductoConsumidoDash>;
  prod4?: Maybe<ProductoConsumidoDash>;
  prod5?: Maybe<ProductoConsumidoDash>;
};

export type Dashboard = {
  __typename?: 'Dashboard';
  calendario?: Maybe<Array<CalendarGrafica>>;
  gastosGenerales?: Maybe<Array<GeneralReportDto>>;
  ingresosEgresos?: Maybe<Array<MonthlySummaryDto>>;
  ingresosMensuales?: Maybe<IngresosDtoOut>;
  mantenimientosDenegados?: Maybe<Scalars['Float']['output']>;
  mantenimientosRealizados?: Maybe<Scalars['Float']['output']>;
  operatividad?: Maybe<OperatividadOut>;
  repuestosMasConsumidos?: Maybe<DashRepuestos>;
};

export type EstadisticWebDto = {
  __typename?: 'EstadisticWebDTO';
  cantidadMatDenegados?: Maybe<Scalars['Float']['output']>;
  cantidadMatenimientos?: Maybe<Scalars['Float']['output']>;
  cliente?: Maybe<Scalars['String']['output']>;
  costos?: Maybe<Costos>;
  kmRecorrido?: Maybe<Array<KmRecorridoPorMes>>;
  operatividad?: Maybe<Array<OperatividadPorMes>>;
  placa?: Maybe<Scalars['String']['output']>;
  puntaje?: Maybe<Scalars['Float']['output']>;
  repuestosConsumidos?: Maybe<RepuestosMasConsumidosPorMes>;
};

export type FacturaDto = {
  __typename?: 'FacturaDto';
  detraccion?: Maybe<Scalars['Float']['output']>;
  documentos?: Maybe<Array<Scalars['String']['output']>>;
  fecha: Scalars['DateTime']['output'];
  igv?: Maybe<Scalars['Float']['output']>;
  involucrado?: Maybe<Scalars['String']['output']>;
  monto: Scalars['Float']['output'];
  notificacion: Scalars['Boolean']['output'];
  numeroFactura: Scalars['String']['output'];
  tipo: Scalars['String']['output'];
};

export type FacturasResult = {
  __typename?: 'FacturasResult';
  facturas: Array<FacturaDto>;
  totalPages: Scalars['Int']['output'];
};

export type GeneralReportDto = {
  __typename?: 'GeneralReportDto';
  fact?: Maybe<Scalars['Float']['output']>;
  mesYear?: Maybe<Scalars['String']['output']>;
  otros?: Maybe<Scalars['Float']['output']>;
  personalTotal?: Maybe<Scalars['Float']['output']>;
};

export type GetForPlacasDto = {
  __typename?: 'GetForPlacasDto';
  _id?: Maybe<Scalars['String']['output']>;
  cliente?: Maybe<Scalars['String']['output']>;
  fechaSoat?: Maybe<Scalars['DateTime']['output']>;
  kmActual?: Maybe<Scalars['Float']['output']>;
  placa?: Maybe<Scalars['String']['output']>;
  propietario?: Maybe<Scalars['String']['output']>;
  tipoContrato?: Maybe<Scalars['String']['output']>;
};

export type GetPlacasClientDto = {
  __typename?: 'GetPlacasClientDto';
  _id: Scalars['String']['output'];
  cliente: Scalars['String']['output'];
  fechaSoat: Scalars['DateTime']['output'];
  placa: Scalars['String']['output'];
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

export type HistorialCarData = {
  __typename?: 'HistorialCarData';
  cliente?: Maybe<Scalars['String']['output']>;
  fechaSoat?: Maybe<Scalars['DateTime']['output']>;
  kmActual?: Maybe<Scalars['Float']['output']>;
  operatividad?: Maybe<Scalars['Float']['output']>;
  placa?: Maybe<Scalars['String']['output']>;
  ultimaRevision?: Maybe<Scalars['DateTime']['output']>;
  vigenciaContrato?: Maybe<Scalars['DateTime']['output']>;
};

export type HomeAdminDto = {
  __typename?: 'HomeAdminDTO';
  cantidadCompletada: Scalars['Int']['output'];
  cantidadRevision: Scalars['Int']['output'];
  cantidadTotal: Scalars['Int']['output'];
  mantenimientos: Array<MantenimientoInfoDto2>;
};

export type IngresoRepuestosStringDto = {
  repuestosActualizar?: InputMaybe<Array<UpdateRepuestoStringDto>>;
  repuestosNuevos?: InputMaybe<Array<NuevoRepuestoStringDto>>;
};

export type IngresosDtoOut = {
  __typename?: 'IngresosDtoOut';
  detracciones?: Maybe<Scalars['Float']['output']>;
  igv?: Maybe<Scalars['Float']['output']>;
  ingresos?: Maybe<Scalars['Float']['output']>;
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

export type MantenimientoTableType = {
  __typename?: 'MantenimientoTableType';
  mantenimientos: Array<Mantenimientos>;
  totalPages: Scalars['Int']['output'];
};

export type Mantenimientos = {
  __typename?: 'Mantenimientos';
  _id?: Maybe<Scalars['String']['output']>;
  cliente?: Maybe<Scalars['String']['output']>;
  costoRepuestos?: Maybe<Scalars['Float']['output']>;
  fechaFin?: Maybe<Scalars['DateTime']['output']>;
  fechaInicio?: Maybe<Scalars['DateTime']['output']>;
  placa?: Maybe<Scalars['String']['output']>;
  repuestoUsados?: Maybe<Scalars['Float']['output']>;
  tipo?: Maybe<Scalars['String']['output']>;
};

export type MesRepuestos = {
  __typename?: 'MesRepuestos';
  mesYear?: Maybe<Scalars['String']['output']>;
  otros?: Maybe<ProductoConsumido>;
  prod1?: Maybe<ProductoConsumido>;
  prod2?: Maybe<ProductoConsumido>;
  prod3?: Maybe<ProductoConsumido>;
  prod4?: Maybe<ProductoConsumido>;
  prod5?: Maybe<ProductoConsumido>;
};

export type MonthlySummaryDto = {
  __typename?: 'MonthlySummaryDto';
  egresosTotalFact?: Maybe<Scalars['Float']['output']>;
  ingresoFact?: Maybe<Scalars['Float']['output']>;
  mesYear?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Esta Función agrega un nuevo salario y una fecha al personal en la base de datos y retorna el documento actualizado */
  Agregar_Salario_Fecha: PersonalDto;
  /** Función para borrar repuestos */
  Borrar_Repuesto: Scalars['String']['output'];
  /** Función para ingresar repuestos desde la web */
  Ingreso_Repuestos_Web: Scalars['String']['output'];
  /** Esta Función actualizar un cliente en la base de datos por su id */
  actualizar_Cliente: Scalars['String']['output'];
  /** Esta función actualiza uno o mas parametros de un personal en la base de datos */
  actualizar_Info_Personal: Scalars['Boolean']['output'];
  /** Esta Función actualiza la información de un usuario */
  actualizar_datos_usuario: Scalars['Boolean']['output'];
  /** Esta Función actualiza la información de un usuario en la base de datos */
  actualizar_datos_usuario_por_id: Scalars['String']['output'];
  /** Esta Función agrega un contrato a un cliente en la base de datos */
  agregar_Contrato: Scalars['String']['output'];
  /** Esta Función elimina un cliente de la base de datos y retorna un booleano indicando si se eliminó correctamente o no */
  borrar_Cliente: Scalars['Boolean']['output'];
  /** Esta Función elimina un personal de la base de datos y retorna un booleano indicando si se eliminó correctamente o no */
  borrar_Personal: Scalars['Boolean']['output'];
  /** Esta Función elimina un proveedor de la base de datos y retorna un booleano indicando si se eliminó correctamente o no */
  borrar_Proveedor: Scalars['Boolean']['output'];
  borrar_contrato_personal: Scalars['Boolean']['output'];
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
  /** Esta Función registra un nuevo proveedor en la base de datos y retorna el id del documento creado */
  crear_Proveedor: Scalars['String']['output'];
  /** Esta Función registra un auto en la base de datos */
  crear_auto: Scalars['String']['output'];
  /** Esta Función registra una factura en la base de datos y retorna el id de la factura creada */
  crear_factura: Scalars['String']['output'];
  /** Esta Función crea multiples usuarios en la base de datos */
  crear_multiples_users: Scalars['Boolean']['output'];
  /** Esta Función registra un repuesto en la base de datos y retorna true si se registro correctamente */
  crear_repuesto: Scalars['Boolean']['output'];
  /** Esta Función registra un nuevo usuario en la base de datos y lo asocia a un cliente */
  crear_usuario_cliente: Scalars['String']['output'];
  createUser: Scalars['Boolean']['output'];
  /** Esta Función elimina un contrato de un cliente en la base de datos y retorna el documento actualizado */
  eliminar_Contrato: Scalars['Boolean']['output'];
  /** envia un string de notificación de emergencia */
  emergencia_notificacion: Scalars['Boolean']['output'];
  /** Esta funcion programa un mantenimiento */
  programar_mantenimiento: Scalars['String']['output'];
  /** Esta Función es para probar las notifaciones */
  prueba_notificacion: Scalars['Boolean']['output'];
  /** Esta funcion registra un mantenimiento que no haya sido previamente programado, ademas en el apartado de repuestos, solo pide entregar una id y la cantidad */
  regisrar_mantenimiento_no_programado: Scalars['String']['output'];
  /** Esta Función registra un mantenimiento que ya haya sido previamente programado, ademas en el apartado de repuestos, pide entregar una id y la cantidad */
  regisrar_mantenimiento_programado: Scalars['String']['output'];
  updatePassword: Scalars['Boolean']['output'];
  /** Esta Función se usa internamente para actualizar repuestos en la base de datos y retorna true si se actualizo correctamente, no usar en el cliente */
  verficar_repuestos: Scalars['Boolean']['output'];
};


export type MutationAgregar_Salario_FechaArgs = {
  id: Scalars['String']['input'];
  salarioFecha: SalarioFechaInput;
};


export type MutationBorrar_RepuestoArgs = {
  id: Scalars['String']['input'];
};


export type MutationIngreso_Repuestos_WebArgs = {
  data: IngresoRepuestosStringDto;
};


export type MutationActualizar_ClienteArgs = {
  cliente: ClienteInput;
  id: Scalars['String']['input'];
};


export type MutationActualizar_Info_PersonalArgs = {
  id: Scalars['String']['input'];
  input: UpdatePersonalInput;
  salarioFecha?: InputMaybe<SalarioFechaInput>;
};


export type MutationActualizar_Datos_UsuarioArgs = {
  newEmail: Scalars['String']['input'];
  newName?: InputMaybe<Scalars['String']['input']>;
  newPassword: Scalars['String']['input'];
  newUsername?: InputMaybe<Scalars['String']['input']>;
  oldUsername: Scalars['String']['input'];
};


export type MutationActualizar_Datos_Usuario_Por_IdArgs = {
  _id: Scalars['String']['input'];
  newPassword?: InputMaybe<Scalars['String']['input']>;
  newUsername?: InputMaybe<Scalars['String']['input']>;
};


export type MutationAgregar_ContratoArgs = {
  contrato: ContratoIntDto;
  id: Scalars['String']['input'];
};


export type MutationBorrar_ClienteArgs = {
  id: Scalars['String']['input'];
};


export type MutationBorrar_PersonalArgs = {
  id: Scalars['String']['input'];
};


export type MutationBorrar_ProveedorArgs = {
  id: Scalars['String']['input'];
};


export type MutationBorrar_Contrato_PersonalArgs = {
  id_contrato: Scalars['String']['input'];
  id_personal: Scalars['String']['input'];
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
  fechaFin: Scalars['DateTime']['input'];
  id: Scalars['String']['input'];
};


export type MutationCrear_ClienteArgs = {
  cliente: ClienteUserInput;
};


export type MutationCrear_PersonalArgs = {
  input: PersonalUserInput;
};


export type MutationCrear_ProveedorArgs = {
  input: ProveedorInput;
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


export type MutationCrear_Usuario_ClienteArgs = {
  input: CreateClientUserDto;
};


export type MutationCreateUserArgs = {
  username: CreateUserDto;
};


export type MutationEliminar_ContratoArgs = {
  clienteId: Scalars['String']['input'];
  numeroContrato: Scalars['String']['input'];
};


export type MutationEmergencia_NotificacionArgs = {
  emergencia: Scalars['String']['input'];
};


export type MutationProgramar_MantenimientoArgs = {
  programarMantInput: PrograMantenimientoDto;
};


export type MutationPrueba_NotificacionArgs = {
  inputNotification: CreateNotiDto;
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

export type NotificacionDto = {
  __typename?: 'NotificacionDTO';
  _id: Scalars['String']['output'];
  descripcion: Scalars['String']['output'];
  fecha: Scalars['DateTime']['output'];
  identificador: Scalars['String']['output'];
  leido: Scalars['Boolean']['output'];
  tipo: Scalars['String']['output'];
  titulo: Scalars['String']['output'];
};

export type NuevoRepuestoStringDto = {
  cantidad: Scalars['String']['input'];
  marca: Scalars['String']['input'];
  precio: Scalars['String']['input'];
  producto: Scalars['String']['input'];
};

export type OperatividadOut = {
  __typename?: 'OperatividadOut';
  operatividadHoras?: Maybe<Scalars['Float']['output']>;
  operatividadPorcentual?: Maybe<Scalars['Float']['output']>;
};

export type OperatividadPorMes = {
  __typename?: 'OperatividadPorMes';
  mes?: Maybe<Scalars['String']['output']>;
  operatividad?: Maybe<Scalars['Float']['output']>;
};

export type Personal3Dto = {
  __typename?: 'Personal3Dto';
  _id?: Maybe<Scalars['String']['output']>;
  documentos?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  email?: Maybe<Scalars['String']['output']>;
  fechaIngreso?: Maybe<Scalars['DateTime']['output']>;
  nombre: Scalars['String']['output'];
  numero?: Maybe<Scalars['Int']['output']>;
  salarioFecha?: Maybe<Array<Maybe<SalarioFecha3Dto>>>;
  username: Scalars['String']['output'];
};

export type PersonalDto = {
  __typename?: 'PersonalDto';
  _id?: Maybe<Scalars['String']['output']>;
  documentos?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  email?: Maybe<Scalars['String']['output']>;
  fechaIngreso?: Maybe<Scalars['DateTime']['output']>;
  nombre: Scalars['String']['output'];
  numero?: Maybe<Scalars['Int']['output']>;
  salarioFecha?: Maybe<Array<Maybe<SalarioFechaDto>>>;
  username: Scalars['String']['output'];
};

export type PersonalInput = {
  _id?: InputMaybe<Scalars['String']['input']>;
  documentos?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  email?: InputMaybe<Scalars['String']['input']>;
  fechaIngreso?: InputMaybe<Scalars['DateTime']['input']>;
  nombre: Scalars['String']['input'];
  numero?: InputMaybe<Scalars['Int']['input']>;
  salarioFecha?: InputMaybe<Array<InputMaybe<SalarioFechaInput>>>;
  username: Scalars['String']['input'];
};

export type PersonalResult = {
  __typename?: 'PersonalResult';
  personal: Array<PersonalDto>;
  totalPages: Scalars['Int']['output'];
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

export type ProductoConsumidoDash = {
  __typename?: 'ProductoConsumidoDash';
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

export type ProveedorDto = {
  __typename?: 'ProveedorDto';
  _id?: Maybe<Scalars['String']['output']>;
  direccion: Scalars['String']['output'];
  documentos?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  email?: Maybe<Scalars['String']['output']>;
  nombre: Scalars['String']['output'];
  nombreContacto?: Maybe<Scalars['String']['output']>;
  numeroContacto?: Maybe<Scalars['Int']['output']>;
  rubro?: Maybe<Scalars['String']['output']>;
  ruc: Scalars['String']['output'];
};

export type ProveedorInput = {
  _id?: InputMaybe<Scalars['String']['input']>;
  direccion: Scalars['String']['input'];
  email?: InputMaybe<Scalars['String']['input']>;
  nombre: Scalars['String']['input'];
  nombreContacto?: InputMaybe<Scalars['String']['input']>;
  numeroContacto?: InputMaybe<Scalars['Int']['input']>;
  rubro?: InputMaybe<Scalars['String']['input']>;
  ruc: Scalars['String']['input'];
};

export type ProveedorResult = {
  __typename?: 'ProveedorResult';
  proveedor: Array<ProveedorDto>;
  totalPages: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  /** Esta funcion retorna los mantenimientos desde el día de hoy para la pestaña de actividades */
  Actividades: Array<HomeMantDto>;
  /** Esta Función retorna el total de salarios de todo el personal en la base de dato */
  Egreso_Facturas_Mensual: Scalars['Float']['output'];
  /** Esta función retorna la información de un auto incluyendo su operatividad porcentual por medio de su placa */
  Historial_Car_Admin: HistorialCarData;
  /** Esta Función retorna el total de salarios de todo el personal en la base de dato */
  Ingreso_Facturas_Mensual: Scalars['Float']['output'];
  /** Esta funcion retorna la informacion de un mantenimiento por id */
  Mantenimiento_Info_por_ID: MantenimientoInfoDto;
  /** Esta funcion retorna la informacion de un mantenimiento por placa */
  Mantenimiento_Info_por_Placa: Array<MantenimientoInfoDto56>;
  /** Esta funcion retorna el calendario de mantenimientos programados del mes, y ademas los mantenimientos para el dia de hoy */
  Query_Calendar_Hoy_Tecnico?: Maybe<CalendarAndMantenimientosDto>;
  /** Esta Función retorna la información de un auto ademas de sus mantenimientos (id, fecha, tipo, repuestosUsados) por medio de su placa */
  admin_history_cars: CarInfo;
  /** Esta función retorna la información de los clientes en base a su nombre */
  buscar_Clientes: ClientesResult;
  /** Esta función retorna la información del personal en base a su nombre */
  buscar_Pesonal: PersonalResult;
  /** Esta función retorna la información del proveedor en base a su nombre */
  buscar_Proveedor: ProveedorResult;
  /** Esta Función retorna una lista de facturas que coinciden con el numero de factura */
  buscar_factura: FacturasResult;
  /** Esta Función retorna las placas de los autos */
  buscar_info_placas_tabla: SearchPlacas;
  /** Esta Función retorna las placas de los autos */
  buscar_placas_autos: Array<Scalars['String']['output']>;
  /** Esta función retorna la información de los repuestos que coincidan con el producto */
  buscar_repuestos: RepuestosResult;
  /** Esta función retorna una matriz con las fechas de los mantenimientos que tengan de estado "programado" */
  calendar: Array<Scalars['DateTime']['output']>;
  /** Esta función retorna la cantidad de mantenimientos programados */
  calendar_grafica: Array<CalendarGrafica>;
  /** Obtiene el resumen mensual de ingresos y egresos */
  dashboard_web: Dashboard;
  /** Esta función retorna: 1. el kilometraje recorrido por mes de un vehiculo, la matriz de salida tendra un formato de [mes, kmRecorridoTotal] donde mes es "MM/YYYY" y kmRecorridoTotal es un numero, 2. los costos de mantenimiento por mes, la matriz de salida tendra un formato de [mes, costoTotal] donde mes es "MM/YYYY" y costoTotal es un numero, 3. el puntaje de un vehiculo, 4. la cantidad de mantenimientos realizados por mes, 5. la cantidad de mantenimientos denegados por mes, 6. los repuestos mas consumidos por mes, la matriz de salida tendra un formato de [mes, repuesto1, repuesto2, repuesto3, repuesto4, otros] donde mes es "MM/YYYY" y repuesto1, repuesto2, repuesto3, repuesto4, otros son objetos con la estructura de RepuestoConsumido */
  estadisticas_web: EstadisticWebDto;
  /** Obtiene el resumen mensual de ingresos y egresos */
  grafica_gastos_generales: Array<GeneralReportDto>;
  /** Obtiene el resumen mensual de ingresos y egresos */
  grafica_ingresos_egresos: Array<MonthlySummaryDto>;
  /** Esta función retorna los repuestos consumidos en los ultimos x meses, para el reporte de repuestos */
  grafica_repuesto_xmeses: Array<MesRepuestos>;
  /** Esta funcion se usa en el home del admin y retorna la cantidad de mantenimientos programados, la cantidad total de mantenimientos y los mantenimientos programados */
  home_admin: HomeAdminDto;
  /** Esta funcion retorna la cantidad de mantenimientos por estado y los mantenimientos (información compleja) por estado y fecha */
  mantenimientoChanges: MantenimientoResult;
  /** Esta Función retorna la información de un cliente en base a su ID */
  obtener_Cliente_ID: Cliente2Dto;
  /** Esta Función retorna la información de un personal por su id */
  obtener_Personal_Por_Id: Personal3Dto;
  /** Esta Función retorna el total de salarios de todo el personal en la base de dato */
  obtener_Salari_Total: Scalars['Float']['output'];
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
  /** Esta Función retorna la información de los carros (id, placa, cliente, propietarios fechaSoat) */
  obtener_info_placas_clientes: Array<GetPlacasClientDto>;
  /** Esta función retorna un arreglo con los nombres de los proveedores */
  obtener_nombres_proveedor: Array<Scalars['String']['output']>;
  /** Esta Función retorna la información de las notificaciones no leidas */
  obtener_notificaciones_no_leidas: Array<NotificacionDto>;
  /** Esta Función retorna la información de todos los repuestos (id, producto, marca, cantidad, cantidadReserva, precio) */
  obtener_todos_los_repuestos: Array<RepuestoType>;
  /** Esta Función obtiene un usuario por su id */
  obtener_usuario_por_id: UserOutput;
  /** Esta Función obtiene un usuario por su username */
  obtener_usuario_por_username: UserOutput;
  /** Esta función retorna los mantenimientos que cumplan con los criterios de busqueda */
  table_historial_Mantenimientos_admin: MantenimientoTableType;
};


export type QueryEgreso_Facturas_MensualArgs = {
  inputDate: Scalars['String']['input'];
};


export type QueryHistorial_Car_AdminArgs = {
  searchParam?: InputMaybe<Scalars['String']['input']>;
};


export type QueryIngreso_Facturas_MensualArgs = {
  inputDate: Scalars['String']['input'];
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
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryBuscar_PesonalArgs = {
  nombre: Scalars['String']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryBuscar_ProveedorArgs = {
  nombre: Scalars['String']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryBuscar_FacturaArgs = {
  numeroFactura: Scalars['String']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryBuscar_Info_Placas_TablaArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  plate: Scalars['String']['input'];
};


export type QueryBuscar_Placas_AutosArgs = {
  placa: Scalars['String']['input'];
};


export type QueryBuscar_RepuestosArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
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


export type QueryObtener_Salari_TotalArgs = {
  inputDate: Scalars['String']['input'];
};


export type QueryObtener_Usuarios_Por_IDclienteArgs = {
  clienteId: Scalars['String']['input'];
};


export type QueryObtener_Info_For_PlacaArgs = {
  placa: Scalars['String']['input'];
};


export type QueryObtener_Usuario_Por_IdArgs = {
  _id: Scalars['String']['input'];
};


export type QueryObtener_Usuario_Por_UsernameArgs = {
  username: Scalars['String']['input'];
};


export type QueryTable_Historial_Mantenimientos_AdminArgs = {
  fechaInicio?: InputMaybe<Scalars['DateTime']['input']>;
  fechaTermino?: InputMaybe<Scalars['DateTime']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  placa?: InputMaybe<Scalars['String']['input']>;
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



export type RepuestoSearchType = {
  __typename?: 'RepuestoSearchType';
  _id?: Maybe<Scalars['String']['output']>;
  cantidad: Scalars['Float']['output'];
  cantidadReserva?: Maybe<Scalars['Float']['output']>;
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
  repuesto1?: Maybe<RepuestoConsumido>;
  repuesto2?: Maybe<RepuestoConsumido>;
  repuesto3?: Maybe<RepuestoConsumido>;
  repuesto4?: Maybe<RepuestoConsumido>;
};

export type RepuestosResult = {
  __typename?: 'RepuestosResult';
  repuestos: Array<RepuestoSearchType>;
  totalPages: Scalars['Int']['output'];
};

export type SalarioFecha3Dto = {
  __typename?: 'SalarioFecha3Dto';
  _id?: Maybe<Scalars['String']['output']>;
  fecha: Scalars['DateTime']['output'];
  idPersonal?: Maybe<Scalars['String']['output']>;
  salario: Scalars['Float']['output'];
};

export type SalarioFechaDto = {
  __typename?: 'SalarioFechaDto';
  _id?: Maybe<Scalars['String']['output']>;
  fecha: Scalars['DateTime']['output'];
  salario: Scalars['Float']['output'];
};

export type SalarioFechaInput = {
  fecha: Scalars['DateTime']['input'];
  salario: Scalars['Float']['input'];
};

export type SearchPlacas = {
  __typename?: 'SearchPlacas';
  cars: Array<GetPlacasDto>;
  totalPages: Scalars['Float']['output'];
};

export type Subscription = {
  __typename?: 'Subscription';
  /** Esta funcion retorna los mantenimientos desde el día de hoy para la pestaña de actividades */
  Actividades: Array<HomeMantDto>;
  /** Esta funcion retorna el calendario de mantenimientos programados del mes, y ademas los mantenimientos para el dia de los ultimos 7 días */
  Calendar_Hoy_Tecnico?: Maybe<CalendarAndMantenimientosDto>;
  Personal: Array<PersonalDto>;
  /** Esta Función retorna la información de las notificaciones admin */
  notificaciones_admin: NotificacionDto;
  /** Esta Función retorna la información de las notificaciones tecnico */
  notificaciones_tecnico: NotificacionDto;
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
  repuestos: Array<RepuestoDto>;
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
  repuestos: Array<RepuestoDto>;
  tecnico: Scalars['String']['input'];
  tipo: Scalars['String']['input'];
};

export type UpdatePersonalInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  fechaIngreso?: InputMaybe<Scalars['DateTime']['input']>;
  nombre?: InputMaybe<Scalars['String']['input']>;
  numero?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateRepuestoStringDto = {
  _id: Scalars['String']['input'];
  cantidad: Scalars['String']['input'];
  precio: Scalars['String']['input'];
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

export type Buscar_Clientes_SearchQueryVariables = Exact<{
  nombreCliente: Scalars['String']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
}>;


export type Buscar_Clientes_SearchQuery = { __typename?: 'Query', buscar_Clientes: { __typename?: 'ClientesResult', totalPages: number, clientes: Array<{ __typename?: 'ClienteDto', nombreCliente?: string | null, _id?: string | null, direccion: string, documentos?: Array<string | null> | null, email: string, nombre: string, numeroContacto?: number | null, rubro: string, ruc: string, contratos?: Array<{ __typename?: 'ContratoDto', numeroContrato: string, fechaInicio: any, fechaFin: any } | null> | null }> } };

export type Crear_ClienteMutationVariables = Exact<{
  cliente: ClienteUserInput;
}>;


export type Crear_ClienteMutation = { __typename?: 'Mutation', crear_Cliente: string };

export type Obtener_Cliente_IdQueryVariables = Exact<{
  obtenerClienteIdId: Scalars['String']['input'];
}>;


export type Obtener_Cliente_IdQuery = { __typename?: 'Query', obtener_Cliente_ID: { __typename?: 'Cliente2Dto', _id?: string | null, direccion: string, documentos?: Array<string | null> | null, email: string, nombre: string, nombreCliente?: string | null, numeroContacto?: number | null, rubro: string, ruc: string, contratos?: Array<{ __typename?: 'Contrato2Dto', clienteId: string, fechaFin: any, fechaInicio: any, numeroContrato: string } | null> | null } };

export type Obtener_Usuarios_Por_IDclienteQueryVariables = Exact<{
  clienteId: Scalars['String']['input'];
}>;


export type Obtener_Usuarios_Por_IDclienteQuery = { __typename?: 'Query', obtener_Usuarios_por_IDcliente: Array<{ __typename?: 'UserOutput', _id: string, clienteAsociado?: string | null, email: string, name: string, nivelUser: string, username: string }> };

export type Actualizar_ClienteMutationVariables = Exact<{
  cliente: ClienteInput;
  actualizarClienteId: Scalars['String']['input'];
}>;


export type Actualizar_ClienteMutation = { __typename?: 'Mutation', actualizar_Cliente: string };

export type Nombres_ClientesQueryVariables = Exact<{ [key: string]: never; }>;


export type Nombres_ClientesQuery = { __typename?: 'Query', obtener_Todos_Clientes: Array<{ __typename?: 'ClienteDto', nombreCliente?: string | null }> };

export type Eliminar_ContratoMutationVariables = Exact<{
  clienteId: Scalars['String']['input'];
  numeroContrato: Scalars['String']['input'];
}>;


export type Eliminar_ContratoMutation = { __typename?: 'Mutation', eliminar_Contrato: boolean };

export type Borrar_ClienteMutationVariables = Exact<{
  borrarClienteId: Scalars['String']['input'];
}>;


export type Borrar_ClienteMutation = { __typename?: 'Mutation', borrar_Cliente: boolean };

export type Agregar_ContratoMutationVariables = Exact<{
  agregarContratoId: Scalars['String']['input'];
  contrato: ContratoIntDto;
}>;


export type Agregar_ContratoMutation = { __typename?: 'Mutation', agregar_Contrato: string };

export type Dashboard_WebQueryVariables = Exact<{ [key: string]: never; }>;


export type Dashboard_WebQuery = { __typename?: 'Query', dashboard_web: { __typename?: 'Dashboard', mantenimientosDenegados?: number | null, mantenimientosRealizados?: number | null, calendario?: Array<{ __typename?: 'CalendarGrafica', cantidad?: number | null, fecha?: any | null }> | null, gastosGenerales?: Array<{ __typename?: 'GeneralReportDto', fact?: number | null, mesYear?: string | null, otros?: number | null, personalTotal?: number | null }> | null, ingresosEgresos?: Array<{ __typename?: 'MonthlySummaryDto', ingresoFact?: number | null, egresosTotalFact?: number | null, mesYear?: string | null }> | null, ingresosMensuales?: { __typename?: 'IngresosDtoOut', igv?: number | null, detracciones?: number | null, ingresos?: number | null } | null, operatividad?: { __typename?: 'OperatividadOut', operatividadHoras?: number | null, operatividadPorcentual?: number | null } | null, repuestosMasConsumidos?: { __typename?: 'DashRepuestos', otros?: { __typename?: 'ProductoConsumidoDash', producto: string, cantidadConsumida: number } | null, prod1?: { __typename?: 'ProductoConsumidoDash', producto: string, cantidadConsumida: number } | null, prod2?: { __typename?: 'ProductoConsumidoDash', producto: string, cantidadConsumida: number } | null, prod3?: { __typename?: 'ProductoConsumidoDash', cantidadConsumida: number, producto: string } | null, prod4?: { __typename?: 'ProductoConsumidoDash', cantidadConsumida: number, producto: string } | null, prod5?: { __typename?: 'ProductoConsumidoDash', cantidadConsumida: number, producto: string } | null } | null } };

export type Estadisticas_WebQueryVariables = Exact<{
  placa: Scalars['String']['input'];
  fecha: Scalars['String']['input'];
}>;


export type Estadisticas_WebQuery = { __typename?: 'Query', estadisticas_web: { __typename?: 'EstadisticWebDTO', cantidadMatDenegados?: number | null, cantidadMatenimientos?: number | null, cliente?: string | null, placa?: string | null, puntaje?: number | null, costos?: { __typename?: 'Costos', costoCorrectivos?: number | null, costoMesPasado?: number | null, costoPreventivos?: number | null, costoTotal?: number | null } | null, kmRecorrido?: Array<{ __typename?: 'KmRecorridoPorMes', kmRecorridoTotal?: number | null, mes?: string | null }> | null, operatividad?: Array<{ __typename?: 'OperatividadPorMes', mes?: string | null, operatividad?: number | null }> | null, repuestosConsumidos?: { __typename?: 'RepuestosMasConsumidosPorMes', mes?: string | null, otros?: number | null, repuesto1?: { __typename?: 'RepuestoConsumido', costo?: number | null, producto?: string | null } | null, repuesto2?: { __typename?: 'RepuestoConsumido', costo?: number | null, producto?: string | null } | null, repuesto3?: { __typename?: 'RepuestoConsumido', costo?: number | null, producto?: string | null } | null, repuesto4?: { __typename?: 'RepuestoConsumido', costo?: number | null, producto?: string | null } | null } | null } };

export type Buscar_FacturaQueryVariables = Exact<{
  numeroFactura: Scalars['String']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
}>;


export type Buscar_FacturaQuery = { __typename?: 'Query', buscar_factura: { __typename?: 'FacturasResult', totalPages: number, facturas: Array<{ __typename?: 'FacturaDto', notificacion: boolean, monto: number, involucrado?: string | null, igv?: number | null, fecha: any, documentos?: Array<string> | null, detraccion?: number | null, numeroFactura: string, tipo: string }> } };

export type Mutation_RegistrarFacturaMutationVariables = Exact<{
  createFacturaInput: CreateFacturaDto;
}>;


export type Mutation_RegistrarFacturaMutation = { __typename?: 'Mutation', crear_factura: string };

export type Table_Historial_Mantenimientos_AdminQueryVariables = Exact<{
  fechaInicio?: InputMaybe<Scalars['DateTime']['input']>;
  fechaTermino?: InputMaybe<Scalars['DateTime']['input']>;
  placa?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
}>;


export type Table_Historial_Mantenimientos_AdminQuery = { __typename?: 'Query', table_historial_Mantenimientos_admin: { __typename?: 'MantenimientoTableType', totalPages: number, mantenimientos: Array<{ __typename?: 'Mantenimientos', _id?: string | null, cliente?: string | null, costoRepuestos?: number | null, fechaFin?: any | null, fechaInicio?: any | null, placa?: string | null, repuestoUsados?: number | null, tipo?: string | null }> } };

export type Historial_Car_AdminQueryVariables = Exact<{
  searchParam: Scalars['String']['input'];
}>;


export type Historial_Car_AdminQuery = { __typename?: 'Query', Historial_Car_Admin: { __typename?: 'HistorialCarData', cliente?: string | null, fechaSoat?: any | null, kmActual?: number | null, operatividad?: number | null, placa?: string | null, ultimaRevision?: any | null, vigenciaContrato?: any | null } };

export type Regisrar_Mantenimiento_No_ProgramadoMutationVariables = Exact<{
  updateOneMantenimientoInput: UpdateOneMantenimientoDto;
}>;


export type Regisrar_Mantenimiento_No_ProgramadoMutation = { __typename?: 'Mutation', regisrar_mantenimiento_no_programado: string };

export type Mantenimiento_Info_Por_IdQueryVariables = Exact<{
  mantenimientoInfoPorIdId: Scalars['String']['input'];
}>;


export type Mantenimiento_Info_Por_IdQuery = { __typename?: 'Query', Mantenimiento_Info_por_ID: { __typename?: 'MantenimientoInfoDto', anotaciones?: string | null, cambiosSolicitados?: string | null, cliente?: string | null, diagnostico?: string | null, diagnosticoFinal?: string | null, documentos?: Array<string> | null, estado?: string | null, fechaFin?: any | null, fecha?: any | null, fechaInicio?: any | null, fechaSoat?: any | null, kmMedido?: number | null, kmPrevio?: number | null, placa: string, tecnico?: string | null, tipo?: string | null, repuestos?: Array<{ __typename?: 'RepuestoType', cantidad: number, cantidadReserva?: number | null, id?: string | null, marca?: string | null, precio?: number | null, producto?: string | null }> | null } };

export type Buscar_Pesonal_SearchQueryVariables = Exact<{
  nombre: Scalars['String']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
}>;


export type Buscar_Pesonal_SearchQuery = { __typename?: 'Query', buscar_Pesonal: { __typename?: 'PersonalResult', totalPages: number, personal: Array<{ __typename?: 'PersonalDto', _id?: string | null, documentos?: Array<string | null> | null, email?: string | null, fechaIngreso?: any | null, nombre: string, numero?: number | null, salarioFecha?: Array<{ __typename?: 'SalarioFechaDto', fecha: any, salario: number } | null> | null }> } };

export type Crear_PersonalMutationVariables = Exact<{
  input: PersonalUserInput;
}>;


export type Crear_PersonalMutation = { __typename?: 'Mutation', crear_Personal: string };

export type Obtener_Personal_Por_IdQueryVariables = Exact<{
  obtenerPersonalPorIdId: Scalars['String']['input'];
}>;


export type Obtener_Personal_Por_IdQuery = { __typename?: 'Query', obtener_Personal_Por_Id: { __typename?: 'Personal3Dto', _id?: string | null, documentos?: Array<string | null> | null, email?: string | null, fechaIngreso?: any | null, numero?: number | null, nombre: string, username: string, salarioFecha?: Array<{ __typename?: 'SalarioFecha3Dto', _id?: string | null, fecha: any, idPersonal?: string | null, salario: number } | null> | null } };

export type Actualizar_Info_PersonalMutationVariables = Exact<{
  actualizarInfoPersonalId: Scalars['String']['input'];
  input: UpdatePersonalInput;
  salarioFecha?: InputMaybe<SalarioFechaInput>;
}>;


export type Actualizar_Info_PersonalMutation = { __typename?: 'Mutation', actualizar_Info_Personal: boolean };

export type Borrar_PersonalMutationVariables = Exact<{
  borrarPersonalId: Scalars['String']['input'];
}>;


export type Borrar_PersonalMutation = { __typename?: 'Mutation', borrar_Personal: boolean };

export type Borrar_Contrato_PersonalMutationVariables = Exact<{
  idContrato: Scalars['String']['input'];
  idPersonal: Scalars['String']['input'];
}>;


export type Borrar_Contrato_PersonalMutation = { __typename?: 'Mutation', borrar_contrato_personal: boolean };

export type Buscar_ProveedorQueryVariables = Exact<{
  nombre: Scalars['String']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
}>;


export type Buscar_ProveedorQuery = { __typename?: 'Query', buscar_Proveedor: { __typename?: 'ProveedorResult', totalPages: number, proveedor: Array<{ __typename?: 'ProveedorDto', _id?: string | null, direccion: string, documentos?: Array<string | null> | null, email?: string | null, nombre: string, nombreContacto?: string | null, numeroContacto?: number | null, rubro?: string | null, ruc: string }> } };

export type Crear_ProveedorMutationVariables = Exact<{
  input: ProveedorInput;
}>;


export type Crear_ProveedorMutation = { __typename?: 'Mutation', crear_Proveedor: string };

export type QueryProveedoresQueryVariables = Exact<{ [key: string]: never; }>;


export type QueryProveedoresQuery = { __typename?: 'Query', obtener_nombres_proveedor: Array<string> };

export type Borrar_ProveedorMutationVariables = Exact<{
  borrarProveedorId: Scalars['String']['input'];
}>;


export type Borrar_ProveedorMutation = { __typename?: 'Mutation', borrar_Proveedor: boolean };

export type Obtener_Todos_Los_RepuestosQueryVariables = Exact<{ [key: string]: never; }>;


export type Obtener_Todos_Los_RepuestosQuery = { __typename?: 'Query', obtener_todos_los_repuestos: Array<{ __typename?: 'RepuestoType', producto?: string | null, marca?: string | null }> };

export type Ingreso_Repuestos_WebMutationVariables = Exact<{
  data: IngresoRepuestosStringDto;
}>;


export type Ingreso_Repuestos_WebMutation = { __typename?: 'Mutation', Ingreso_Repuestos_Web: string };

export type Buscar_Repuestos_SearchQueryVariables = Exact<{
  producto: Scalars['String']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
}>;


export type Buscar_Repuestos_SearchQuery = { __typename?: 'Query', buscar_repuestos: { __typename?: 'RepuestosResult', totalPages: number, repuestos: Array<{ __typename?: 'RepuestoSearchType', producto?: string | null, precio?: number | null, marca?: string | null, cantidadReserva?: number | null, cantidad: number, _id?: string | null }> } };

export type Borrar_RepuestoMutationVariables = Exact<{
  borrarRepuestoId: Scalars['String']['input'];
}>;


export type Borrar_RepuestoMutation = { __typename?: 'Mutation', Borrar_Repuesto: string };

export type Obtener_Notificaciones_No_LeidasQueryVariables = Exact<{ [key: string]: never; }>;


export type Obtener_Notificaciones_No_LeidasQuery = { __typename?: 'Query', obtener_notificaciones_no_leidas: Array<{ __typename?: 'NotificacionDTO', _id: string, descripcion: string, fecha: any, identificador: string, leido: boolean, tipo: string, titulo: string }> };

export type Notificaciones_AdminSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type Notificaciones_AdminSubscription = { __typename?: 'Subscription', notificaciones_admin: { __typename?: 'NotificacionDTO', _id: string, descripcion: string, fecha: any, identificador: string, leido: boolean, tipo: string, titulo: string } };

export type Crear_Multiples_UsersMutationVariables = Exact<{
  users: Array<CreateUserDto> | CreateUserDto;
}>;


export type Crear_Multiples_UsersMutation = { __typename?: 'Mutation', crear_multiples_users: boolean };

export type Obtener_Usuario_Por_IdQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type Obtener_Usuario_Por_IdQuery = { __typename?: 'Query', obtener_usuario_por_id: { __typename?: 'UserOutput', _id: string, clienteAsociado?: string | null, email: string, name: string, nivelUser: string, username: string } };

export type Obtener_Usuario_Por_UsernameQueryVariables = Exact<{
  username: Scalars['String']['input'];
}>;


export type Obtener_Usuario_Por_UsernameQuery = { __typename?: 'Query', obtener_usuario_por_username: { __typename?: 'UserOutput', _id: string, clienteAsociado?: string | null, email: string, name: string, nivelUser: string, username: string } };

export type Actualizar_Datos_UsuarioMutationVariables = Exact<{
  oldUsername: Scalars['String']['input'];
  newName: Scalars['String']['input'];
  newEmail: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
  newUsername?: InputMaybe<Scalars['String']['input']>;
}>;


export type Actualizar_Datos_UsuarioMutation = { __typename?: 'Mutation', actualizar_datos_usuario: boolean };

export type Borrar_Usuario_Por_IdMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type Borrar_Usuario_Por_IdMutation = { __typename?: 'Mutation', borrar_usuario_por_id: string };

export type Crear_Usuario_ClienteMutationVariables = Exact<{
  input: CreateClientUserDto;
}>;


export type Crear_Usuario_ClienteMutation = { __typename?: 'Mutation', crear_usuario_cliente: string };

export type Crear_AutoMutationVariables = Exact<{
  createCarInput: CreateCarDto;
}>;


export type Crear_AutoMutation = { __typename?: 'Mutation', crear_auto: string };

export type ObtenerPlacasQueryVariables = Exact<{ [key: string]: never; }>;


export type ObtenerPlacasQuery = { __typename?: 'Query', obtener_info_placas: Array<{ __typename?: 'GetPlacasDto', placa: string }> };

export type Buscar_Info_Placas_TablaQueryVariables = Exact<{
  plate: Scalars['String']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
}>;


export type Buscar_Info_Placas_TablaQuery = { __typename?: 'Query', buscar_info_placas_tabla: { __typename?: 'SearchPlacas', totalPages: number, cars: Array<{ __typename?: 'GetPlacasDto', _id: string, cliente: string, fechaSoat: any, placa: string, propietario: string, tipoContrato: string }> } };

export type Obtener_Info_For_PlacaQueryVariables = Exact<{
  placa: Scalars['String']['input'];
}>;


export type Obtener_Info_For_PlacaQuery = { __typename?: 'Query', obtener_info_for_placa: { __typename?: 'GetForPlacasDto', _id?: string | null, fechaSoat?: any | null, kmActual?: number | null, cliente?: string | null } };

export type AdminHistoryCarsQueryVariables = Exact<{
  placa: Scalars['String']['input'];
}>;


export type AdminHistoryCarsQuery = { __typename?: 'Query', admin_history_cars: { __typename?: 'CarInfo', Puntaje: number, cliente: string, fechaSoat: any, id: string, kmActual: number, placa: string, propietario: string, vigenciaContrato: any, Mantenimientos?: Array<{ __typename?: 'MantenimientoInfo', fecha: any, id: string, repuestosUsados: number, tipo: string }> | null } };

export type QueryQueryVariables = Exact<{
  placa: Scalars['String']['input'];
}>;


export type QueryQuery = { __typename?: 'Query', buscar_placas_autos: Array<string> };

export type Obtener_PropietariosQueryVariables = Exact<{ [key: string]: never; }>;


export type Obtener_PropietariosQuery = { __typename?: 'Query', obtener_info_placas: Array<{ __typename?: 'GetPlacasDto', propietario: string }> };


export const Buscar_Clientes_SearchDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Buscar_Clientes_Search"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"nombreCliente"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"buscar_Clientes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"nombreCliente"},"value":{"kind":"Variable","name":{"kind":"Name","value":"nombreCliente"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clientes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nombreCliente"}},{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"contratos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"numeroContrato"}},{"kind":"Field","name":{"kind":"Name","value":"fechaInicio"}},{"kind":"Field","name":{"kind":"Name","value":"fechaFin"}}]}},{"kind":"Field","name":{"kind":"Name","value":"direccion"}},{"kind":"Field","name":{"kind":"Name","value":"documentos"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"nombre"}},{"kind":"Field","name":{"kind":"Name","value":"numeroContacto"}},{"kind":"Field","name":{"kind":"Name","value":"rubro"}},{"kind":"Field","name":{"kind":"Name","value":"ruc"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}}]}}]}}]} as unknown as DocumentNode<Buscar_Clientes_SearchQuery, Buscar_Clientes_SearchQueryVariables>;
export const Crear_ClienteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Crear_Cliente"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cliente"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ClienteUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"crear_Cliente"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"cliente"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cliente"}}}]}]}}]} as unknown as DocumentNode<Crear_ClienteMutation, Crear_ClienteMutationVariables>;
export const Obtener_Cliente_IdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Obtener_Cliente_ID"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"obtenerClienteIdId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"obtener_Cliente_ID"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"obtenerClienteIdId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"contratos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clienteId"}},{"kind":"Field","name":{"kind":"Name","value":"fechaFin"}},{"kind":"Field","name":{"kind":"Name","value":"fechaInicio"}},{"kind":"Field","name":{"kind":"Name","value":"numeroContrato"}}]}},{"kind":"Field","name":{"kind":"Name","value":"direccion"}},{"kind":"Field","name":{"kind":"Name","value":"documentos"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"nombre"}},{"kind":"Field","name":{"kind":"Name","value":"nombreCliente"}},{"kind":"Field","name":{"kind":"Name","value":"numeroContacto"}},{"kind":"Field","name":{"kind":"Name","value":"rubro"}},{"kind":"Field","name":{"kind":"Name","value":"ruc"}}]}}]}}]} as unknown as DocumentNode<Obtener_Cliente_IdQuery, Obtener_Cliente_IdQueryVariables>;
export const Obtener_Usuarios_Por_IDclienteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Obtener_Usuarios_por_IDcliente"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"clienteId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"obtener_Usuarios_por_IDcliente"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"clienteId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"clienteId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"clienteAsociado"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nivelUser"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]} as unknown as DocumentNode<Obtener_Usuarios_Por_IDclienteQuery, Obtener_Usuarios_Por_IDclienteQueryVariables>;
export const Actualizar_ClienteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Actualizar_Cliente"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cliente"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ClienteInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"actualizarClienteId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"actualizar_Cliente"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"cliente"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cliente"}}},{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"actualizarClienteId"}}}]}]}}]} as unknown as DocumentNode<Actualizar_ClienteMutation, Actualizar_ClienteMutationVariables>;
export const Nombres_ClientesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Nombres_Clientes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"obtener_Todos_Clientes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nombreCliente"}}]}}]}}]} as unknown as DocumentNode<Nombres_ClientesQuery, Nombres_ClientesQueryVariables>;
export const Eliminar_ContratoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Eliminar_Contrato"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"clienteId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"numeroContrato"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"eliminar_Contrato"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"clienteId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"clienteId"}}},{"kind":"Argument","name":{"kind":"Name","value":"numeroContrato"},"value":{"kind":"Variable","name":{"kind":"Name","value":"numeroContrato"}}}]}]}}]} as unknown as DocumentNode<Eliminar_ContratoMutation, Eliminar_ContratoMutationVariables>;
export const Borrar_ClienteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Borrar_Cliente"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"borrarClienteId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"borrar_Cliente"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"borrarClienteId"}}}]}]}}]} as unknown as DocumentNode<Borrar_ClienteMutation, Borrar_ClienteMutationVariables>;
export const Agregar_ContratoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Agregar_Contrato"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"agregarContratoId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"contrato"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ContratoIntDto"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"agregar_Contrato"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"agregarContratoId"}}},{"kind":"Argument","name":{"kind":"Name","value":"contrato"},"value":{"kind":"Variable","name":{"kind":"Name","value":"contrato"}}}]}]}}]} as unknown as DocumentNode<Agregar_ContratoMutation, Agregar_ContratoMutationVariables>;
export const Dashboard_WebDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Dashboard_web"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dashboard_web"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"calendario"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cantidad"}},{"kind":"Field","name":{"kind":"Name","value":"fecha"}}]}},{"kind":"Field","name":{"kind":"Name","value":"gastosGenerales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fact"}},{"kind":"Field","name":{"kind":"Name","value":"mesYear"}},{"kind":"Field","name":{"kind":"Name","value":"otros"}},{"kind":"Field","name":{"kind":"Name","value":"personalTotal"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ingresosEgresos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ingresoFact"}},{"kind":"Field","name":{"kind":"Name","value":"egresosTotalFact"}},{"kind":"Field","name":{"kind":"Name","value":"mesYear"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ingresosMensuales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"igv"}},{"kind":"Field","name":{"kind":"Name","value":"detracciones"}},{"kind":"Field","name":{"kind":"Name","value":"ingresos"}}]}},{"kind":"Field","name":{"kind":"Name","value":"mantenimientosDenegados"}},{"kind":"Field","name":{"kind":"Name","value":"mantenimientosRealizados"}},{"kind":"Field","name":{"kind":"Name","value":"operatividad"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"operatividadHoras"}},{"kind":"Field","name":{"kind":"Name","value":"operatividadPorcentual"}}]}},{"kind":"Field","name":{"kind":"Name","value":"repuestosMasConsumidos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"otros"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"producto"}},{"kind":"Field","name":{"kind":"Name","value":"cantidadConsumida"}}]}},{"kind":"Field","name":{"kind":"Name","value":"prod1"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"producto"}},{"kind":"Field","name":{"kind":"Name","value":"cantidadConsumida"}}]}},{"kind":"Field","name":{"kind":"Name","value":"prod2"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"producto"}},{"kind":"Field","name":{"kind":"Name","value":"cantidadConsumida"}}]}},{"kind":"Field","name":{"kind":"Name","value":"prod3"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cantidadConsumida"}},{"kind":"Field","name":{"kind":"Name","value":"producto"}}]}},{"kind":"Field","name":{"kind":"Name","value":"prod4"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cantidadConsumida"}},{"kind":"Field","name":{"kind":"Name","value":"producto"}}]}},{"kind":"Field","name":{"kind":"Name","value":"prod5"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cantidadConsumida"}},{"kind":"Field","name":{"kind":"Name","value":"producto"}}]}}]}}]}}]}}]} as unknown as DocumentNode<Dashboard_WebQuery, Dashboard_WebQueryVariables>;
export const Estadisticas_WebDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Estadisticas_web"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"placa"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fecha"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"estadisticas_web"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"placa"},"value":{"kind":"Variable","name":{"kind":"Name","value":"placa"}}},{"kind":"Argument","name":{"kind":"Name","value":"fecha"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fecha"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cantidadMatDenegados"}},{"kind":"Field","name":{"kind":"Name","value":"cantidadMatenimientos"}},{"kind":"Field","name":{"kind":"Name","value":"cliente"}},{"kind":"Field","name":{"kind":"Name","value":"costos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"costoCorrectivos"}},{"kind":"Field","name":{"kind":"Name","value":"costoMesPasado"}},{"kind":"Field","name":{"kind":"Name","value":"costoPreventivos"}},{"kind":"Field","name":{"kind":"Name","value":"costoTotal"}}]}},{"kind":"Field","name":{"kind":"Name","value":"kmRecorrido"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"kmRecorridoTotal"}},{"kind":"Field","name":{"kind":"Name","value":"mes"}}]}},{"kind":"Field","name":{"kind":"Name","value":"operatividad"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mes"}},{"kind":"Field","name":{"kind":"Name","value":"operatividad"}}]}},{"kind":"Field","name":{"kind":"Name","value":"placa"}},{"kind":"Field","name":{"kind":"Name","value":"puntaje"}},{"kind":"Field","name":{"kind":"Name","value":"repuestosConsumidos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mes"}},{"kind":"Field","name":{"kind":"Name","value":"otros"}},{"kind":"Field","name":{"kind":"Name","value":"repuesto1"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"costo"}},{"kind":"Field","name":{"kind":"Name","value":"producto"}}]}},{"kind":"Field","name":{"kind":"Name","value":"repuesto2"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"costo"}},{"kind":"Field","name":{"kind":"Name","value":"producto"}}]}},{"kind":"Field","name":{"kind":"Name","value":"repuesto3"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"costo"}},{"kind":"Field","name":{"kind":"Name","value":"producto"}}]}},{"kind":"Field","name":{"kind":"Name","value":"repuesto4"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"costo"}},{"kind":"Field","name":{"kind":"Name","value":"producto"}}]}}]}}]}}]}}]} as unknown as DocumentNode<Estadisticas_WebQuery, Estadisticas_WebQueryVariables>;
export const Buscar_FacturaDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Buscar_factura"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"numeroFactura"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"buscar_factura"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"numeroFactura"},"value":{"kind":"Variable","name":{"kind":"Name","value":"numeroFactura"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"facturas"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"notificacion"}},{"kind":"Field","name":{"kind":"Name","value":"monto"}},{"kind":"Field","name":{"kind":"Name","value":"involucrado"}},{"kind":"Field","name":{"kind":"Name","value":"igv"}},{"kind":"Field","name":{"kind":"Name","value":"fecha"}},{"kind":"Field","name":{"kind":"Name","value":"documentos"}},{"kind":"Field","name":{"kind":"Name","value":"detraccion"}},{"kind":"Field","name":{"kind":"Name","value":"numeroFactura"}},{"kind":"Field","name":{"kind":"Name","value":"tipo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}}]}}]}}]} as unknown as DocumentNode<Buscar_FacturaQuery, Buscar_FacturaQueryVariables>;
export const Mutation_RegistrarFacturaDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Mutation_registrarFactura"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createFacturaInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateFacturaDto"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"crear_factura"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createFacturaInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createFacturaInput"}}}]}]}}]} as unknown as DocumentNode<Mutation_RegistrarFacturaMutation, Mutation_RegistrarFacturaMutationVariables>;
export const Table_Historial_Mantenimientos_AdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Table_historial_Mantenimientos_admin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fechaInicio"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fechaTermino"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"placa"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"table_historial_Mantenimientos_admin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"fechaInicio"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fechaInicio"}}},{"kind":"Argument","name":{"kind":"Name","value":"fechaTermino"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fechaTermino"}}},{"kind":"Argument","name":{"kind":"Name","value":"placa"},"value":{"kind":"Variable","name":{"kind":"Name","value":"placa"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mantenimientos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"cliente"}},{"kind":"Field","name":{"kind":"Name","value":"costoRepuestos"}},{"kind":"Field","name":{"kind":"Name","value":"fechaFin"}},{"kind":"Field","name":{"kind":"Name","value":"fechaInicio"}},{"kind":"Field","name":{"kind":"Name","value":"placa"}},{"kind":"Field","name":{"kind":"Name","value":"repuestoUsados"}},{"kind":"Field","name":{"kind":"Name","value":"tipo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}}]}}]}}]} as unknown as DocumentNode<Table_Historial_Mantenimientos_AdminQuery, Table_Historial_Mantenimientos_AdminQueryVariables>;
export const Historial_Car_AdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Historial_Car_Admin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"searchParam"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Historial_Car_Admin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"searchParam"},"value":{"kind":"Variable","name":{"kind":"Name","value":"searchParam"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cliente"}},{"kind":"Field","name":{"kind":"Name","value":"fechaSoat"}},{"kind":"Field","name":{"kind":"Name","value":"kmActual"}},{"kind":"Field","name":{"kind":"Name","value":"operatividad"}},{"kind":"Field","name":{"kind":"Name","value":"placa"}},{"kind":"Field","name":{"kind":"Name","value":"ultimaRevision"}},{"kind":"Field","name":{"kind":"Name","value":"vigenciaContrato"}}]}}]}}]} as unknown as DocumentNode<Historial_Car_AdminQuery, Historial_Car_AdminQueryVariables>;
export const Regisrar_Mantenimiento_No_ProgramadoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Regisrar_mantenimiento_no_programado"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateOneMantenimientoInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateOneMantenimientoDto"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"regisrar_mantenimiento_no_programado"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updateOneMantenimientoInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateOneMantenimientoInput"}}}]}]}}]} as unknown as DocumentNode<Regisrar_Mantenimiento_No_ProgramadoMutation, Regisrar_Mantenimiento_No_ProgramadoMutationVariables>;
export const Mantenimiento_Info_Por_IdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Mantenimiento_Info_por_ID"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"mantenimientoInfoPorIdId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Mantenimiento_Info_por_ID"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"mantenimientoInfoPorIdId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"anotaciones"}},{"kind":"Field","name":{"kind":"Name","value":"cambiosSolicitados"}},{"kind":"Field","name":{"kind":"Name","value":"cliente"}},{"kind":"Field","name":{"kind":"Name","value":"diagnostico"}},{"kind":"Field","name":{"kind":"Name","value":"diagnosticoFinal"}},{"kind":"Field","name":{"kind":"Name","value":"documentos"}},{"kind":"Field","name":{"kind":"Name","value":"estado"}},{"kind":"Field","name":{"kind":"Name","value":"fechaFin"}},{"kind":"Field","name":{"kind":"Name","value":"fecha"}},{"kind":"Field","name":{"kind":"Name","value":"fechaInicio"}},{"kind":"Field","name":{"kind":"Name","value":"fechaSoat"}},{"kind":"Field","name":{"kind":"Name","value":"kmMedido"}},{"kind":"Field","name":{"kind":"Name","value":"kmPrevio"}},{"kind":"Field","name":{"kind":"Name","value":"placa"}},{"kind":"Field","name":{"kind":"Name","value":"repuestos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cantidad"}},{"kind":"Field","name":{"kind":"Name","value":"cantidadReserva"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"marca"}},{"kind":"Field","name":{"kind":"Name","value":"precio"}},{"kind":"Field","name":{"kind":"Name","value":"producto"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tecnico"}},{"kind":"Field","name":{"kind":"Name","value":"tipo"}}]}}]}}]} as unknown as DocumentNode<Mantenimiento_Info_Por_IdQuery, Mantenimiento_Info_Por_IdQueryVariables>;
export const Buscar_Pesonal_SearchDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Buscar_Pesonal_Search"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"nombre"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"buscar_Pesonal"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"nombre"},"value":{"kind":"Variable","name":{"kind":"Name","value":"nombre"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"personal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"documentos"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"fechaIngreso"}},{"kind":"Field","name":{"kind":"Name","value":"nombre"}},{"kind":"Field","name":{"kind":"Name","value":"numero"}},{"kind":"Field","name":{"kind":"Name","value":"salarioFecha"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fecha"}},{"kind":"Field","name":{"kind":"Name","value":"salario"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}}]}}]}}]} as unknown as DocumentNode<Buscar_Pesonal_SearchQuery, Buscar_Pesonal_SearchQueryVariables>;
export const Crear_PersonalDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Crear_Personal"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PersonalUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"crear_Personal"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<Crear_PersonalMutation, Crear_PersonalMutationVariables>;
export const Obtener_Personal_Por_IdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Obtener_Personal_Por_Id"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"obtenerPersonalPorIdId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"obtener_Personal_Por_Id"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"obtenerPersonalPorIdId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"documentos"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"fechaIngreso"}},{"kind":"Field","name":{"kind":"Name","value":"numero"}},{"kind":"Field","name":{"kind":"Name","value":"nombre"}},{"kind":"Field","name":{"kind":"Name","value":"salarioFecha"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"fecha"}},{"kind":"Field","name":{"kind":"Name","value":"idPersonal"}},{"kind":"Field","name":{"kind":"Name","value":"salario"}}]}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]} as unknown as DocumentNode<Obtener_Personal_Por_IdQuery, Obtener_Personal_Por_IdQueryVariables>;
export const Actualizar_Info_PersonalDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Actualizar_Info_Personal"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"actualizarInfoPersonalId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdatePersonalInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"salarioFecha"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SalarioFechaInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"actualizar_Info_Personal"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"actualizarInfoPersonalId"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}},{"kind":"Argument","name":{"kind":"Name","value":"salarioFecha"},"value":{"kind":"Variable","name":{"kind":"Name","value":"salarioFecha"}}}]}]}}]} as unknown as DocumentNode<Actualizar_Info_PersonalMutation, Actualizar_Info_PersonalMutationVariables>;
export const Borrar_PersonalDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Borrar_Personal"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"borrarPersonalId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"borrar_Personal"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"borrarPersonalId"}}}]}]}}]} as unknown as DocumentNode<Borrar_PersonalMutation, Borrar_PersonalMutationVariables>;
export const Borrar_Contrato_PersonalDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Borrar_contrato_personal"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"idContrato"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"idPersonal"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"borrar_contrato_personal"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id_contrato"},"value":{"kind":"Variable","name":{"kind":"Name","value":"idContrato"}}},{"kind":"Argument","name":{"kind":"Name","value":"id_personal"},"value":{"kind":"Variable","name":{"kind":"Name","value":"idPersonal"}}}]}]}}]} as unknown as DocumentNode<Borrar_Contrato_PersonalMutation, Borrar_Contrato_PersonalMutationVariables>;
export const Buscar_ProveedorDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Buscar_Proveedor"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"nombre"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"buscar_Proveedor"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"nombre"},"value":{"kind":"Variable","name":{"kind":"Name","value":"nombre"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"proveedor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"direccion"}},{"kind":"Field","name":{"kind":"Name","value":"documentos"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"nombre"}},{"kind":"Field","name":{"kind":"Name","value":"nombreContacto"}},{"kind":"Field","name":{"kind":"Name","value":"numeroContacto"}},{"kind":"Field","name":{"kind":"Name","value":"rubro"}},{"kind":"Field","name":{"kind":"Name","value":"ruc"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}}]}}]}}]} as unknown as DocumentNode<Buscar_ProveedorQuery, Buscar_ProveedorQueryVariables>;
export const Crear_ProveedorDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Crear_Proveedor"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ProveedorInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"crear_Proveedor"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<Crear_ProveedorMutation, Crear_ProveedorMutationVariables>;
export const QueryProveedoresDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"QueryProveedores"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"obtener_nombres_proveedor"}}]}}]} as unknown as DocumentNode<QueryProveedoresQuery, QueryProveedoresQueryVariables>;
export const Borrar_ProveedorDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Borrar_Proveedor"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"borrarProveedorId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"borrar_Proveedor"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"borrarProveedorId"}}}]}]}}]} as unknown as DocumentNode<Borrar_ProveedorMutation, Borrar_ProveedorMutationVariables>;
export const Obtener_Todos_Los_RepuestosDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Obtener_todos_los_repuestos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"obtener_todos_los_repuestos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"producto"}},{"kind":"Field","name":{"kind":"Name","value":"marca"}}]}}]}}]} as unknown as DocumentNode<Obtener_Todos_Los_RepuestosQuery, Obtener_Todos_Los_RepuestosQueryVariables>;
export const Ingreso_Repuestos_WebDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Ingreso_Repuestos_Web"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"IngresoRepuestosStringDto"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Ingreso_Repuestos_Web"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}]}]}}]} as unknown as DocumentNode<Ingreso_Repuestos_WebMutation, Ingreso_Repuestos_WebMutationVariables>;
export const Buscar_Repuestos_SearchDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Buscar_repuestos_Search"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"producto"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"buscar_repuestos"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"producto"},"value":{"kind":"Variable","name":{"kind":"Name","value":"producto"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"repuestos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"producto"}},{"kind":"Field","name":{"kind":"Name","value":"precio"}},{"kind":"Field","name":{"kind":"Name","value":"marca"}},{"kind":"Field","name":{"kind":"Name","value":"cantidadReserva"}},{"kind":"Field","name":{"kind":"Name","value":"cantidad"}},{"kind":"Field","name":{"kind":"Name","value":"_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}}]}}]}}]} as unknown as DocumentNode<Buscar_Repuestos_SearchQuery, Buscar_Repuestos_SearchQueryVariables>;
export const Borrar_RepuestoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Borrar_Repuesto"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"borrarRepuestoId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Borrar_Repuesto"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"borrarRepuestoId"}}}]}]}}]} as unknown as DocumentNode<Borrar_RepuestoMutation, Borrar_RepuestoMutationVariables>;
export const Obtener_Notificaciones_No_LeidasDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Obtener_notificaciones_no_leidas"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"obtener_notificaciones_no_leidas"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"descripcion"}},{"kind":"Field","name":{"kind":"Name","value":"fecha"}},{"kind":"Field","name":{"kind":"Name","value":"identificador"}},{"kind":"Field","name":{"kind":"Name","value":"leido"}},{"kind":"Field","name":{"kind":"Name","value":"tipo"}},{"kind":"Field","name":{"kind":"Name","value":"titulo"}}]}}]}}]} as unknown as DocumentNode<Obtener_Notificaciones_No_LeidasQuery, Obtener_Notificaciones_No_LeidasQueryVariables>;
export const Notificaciones_AdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"Notificaciones_admin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"notificaciones_admin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"descripcion"}},{"kind":"Field","name":{"kind":"Name","value":"fecha"}},{"kind":"Field","name":{"kind":"Name","value":"identificador"}},{"kind":"Field","name":{"kind":"Name","value":"leido"}},{"kind":"Field","name":{"kind":"Name","value":"tipo"}},{"kind":"Field","name":{"kind":"Name","value":"titulo"}}]}}]}}]} as unknown as DocumentNode<Notificaciones_AdminSubscription, Notificaciones_AdminSubscriptionVariables>;
export const Crear_Multiples_UsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Crear_multiples_users"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"users"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateUserDto"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"crear_multiples_users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"users"},"value":{"kind":"Variable","name":{"kind":"Name","value":"users"}}}]}]}}]} as unknown as DocumentNode<Crear_Multiples_UsersMutation, Crear_Multiples_UsersMutationVariables>;
export const Obtener_Usuario_Por_IdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Obtener_usuario_por_id"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"obtener_usuario_por_id"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"clienteAsociado"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nivelUser"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]} as unknown as DocumentNode<Obtener_Usuario_Por_IdQuery, Obtener_Usuario_Por_IdQueryVariables>;
export const Obtener_Usuario_Por_UsernameDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Obtener_usuario_por_username"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"obtener_usuario_por_username"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"clienteAsociado"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nivelUser"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]} as unknown as DocumentNode<Obtener_Usuario_Por_UsernameQuery, Obtener_Usuario_Por_UsernameQueryVariables>;
export const Actualizar_Datos_UsuarioDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Actualizar_datos_usuario"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"oldUsername"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"newName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"newEmail"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"newPassword"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"newUsername"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"actualizar_datos_usuario"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"oldUsername"},"value":{"kind":"Variable","name":{"kind":"Name","value":"oldUsername"}}},{"kind":"Argument","name":{"kind":"Name","value":"newName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"newName"}}},{"kind":"Argument","name":{"kind":"Name","value":"newEmail"},"value":{"kind":"Variable","name":{"kind":"Name","value":"newEmail"}}},{"kind":"Argument","name":{"kind":"Name","value":"newPassword"},"value":{"kind":"Variable","name":{"kind":"Name","value":"newPassword"}}},{"kind":"Argument","name":{"kind":"Name","value":"newUsername"},"value":{"kind":"Variable","name":{"kind":"Name","value":"newUsername"}}}]}]}}]} as unknown as DocumentNode<Actualizar_Datos_UsuarioMutation, Actualizar_Datos_UsuarioMutationVariables>;
export const Borrar_Usuario_Por_IdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Borrar_usuario_por_id"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"borrar_usuario_por_id"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<Borrar_Usuario_Por_IdMutation, Borrar_Usuario_Por_IdMutationVariables>;
export const Crear_Usuario_ClienteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Crear_usuario_cliente"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateClientUserDto"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"crear_usuario_cliente"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<Crear_Usuario_ClienteMutation, Crear_Usuario_ClienteMutationVariables>;
export const Crear_AutoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Crear_auto"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createCarInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateCarDto"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"crear_auto"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createCarInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createCarInput"}}}]}]}}]} as unknown as DocumentNode<Crear_AutoMutation, Crear_AutoMutationVariables>;
export const ObtenerPlacasDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"obtenerPlacas"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"obtener_info_placas"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"placa"}}]}}]}}]} as unknown as DocumentNode<ObtenerPlacasQuery, ObtenerPlacasQueryVariables>;
export const Buscar_Info_Placas_TablaDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Buscar_info_placas_tabla"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"plate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"buscar_info_placas_tabla"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"plate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"plate"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cars"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"cliente"}},{"kind":"Field","name":{"kind":"Name","value":"fechaSoat"}},{"kind":"Field","name":{"kind":"Name","value":"placa"}},{"kind":"Field","name":{"kind":"Name","value":"propietario"}},{"kind":"Field","name":{"kind":"Name","value":"tipoContrato"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}}]}}]}}]} as unknown as DocumentNode<Buscar_Info_Placas_TablaQuery, Buscar_Info_Placas_TablaQueryVariables>;
export const Obtener_Info_For_PlacaDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Obtener_info_for_placa"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"placa"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"obtener_info_for_placa"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"placa"},"value":{"kind":"Variable","name":{"kind":"Name","value":"placa"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"fechaSoat"}},{"kind":"Field","name":{"kind":"Name","value":"kmActual"}},{"kind":"Field","name":{"kind":"Name","value":"cliente"}}]}}]}}]} as unknown as DocumentNode<Obtener_Info_For_PlacaQuery, Obtener_Info_For_PlacaQueryVariables>;
export const AdminHistoryCarsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"adminHistoryCars"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"placa"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"admin_history_cars"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"placa"},"value":{"kind":"Variable","name":{"kind":"Name","value":"placa"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Mantenimientos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fecha"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"repuestosUsados"}},{"kind":"Field","name":{"kind":"Name","value":"tipo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Puntaje"}},{"kind":"Field","name":{"kind":"Name","value":"cliente"}},{"kind":"Field","name":{"kind":"Name","value":"fechaSoat"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"kmActual"}},{"kind":"Field","name":{"kind":"Name","value":"placa"}},{"kind":"Field","name":{"kind":"Name","value":"propietario"}},{"kind":"Field","name":{"kind":"Name","value":"vigenciaContrato"}}]}}]}}]} as unknown as DocumentNode<AdminHistoryCarsQuery, AdminHistoryCarsQueryVariables>;
export const QueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Query"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"placa"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"buscar_placas_autos"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"placa"},"value":{"kind":"Variable","name":{"kind":"Name","value":"placa"}}}]}]}}]} as unknown as DocumentNode<QueryQuery, QueryQueryVariables>;
export const Obtener_PropietariosDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Obtener_Propietarios"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"obtener_info_placas"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"propietario"}}]}}]}}]} as unknown as DocumentNode<Obtener_PropietariosQuery, Obtener_PropietariosQueryVariables>;
