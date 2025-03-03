// // // app\data\supplementsData.ts
// export const allSupplements: Record<
//   string,
//   {
//     id: number;
//     name: string;
//     oldPrice: string;
//     price: string;
//     discount: string;
//     image: string;
//     description: string;
//     benefits: string[];
//     nutrition: string;
//     usage: string;
//     flavours: string[];
//     weights: string[];
//   }[]
// > = {
//   "whey-protein": [
//     {
//       id: 1,
//       name: "ON Gold Standard Whey",
//       oldPrice: "₹5,999",
//       price: "₹5,199",
//       discount: "13% ",
//       image: "/images/supplement_img/ON_wheyiso.jpg",
//       description: "High-quality whey protein for muscle recovery and growth.",
//       benefits: ["Supports muscle recovery", "Promotes muscle growth", "High protein content"],
//       nutrition: "24g protein per serving",
//       usage: "Mix one scoop with water or milk post-workout.",
//       flavours: ["Chocolate", "Vanilla", "Strawberry"],
//       weights: ["1 lb", "2 lb", "5 lb"],
//     },
//     {
//       id: 2,
//       name: "MuscleBlaze Whey Protein",
//       oldPrice: "₹4,499",
//       price: "₹3,999",
//       discount: "11% ",
//       image: "/images/supplement_img/Mb_whey_hydro.png",
//       description: "Premium whey protein for athletes and fitness enthusiasts.",
//       benefits: ["Enhances muscle repair", "Boosts energy levels", "Rich in amino acids"],
//       nutrition: "25g protein per serving",
//       usage: "Blend one scoop with your favorite beverage after exercise.",
//       flavours: ["Rich Milk Chocolate", "Café Mocha", "Cookies & Cream"],
//       weights: ["1 kg", "2 kg"],
//     },
//     {
//       id: 3,
//       name: "MyProtein Impact Whey",
//       oldPrice: "₹4,999",
//       price: "₹4,499",
//       discount: "10% ",
//       image: "/images/supplement_img/myprotien_wheyiso.jpg",
//       description: "Pure whey protein for lean muscle development.",
//       benefits: ["Aids in muscle maintenance", "Supports immune function", "Low in fat and carbs"],
//       nutrition: "21g protein per serving",
//       usage: "Consume one serving daily to meet your protein needs.",
//       flavours: ["Chocolate Smooth", "Vanilla", "Banana"],
//       weights: ["2.5 lb", "5 lb"],
//     },
//     {
//       id: 4,
//       name: "GNC Pro Performance Whey",
//       oldPrice: "₹4,199",
//       price: "₹3,799",
//       discount: "9% ",
//       image: "/images/supplement_img/GNC_wheypro.jpg",
//       description: "Advanced whey protein formula for active individuals.",
//       benefits: ["Improves muscle strength", "Reduces muscle soreness", "High in BCAAs"],
//       nutrition: "24g protein per serving",
//       usage: "Take one serving with water or milk after intense workouts.",
//       flavours: ["Double Rich Chocolate", "Vanilla Cream", "Strawberry Milkshake"],
//       weights: ["2 lb", "5 lb"],
//     },
//     {
//       id: 11,
//       name: "ON Gold Standard Whey",
//       oldPrice: "₹5,999",
//       price: "₹5,199",
//       discount: "13% ",
//       image: "/images/supplement_img/ON_wheyiso.jpg",
//       description: "High-quality whey protein for muscle recovery and growth.",
//       benefits: ["Supports muscle recovery", "Promotes muscle growth", "High protein content"],
//       nutrition: "24g protein per serving",
//       usage: "Mix one scoop with water or milk post-workout.",
//       flavours: ["Chocolate", "Vanilla", "Strawberry"],
//       weights: ["1 lb", "2 lb", "5 lb"],
//     },
//     {
//       id: 12,
//       name: "MuscleBlaze Whey Protein",
//       oldPrice: "₹4,499",
//       price: "₹3,999",
//       discount: "11% ",
//       image: "/images/supplement_img/Mb_whey_hydro.png",
//       description: "Premium whey protein for athletes and fitness enthusiasts.",
//       benefits: ["Enhances muscle repair", "Boosts energy levels", "Rich in amino acids"],
//       nutrition: "25g protein per serving",
//       usage: "Blend one scoop with your favorite beverage after exercise.",
//       flavours: ["Rich Milk Chocolate", "Café Mocha", "Cookies & Cream"],
//       weights: ["1 kg", "2 kg"],
//     },
//     {
//       id: 13,
//       name: "MyProtein Impact Whey",
//       oldPrice: "₹4,999",
//       price: "₹4,499",
//       discount: "10% ",
//       image: "/images/supplement_img/myprotien_wheyiso.jpg",
//       description: "Pure whey protein for lean muscle development.",
//       benefits: ["Aids in muscle maintenance", "Supports immune function", "Low in fat and carbs"],
//       nutrition: "21g protein per serving",
//       usage: "Consume one serving daily to meet your protein needs.",
//       flavours: ["Chocolate Smooth", "Vanilla", "Banana"],
//       weights: ["2.5 lb", "5 lb"],
//     },
//     {
//       id: 14,
//       name: "GNC Pro Performance Whey",
//       oldPrice: "₹4,199",
//       price: "₹3,799",
//       discount: "9% ",
//       image: "/images/supplement_img/GNC_wheypro.jpg",
//       description: "Advanced whey protein formula for active individuals.",
//       benefits: ["Improves muscle strength", "Reduces muscle soreness", "High in BCAAs"],
//       nutrition: "24g protein per serving",
//       usage: "Take one serving with water or milk after intense workouts.",
//       flavours: ["Double Rich Chocolate", "Vanilla Cream", "Strawberry Milkshake"],
//       weights: ["2 lb", "5 lb"],
//     },
//     {
//       id: 133,
//       name: "MyProtein Impact Whey",
//       oldPrice: "₹4,999",
//       price: "₹4,499",
//       discount: "10% ",
//       image: "/images/supplement_img/myprotien_wheyiso.jpg",
//       description: "Pure whey protein for lean muscle development.",
//       benefits: ["Aids in muscle maintenance", "Supports immune function", "Low in fat and carbs"],
//       nutrition: "21g protein per serving",
//       usage: "Consume one serving daily to meet your protein needs.",
//       flavours: ["Chocolate Smooth", "Vanilla", "Banana"],
//       weights: ["2.5 lb", "5 lb"],
//     },
//     {
//       id: 144,
//       name: "GNC Pro Performance Whey",
//       oldPrice: "₹4,199",
//       price: "₹3,799",
//       discount: "9% ",
//       image: "/images/supplement_img/GNC_wheypro.jpg",
//       description: "Advanced whey protein formula for active individuals.",
//       benefits: ["Improves muscle strength", "Reduces muscle soreness", "High in BCAAs"],
//       nutrition: "24g protein per serving",
//       usage: "Take one serving with water or milk after intense workouts.",
//       flavours: ["Double Rich Chocolate", "Vanilla Cream", "Strawberry Milkshake"],
//       weights: ["2 lb", "5 lb"],
//     },
//     {
//       id: 111,
//       name: "ON Gold Standard Whey",
//       oldPrice: "₹5,999",
//       price: "₹5,199",
//       discount: "13% ",
//       image: "/images/supplement_img/ON_wheyiso.jpg",
//       description: "High-quality whey protein for muscle recovery and growth.",
//       benefits: ["Supports muscle recovery", "Promotes muscle growth", "High protein content"],
//       nutrition: "24g protein per serving",
//       usage: "Mix one scoop with water or milk post-workout.",
//       flavours: ["Chocolate", "Vanilla", "Strawberry"],
//       weights: ["1 lb", "2 lb", "5 lb"],
//     },
//     {
//       id: 112,
//       name: "MuscleBlaze Whey Protein",
//       oldPrice: "₹4,499",
//       price: "₹3,999",
//       discount: "11% ",
//       image: "/images/supplement_img/Mb_whey_hydro.png",
//       description: "Premium whey protein for athletes and fitness enthusiasts.",
//       benefits: ["Enhances muscle repair", "Boosts energy levels", "Rich in amino acids"],
//       nutrition: "25g protein per serving",
//       usage: "Blend one scoop with your favorite beverage after exercise.",
//       flavours: ["Rich Milk Chocolate", "Café Mocha", "Cookies & Cream"],
//       weights: ["1 kg", "2 kg"],
//     },
//     {
//       id: 113,
//       name: "MyProtein Impact Whey",
//       oldPrice: "₹4,999",
//       price: "₹4,499",
//       discount: "10% ",
//       image: "/images/supplement_img/myprotien_wheyiso.jpg",
//       description: "Pure whey protein for lean muscle development.",
//       benefits: ["Aids in muscle maintenance", "Supports immune function", "Low in fat and carbs"],
//       nutrition: "21g protein per serving",
//       usage: "Consume one serving daily to meet your protein needs.",
//       flavours: ["Chocolate Smooth", "Vanilla", "Banana"],
//       weights: ["2.5 lb", "5 lb"],
//     },
//     {
//       id: 114,
//       name: "GNC Pro Performance Whey",
//       oldPrice: "₹4,199",
//       price: "₹3,799",
//       discount: "9% ",
//       image: "/images/supplement_img/GNC_wheypro.jpg",
//       description: "Advanced whey protein formula for active individuals.",
//       benefits: ["Improves muscle strength", "Reduces muscle soreness", "High in BCAAs"],
//       nutrition: "24g protein per serving",
//       usage: "Take one serving with water or milk after intense workouts.",
//       flavours: ["Double Rich Chocolate", "Vanilla Cream", "Strawberry Milkshake"],
//       weights: ["2 lb", "5 lb"],
//     },
//   ],
//   "mass-gainers": [
//     {
//       id: 5,
//       name: "ON Serious Mass Gainer",
//       oldPrice: "₹5,499",
//       price: "₹4,999",
//       discount: "9% ",
//       image: "/images/supplement_img/ON_massgainer.jpg",
//       description: "High-calorie mass gainer for muscle and weight gain.",
//       benefits: ["Supports muscle growth", "Increases calorie intake", "Rich in carbohydrates"],
//       nutrition: "1,250 calories per serving",
//       usage: "Mix two scoops with milk or water post-workout.",
//       flavours: ["Chocolate", "Vanilla", "Strawberry"],
//       weights: ["6 lb", "12 lb"],
//     },
//     {
//       id: 6,
//       name: "MuscleBlaze Mass Gainer",
//       oldPrice: "₹3,999",
//       price: "₹3,499",
//       discount: "13% ",
//       image: "/images/supplement_img/ON-massgainer.jpg",
//       description: "Premium mass gainer for athletes and bodybuilders.",
//       benefits: ["Enhances muscle recovery", "Boosts energy levels", "High in protein"],
//       nutrition: "1,100 calories per serving",
//       usage: "Blend two scoops with your favorite beverage after exercise.",
//       flavours: ["Rich Chocolate", "Cookies & Cream", "Vanilla"],
//       weights: ["2 kg", "4 kg"],
//     },
//     {
//       id: 7,
//       name: "BigMuscles Lean Mass Gainer",
//       oldPrice: "₹3,499",
//       price: "₹2,999",
//       discount: "14% ",
//       image: "/images/supplement_img/BM_masgainer.jpg",
//       description: "Lean mass gainer for muscle development without excess fat.",
//       benefits: ["Promotes lean muscle growth", "Supports immune function", "Low in sugar"],
//       nutrition: "900 calories per serving",
//       usage: "Consume one serving daily to support muscle growth.",
//       flavours: ["Chocolate", "Vanilla", "Banana"],
//       weights: ["2.5 kg", "5 kg"],
//     },
//     {
//       id: 15,
//       name: "ON Serious Mass Gainer",
//       oldPrice: "₹5,499",
//       price: "₹4,999",
//       discount: "9% ",
//       image: "/images/supplement_img/ON_massgainer.jpg",
//       description: "High-calorie mass gainer for muscle and weight gain.",
//       benefits: ["Supports muscle growth", "Increases calorie intake", "Rich in carbohydrates"],
//       nutrition: "1,250 calories per serving",
//       usage: "Mix two scoops with milk or water post-workout.",
//       flavours: ["Chocolate", "Vanilla", "Strawberry"],
//       weights: ["6 lb", "12 lb"],
//     },
//     {
//       id: 16,
//       name: "MuscleBlaze Mass Gainer",
//       oldPrice: "₹3,999",
//       price: "₹3,499",
//       discount: "13% ",
//       image: "/images/supplement_img/ON-massgainer.jpg",
//       description: "Premium mass gainer for athletes and bodybuilders.",
//       benefits: ["Enhances muscle recovery", "Boosts energy levels", "High in protein"],
//       nutrition: "1,100 calories per serving",
//       usage: "Blend two scoops with your favorite beverage after exercise.",
//       flavours: ["Rich Chocolate", "Cookies & Cream", "Vanilla"],
//       weights: ["2 kg", "4 kg"],
//     },
//     {
//       id: 17,
//       name: "BigMuscles Lean Mass Gainer",
//       oldPrice: "₹3,499",
//       price: "₹2,999",
//       discount: "14% ",
//       image: "/images/supplement_img/BM_masgainer.jpg",
//       description: "Lean mass gainer for muscle development without excess fat.",
//       benefits: ["Promotes lean muscle growth", "Supports immune function", "Low in sugar"],
//       nutrition: "900 calories per serving",
//       usage: "Consume one serving daily to support muscle growth.",
//       flavours: ["Chocolate", "Vanilla", "Banana"],
//       weights: ["2.5 kg", "5 kg"],
//     },
//     {
//       id: 115,
//       name: "ON Serious Mass Gainer",
//       oldPrice: "₹5,499",
//       price: "₹4,999",
//       discount: "9% ",
//       image: "/images/supplement_img/ON_massgainer.jpg",
//       description: "High-calorie mass gainer for muscle and weight gain.",
//       benefits: ["Supports muscle growth", "Increases calorie intake", "Rich in carbohydrates"],
//       nutrition: "1,250 calories per serving",
//       usage: "Mix two scoops with milk or water post-workout.",
//       flavours: ["Chocolate", "Vanilla", "Strawberry"],
//       weights: ["6 lb", "12 lb"],
//     },
//     {
//       id: 116,
//       name: "MuscleBlaze Mass Gainer",
//       oldPrice: "₹3,999",
//       price: "₹3,499",
//       discount: "13% ",
//       image: "/images/supplement_img/ON-massgainer.jpg",
//       description: "Premium mass gainer for athletes and bodybuilders.",
//       benefits: ["Enhances muscle recovery", "Boosts energy levels", "High in protein"],
//       nutrition: "1,100 calories per serving",
//       usage: "Blend two scoops with your favorite beverage after exercise.",
//       flavours: ["Rich Chocolate", "Cookies & Cream", "Vanilla"],
//       weights: ["2 kg", "4 kg"],
//     },
//     {
//       id: 117,
//       name: "BigMuscles Lean Mass Gainer",
//       oldPrice: "₹3,499",
//       price: "₹2,999",
//       discount: "14% ",
//       image: "/images/supplement_img/BM_masgainer.jpg",
//       description: "Lean mass gainer for muscle development without excess fat.",
//       benefits: ["Promotes lean muscle growth", "Supports immune function", "Low in sugar"],
//       nutrition: "900 calories per serving",
//       usage: "Consume one serving daily to support muscle growth.",
//       flavours: ["Chocolate", "Vanilla", "Banana"],
//       weights: ["2.5 kg", "5 kg"],
//     },
//   ],
//   "bcaa-intra-workout": [
//     {
//       id: 8,
//       name: "Xtend BCAA",
//       oldPrice: "₹2,899",
//       price: "₹2,499",
//       discount: "14% ",
//       image: "/images/supplement_img/xtend1.png",
//       description: "BCAA supplement for muscle recovery and endurance.",
//       benefits: ["Reduces muscle soreness", "Improves endurance", "Supports muscle protein synthesis"],
//       nutrition: "7g BCAAs per serving",
//       usage: "Mix one scoop with water during workouts.",
//       flavours: ["Blue Raspberry", "Watermelon", "Fruit Punch"],
//       weights: ["30 servings", "60 servings"],
//     },
//     {
//       id: 9,
//       name: "MuscleBlaze BCAA Pro",
//       oldPrice: "₹2,299",
//       price: "₹1,999",
//       discount: "13% ",
//       image: "/images/supplement_img/jymBCAA.jpg",
//       description: "High-quality BCAA for muscle preservation and recovery.",
//       benefits: ["Prevents muscle breakdown", "Enhances recovery", "Boosts energy"],
//       nutrition: "8g BCAAs per serving",
//       usage: "Consume one serving during or after intense workouts.",
//       flavours: ["Tropical Punch", "Green Apple", "Lemon Lime"],
//       weights: ["200g", "400g"],
//     },
//     {
//       id: 10,
//       name: "GNC AMP BCAA",
//       oldPrice: "₹2,599",
//       price: "₹2,299",
//       discount: "12% ",
//       image: "/images/supplement_img/xtend1.png",
//       description: "Advanced BCAA formula for serious athletes.",
//       benefits: ["Supports muscle repair", "Reduces fatigue", "High in leucine"],
//       nutrition: "5g BCAAs per serving",
//       usage: "Take one serving with water during exercise.",
//       flavours: ["Fruit Punch", "Watermelon", "Blue Raspberry"],
//       weights: ["30 servings", "60 servings"],
//     },
//     {
//       id: 18,
//       name: "Xtend BCAA",
//       oldPrice: "₹2,899",
//       price: "₹2,499",
//       discount: "14% ",
//       image: "/images/supplement_img/xtend1.png",
//       description: "BCAA supplement for muscle recovery and endurance.",
//       benefits: ["Reduces muscle soreness", "Improves endurance", "Supports muscle protein synthesis"],
//       nutrition: "7g BCAAs per serving",
//       usage: "Mix one scoop with water during workouts.",
//       flavours: ["Blue Raspberry", "Watermelon", "Fruit Punch"],
//       weights: ["30 servings", "60 servings"],
//     },
//     {
//       id: 19,
//       name: "MuscleBlaze BCAA Pro",
//       oldPrice: "₹2,299",
//       price: "₹1,999",
//       discount: "13% ",
//       image: "/images/supplement_img/jymBCAA.jpg",
//       description: "High-quality BCAA for muscle preservation and recovery.",
//       benefits: ["Prevents muscle breakdown", "Enhances recovery", "Boosts energy"],
//       nutrition: "8g BCAAs per serving",
//       usage: "Consume one serving during or after intense workouts.",
//       flavours: ["Tropical Punch", "Green Apple", "Lemon Lime"],
//       weights: ["200g", "400g"],
//     },
//     {
//       id: 110,
//       name: "GNC AMP BCAA",
//       oldPrice: "₹2,599",
//       price: "₹2,299",
//       discount: "12% ",
//       image: "/images/supplement_img/xtend1.png",
//       description: "Advanced BCAA formula for serious athletes.",
//       benefits: ["Supports muscle repair", "Reduces fatigue", "High in leucine"],
//       nutrition: "5g BCAAs per serving",
//       usage: "Take one serving with water during exercise.",
//       flavours: ["Fruit Punch", "Watermelon", "Blue Raspberry"],
//       weights: ["30 servings", "60 servings"],
//     },
//     {
//       id: 118,
//       name: "Xtend BCAA",
//       oldPrice: "₹2,899",
//       price: "₹2,499",
//       discount: "14% ",
//       image: "/images/supplement_img/xtend1.png",
//       description: "BCAA supplement for muscle recovery and endurance.",
//       benefits: ["Reduces muscle soreness", "Improves endurance", "Supports muscle protein synthesis"],
//       nutrition: "7g BCAAs per serving",
//       usage: "Mix one scoop with water during workouts.",
//       flavours: ["Blue Raspberry", "Watermelon", "Fruit Punch"],
//       weights: ["30 servings", "60 servings"],
//     },
//     {
//       id: 119,
//       name: "MuscleBlaze BCAA Pro",
//       oldPrice: "₹2,299",
//       price: "₹1,999",
//       discount: "13% ",
//       image: "/images/supplement_img/jymBCAA.jpg",
//       description: "High-quality BCAA for muscle preservation and recovery.",
//       benefits: ["Prevents muscle breakdown", "Enhances recovery", "Boosts energy"],
//       nutrition: "8g BCAAs per serving",
//       usage: "Consume one serving during or after intense workouts.",
//       flavours: ["Tropical Punch", "Green Apple", "Lemon Lime"],
//       weights: ["200g", "400g"],
//     },
//     {
//       id: 110,
//       name: "GNC AMP BCAA",
//       oldPrice: "₹2,599",
//       price: "₹2,299",
//       discount: "12% ",
//       image: "/images/supplement_img/xtend1.png",
//       description: "Advanced BCAA formula for serious athletes.",
//       benefits: ["Supports muscle repair", "Reduces fatigue", "High in leucine"],
//       nutrition: "5g BCAAs per serving",
//       usage: "Take one serving with water during exercise.",
//       flavours: ["Fruit Punch", "Watermelon", "Blue Raspberry"],
//       weights: ["30 servings", "60 servings"],
//     },
//   ],
//   "pre-workout": [
//     {
//       id: 11,
//       name: "C4 Pre-Workout",
//       oldPrice: "₹2,899",
//       price: "₹2,499",
//       discount: "14% ",
//       image: "/images/supplement_img/c4_preworkout.webp",
//       description: "Energy-boosting pre-workout for intense training sessions.",
//       benefits: ["Increases energy", "Enhances focus", "Improves endurance"],
//       nutrition: "150mg caffeine per serving",
//       usage: "Mix one scoop with water 30 minutes before workouts.",
//       flavours: ["Fruit Punch", "Blue Raspberry", "Watermelon"],
//       weights: ["30 servings", "60 servings"],
//     },
//     {
//       id: 12,
//       name: "MuscleBlaze Pre-Workout Ripped",
//       oldPrice: "₹2,299",
//       price: "₹1,999",
//       discount: "13% ",
//       image: "/images/supplement_img/MB_preworkout.webp",
//       description: "Pre-workout supplement for energy and fat loss.",
//       benefits: ["Boosts metabolism", "Supports fat burning", "Increases stamina"],
//       nutrition: "200mg caffeine per serving",
//       usage: "Consume one serving with water before exercise.",
//       flavours: ["Tropical Punch", "Green Apple", "Lemon Lime"],
//       weights: ["200g", "400g"],
//     },
//     {
//       id: 111,
//       name: "C4 Pre-Workout",
//       oldPrice: "₹2,899",
//       price: "₹2,499",
//       discount: "14% ",
//       image: "/images/supplement_img/c4_preworkout.webp",
//       description: "Energy-boosting pre-workout for intense training sessions.",
//       benefits: ["Increases energy", "Enhances focus", "Improves endurance"],
//       nutrition: "150mg caffeine per serving",
//       usage: "Mix one scoop with water 30 minutes before workouts.",
//       flavours: ["Fruit Punch", "Blue Raspberry", "Watermelon"],
//       weights: ["30 servings", "60 servings"],
//     },
//     {
//       id: 112,
//       name: "MuscleBlaze Pre-Workout Ripped",
//       oldPrice: "₹2,299",
//       price: "₹1,999",
//       discount: "13% ",
//       image: "/images/supplement_img/MB_preworkout.webp",
//       description: "Pre-workout supplement for energy and fat loss.",
//       benefits: ["Boosts metabolism", "Supports fat burning", "Increases stamina"],
//       nutrition: "200mg caffeine per serving",
//       usage: "Consume one serving with water before exercise.",
//       flavours: ["Tropical Punch", "Green Apple", "Lemon Lime"],
//       weights: ["200g", "400g"],
//     },
//     {
//       id: 1111,
//       name: "C4 Pre-Workout",
//       oldPrice: "₹2,899",
//       price: "₹2,499",
//       discount: "14% ",
//       image: "/images/supplement_img/c4_preworkout.webp",
//       description: "Energy-boosting pre-workout for intense training sessions.",
//       benefits: ["Increases energy", "Enhances focus", "Improves endurance"],
//       nutrition: "150mg caffeine per serving",
//       usage: "Mix one scoop with water 30 minutes before workouts.",
//       flavours: ["Fruit Punch", "Blue Raspberry", "Watermelon"],
//       weights: ["30 servings", "60 servings"],
//     },
//     {
//       id: 1112,
//       name: "MuscleBlaze Pre-Workout Ripped",
//       oldPrice: "₹2,299",
//       price: "₹1,999",
//       discount: "13% ",
//       image: "/images/supplement_img/MB_preworkout.webp",
//       description: "Pre-workout supplement for energy and fat loss.",
//       benefits: ["Boosts metabolism", "Supports fat burning", "Increases stamina"],
//       nutrition: "200mg caffeine per serving",
//       usage: "Consume one serving with water before exercise.",
//       flavours: ["Tropical Punch", "Green Apple", "Lemon Lime"],
//       weights: ["200g", "400g"],
//     },
//     {
//       id: 11111,
//       name: "C4 Pre-Workout",
//       oldPrice: "₹2,899",
//       price: "₹2,499",
//       discount: "14% ",
//       image: "/images/supplement_img/c4_preworkout.webp",
//       description: "Energy-boosting pre-workout for intense training sessions.",
//       benefits: ["Increases energy", "Enhances focus", "Improves endurance"],
//       nutrition: "150mg caffeine per serving",
//       usage: "Mix one scoop with water 30 minutes before workouts.",
//       flavours: ["Fruit Punch", "Blue Raspberry", "Watermelon"],
//       weights: ["30 servings", "60 servings"],
//     },
//     {
//       id: 11112,
//       name: "MuscleBlaze Pre-Workout Ripped",
//       oldPrice: "₹2,299",
//       price: "₹1,999",
//       discount: "13% ",
//       image: "/images/supplement_img/MB_preworkout.webp",
//       description: "Pre-workout supplement for energy and fat loss.",
//       benefits: ["Boosts metabolism", "Supports fat burning", "Increases stamina"],
//       nutrition: "200mg caffeine per serving",
//       usage: "Consume one serving with water before exercise.",
//       flavours: ["Tropical Punch", "Green Apple", "Lemon Lime"],
//       weights: ["200g", "400g"],
//     },
//     {
//       id: 1111111,
//       name: "C4 Pre-Workout",
//       oldPrice: "₹2,899",
//       price: "₹2,499",
//       discount: "14% ",
//       image: "/images/supplement_img/c4_preworkout.webp",
//       description: "Energy-boosting pre-workout for intense training sessions.",
//       benefits: ["Increases energy", "Enhances focus", "Improves endurance"],
//       nutrition: "150mg caffeine per serving",
//       usage: "Mix one scoop with water 30 minutes before workouts.",
//       flavours: ["Fruit Punch", "Blue Raspberry", "Watermelon"],
//       weights: ["30 servings", "60 servings"],
//     },
//     {
//       id: 120,
//       name: "MuscleBlaze Pre-Workout Ripped",
//       oldPrice: "₹2,299",
//       price: "₹1,999",
//       discount: "13% ",
//       image: "/images/supplement_img/MB_preworkout.webp",
//       description: "Pre-workout supplement for energy and fat loss.",
//       benefits: ["Boosts metabolism", "Supports fat burning", "Increases stamina"],
//       nutrition: "200mg caffeine per serving",
//       usage: "Consume one serving with water before exercise.",
//       flavours: ["Tropical Punch", "Green Apple", "Lemon Lime"],
//       weights: ["200g", "400g"],
//     },
//   ],
//   creatine: [
//     {
//       id: 13,
//       name: "ON Micronized Creatine",
//       oldPrice: "₹1,799",
//       price: "₹1,499",
//       discount: "17% ",
//       image: "/images/supplement_img/ON_creatine.png",
//       description: "Micronized creatine for strength and power.",
//       benefits: ["Enhances strength", "Improves power output", "Supports muscle recovery"],
//       nutrition: "5g creatine monohydrate per serving",
//       usage: "Mix one scoop with water or juice post-workout.",
//       flavours: ["Unflavored"],
//       weights: ["300g", "500g"],
//     },
//     {
//       id: 14,
//       name: "MuscleBlaze Creatine Monohydrate",
//       oldPrice: "₹1,599",
//       price: "₹1,299",
//       discount: "18% ",
//       image: "/images/supplement_img/On_creatine.webp",
//       description: "Pure creatine monohydrate for athletic performance.",
//       benefits: ["Increases muscle endurance", "Boosts energy levels", "High purity"],
//       nutrition: "5g creatine monohydrate per serving",
//       usage: "Consume one serving daily with a carbohydrate source.",
//       flavours: ["Unflavored"],
//       weights: ["250g", "500g"],
//     },
//     {
//       id: 113,
//       name: "ON Micronized Creatine",
//       oldPrice: "₹1,799",
//       price: "₹1,499",
//       discount: "17% ",
//       image: "/images/supplement_img/ON_creatine.png",
//       description: "Micronized creatine for strength and power.",
//       benefits: ["Enhances strength", "Improves power output", "Supports muscle recovery"],
//       nutrition: "5g creatine monohydrate per serving",
//       usage: "Mix one scoop with water or juice post-workout.",
//       flavours: ["Unflavored"],
//       weights: ["300g", "500g"],
//     },
//     {
//       id: 114,
//       name: "MuscleBlaze Creatine Monohydrate",
//       oldPrice: "₹1,599",
//       price: "₹1,299",
//       discount: "18% ",
//       image: "/images/supplement_img/On_creatine.webp",
//       description: "Pure creatine monohydrate for athletic performance.",
//       benefits: ["Increases muscle endurance", "Boosts energy levels", "High purity"],
//       nutrition: "5g creatine monohydrate per serving",
//       usage: "Consume one serving daily with a carbohydrate source.",
//       flavours: ["Unflavored"],
//       weights: ["250g", "500g"],
//     },
//     {
//       id: 1113,
//       name: "ON Micronized Creatine",
//       oldPrice: "₹1,799",
//       price: "₹1,499",
//       discount: "17% ",
//       image: "/images/supplement_img/ON_creatine.png",
//       description: "Micronized creatine for strength and power.",
//       benefits: ["Enhances strength", "Improves power output", "Supports muscle recovery"],
//       nutrition: "5g creatine monohydrate per serving",
//       usage: "Mix one scoop with water or juice post-workout.",
//       flavours: ["Unflavored"],
//       weights: ["300g", "500g"],
//     },
//     {
//       id: 1114,
//       name: "MuscleBlaze Creatine Monohydrate",
//       oldPrice: "₹1,599",
//       price: "₹1,299",
//       discount: "18% ",
//       image: "/images/supplement_img/On_creatine.webp",
//       description: "Pure creatine monohydrate for athletic performance.",
//       benefits: ["Increases muscle endurance", "Boosts energy levels", "High purity"],
//       nutrition: "5g creatine monohydrate per serving",
//       usage: "Consume one serving daily with a carbohydrate source.",
//       flavours: ["Unflavored"],
//       weights: ["250g", "500g"],
//     },
//     {
//       id: 11113,
//       name: "ON Micronized Creatine",
//       oldPrice: "₹1,799",
//       price: "₹1,499",
//       discount: "17% ",
//       image: "/images/supplement_img/ON_creatine.png",
//       description: "Micronized creatine for strength and power.",
//       benefits: ["Enhances strength", "Improves power output", "Supports muscle recovery"],
//       nutrition: "5g creatine monohydrate per serving",
//       usage: "Mix one scoop with water or juice post-workout.",
//       flavours: ["Unflavored"],
//       weights: ["300g", "500g"],
//     },
//     {
//       id: 11114,
//       name: "MuscleBlaze Creatine Monohydrate",
//       oldPrice: "₹1,599",
//       price: "₹1,299",
//       discount: "18% ",
//       image: "/images/supplement_img/On_creatine.webp",
//       description: "Pure creatine monohydrate for athletic performance.",
//       benefits: ["Increases muscle endurance", "Boosts energy levels", "High purity"],
//       nutrition: "5g creatine monohydrate per serving",
//       usage: "Consume one serving daily with a carbohydrate source.",
//       flavours: ["Unflavored"],
//       weights: ["250g", "500g"],
//     },
//     {
//       id: 111113,
//       name: "ON Micronized Creatine",
//       oldPrice: "₹1,799",
//       price: "₹1,499",
//       discount: "17% ",
//       image: "/images/supplement_img/ON_creatine.png",
//       description: "Micronized creatine for strength and power.",
//       benefits: ["Enhances strength", "Improves power output", "Supports muscle recovery"],
//       nutrition: "5g creatine monohydrate per serving",
//       usage: "Mix one scoop with water or juice post-workout.",
//       flavours: ["Unflavored"],
//       weights: ["300g", "500g"],
//     },
//     {
//       id: 111114,
//       name: "MuscleBlaze Creatine Monohydrate",
//       oldPrice: "₹1,599",
//       price: "₹1,299",
//       discount: "18% ",
//       image: "/images/supplement_img/On_creatine.webp",
//       description: "Pure creatine monohydrate for athletic performance.",
//       benefits: ["Increases muscle endurance", "Boosts energy levels", "High purity"],
//       nutrition: "5g creatine monohydrate per serving",
//       usage: "Consume one serving daily with a carbohydrate source.",
//       flavours: ["Unflavored"],
//       weights: ["250g", "500g"],
//     },
//   ],
// };
