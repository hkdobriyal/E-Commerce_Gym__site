export interface Order {
    id?: number;
    user_id: number;
    total_price: number;
    status?: "pending" | "completed" | "cancelled";
    created_at?: Date;
  }
  
  export interface OrderItem {
    id?: number;
    order_id: number;
    product_id: number;
    quantity: number;
    price: number;
  }
  