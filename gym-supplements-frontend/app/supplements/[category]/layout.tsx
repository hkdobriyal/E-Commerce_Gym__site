// app\supplements\[category]\layout.tsx
import { Metadata } from "next";
import  allSupplements  from "./page"; // ✅ Import allSupplements


// ✅ Fix: Define Static Paths for Build
export async function generateStaticParams() {
  return Object.keys(allSupplements).map((category) => ({ category }));
}

// ✅ Fix: Add Metadata for SEO
export async function generateMetadata({ params }: { params: { category: string } }): Promise<Metadata> {
  return {
    title: `Supplements - ${params.category.replace("-", " ")}`,
    description: `Find the best supplements for ${params.category}. Buy premium products with great discounts.`,
  };
}

export default function CategoryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
