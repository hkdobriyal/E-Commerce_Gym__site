"use client";
import { Button } from "@/app/components/ui/button";
import PaymentIcon from "@mui/icons-material/Payment";

export default function CheckoutPage() {
  return (
    <div className="container mx-auto mt-10 text-center">
      <h1 className="text-3xl font-bold">Checkout</h1>
      <p className="text-gray-500 mt-2">Proceed to secure payment.</p>
      <Button className="mt-4 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white">
        <PaymentIcon /> Pay Now
      </Button>
    </div>
  );
}
