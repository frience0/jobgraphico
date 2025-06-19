import Navbar from "./navbar";
import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import Menu from "./menu";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";
import data from "@/lib/data";
import Search from "./search";

export default function Header() {
  return (
    <header className="sticky top-0 z-50">
      <Navbar
      // site={site}
      // headerMenus={data.headerMenus}
      // categories={categories}
      // translations={translations}
      />
    </header>
  );
}
