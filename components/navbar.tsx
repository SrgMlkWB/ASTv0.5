"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Home, Monitor, MessageSquare, GraduationCap, ShoppingCart, HelpCircle } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TroubleshootingGuide } from "@/components/troubleshooting-guide";
import { ContactForm } from "@/components/contact-form";

const links = [
  { name: "Home", href: "/", icon: Home },
  { name: "Devices", href: "/devices", icon: Monitor },
  { name: "Academy", href: "/academy", icon: GraduationCap },
  { name: "Shop", href: "/shop", icon: ShoppingCart },
    // { name: "Assist", href: "/assist", icon: MessageSquare },
];

export function Navbar() {
  const pathname = usePathname();
  const [isHelpOpen, setIsHelpOpen] = useState(false);

  return (
    <>
      <Dialog open={isHelpOpen} onOpenChange={setIsHelpOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogTitle className="text-xl font-semibold mb-4">
            Help & Support
          </DialogTitle>
          <Tabs defaultValue="troubleshooting" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="troubleshooting">Troubleshooting Guide</TabsTrigger>
              <TabsTrigger value="contact">Contact</TabsTrigger>
            </TabsList>
            <TabsContent value="troubleshooting">
              <TroubleshootingGuide />
            </TabsContent>
            <TabsContent value="contact">
              <ContactForm />
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>
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
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsHelpOpen(true)}
                className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-white/10"
              >
                <HelpCircle className="h-5 w-5" />
              </button>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>
{/* Mobile Navigation */}
<nav className="fixed bottom-0 left-0 right-0 bg-[#F18841] text-white md:hidden z-50 shadow-lg">
  <div className="flex justify-around h-16 w-full">
    {links.map((link) => {
      const Icon = link.icon;
      return (
        <Link
          key={link.name}
          href={link.href}
          className={`flex flex-col items-center justify-center text-center flex-1 p-1 transition-colors ${
            pathname === link.href ? "bg-white/20" : "hover:bg-white/10"
          }`}
        >
          <Icon className="h-5 w-5" />
          <span className="text-xs mt-1">{link.name}</span>
        </Link>
      );
    })}
    <button
      onClick={() => setIsHelpOpen(true)}
      className="flex flex-col items-center justify-center text-center flex-1 p-1 transition-colors hover:bg-white/10"
    >
      <HelpCircle className="h-5 w-5" />
      <span className="text-xs mt-1">Help</span>
    </button>
  </div>
</nav>

      {/* Mobile Navigation Spacer */}
      <div className="h-0 md:hidden" />
    </>
  );
}
