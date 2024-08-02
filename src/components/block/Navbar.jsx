import { CircleUser, Menu, Bell } from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "react-router-dom";
import { LuHeartHandshake, LuHome } from "react-icons/lu";
import { IoChatboxOutline } from "react-icons/io5";

const Navbar = () => {
  const navigationLinks = [
    {
      href: "/dashboard",
      label: "Home",
      icon: <LuHome />,
    },
    {
      href: "/pinjam",
      label: "Pinjam Aset",
      icon: <LuHeartHandshake />,
    },
    {
      href: "/konsultasi",
      label: "Konsultasi TIK",
      icon: <IoChatboxOutline />,
    },
  ];
  return (
    <header className="z-50 fixed bg-white w-full top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          href="#"
          className="flex items-center mr-4 gap-2 text-lg font-semibold md:text-base"
        >
          <img src="/assets/logo.webp" alt="" />
          <span className="sr-only">TIK INTERFACES</span>
        </Link>
        {navigationLinks.map((nav, idx) => (
          <Link
            key={idx}
            to={nav.href}
            className="text-foreground flex gap-2 text-nowrap items-center transition-colors hover:text-foreground"
          >
            {nav.icon}
            {nav.label}
          </Link>
        ))}
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="#"
              className="flex items-center mr-4 gap-2 text-lg font-semibold md:text-base"
            >
              <img src="/assets/logo.webp" alt="" />
              <span className="sr-only">TIK INTERFACES</span>
            </Link>
            {navigationLinks.map((nav, idx) => (
              <Link
                key={idx}
                to={nav.href}
                className="flex gap-2 items-center hover:text-foreground"
              >
                {nav.icon}
                {nav.label}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex w-full items-center justify-end gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <Link to="/notifikasi" className="p-2 hover:bg-slate-100 rounded-full">
          <Bell className="h-5 w-5" />
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full">
              <CircleUser className="h-5 w-5" />
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Navbar;
