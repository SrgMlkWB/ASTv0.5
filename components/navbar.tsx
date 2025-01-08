"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Home, Monitor, MessageSquare, GraduationCap, ShoppingCart } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

const links = [
  { name: "Home", href: "/", icon: Home },
  { name: "Devices", href: "/devices", icon: Monitor },
  { name: "Assist", href: "/assist", icon: MessageSquare },
  { name: "Academy", href: "/academy", icon: GraduationCap },
  { name: "Shop", href: "/shop", icon: ShoppingCart },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="bg-[#F18841] text-white hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link href="/">
                  <div className="relative w-40 h-16 flex items-center justify-center">
                    <Image
                      src="/assets/icons/logo_3.png"
                      alt="WinbackASSIST"
                      width={160}
                      height={64}
                      className="object-contain drop-shadow-[0_4px_4px_rgba(0,0,0,0.3)]"
                      priority
                    />
                  </div>
                </Link>
              </div>
              <div className="ml-10 flex items-center space-x-4">
                {links.map((link) => {
                  const Icon = link.icon;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        pathname === link.href ? "bg-white/20" : "hover:bg-white/10"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                      <span>{link.name}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-[#F18841] text-white md:hidden z-50 shadow-lg">
        <div className="grid grid-cols-5 h-16">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`flex flex-col items-center justify-center w-full h-full px-1 transition-colors ${
                  pathname === link.href ? "bg-white text-[#F18841]" : "text-white hover:bg-white/10"
                }`}
              >
                <Icon className="h-6 w-6 mb-1" strokeWidth={2} />
                <span className="text-[10px] font-medium leading-none whitespace-nowrap">{link.name}</span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Mobile Navigation Spacer */}
      <div className="h-16 md:hidden" />
    </>
  );
}
