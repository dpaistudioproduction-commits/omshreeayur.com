"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function DesktopNavigation() {
  return (
    <NavigationMenu className="max-w-full">
      <NavigationMenuList className="gap-0 xl:gap-0.5 2xl:gap-1.5 flex-nowrap">
        {/* 1. About */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent text-xs xl:text-[12.5px] 2xl:text-[14px] font-semibold text-[#66371B] hover:text-[#3D5F26] data-[state=open]:text-[#3D5F26] h-8 xl:h-8.5 2xl:h-9 px-1.5 xl:px-2 2xl:px-3.5 transition-colors cursor-pointer whitespace-nowrap [&>svg]:size-2.5 [&>svg]:ml-0.5">
            About
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[240px] gap-1 p-3 bg-[#F7F1E1] rounded-2xl shadow-xl border border-[#DBCFA8]">
              <li>
                <Link
                  href="/about"
                  className="block p-2.5 text-sm font-medium text-[#66371B] hover:text-[#3D5F26] hover:bg-[#E3D8C1]/60 rounded-xl transition-colors"
                >
                  Our Hospital
                </Link>
              </li>
              <li>
                <Link
                  href="/about/history"
                  className="block p-2.5 text-sm font-medium text-[#66371B] hover:text-[#3D5F26] hover:bg-[#E3D8C1]/60 rounded-xl transition-colors"
                >
                  Heritage & Legacy (1880)
                </Link>
              </li>
              <li>
                <Link
                  href="/about/doctors"
                  className="block p-2.5 text-sm font-medium text-[#66371B] hover:text-[#3D5F26] hover:bg-[#E3D8C1]/60 rounded-xl transition-colors"
                >
                  Our Doctors & Team
                </Link>
              </li>
              <li>
                <Link
                  href="/about/why-omshree"
                  className="block p-2.5 text-sm font-medium text-[#66371B] hover:text-[#3D5F26] hover:bg-[#E3D8C1]/60 rounded-xl transition-colors"
                >
                  Why Choose Us
                </Link>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* 2. Ayurveda */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent text-xs xl:text-[12.5px] 2xl:text-[14px] font-semibold text-[#66371B] hover:text-[#3D5F26] data-[state=open]:text-[#3D5F26] h-8 xl:h-8.5 2xl:h-9 px-1.5 xl:px-2 2xl:px-3.5 transition-colors cursor-pointer whitespace-nowrap [&>svg]:size-2.5 [&>svg]:ml-0.5">
            Ayurveda
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[240px] gap-1 p-3 bg-[#F7F1E1] rounded-2xl shadow-xl border border-[#DBCFA8]">
              <li>
                <Link
                  href="/ayurveda"
                  className="block p-2.5 text-sm font-medium text-[#66371B] hover:text-[#3D5F26] hover:bg-[#E3D8C1]/60 rounded-xl transition-colors"
                >
                  Understanding Ayurveda
                </Link>
              </li>
              <li>
                <Link
                  href="/ayurveda/kerala"
                  className="block p-2.5 text-sm font-medium text-[#66371B] hover:text-[#3D5F26] hover:bg-[#E3D8C1]/60 rounded-xl transition-colors"
                >
                  Kerala Ayurveda
                </Link>
              </li>
              <li>
                <Link
                  href="/ayurveda/panchakarma"
                  className="block p-2.5 text-sm font-medium text-[#66371B] hover:text-[#3D5F26] hover:bg-[#E3D8C1]/60 rounded-xl transition-colors"
                >
                  Panchakarma Therapies
                </Link>
              </li>
              <li>
                <Link
                  href="/ayurveda/consultation"
                  className="block p-2.5 text-sm font-medium text-[#66371B] hover:text-[#3D5F26] hover:bg-[#E3D8C1]/60 rounded-xl transition-colors"
                >
                  Consultation Process
                </Link>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* 3. Treatments */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent text-xs xl:text-[12.5px] 2xl:text-[14px] font-semibold text-[#66371B] hover:text-[#3D5F26] data-[state=open]:text-[#3D5F26] h-8 xl:h-8.5 2xl:h-9 px-1.5 xl:px-2 2xl:px-3.5 transition-colors cursor-pointer whitespace-nowrap [&>svg]:size-2.5 [&>svg]:ml-0.5">
            Treatments
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[240px] gap-1 p-3 bg-[#F7F1E1] rounded-2xl shadow-xl border border-[#DBCFA8]">
              <li>
                <Link
                  href="/treatments"
                  className="block p-2.5 text-sm font-medium text-[#66371B] hover:text-[#3D5F26] hover:bg-[#E3D8C1]/60 rounded-xl transition-colors"
                >
                  Ayurvedic Treatments
                </Link>
              </li>
              <li>
                <Link
                  href="/treatments/therapies"
                  className="block p-2.5 text-sm font-medium text-[#66371B] hover:text-[#3D5F26] hover:bg-[#E3D8C1]/60 rounded-xl transition-colors"
                >
                  Signature Therapies
                </Link>
              </li>
              <li>
                <Link
                  href="/treatments/heart-disease"
                  className="block p-2.5 text-sm font-medium text-[#66371B] hover:text-[#3D5F26] hover:bg-[#E3D8C1]/60 rounded-xl transition-colors"
                >
                  Heart Disease
                </Link>
              </li>
              <li>
                <Link
                  href="/treatments/liver-disease"
                  className="block p-2.5 text-sm font-medium text-[#66371B] hover:text-[#3D5F26] hover:bg-[#E3D8C1]/60 rounded-xl transition-colors"
                >
                  Liver Disease
                </Link>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* 4. Conditions */}
        <NavigationMenuItem>
          <NavigationMenuLink
            render={<Link href="/conditions" />}
            className={cn(
              navigationMenuTriggerStyle(),
              "bg-transparent text-xs xl:text-[12.5px] 2xl:text-[14px] font-semibold text-[#66371B] hover:text-[#3D5F26] h-8 xl:h-8.5 2xl:h-9 px-1.5 xl:px-2 2xl:px-3.5 whitespace-nowrap cursor-pointer transition-colors"
            )}
          >
            Conditions
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* 4.5. Products */}
        <NavigationMenuItem>
          <NavigationMenuLink
            render={<Link href="/products" />}
            className={cn(
              navigationMenuTriggerStyle(),
              "bg-transparent text-xs xl:text-[12.5px] 2xl:text-[14px] font-semibold text-[#66371B] hover:text-[#3D5F26] h-8 xl:h-8.5 2xl:h-9 px-1.5 xl:px-2 2xl:px-3.5 whitespace-nowrap cursor-pointer transition-colors"
            )}
          >
            Products
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* 4.6. Testimonials */}
        <NavigationMenuItem>
          <NavigationMenuLink
            render={<Link href="/testimonials" />}
            className={cn(
              navigationMenuTriggerStyle(),
              "bg-transparent text-xs xl:text-[12.5px] 2xl:text-[14px] font-semibold text-[#66371B] hover:text-[#3D5F26] h-8 xl:h-8.5 2xl:h-9 px-1.5 xl:px-2 2xl:px-3.5 whitespace-nowrap cursor-pointer transition-colors"
            )}
          >
            Testimonials
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* 5. Patient Care */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent text-xs xl:text-[12.5px] 2xl:text-[14px] font-semibold text-[#66371B] hover:text-[#3D5F26] data-[state=open]:text-[#3D5F26] h-8 xl:h-8.5 2xl:h-9 px-1.5 xl:px-2 2xl:px-3.5 transition-colors cursor-pointer whitespace-nowrap [&>svg]:size-2.5 [&>svg]:ml-0.5">
            Patient Care
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[240px] gap-1 p-3 bg-[#F7F1E1] rounded-2xl shadow-xl border border-[#DBCFA8]">
              <li>
                <Link
                  href="/patient-care"
                  className="block p-2.5 text-sm font-medium text-[#66371B] hover:text-[#3D5F26] hover:bg-[#E3D8C1]/60 rounded-xl transition-colors"
                >
                  Care Overview
                </Link>
              </li>
              <li>
                <Link
                  href="/patient-care/facilities"
                  className="block p-2.5 text-sm font-medium text-[#66371B] hover:text-[#3D5F26] hover:bg-[#E3D8C1]/60 rounded-xl transition-colors"
                >
                  In-Patient Facilities
                </Link>
              </li>
              <li>
                <Link
                  href="/patient-care/journey"
                  className="block p-2.5 text-sm font-medium text-[#66371B] hover:text-[#3D5F26] hover:bg-[#E3D8C1]/60 rounded-xl transition-colors"
                >
                  Patient Journey
                </Link>
              </li>
              <li>
                <Link
                  href="/patient-care/tariff"
                  className="block p-2.5 text-sm font-medium text-[#66371B] hover:text-[#3D5F26] hover:bg-[#E3D8C1]/60 rounded-xl transition-colors"
                >
                  Tariff & Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/patient-care/challenging-offer"
                  className="block p-2.5 text-sm font-medium text-[#66371B] hover:text-[#3D5F26] hover:bg-[#E3D8C1]/60 rounded-xl transition-colors"
                >
                  Challenging Offer
                </Link>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* 5.5. Blog */}
        <NavigationMenuItem>
          <NavigationMenuLink
            render={<Link href="/blog" />}
            className={cn(
              navigationMenuTriggerStyle(),
              "bg-transparent text-xs xl:text-[12.5px] 2xl:text-[14px] font-semibold text-[#66371B] hover:text-[#3D5F26] h-8 xl:h-8.5 2xl:h-9 px-1.5 xl:px-2 2xl:px-3.5 whitespace-nowrap cursor-pointer transition-colors"
            )}
          >
            Blog
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* 6. Contact */}
        <NavigationMenuItem>
          <NavigationMenuLink
            render={<Link href="/contact" />}
            className={cn(
              navigationMenuTriggerStyle(),
              "bg-transparent text-xs xl:text-[12.5px] 2xl:text-[14px] font-semibold text-[#66371B] hover:text-[#3D5F26] h-8 xl:h-8.5 2xl:h-9 px-1.5 xl:px-2 2xl:px-3.5 whitespace-nowrap cursor-pointer transition-colors"
            )}
          >
            Contact
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
