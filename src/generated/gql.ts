/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query Buscar_Clientes_Search($nombreCliente: String!, $page: Int) {\n    buscar_Clientes(nombreCliente: $nombreCliente, page: $page) {\n      clientes {\n        nombreCliente\n        _id\n        contratos {\n          numeroContrato\n          fechaInicio\n          fechaFin\n        }\n        direccion\n        documentos\n        email\n        nombre\n        numeroContacto\n        rubro\n        ruc\n      }\n      totalPages\n    }\n  }\n": types.Buscar_Clientes_SearchDocument,
    "\n  mutation Crear_Cliente($cliente: ClienteUserInput!) {\n    crear_Cliente(cliente: $cliente)\n  }\n": types.Crear_ClienteDocument,
    "\n  query Obtener_Cliente_ID($obtenerClienteIdId: String!) {\n    obtener_Cliente_ID(id: $obtenerClienteIdId) {\n      _id\n      contratos {\n        clienteId\n        fechaFin\n        fechaInicio\n        numeroContrato\n      }\n      direccion\n      documentos\n      email\n      nombre\n      nombreCliente\n      numeroContacto\n      rubro\n      ruc\n    }\n  }\n": types.Obtener_Cliente_IdDocument,
    "\n  query Obtener_Usuarios_por_IDcliente($clienteId: String!) {\n    obtener_Usuarios_por_IDcliente(clienteId: $clienteId) {\n      _id\n      clienteAsociado\n      email\n      name\n      nivelUser\n      username\n    }\n  }\n": types.Obtener_Usuarios_Por_IDclienteDocument,
    "\n  mutation Actualizar_Cliente(\n    $cliente: ClienteInput!\n    $actualizarClienteId: String!\n  ) {\n    actualizar_Cliente(cliente: $cliente, id: $actualizarClienteId)\n  }\n": types.Actualizar_ClienteDocument,
    "\n  query Nombres_Clientes {\n    obtener_Todos_Clientes {\n      nombreCliente\n    }\n  }\n": types.Nombres_ClientesDocument,
    "\n  mutation Eliminar_Contrato($clienteId: String!, $numeroContrato: String!) {\n    eliminar_Contrato(clienteId: $clienteId, numeroContrato: $numeroContrato)\n  }\n": types.Eliminar_ContratoDocument,
    "\n  mutation Borrar_Cliente($borrarClienteId: String!) {\n    borrar_Cliente(id: $borrarClienteId)\n  }\n": types.Borrar_ClienteDocument,
    "\n  mutation Agregar_Contrato(\n    $agregarContratoId: String!\n    $contrato: ContratoIntDto!\n  ) {\n    agregar_Contrato(id: $agregarContratoId, contrato: $contrato)\n  }\n": types.Agregar_ContratoDocument,
    "\n  query Dashboard_web {\n    dashboard_web {\n      calendario {\n        cantidad\n        fecha\n      }\n      gastosGenerales {\n        fact\n        mesYear\n        otros\n        personalTotal\n      }\n      ingresosEgresos {\n        ingresoFact\n        egresosTotalFact\n        mesYear\n      }\n      ingresosMensuales {\n        igv\n        detracciones\n        ingresos\n      }\n      mantenimientosDenegados\n      mantenimientosRealizados\n      operatividad {\n        operatividadHoras\n        operatividadPorcentual\n      }\n      repuestosMasConsumidos {\n        otros {\n          producto\n          cantidadConsumida\n        }\n        prod1 {\n          producto\n          cantidadConsumida\n        }\n        prod2 {\n          producto\n          cantidadConsumida\n        }\n        prod3 {\n          cantidadConsumida\n          producto\n        }\n        prod4 {\n          cantidadConsumida\n          producto\n        }\n        prod5 {\n          cantidadConsumida\n          producto\n        }\n      }\n    }\n  }\n": types.Dashboard_WebDocument,
    "\nquery Estadisticas_web($placa: String!, $fecha: String!) {\n  estadisticas_web(placa: $placa, fecha: $fecha) {\n    cantidadMatDenegados\n    cantidadMatenimientos\n    cliente\n    costos {\n      costoCorrectivos\n      costoMesPasado\n      costoPreventivos\n      costoTotal\n    }\n    kmRecorrido {\n      kmRecorridoTotal\n      mes\n    }\n    operatividad {\n      mes\n      operatividad\n    }\n    placa\n    puntaje\n    repuestosConsumidos {\n      mes\n      otros\n      repuesto1 {\n        costo\n        producto\n      }\n      repuesto2 {\n        costo\n        producto\n      }\n      repuesto3 {\n        costo\n        producto\n      }\n      repuesto4 {\n        costo\n        producto\n      }\n    }\n  }\n}\n": types.Estadisticas_WebDocument,
    "\n  query Buscar_factura($numeroFactura: String!, $page: Int) {\n    buscar_factura(numeroFactura: $numeroFactura, page: $page) {\n      facturas {\n        notificacion\n        monto\n        involucrado\n        igv\n        fecha\n        documentos\n        detraccion\n        numeroFactura\n        tipo\n      }\n      totalPages\n    }\n  }\n": types.Buscar_FacturaDocument,
    "\n  mutation Mutation_registrarFactura($createFacturaInput: CreateFacturaDto!) {\n    crear_factura(createFacturaInput: $createFacturaInput)\n  }\n": types.Mutation_RegistrarFacturaDocument,
    "\n  query Table_historial_Mantenimientos_admin(\n    $fechaInicio: DateTime\n    $fechaTermino: DateTime\n    $placa: String\n    $page: Int\n  ) {\n    table_historial_Mantenimientos_admin(\n      fechaInicio: $fechaInicio\n      fechaTermino: $fechaTermino\n      placa: $placa\n      page: $page\n    ) {\n      mantenimientos {\n        _id\n        cliente\n        costoRepuestos\n        fechaFin\n        fechaInicio\n        placa\n        repuestoUsados\n        tipo\n      }\n      totalPages\n    }\n  }\n": types.Table_Historial_Mantenimientos_AdminDocument,
    "\n  query Historial_Car_Admin($searchParam: String!) {\n    Historial_Car_Admin(searchParam: $searchParam) {\n      cliente\n      fechaSoat\n      kmActual\n      operatividad\n      placa\n      ultimaRevision\n      vigenciaContrato\n    }\n  }\n": types.Historial_Car_AdminDocument,
    "\n  mutation Regisrar_mantenimiento_no_programado(\n    $updateOneMantenimientoInput: UpdateOneMantenimientoDto!\n  ) {\n    regisrar_mantenimiento_no_programado(\n      updateOneMantenimientoInput: $updateOneMantenimientoInput\n    )\n  }\n": types.Regisrar_Mantenimiento_No_ProgramadoDocument,
    "\n  query Mantenimiento_Info_por_ID($mantenimientoInfoPorIdId: String!) {\n    Mantenimiento_Info_por_ID(id: $mantenimientoInfoPorIdId) {\n      anotaciones\n      cambiosSolicitados\n      cliente\n      diagnostico\n      diagnosticoFinal\n      documentos\n      estado\n      fechaFin\n      fecha\n      fechaInicio\n      fechaSoat\n      kmMedido\n      kmPrevio\n      placa\n      repuestos {\n        cantidad\n        cantidadReserva\n        id\n        marca\n        precio\n        producto\n      }\n      tecnico\n      tipo\n    }\n  }\n": types.Mantenimiento_Info_Por_IdDocument,
    "\n  query Buscar_Pesonal_Search($nombre: String!, $page: Int) {\n    buscar_Pesonal(nombre: $nombre, page: $page) {\n      personal {\n        _id\n        documentos\n        email\n        fechaIngreso\n        nombre\n        numero\n        salarioFecha {\n          fecha\n          salario\n        }\n      }\n      totalPages\n    }\n  }\n": types.Buscar_Pesonal_SearchDocument,
    "\n  mutation Crear_Personal($input: PersonalUserInput!) {\n    crear_Personal(input: $input)\n  }\n": types.Crear_PersonalDocument,
    "\n  query Obtener_Personal_Por_Id($obtenerPersonalPorIdId: String!) {\n    obtener_Personal_Por_Id(id: $obtenerPersonalPorIdId) {\n      _id\n      documentos\n      email\n      fechaIngreso\n      numero\n      nombre\n      salarioFecha {\n        _id\n        fecha\n        idPersonal\n        salario\n      }\n      username\n    }\n  }\n": types.Obtener_Personal_Por_IdDocument,
    "\n  mutation Actualizar_Info_Personal(\n    $actualizarInfoPersonalId: String!\n    $input: UpdatePersonalInput!\n    $salarioFecha: SalarioFechaInput\n  ) {\n    actualizar_Info_Personal(\n      id: $actualizarInfoPersonalId\n      input: $input\n      salarioFecha: $salarioFecha\n    )\n  }\n": types.Actualizar_Info_PersonalDocument,
    "\n  mutation Borrar_Personal($borrarPersonalId: String!) {\n    borrar_Personal(id: $borrarPersonalId)\n  }\n": types.Borrar_PersonalDocument,
    "\n  mutation Borrar_contrato_personal(\n    $idContrato: String!\n    $idPersonal: String!\n  ) {\n    borrar_contrato_personal(id_contrato: $idContrato, id_personal: $idPersonal)\n  }\n": types.Borrar_Contrato_PersonalDocument,
    "\n  query Buscar_Proveedor($nombre: String!, $page: Int) {\n    buscar_Proveedor(nombre: $nombre, page: $page) {\n      proveedor {\n        _id\n        direccion\n        documentos\n        email\n        nombre\n        nombreContacto\n        numeroContacto\n        rubro\n        ruc\n      }\n      totalPages\n    }\n  }\n": types.Buscar_ProveedorDocument,
    "\n  mutation Crear_Proveedor($input: ProveedorInput!) {\n    crear_Proveedor(input: $input)\n  }\n": types.Crear_ProveedorDocument,
    "\n  query QueryProveedores {\n    obtener_nombres_proveedor\n  }\n": types.QueryProveedoresDocument,
    "\n  mutation Borrar_Proveedor($borrarProveedorId: String!) {\n    borrar_Proveedor(id: $borrarProveedorId)\n  }\n": types.Borrar_ProveedorDocument,
    "\n  query Obtener_todos_los_repuestos {\n    obtener_todos_los_repuestos {\n      producto\n      marca\n    }\n  }\n": types.Obtener_Todos_Los_RepuestosDocument,
    " \n  mutation Ingreso_Repuestos_Web($data: IngresoRepuestosStringDto!) {\n    Ingreso_Repuestos_Web(data: $data)\n  }\n": types.Ingreso_Repuestos_WebDocument,
    "\n  query Buscar_repuestos_Search($producto: String!, $page: Int) {\n    buscar_repuestos(producto: $producto, page: $page) {\n      repuestos {\n        producto\n        precio\n        marca\n        cantidadReserva\n        cantidad\n        _id\n      }\n      totalPages\n    }\n  }\n": types.Buscar_Repuestos_SearchDocument,
    "\n  mutation Borrar_Repuesto($borrarRepuestoId: String!) {\n    Borrar_Repuesto(id: $borrarRepuestoId)\n  }\n": types.Borrar_RepuestoDocument,
    "\n  query Obtener_notificaciones_no_leidas {\n    obtener_notificaciones_no_leidas {\n      _id\n      descripcion\n      fecha\n      identificador\n      leido\n      tipo\n      titulo\n    }\n  }\n": types.Obtener_Notificaciones_No_LeidasDocument,
    "\n  subscription Notificaciones_admin {\n    notificaciones_admin {\n      _id\n      descripcion\n      fecha\n      identificador\n      leido\n      tipo\n      titulo\n    }\n  }\n": types.Notificaciones_AdminDocument,
    "\n  mutation Crear_multiples_users($users: [CreateUserDto!]!) {\n    crear_multiples_users(users: $users)\n  }\n": types.Crear_Multiples_UsersDocument,
    "\n  query Obtener_usuario_por_id($id: String!) {\n    obtener_usuario_por_id(_id: $id) {\n      _id\n      clienteAsociado\n      email\n      name\n      nivelUser\n      username\n    }\n  }\n": types.Obtener_Usuario_Por_IdDocument,
    "\n  query Obtener_usuario_por_username($username: String!) {\n    obtener_usuario_por_username(username: $username) {\n      _id\n      clienteAsociado\n      email\n      name\n      nivelUser\n      username\n    }\n  }\n": types.Obtener_Usuario_Por_UsernameDocument,
    "\n  mutation Actualizar_datos_usuario(\n    $oldUsername: String!\n    $newName: String!\n    $newEmail: String!\n    $newPassword: String!\n    $newUsername: String\n  ) {\n    actualizar_datos_usuario(\n      oldUsername: $oldUsername\n      newName: $newName\n      newEmail: $newEmail\n      newPassword: $newPassword\n      newUsername: $newUsername\n    )\n  }\n": types.Actualizar_Datos_UsuarioDocument,
    "\n  mutation Borrar_usuario_por_id($id: String!) {\n    borrar_usuario_por_id(_id: $id)\n  }\n": types.Borrar_Usuario_Por_IdDocument,
    "\n  mutation Crear_usuario_cliente($input: CreateClientUserDto!) {\n    crear_usuario_cliente(input: $input)\n  }\n": types.Crear_Usuario_ClienteDocument,
    "\n  mutation Crear_auto($createCarInput: CreateCarDto!) {\n    crear_auto(createCarInput: $createCarInput)\n  }\n": types.Crear_AutoDocument,
    "\n  query obtenerPlacas {\n    obtener_info_placas {\n      placa\n    }\n  }\n": types.ObtenerPlacasDocument,
    "\n  query Buscar_info_placas_tabla($plate: String!, $page: Int) {\n    buscar_info_placas_tabla(plate: $plate, page: $page) {\n      cars {\n        _id\n        cliente\n        fechaSoat\n        placa\n        propietario\n        tipoContrato\n      }\n      totalPages\n    }\n  }\n": types.Buscar_Info_Placas_TablaDocument,
    "\n  query Obtener_info_for_placa($placa: String!) {\n    obtener_info_for_placa(placa: $placa) {\n      _id\n      fechaSoat\n      kmActual\n      cliente\n    }\n  }\n": types.Obtener_Info_For_PlacaDocument,
    "\n  query adminHistoryCars($placa: String!) {\n    admin_history_cars(placa: $placa) {\n      Mantenimientos {\n        fecha\n        id\n        repuestosUsados\n        tipo\n      }\n      Puntaje\n      cliente\n      fechaSoat\n      id\n      kmActual\n      placa\n      propietario\n      vigenciaContrato\n    }\n  }\n": types.AdminHistoryCarsDocument,
    "\n  query Query($placa: String!) {\n    buscar_placas_autos(placa: $placa)\n  }\n": types.QueryDocument,
    "\n  query Obtener_Propietarios {\n    obtener_info_placas {\n      propietario\n    }\n  }\n": types.Obtener_PropietariosDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Buscar_Clientes_Search($nombreCliente: String!, $page: Int) {\n    buscar_Clientes(nombreCliente: $nombreCliente, page: $page) {\n      clientes {\n        nombreCliente\n        _id\n        contratos {\n          numeroContrato\n          fechaInicio\n          fechaFin\n        }\n        direccion\n        documentos\n        email\n        nombre\n        numeroContacto\n        rubro\n        ruc\n      }\n      totalPages\n    }\n  }\n"): (typeof documents)["\n  query Buscar_Clientes_Search($nombreCliente: String!, $page: Int) {\n    buscar_Clientes(nombreCliente: $nombreCliente, page: $page) {\n      clientes {\n        nombreCliente\n        _id\n        contratos {\n          numeroContrato\n          fechaInicio\n          fechaFin\n        }\n        direccion\n        documentos\n        email\n        nombre\n        numeroContacto\n        rubro\n        ruc\n      }\n      totalPages\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation Crear_Cliente($cliente: ClienteUserInput!) {\n    crear_Cliente(cliente: $cliente)\n  }\n"): (typeof documents)["\n  mutation Crear_Cliente($cliente: ClienteUserInput!) {\n    crear_Cliente(cliente: $cliente)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Obtener_Cliente_ID($obtenerClienteIdId: String!) {\n    obtener_Cliente_ID(id: $obtenerClienteIdId) {\n      _id\n      contratos {\n        clienteId\n        fechaFin\n        fechaInicio\n        numeroContrato\n      }\n      direccion\n      documentos\n      email\n      nombre\n      nombreCliente\n      numeroContacto\n      rubro\n      ruc\n    }\n  }\n"): (typeof documents)["\n  query Obtener_Cliente_ID($obtenerClienteIdId: String!) {\n    obtener_Cliente_ID(id: $obtenerClienteIdId) {\n      _id\n      contratos {\n        clienteId\n        fechaFin\n        fechaInicio\n        numeroContrato\n      }\n      direccion\n      documentos\n      email\n      nombre\n      nombreCliente\n      numeroContacto\n      rubro\n      ruc\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Obtener_Usuarios_por_IDcliente($clienteId: String!) {\n    obtener_Usuarios_por_IDcliente(clienteId: $clienteId) {\n      _id\n      clienteAsociado\n      email\n      name\n      nivelUser\n      username\n    }\n  }\n"): (typeof documents)["\n  query Obtener_Usuarios_por_IDcliente($clienteId: String!) {\n    obtener_Usuarios_por_IDcliente(clienteId: $clienteId) {\n      _id\n      clienteAsociado\n      email\n      name\n      nivelUser\n      username\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation Actualizar_Cliente(\n    $cliente: ClienteInput!\n    $actualizarClienteId: String!\n  ) {\n    actualizar_Cliente(cliente: $cliente, id: $actualizarClienteId)\n  }\n"): (typeof documents)["\n  mutation Actualizar_Cliente(\n    $cliente: ClienteInput!\n    $actualizarClienteId: String!\n  ) {\n    actualizar_Cliente(cliente: $cliente, id: $actualizarClienteId)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Nombres_Clientes {\n    obtener_Todos_Clientes {\n      nombreCliente\n    }\n  }\n"): (typeof documents)["\n  query Nombres_Clientes {\n    obtener_Todos_Clientes {\n      nombreCliente\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation Eliminar_Contrato($clienteId: String!, $numeroContrato: String!) {\n    eliminar_Contrato(clienteId: $clienteId, numeroContrato: $numeroContrato)\n  }\n"): (typeof documents)["\n  mutation Eliminar_Contrato($clienteId: String!, $numeroContrato: String!) {\n    eliminar_Contrato(clienteId: $clienteId, numeroContrato: $numeroContrato)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation Borrar_Cliente($borrarClienteId: String!) {\n    borrar_Cliente(id: $borrarClienteId)\n  }\n"): (typeof documents)["\n  mutation Borrar_Cliente($borrarClienteId: String!) {\n    borrar_Cliente(id: $borrarClienteId)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation Agregar_Contrato(\n    $agregarContratoId: String!\n    $contrato: ContratoIntDto!\n  ) {\n    agregar_Contrato(id: $agregarContratoId, contrato: $contrato)\n  }\n"): (typeof documents)["\n  mutation Agregar_Contrato(\n    $agregarContratoId: String!\n    $contrato: ContratoIntDto!\n  ) {\n    agregar_Contrato(id: $agregarContratoId, contrato: $contrato)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Dashboard_web {\n    dashboard_web {\n      calendario {\n        cantidad\n        fecha\n      }\n      gastosGenerales {\n        fact\n        mesYear\n        otros\n        personalTotal\n      }\n      ingresosEgresos {\n        ingresoFact\n        egresosTotalFact\n        mesYear\n      }\n      ingresosMensuales {\n        igv\n        detracciones\n        ingresos\n      }\n      mantenimientosDenegados\n      mantenimientosRealizados\n      operatividad {\n        operatividadHoras\n        operatividadPorcentual\n      }\n      repuestosMasConsumidos {\n        otros {\n          producto\n          cantidadConsumida\n        }\n        prod1 {\n          producto\n          cantidadConsumida\n        }\n        prod2 {\n          producto\n          cantidadConsumida\n        }\n        prod3 {\n          cantidadConsumida\n          producto\n        }\n        prod4 {\n          cantidadConsumida\n          producto\n        }\n        prod5 {\n          cantidadConsumida\n          producto\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query Dashboard_web {\n    dashboard_web {\n      calendario {\n        cantidad\n        fecha\n      }\n      gastosGenerales {\n        fact\n        mesYear\n        otros\n        personalTotal\n      }\n      ingresosEgresos {\n        ingresoFact\n        egresosTotalFact\n        mesYear\n      }\n      ingresosMensuales {\n        igv\n        detracciones\n        ingresos\n      }\n      mantenimientosDenegados\n      mantenimientosRealizados\n      operatividad {\n        operatividadHoras\n        operatividadPorcentual\n      }\n      repuestosMasConsumidos {\n        otros {\n          producto\n          cantidadConsumida\n        }\n        prod1 {\n          producto\n          cantidadConsumida\n        }\n        prod2 {\n          producto\n          cantidadConsumida\n        }\n        prod3 {\n          cantidadConsumida\n          producto\n        }\n        prod4 {\n          cantidadConsumida\n          producto\n        }\n        prod5 {\n          cantidadConsumida\n          producto\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery Estadisticas_web($placa: String!, $fecha: String!) {\n  estadisticas_web(placa: $placa, fecha: $fecha) {\n    cantidadMatDenegados\n    cantidadMatenimientos\n    cliente\n    costos {\n      costoCorrectivos\n      costoMesPasado\n      costoPreventivos\n      costoTotal\n    }\n    kmRecorrido {\n      kmRecorridoTotal\n      mes\n    }\n    operatividad {\n      mes\n      operatividad\n    }\n    placa\n    puntaje\n    repuestosConsumidos {\n      mes\n      otros\n      repuesto1 {\n        costo\n        producto\n      }\n      repuesto2 {\n        costo\n        producto\n      }\n      repuesto3 {\n        costo\n        producto\n      }\n      repuesto4 {\n        costo\n        producto\n      }\n    }\n  }\n}\n"): (typeof documents)["\nquery Estadisticas_web($placa: String!, $fecha: String!) {\n  estadisticas_web(placa: $placa, fecha: $fecha) {\n    cantidadMatDenegados\n    cantidadMatenimientos\n    cliente\n    costos {\n      costoCorrectivos\n      costoMesPasado\n      costoPreventivos\n      costoTotal\n    }\n    kmRecorrido {\n      kmRecorridoTotal\n      mes\n    }\n    operatividad {\n      mes\n      operatividad\n    }\n    placa\n    puntaje\n    repuestosConsumidos {\n      mes\n      otros\n      repuesto1 {\n        costo\n        producto\n      }\n      repuesto2 {\n        costo\n        producto\n      }\n      repuesto3 {\n        costo\n        producto\n      }\n      repuesto4 {\n        costo\n        producto\n      }\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Buscar_factura($numeroFactura: String!, $page: Int) {\n    buscar_factura(numeroFactura: $numeroFactura, page: $page) {\n      facturas {\n        notificacion\n        monto\n        involucrado\n        igv\n        fecha\n        documentos\n        detraccion\n        numeroFactura\n        tipo\n      }\n      totalPages\n    }\n  }\n"): (typeof documents)["\n  query Buscar_factura($numeroFactura: String!, $page: Int) {\n    buscar_factura(numeroFactura: $numeroFactura, page: $page) {\n      facturas {\n        notificacion\n        monto\n        involucrado\n        igv\n        fecha\n        documentos\n        detraccion\n        numeroFactura\n        tipo\n      }\n      totalPages\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation Mutation_registrarFactura($createFacturaInput: CreateFacturaDto!) {\n    crear_factura(createFacturaInput: $createFacturaInput)\n  }\n"): (typeof documents)["\n  mutation Mutation_registrarFactura($createFacturaInput: CreateFacturaDto!) {\n    crear_factura(createFacturaInput: $createFacturaInput)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Table_historial_Mantenimientos_admin(\n    $fechaInicio: DateTime\n    $fechaTermino: DateTime\n    $placa: String\n    $page: Int\n  ) {\n    table_historial_Mantenimientos_admin(\n      fechaInicio: $fechaInicio\n      fechaTermino: $fechaTermino\n      placa: $placa\n      page: $page\n    ) {\n      mantenimientos {\n        _id\n        cliente\n        costoRepuestos\n        fechaFin\n        fechaInicio\n        placa\n        repuestoUsados\n        tipo\n      }\n      totalPages\n    }\n  }\n"): (typeof documents)["\n  query Table_historial_Mantenimientos_admin(\n    $fechaInicio: DateTime\n    $fechaTermino: DateTime\n    $placa: String\n    $page: Int\n  ) {\n    table_historial_Mantenimientos_admin(\n      fechaInicio: $fechaInicio\n      fechaTermino: $fechaTermino\n      placa: $placa\n      page: $page\n    ) {\n      mantenimientos {\n        _id\n        cliente\n        costoRepuestos\n        fechaFin\n        fechaInicio\n        placa\n        repuestoUsados\n        tipo\n      }\n      totalPages\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Historial_Car_Admin($searchParam: String!) {\n    Historial_Car_Admin(searchParam: $searchParam) {\n      cliente\n      fechaSoat\n      kmActual\n      operatividad\n      placa\n      ultimaRevision\n      vigenciaContrato\n    }\n  }\n"): (typeof documents)["\n  query Historial_Car_Admin($searchParam: String!) {\n    Historial_Car_Admin(searchParam: $searchParam) {\n      cliente\n      fechaSoat\n      kmActual\n      operatividad\n      placa\n      ultimaRevision\n      vigenciaContrato\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation Regisrar_mantenimiento_no_programado(\n    $updateOneMantenimientoInput: UpdateOneMantenimientoDto!\n  ) {\n    regisrar_mantenimiento_no_programado(\n      updateOneMantenimientoInput: $updateOneMantenimientoInput\n    )\n  }\n"): (typeof documents)["\n  mutation Regisrar_mantenimiento_no_programado(\n    $updateOneMantenimientoInput: UpdateOneMantenimientoDto!\n  ) {\n    regisrar_mantenimiento_no_programado(\n      updateOneMantenimientoInput: $updateOneMantenimientoInput\n    )\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Mantenimiento_Info_por_ID($mantenimientoInfoPorIdId: String!) {\n    Mantenimiento_Info_por_ID(id: $mantenimientoInfoPorIdId) {\n      anotaciones\n      cambiosSolicitados\n      cliente\n      diagnostico\n      diagnosticoFinal\n      documentos\n      estado\n      fechaFin\n      fecha\n      fechaInicio\n      fechaSoat\n      kmMedido\n      kmPrevio\n      placa\n      repuestos {\n        cantidad\n        cantidadReserva\n        id\n        marca\n        precio\n        producto\n      }\n      tecnico\n      tipo\n    }\n  }\n"): (typeof documents)["\n  query Mantenimiento_Info_por_ID($mantenimientoInfoPorIdId: String!) {\n    Mantenimiento_Info_por_ID(id: $mantenimientoInfoPorIdId) {\n      anotaciones\n      cambiosSolicitados\n      cliente\n      diagnostico\n      diagnosticoFinal\n      documentos\n      estado\n      fechaFin\n      fecha\n      fechaInicio\n      fechaSoat\n      kmMedido\n      kmPrevio\n      placa\n      repuestos {\n        cantidad\n        cantidadReserva\n        id\n        marca\n        precio\n        producto\n      }\n      tecnico\n      tipo\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Buscar_Pesonal_Search($nombre: String!, $page: Int) {\n    buscar_Pesonal(nombre: $nombre, page: $page) {\n      personal {\n        _id\n        documentos\n        email\n        fechaIngreso\n        nombre\n        numero\n        salarioFecha {\n          fecha\n          salario\n        }\n      }\n      totalPages\n    }\n  }\n"): (typeof documents)["\n  query Buscar_Pesonal_Search($nombre: String!, $page: Int) {\n    buscar_Pesonal(nombre: $nombre, page: $page) {\n      personal {\n        _id\n        documentos\n        email\n        fechaIngreso\n        nombre\n        numero\n        salarioFecha {\n          fecha\n          salario\n        }\n      }\n      totalPages\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation Crear_Personal($input: PersonalUserInput!) {\n    crear_Personal(input: $input)\n  }\n"): (typeof documents)["\n  mutation Crear_Personal($input: PersonalUserInput!) {\n    crear_Personal(input: $input)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Obtener_Personal_Por_Id($obtenerPersonalPorIdId: String!) {\n    obtener_Personal_Por_Id(id: $obtenerPersonalPorIdId) {\n      _id\n      documentos\n      email\n      fechaIngreso\n      numero\n      nombre\n      salarioFecha {\n        _id\n        fecha\n        idPersonal\n        salario\n      }\n      username\n    }\n  }\n"): (typeof documents)["\n  query Obtener_Personal_Por_Id($obtenerPersonalPorIdId: String!) {\n    obtener_Personal_Por_Id(id: $obtenerPersonalPorIdId) {\n      _id\n      documentos\n      email\n      fechaIngreso\n      numero\n      nombre\n      salarioFecha {\n        _id\n        fecha\n        idPersonal\n        salario\n      }\n      username\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation Actualizar_Info_Personal(\n    $actualizarInfoPersonalId: String!\n    $input: UpdatePersonalInput!\n    $salarioFecha: SalarioFechaInput\n  ) {\n    actualizar_Info_Personal(\n      id: $actualizarInfoPersonalId\n      input: $input\n      salarioFecha: $salarioFecha\n    )\n  }\n"): (typeof documents)["\n  mutation Actualizar_Info_Personal(\n    $actualizarInfoPersonalId: String!\n    $input: UpdatePersonalInput!\n    $salarioFecha: SalarioFechaInput\n  ) {\n    actualizar_Info_Personal(\n      id: $actualizarInfoPersonalId\n      input: $input\n      salarioFecha: $salarioFecha\n    )\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation Borrar_Personal($borrarPersonalId: String!) {\n    borrar_Personal(id: $borrarPersonalId)\n  }\n"): (typeof documents)["\n  mutation Borrar_Personal($borrarPersonalId: String!) {\n    borrar_Personal(id: $borrarPersonalId)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation Borrar_contrato_personal(\n    $idContrato: String!\n    $idPersonal: String!\n  ) {\n    borrar_contrato_personal(id_contrato: $idContrato, id_personal: $idPersonal)\n  }\n"): (typeof documents)["\n  mutation Borrar_contrato_personal(\n    $idContrato: String!\n    $idPersonal: String!\n  ) {\n    borrar_contrato_personal(id_contrato: $idContrato, id_personal: $idPersonal)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Buscar_Proveedor($nombre: String!, $page: Int) {\n    buscar_Proveedor(nombre: $nombre, page: $page) {\n      proveedor {\n        _id\n        direccion\n        documentos\n        email\n        nombre\n        nombreContacto\n        numeroContacto\n        rubro\n        ruc\n      }\n      totalPages\n    }\n  }\n"): (typeof documents)["\n  query Buscar_Proveedor($nombre: String!, $page: Int) {\n    buscar_Proveedor(nombre: $nombre, page: $page) {\n      proveedor {\n        _id\n        direccion\n        documentos\n        email\n        nombre\n        nombreContacto\n        numeroContacto\n        rubro\n        ruc\n      }\n      totalPages\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation Crear_Proveedor($input: ProveedorInput!) {\n    crear_Proveedor(input: $input)\n  }\n"): (typeof documents)["\n  mutation Crear_Proveedor($input: ProveedorInput!) {\n    crear_Proveedor(input: $input)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query QueryProveedores {\n    obtener_nombres_proveedor\n  }\n"): (typeof documents)["\n  query QueryProveedores {\n    obtener_nombres_proveedor\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation Borrar_Proveedor($borrarProveedorId: String!) {\n    borrar_Proveedor(id: $borrarProveedorId)\n  }\n"): (typeof documents)["\n  mutation Borrar_Proveedor($borrarProveedorId: String!) {\n    borrar_Proveedor(id: $borrarProveedorId)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Obtener_todos_los_repuestos {\n    obtener_todos_los_repuestos {\n      producto\n      marca\n    }\n  }\n"): (typeof documents)["\n  query Obtener_todos_los_repuestos {\n    obtener_todos_los_repuestos {\n      producto\n      marca\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: " \n  mutation Ingreso_Repuestos_Web($data: IngresoRepuestosStringDto!) {\n    Ingreso_Repuestos_Web(data: $data)\n  }\n"): (typeof documents)[" \n  mutation Ingreso_Repuestos_Web($data: IngresoRepuestosStringDto!) {\n    Ingreso_Repuestos_Web(data: $data)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Buscar_repuestos_Search($producto: String!, $page: Int) {\n    buscar_repuestos(producto: $producto, page: $page) {\n      repuestos {\n        producto\n        precio\n        marca\n        cantidadReserva\n        cantidad\n        _id\n      }\n      totalPages\n    }\n  }\n"): (typeof documents)["\n  query Buscar_repuestos_Search($producto: String!, $page: Int) {\n    buscar_repuestos(producto: $producto, page: $page) {\n      repuestos {\n        producto\n        precio\n        marca\n        cantidadReserva\n        cantidad\n        _id\n      }\n      totalPages\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation Borrar_Repuesto($borrarRepuestoId: String!) {\n    Borrar_Repuesto(id: $borrarRepuestoId)\n  }\n"): (typeof documents)["\n  mutation Borrar_Repuesto($borrarRepuestoId: String!) {\n    Borrar_Repuesto(id: $borrarRepuestoId)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Obtener_notificaciones_no_leidas {\n    obtener_notificaciones_no_leidas {\n      _id\n      descripcion\n      fecha\n      identificador\n      leido\n      tipo\n      titulo\n    }\n  }\n"): (typeof documents)["\n  query Obtener_notificaciones_no_leidas {\n    obtener_notificaciones_no_leidas {\n      _id\n      descripcion\n      fecha\n      identificador\n      leido\n      tipo\n      titulo\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  subscription Notificaciones_admin {\n    notificaciones_admin {\n      _id\n      descripcion\n      fecha\n      identificador\n      leido\n      tipo\n      titulo\n    }\n  }\n"): (typeof documents)["\n  subscription Notificaciones_admin {\n    notificaciones_admin {\n      _id\n      descripcion\n      fecha\n      identificador\n      leido\n      tipo\n      titulo\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation Crear_multiples_users($users: [CreateUserDto!]!) {\n    crear_multiples_users(users: $users)\n  }\n"): (typeof documents)["\n  mutation Crear_multiples_users($users: [CreateUserDto!]!) {\n    crear_multiples_users(users: $users)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Obtener_usuario_por_id($id: String!) {\n    obtener_usuario_por_id(_id: $id) {\n      _id\n      clienteAsociado\n      email\n      name\n      nivelUser\n      username\n    }\n  }\n"): (typeof documents)["\n  query Obtener_usuario_por_id($id: String!) {\n    obtener_usuario_por_id(_id: $id) {\n      _id\n      clienteAsociado\n      email\n      name\n      nivelUser\n      username\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Obtener_usuario_por_username($username: String!) {\n    obtener_usuario_por_username(username: $username) {\n      _id\n      clienteAsociado\n      email\n      name\n      nivelUser\n      username\n    }\n  }\n"): (typeof documents)["\n  query Obtener_usuario_por_username($username: String!) {\n    obtener_usuario_por_username(username: $username) {\n      _id\n      clienteAsociado\n      email\n      name\n      nivelUser\n      username\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation Actualizar_datos_usuario(\n    $oldUsername: String!\n    $newName: String!\n    $newEmail: String!\n    $newPassword: String!\n    $newUsername: String\n  ) {\n    actualizar_datos_usuario(\n      oldUsername: $oldUsername\n      newName: $newName\n      newEmail: $newEmail\n      newPassword: $newPassword\n      newUsername: $newUsername\n    )\n  }\n"): (typeof documents)["\n  mutation Actualizar_datos_usuario(\n    $oldUsername: String!\n    $newName: String!\n    $newEmail: String!\n    $newPassword: String!\n    $newUsername: String\n  ) {\n    actualizar_datos_usuario(\n      oldUsername: $oldUsername\n      newName: $newName\n      newEmail: $newEmail\n      newPassword: $newPassword\n      newUsername: $newUsername\n    )\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation Borrar_usuario_por_id($id: String!) {\n    borrar_usuario_por_id(_id: $id)\n  }\n"): (typeof documents)["\n  mutation Borrar_usuario_por_id($id: String!) {\n    borrar_usuario_por_id(_id: $id)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation Crear_usuario_cliente($input: CreateClientUserDto!) {\n    crear_usuario_cliente(input: $input)\n  }\n"): (typeof documents)["\n  mutation Crear_usuario_cliente($input: CreateClientUserDto!) {\n    crear_usuario_cliente(input: $input)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation Crear_auto($createCarInput: CreateCarDto!) {\n    crear_auto(createCarInput: $createCarInput)\n  }\n"): (typeof documents)["\n  mutation Crear_auto($createCarInput: CreateCarDto!) {\n    crear_auto(createCarInput: $createCarInput)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query obtenerPlacas {\n    obtener_info_placas {\n      placa\n    }\n  }\n"): (typeof documents)["\n  query obtenerPlacas {\n    obtener_info_placas {\n      placa\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Buscar_info_placas_tabla($plate: String!, $page: Int) {\n    buscar_info_placas_tabla(plate: $plate, page: $page) {\n      cars {\n        _id\n        cliente\n        fechaSoat\n        placa\n        propietario\n        tipoContrato\n      }\n      totalPages\n    }\n  }\n"): (typeof documents)["\n  query Buscar_info_placas_tabla($plate: String!, $page: Int) {\n    buscar_info_placas_tabla(plate: $plate, page: $page) {\n      cars {\n        _id\n        cliente\n        fechaSoat\n        placa\n        propietario\n        tipoContrato\n      }\n      totalPages\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Obtener_info_for_placa($placa: String!) {\n    obtener_info_for_placa(placa: $placa) {\n      _id\n      fechaSoat\n      kmActual\n      cliente\n    }\n  }\n"): (typeof documents)["\n  query Obtener_info_for_placa($placa: String!) {\n    obtener_info_for_placa(placa: $placa) {\n      _id\n      fechaSoat\n      kmActual\n      cliente\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query adminHistoryCars($placa: String!) {\n    admin_history_cars(placa: $placa) {\n      Mantenimientos {\n        fecha\n        id\n        repuestosUsados\n        tipo\n      }\n      Puntaje\n      cliente\n      fechaSoat\n      id\n      kmActual\n      placa\n      propietario\n      vigenciaContrato\n    }\n  }\n"): (typeof documents)["\n  query adminHistoryCars($placa: String!) {\n    admin_history_cars(placa: $placa) {\n      Mantenimientos {\n        fecha\n        id\n        repuestosUsados\n        tipo\n      }\n      Puntaje\n      cliente\n      fechaSoat\n      id\n      kmActual\n      placa\n      propietario\n      vigenciaContrato\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Query($placa: String!) {\n    buscar_placas_autos(placa: $placa)\n  }\n"): (typeof documents)["\n  query Query($placa: String!) {\n    buscar_placas_autos(placa: $placa)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Obtener_Propietarios {\n    obtener_info_placas {\n      propietario\n    }\n  }\n"): (typeof documents)["\n  query Obtener_Propietarios {\n    obtener_info_placas {\n      propietario\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;