"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  BarChart3,
  MousePointerClick,
  Search,
  TrendingUp,
  Building2,
  Sparkles,
  MapPin,
  Target,
  Wrench,
  FileText,
  Settings,
  Menu,
  X,
  ChevronRight,
  ShieldCheck,
  Database,
} from "lucide-react";
import {
  ODGI_NAV_ITEMS,
  ODGI_DATA_SOURCES,
  OdgiSectionSlug,
  getOdgiNavItemByPathname,
} from "@/lib/odgi/navigation";
import { cn } from "@/lib/utils";

const SECTION_ICONS: Record<OdgiSectionSlug, React.ComponentType<{ className?: string }>> = {
  overview: LayoutDashboard,
  "website-analytics": BarChart3,
  "visitor-behaviour": MousePointerClick,
  "search-console": Search,
  "seo-intelligence": TrendingUp,
  "competitor-intelligence": Building2,
  "geo-aeo": Sparkles,
  "local-seo": MapPin,
  "conversion-analytics": Target,
  "technical-seo": Wrench,
  reports: FileText,
  settings: Settings,
};

const NAV_GROUPS: Array<"Core" | "Acquisition & SEO" | "Market & AI" | "Operations"> = [
  "Core",
  "Acquisition & SEO",
  "Market & AI",
  "Operations",
];

interface OdgiShellProps {
  children: React.ReactNode;
}

