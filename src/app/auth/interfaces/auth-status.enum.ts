

// SI NO LAS IGUALASEMOS A SU MISMO VALOR, TENDRÍA ORDEN POR DEFECTO 0, 1 Y 2. IGUALANDOLAS ASEGURAMOS QUE SI HAY CAMBIOS TODO SIGA CORRECTO

export enum AuthStatus {
  checking = 'checking',
  authenticated = 'authenticated',
  notAuthenticated = 'notAuthenticated'
}
