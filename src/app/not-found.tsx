import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home, Phone, HeartHandshake } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 py-16 bg-slate-50 text-center font-sans">
      <div className="max-w-md mx-auto space-y-6">
        <div className="h-20 w-20 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto text-3xl font-heading font-bold">
          404
        </div>
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-slate-900">
          Page Not Found
        </h1>
        <p className="text-slate-600 leading-relaxed text-base">
          The page you are looking for does not exist, has been moved, or is no longer available. Please explore our treatments or return to the homepage.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button render={<Link href="/" />} size="lg" className="w-full sm:w-auto bg-emerald-700 hover:bg-emerald-800 text-white rounded-full px-6 flex items-center gap-2">
            <Home className="h-4 w-4" /> Return Home
          </Button>
          <Button render={<Link href="/patient-care/consultation" />} variant="outline" size="lg" className="w-full sm:w-auto border-emerald-700 text-emerald-700 hover:bg-emerald-50 rounded-full px-6 flex items-center gap-2">
            <HeartHandshake className="h-4 w-4" /> Book Consultation
          </Button>
        </div>

        <div className="pt-8 border-t border-slate-200 text-xs text-slate-500">
          Need immediate assistance? Call our reception at{" "}
          <a href="tel:+914822229434" className="text-emerald-700 font-bold hover:underline">
            +91 4822 229434
          </a>
        </div>
      </div>
    </div>
  );
}
