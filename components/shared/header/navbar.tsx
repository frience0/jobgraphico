// "use client";

// import { MenuItem } from "@/types";
// import Menu from "./menu";
// import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useState } from "react";
// import data from "@/lib/data";

// interface NavbarProps {
//   //   site: Site
//   headerMenus: MenuItem[];
//   //   categories: string[]
//   //   translations: {
//   //     all: string
//   //     searchSite: string
//   //   }
// }

// const Navbar = ({ headerMenus }: NavbarProps) => {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.scrollY;
//       setIsScrolled(scrollPosition > 50);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <>
//       <nav
//         className={`mx-auto px-4 sm:px-6 lg:px-8 transition-all bg-white ${
//           isScrolled
//             ? "fixed top-0 left-0 right-0 shadow-md z-40 duration-100"
//             : "relative duration-100 mt-10"
//         }`}
//       >
//         <div className="flex justify-between items-center h-16">
//           {/* Logo (centered on mobile/tablet, left on desktop) */}
//           <div className="flex-1 flex justify-center lg:justify-start">
//             <Link href="/">
//               <Image src={""} alt={""} width={150} height={50} />
//             </Link>

//             {/* Desktop Navigation (visible only on lg and above) */}
//             <nav className="hidden lg:flex space-x-8 lg:ml-10">
//               {/* {headerMenus.map((menu) => (
//                 // <DropdownMenu
//                 //   key={menu.name}
//                 //   label={menu.name}
//                 //   items={menu.subItems}
//                 // />
//                 dropdown
//               ))} */}
//               {data.headerMenus.map((menu) => (
//                 <Link
//                   href={menu.href}
//                   key={menu.href}
//                   className="header-button !p-2"
//                 >
//                   {menu.name}
//                 </Link>
//               ))}
//             </nav>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;

import React from "react";

const navbar = () => {
  return <div>asdasdasd</div>;
};

export default navbar;
