import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    access_token: string;
    username: string;
    nivelUser: string;
  }
}

import { JWT } from "next-auth/jwt";

declare module "next-auth/jwt" {
  interface JWT {
    access_token: string;
  }
}

declare module "next-auth" {
  interface User {
    access_token: string;
  }
}
