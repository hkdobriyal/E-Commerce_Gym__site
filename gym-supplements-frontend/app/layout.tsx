// // gym-supplements-frontend\app\layout.tsx
// "use client"; 

// import { TogglerProvider } from "./context/toggler";
// import "./globals.css";
// import { Montserrat } from "next/font/google";
// import ScrollToTop from "./components/ScrollToTop";
// import {store}  from "./redux/store";
// import { Provider } from "react-redux";

// const montserrat = Montserrat({
//   weight: ["100", "200", "300", "400", "600", "700", "800", "900"],
//   subsets: ["latin"],
//   variable: "--font-montserrat",
// });



// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en" className="scroll-smooth">
//       <head>
//         <script
//           src="https://kit.fontawesome.com/23cc326a28.js"
//           crossOrigin="anonymous"
//         ></script>
//       </head>
//       <body className={`${montserrat.className}`}>
//         <Provider store={store}> 
//           <TogglerProvider>
//             {children}
//             <ScrollToTop />
//           </TogglerProvider>
//         </Provider>
//       </body>
//     </html>
//   );
// }


"use client"; 

import { TogglerProvider } from "./context/toggler";
import "./globals.css";
import { Montserrat } from "next/font/google";
import ScrollToTop from "./components/ScrollToTop";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { useEffect } from "react";
import { hydrateAuthState } from "./redux/slices/authSlice";
import { useDispatch } from "react-redux";

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

function ReduxProvider({ children }: { children: React.ReactNode }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(hydrateAuthState()); // Load auth state from localStorage
  }, [dispatch]);

  return children;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          src="https://kit.fontawesome.com/23cc326a28.js"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className={`${montserrat.className}`}>
        <Provider store={store}>
          <ReduxProvider>
            <TogglerProvider>
              {children}
              <ScrollToTop />
            </TogglerProvider>
          </ReduxProvider>
        </Provider>
      </body>
    </html>
  );
}
