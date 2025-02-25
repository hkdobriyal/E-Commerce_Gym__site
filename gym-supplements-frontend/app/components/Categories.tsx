// "use client";

// import Image from "next/image";

// const categories = [
//   { name: "Whey Concentrate", image: "/images/whey-concentrate.png" },
//   { name: "Whey Isolate", image: "/images/whey-isolate.png" },
//   { name: "Peanut Butter", image: "/images/peanut-butter.png" },
//   { name: "Vegan Protein", image: "/images/vegan-protein.png" },
//   { name: "L Carnitine", image: "/images/l-carnitine.png" },
//   { name: "L Arginine", image: "/images/l-arginine.png" },
//   { name: "L Glutamine", image: "/images/l-glutamine.png" },
//   { name: "Citrulline", image: "/images/citrulline.png" },
//   { name: "Protein Bars", image: "/images/protein-bars.png" },
//   { name: "Testosterone Boosters", image: "/images/testosterone-boosters.png" },
//   { name: "Vitamins", image: "/images/vitamins.png" },
//   { name: "Omega Fats", image: "/images/omega-fats.png" },
// ];

// function Categories() {
//   return (
//     <section className="py-8 px-4">
//       <h2 className="text-3xl font-bold text-center mb-6">Categories</h2>
//       <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
//         {categories.map((category, index) => (
//           <div key={index} className="flex flex-col items-center bg-gray-100 p-4 rounded-md shadow-md">
//             <Image src={category.image} alt={category.name} width={150} height={150} className="mb-2" />
//             <p className="text-lg font-semibold">{category.name}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Categories;
