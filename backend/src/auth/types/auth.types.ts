export enum Role {
  User = 'member',
  Admin = 'admin',
}

export interface JwtPaylod {
  id: string;
  email: string;
  role: string;
}