export function OdgiShell({ children }: OdgiShellProps) {
  const pathname = usePathname() || "/odgi";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const activeItem = getOdgiNavItemByPathname(pathname);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const renderNavLinks = (onNavigate?: () => void) => (
    <nav aria-label="ODGI primary navigation" className="flex-1 overflow-y-auto px-3 py-4 space-y-5">
      {NAV_GROUPS.map((group) => {
        const items = ODGI_NAV_ITEMS.filter((item) => item.group === group);
        return (
          <div key={group} className="space-y-1">
            <p className="px-3 text-[11px] font-semibold uppercase tracking-wider text-[#90A895]">
              {group}
            </p>
            <ul className="space-y-0.5">
              {items.map((item) => {
                const Icon = SECTION_ICONS[item.id];
                const isActive = activeItem.id === item.id;
                return (
                  <li key={item.id}>
                    <Link
                      href={item.href}
                      onClick={onNavigate}
                      aria-current={isActive ? "page" : undefined}
                      className={cn(
                        "group relative flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A85F]",
                        isActive
                          ? "bg-[#23392A] text-white"
                          : "text-[#C9D7CC] hover:bg-[#1C2F22] hover:text-white"
                      )}
                    >
                      {isActive && (
                        <span
                          aria-hidden="true"
                          className="absolute left-0 top-1.5 bottom-1.5 w-1 rounded-r bg-[#D4A85F]"
                        />
                      )}
                      <Icon
                        className={cn(
                          "h-4 w-4 shrink-0",
                          isActive ? "text-[#D4A85F]" : "text-[#8DA693] group-hover:text-[#D4A85F]"
                        )}
                      />
                      <span className="truncate">{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </nav>
  );

  return (
    <div className="min-h-screen w-full bg-[#F6F8F6] text-[#17221B] font-sans flex">
      {/* Keyboard Skip Link */}
      <a
        href="#odgi-main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-[#142218] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white focus:ring-2 focus:ring-[#D4A85F]"
      >
        Skip to main dashboard content
      </a>

      {/* Desktop Sidebar */}
      <aside
        aria-label="ODGI navigation sidebar"
        className="hidden lg:flex lg:w-64 lg:shrink-0 lg:flex-col bg-[#142218] text-white border-r border-[#233728] sticky top-0 h-screen"
      >
        <div className="flex h-14 items-center gap-3 px-4 border-b border-[#233728]">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#23392A] border border-[#D4A85F]/40 text-[#D4A85F] font-heading font-bold text-sm">
            O
          </div>
          <div className="min-w-0">
            <p className="text-sm font-bold tracking-tight text-white truncate">
              ODGI Platform
            </p>
            <p className="text-[11px] text-[#9BB2A0] truncate">
              Omshree Growth Intelligence
            </p>
          </div>
        </div>

        {renderNavLinks()}

        <div className="border-t border-[#233728] p-3.5 space-y-2 bg-[#101C13]">
          <div className="flex items-center gap-2 text-xs text-[#C9D7CC]">
            <ShieldCheck className="h-4 w-4 text-[#D4A85F] shrink-0" />
            <span className="font-medium">No Patient PII Stored</span>
          </div>
          <p className="text-[11px] text-[#8DA693] leading-snug">
            Stage 1 Foundation Shell • Local Dev Preview Only
          </p>
        </div>
      </aside>

      {/* Mobile & Tablet Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 lg:hidden flex"
          role="dialog"
          aria-modal="true"
          aria-label="ODGI navigation drawer"
        >
          <div
            className="fixed inset-0 bg-black/50"
            aria-hidden="true"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="relative z-10 flex w-72 max-w-[85vw] flex-col bg-[#142218] text-white shadow-xl h-full">
            <div className="flex h-14 items-center justify-between px-4 border-b border-[#233728]">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#23392A] border border-[#D4A85F]/40 text-[#D4A85F] font-heading font-bold text-sm">
                  O
                </div>
                <div>
                  <p className="text-sm font-bold text-white">ODGI Platform</p>
                  <p className="text-[11px] text-[#9BB2A0]">Omshree Growth Intelligence</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close navigation menu"
                className="rounded-md p-1.5 text-[#C9D7CC] hover:bg-[#23392A] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A85F]"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {renderNavLinks(() => setMobileMenuOpen(false))}

            <div className="border-t border-[#233728] p-3.5 bg-[#101C13]">
              <div className="flex items-center gap-2 text-xs text-[#C9D7CC]">
                <ShieldCheck className="h-4 w-4 text-[#D4A85F] shrink-0" />
                <span>No Patient PII • Dev Preview</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Compact Top Header */}
        <header className="sticky top-0 z-30 h-14 bg-white border-b border-[#DCE3DD] px-4 sm:px-6 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={mobileMenuOpen}
              className="lg:hidden inline-flex items-center justify-center rounded-md p-1.5 text-[#2E3F33] hover:bg-[#EEF2EE] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#213714]"
            >
              <Menu className="h-5 w-5" />
            </button>

            {/* Breadcrumb Navigation */}
            <nav aria-label="Breadcrumb" className="flex items-center text-sm min-w-0">
              <ol className="flex items-center gap-1.5 min-w-0">
                <li>
                  <Link
                    href="/odgi"
                    className="font-semibold text-[#213714] hover:text-[#517B32] focus-visible:outline-none focus-visible:underline"
                  >
                    ODGI
                  </Link>
                </li>
                <li aria-hidden="true" className="text-[#8E9E92]">
                  <ChevronRight className="h-4 w-4" />
                </li>
                <li aria-current="page" className="truncate font-medium text-[#46574B]">
                  {activeItem.label}
                </li>
              </ol>
            </nav>
          </div>

          {/* Right Header Status Controls */}
          <div className="flex items-center gap-2.5 shrink-0">
            <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-[#F2F5F2] border border-[#D8E1DA] px-2.5 py-1 text-xs font-medium text-[#46574B]">
              <Database className="h-3.5 w-3.5 text-[#7A8C7E]" />
              <span>0 / {ODGI_DATA_SOURCES.length} Sources Connected</span>
            </span>

            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FEF8EC] border border-[#E6D0A3] px-2.5 py-1 text-xs font-semibold text-[#7A541C]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#B4833D]" aria-hidden="true" />
              <span>Dev Preview</span>
            </span>
          </div>
        </header>

        {/* Active Route Content */}
        <main id="odgi-main" className="flex-1 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          {children}
        </main>
      </div>
    </div>
  );
}
