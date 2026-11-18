export type OdgiSectionSlug =
  | "overview"
  | "website-analytics"
  | "visitor-behaviour"
  | "search-console"
  | "seo-intelligence"
  | "competitor-intelligence"
  | "geo-aeo"
  | "local-seo"
  | "conversion-analytics"
  | "technical-seo"
  | "reports"
  | "settings";

export interface OdgiNavItem {
  id: OdgiSectionSlug;
  label: string;
  href: string;
  group: "Core" | "Acquisition & SEO" | "Market & AI" | "Operations";
  summary: string;
  plannedSource: string;
}

export const ODGI_NAV_ITEMS: OdgiNavItem[] = [
  {
    id: "overview",
    label: "Overview",
    href: "/odgi",
    group: "Core",
    summary: "Unified executive view of hospital web reach, search visibility, and aggregated conversion metrics.",
    plannedSource: "Multiple connectors (not connected)",
  },
  {
    id: "website-analytics",
    label: "Website Analytics",
    href: "/odgi/website-analytics",
    group: "Core",
    summary: "Aggregated user acquisition, sessions, engagement, and top landing pages across hospital routes.",
    plannedSource: "Google Analytics 4 Data API",
  },
  {
    id: "visitor-behaviour",
    label: "Visitor Behaviour",
    href: "/odgi/visitor-behaviour",
    group: "Core",
    summary: "Privacy-safe navigation flows, scroll depth, and interaction diagnostics with strict patient-field exclusion.",
    plannedSource: "Pending privacy-reviewed telemetry evaluation",
  },
  {
    id: "search-console",
    label: "Search Console",
    href: "/odgi/search-console",
    group: "Acquisition & SEO",
    summary: "Organic search clicks, impressions, average position, and query-level visibility for omshreeayur.com.",
    plannedSource: "Google Search Console API",
  },
  {
    id: "seo-intelligence",
    label: "SEO Intelligence",
    href: "/odgi/seo-intelligence",
    group: "Acquisition & SEO",
    summary: "Specialty condition page performance, keyword gaps, cannibalization monitoring, and ranking opportunities.",
    plannedSource: "Search Console & internal route inventory",
  },
  {
    id: "competitor-intelligence",
    label: "Competitor Intelligence",
    href: "/odgi/competitor-intelligence",
    group: "Market & AI",
    summary: "Benchmarking across Kottayam, Kerala, and national Ayurvedic hospital peers.",
    plannedSource: "Scheduled SERP & benchmark pipeline",
  },
  {
    id: "geo-aeo",
    label: "GEO / AEO Visibility",
    href: "/odgi/geo-aeo",
    group: "Market & AI",
    summary: "Answer-engine citation tracking and structured entity visibility for clinical and Ayurvedic queries.",
    plannedSource: "Scheduled AEO citation monitor",
  },
  {
    id: "local-seo",
    label: "Local SEO",
    href: "/odgi/local-seo",
    group: "Market & AI",
    summary: "Vayala, Kottayam, and Kerala regional search discovery, local pack visibility, and map actions.",
    plannedSource: "Local search & business profile connectors",
  },
  {
    id: "conversion-analytics",
    label: "Conversion Analytics",
    href: "/odgi/conversion-analytics",
    group: "Operations",
    summary: "Aggregated consultation enquiries, WhatsApp clicks, and phone CTA counts without any patient PII.",
    plannedSource: "Aggregated event & funnel counters",
  },
  {
    id: "technical-seo",
    label: "Technical SEO",
    href: "/odgi/technical-seo",
    group: "Operations",
    summary: "Sitemap coverage, canonical consistency, structured data health, and Core Web Vitals telemetry.",
    plannedSource: "Automated crawl & CWV checks",
  },
  {
    id: "reports",
    label: "Reports",
    href: "/odgi/reports",
    group: "Operations",
    summary: "Exportable executive summaries and scheduled leadership performance digests.",
    plannedSource: "Report generator (awaiting live data)",
  },
  {
    id: "settings",
    label: "Settings",
    href: "/odgi/settings",
    group: "Operations",
    summary: "Connector configuration status, access policies, and data governance controls.",
    plannedSource: "Admin configuration (Stage 2+)",
  },
];

export interface OdgiDataSourceStatus {
  id: string;
  name: string;
  status: "Not connected" | "Active";
  detail: string;
}

export const ODGI_DATA_SOURCES: OdgiDataSourceStatus[] = [
  {
    id: "ga4",
    name: "Google Analytics 4",
    status: "Not connected",
    detail: "Awaiting server-side Data API configuration",
  },
  {
    id: "gsc",
    name: "Search Console",
    status: "Not connected",
    detail: "Awaiting Search Console API integration",
  },
  {
    id: "behaviour",
    name: "Visitor Behaviour",
    status: "Active",
    detail: "First-party Heatmap Studio + Clarity (prod)",
  },
  {
    id: "conversions",
    name: "Conversion Pipeline",
    status: "Not connected",
    detail: "Awaiting anonymized aggregate counters",
  },
];

export interface OdgiOverviewKpi {
  id: string;
  label: string;
  statusLabel: "Not connected" | "Awaiting data";
  subStatus: string;
  sourceName: string;
  metricDescription: string;
}

export const ODGI_OVERVIEW_KPIS: OdgiOverviewKpi[] = [
  {
    id: "website-users",
    label: "Website Users",
    statusLabel: "Not connected",
    subStatus: "Awaiting data",
    sourceName: "GA4",
    metricDescription: "Unique visitors across public hospital routes.",
  },
  {
    id: "sessions",
    label: "Sessions",
    statusLabel: "Not connected",
    subStatus: "Awaiting data",
    sourceName: "GA4",
    metricDescription: "Total browsing sessions on omshreeayur.com.",
  },
  {
    id: "organic-clicks",
    label: "Organic Clicks",
    statusLabel: "Not connected",
    subStatus: "Awaiting data",
    sourceName: "Search Console",
    metricDescription: "Verified organic search clicks from Google Search.",
  },
  {
    id: "search-impressions",
    label: "Search Impressions",
    statusLabel: "Not connected",
    subStatus: "Awaiting data",
    sourceName: "Search Console",
    metricDescription: "Total appearances of hospital pages in search results.",
  },
  {
    id: "average-search-position",
    label: "Average Search Position",
    statusLabel: "Not connected",
    subStatus: "Awaiting data",
    sourceName: "Search Console",
    metricDescription: "Mean ranking position across tracked search queries.",
  },
  {
    id: "enquiry-conversions",
    label: "Enquiry Conversions",
    statusLabel: "Awaiting data",
    subStatus: "Not connected",
    sourceName: "Aggregated Events",
    metricDescription: "De-identified consultation enquiry count (zero patient PII).",
  },
];

export function getOdgiNavItemByPathname(pathname: string): OdgiNavItem {
  const normalized = pathname.replace(/\/+$/, "") || "/odgi";
  return (
    ODGI_NAV_ITEMS.find((item) => item.href === normalized) ||
    ODGI_NAV_ITEMS[0]
  );
}

export function getOdgiSubSection(slug: string): OdgiNavItem | undefined {
  if (slug === "overview") {
    return undefined;
  }
  return ODGI_NAV_ITEMS.find((item) => item.id === slug);
}
