export interface MyToken {
    username: string;
    nivelUser: "admin" | "tecnico" | "cliente";
    exp?: number; // Añade este campo a tu interfaz
  }