// gym-supplements-frontend\app\redux\slices\orderSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Order {
  id: string;
  date: string;
  total: number;
  status: string;
}

interface OrderState {
  orders: Order[];
}

const initialState: OrderState = {
  orders: [],
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setOrders(state, action: PayloadAction<Order[]>) {
      state.orders = action.payload;
    },
    // Add other reducers as needed
  },
});

export const { setOrders } = orderSlice.actions;
export default orderSlice.reducer;
