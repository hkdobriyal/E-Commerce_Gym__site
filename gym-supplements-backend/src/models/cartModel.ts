// gym-supplements-backend\src\models\cartModel.ts
export interface CartItem {
    id?: number;
    user_id: number;
    product_id: number;
    quantity: number;
    created_at?: Date;
  }
  