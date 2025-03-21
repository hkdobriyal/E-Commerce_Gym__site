// gym-supplements-backend\src\utils\types.ts
export interface JwtPayload {
    id: number;
    username: string;
    exp?: number;
  }
  