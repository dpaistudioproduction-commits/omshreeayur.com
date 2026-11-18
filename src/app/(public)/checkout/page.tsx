"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import {
  ShieldCheck,
  CreditCard,
  Lock,
  ArrowLeft,
  CheckCircle2,
  Sparkles,
  HelpCircle,
  FileCheck2,
  Truck,
  MapPin,
  User,
  Phone,
  Mail,
  Home,
  Navigation,
  MessageCircle,
  Printer,
  AlertCircle,
  Clock,
  Plus,
  Minus
} from "lucide-react";
import RazorpayCheckoutButton from "@/components/checkout/RazorpayCheckoutButton";

interface PackOption {
  id: string;
  size: string;
  weightGrams: number;
  price: number; // in INR
  badge?: string;
  popular?: boolean;
}

const PACK_OPTIONS: PackOption[] = [
  {
    id: "75g",
    size: "75g Bottle",
    weightGrams: 75,
    price: 160,
    badge: "Trial Size",
  },
  {
    id: "150g",
    size: "150g Bottle",
    weightGrams: 150,
    price: 310,
    badge: "Most Popular",
    popular: true,
  },
  {
    id: "300g",
    size: "300g Bottle",
    weightGrams: 300,
    price: 610,
    badge: "Best Value",
  },
];

const INDIAN_STATES = [
  "Kerala",
  "Tamil Nadu",
  "Karnataka",
  "Andhra Pradesh",
  "Telangana",
  "Maharashtra",
  "Delhi",
  "Gujarat",
  "Uttar Pradesh",
  "West Bengal",
  "Rajasthan",
  "Madhya Pradesh",
  "Punjab",
  "Haryana",
  "Bihar",
  "Odisha",
  "Assam",
  "Jharkhand",
  "Chhattisgarh",
  "Uttarakhand",
  "Goa",
  "Himachal Pradesh",
  "Tripura",
  "Meghalaya",
  "Manipur",
  "Nagaland",
  "Puducherry",
  "Chandigarh",
  "Jammu and Kashmir",
  "Other Indian State / UT",
  "International (Outside India)"
];

function CheckoutContent() {
  const searchParams = useSearchParams();
  const packParam = searchParams.get("pack");

  // Determine initial pack from URL query param (?pack=75g, 150g, 300g)
  const initialPack =
    PACK_OPTIONS.find((p) => p.id === packParam) || PACK_OPTIONS[1]; // default 150g

  const [selectedPack, setSelectedPack] = useState<PackOption>(initialPack);
  const [quantity, setQuantity] = useState<number>(1);

  // Sync state if pack query param changes
  useEffect(() => {
    if (packParam) {
      const match = PACK_OPTIONS.find((p) => p.id === packParam);
      if (match) setSelectedPack(match);
    }
  }, [packParam]);

  // Customer Shipping & Delivery Form Data
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    landmark: "",
    city: "",
    state: "Kerala",
    pincode: "",
    deliveryNotes: "",
  });

  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [orderConfirmed, setOrderConfirmed] = useState<boolean>(false);
  const [confirmedOrderData, setConfirmedOrderData] = useState<{
    orderId: string;
    paymentId: string;
  } | null>(null);

  // Calculate pricing & delivery charges (₹50 below ₹500, Free for ₹500 and above)
  const subtotalRupees = selectedPack.price * quantity;
  const isFreeDelivery = subtotalRupees >= 500;
  const deliveryCharge = isFreeDelivery ? 0 : 50;
  const totalPayableRupees = subtotalRupees + deliveryCharge;
  const currentAmountPaise = totalPayableRupees * 100;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear field-specific error as user types
    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  // Validation function called before triggering payment
  const validateForm = (): boolean => {
    const errors: Record<string, string> = {};

    if (!formData.fullName || formData.fullName.trim().length < 2) {
      errors.fullName = "Please enter your full name.";
    }

    const cleanPhone = formData.phone.replace(/\D/g, "");
    if (!formData.phone || cleanPhone.length < 10) {
      errors.phone = "Please enter a valid 10-digit mobile number.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email.trim())) {
      errors.email = "Please enter a valid email address for order confirmation.";
    }

    if (!formData.address || formData.address.trim().length < 5) {
      errors.address = "Please enter complete street address, house/flat number.";
    }

    if (!formData.city || formData.city.trim().length < 2) {
      errors.city = "Please enter your city / town.";
    }

    if (!formData.state) {
      errors.state = "Please select your state.";
    }

    const cleanPin = formData.pincode.trim();
    if (!cleanPin || cleanPin.length < 3) {
      errors.pincode = "Please enter a valid postal code / PIN code.";
    }

    setFieldErrors(errors);

    if (Object.keys(errors).length > 0) {
      // Scroll to the first error input smoothly
      const firstErrorField = Object.keys(errors)[0];
      const el = document.getElementById(firstErrorField);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        el.focus();
      }
      return false;
    }

    return true;
  };

  // WhatsApp follow-up link after order confirmation
  const getConfirmationWhatsAppUrl = () => {
    if (!confirmedOrderData) return "https://wa.me/919846992789";
    const deliveryText = isFreeDelivery ? "FREE" : "₹50";
    const text = encodeURIComponent(
      `Hello Omshree Sidha Hospital Pharmacy,\n\nI have completed the online payment for my Kafastha order.\n• Order ID: ${confirmedOrderData.orderId}\n• Payment ID: ${confirmedOrderData.paymentId}\n• Name: ${formData.fullName}\n• Pack: ${selectedPack.size} (Qty: ${quantity})\n• Total Paid: ₹${totalPayableRupees} (Subtotal: ₹${subtotalRupees}, Delivery: ${deliveryText})\n• Delivery PIN: ${formData.pincode}\n\nPlease confirm dispatch details.`
    );
    return `https://wa.me/919846992789?text=${text}`;
  };

  // Render Confirmation Screen when payment succeeds
  if (orderConfirmed && confirmedOrderData) {
    return (
      <div className="min-h-screen bg-[#FBF7EE] text-[#3A2A1C] font-sans py-12 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-[#DBCFA8] shadow-lg text-center space-y-6">
          <div className="w-20 h-20 bg-[#517B32]/10 text-[#517B32] rounded-full flex items-center justify-center mx-auto ring-8 ring-[#517B32]/10">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#517B32] block">
              Payment Verified &amp; Order Placed
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl font-bold text-[#2B1A0E]">
              Thank You, {formData.fullName}!
            </h1>
            <p className="text-sm text-[#5C4A36] max-w-md mx-auto leading-relaxed">
              Your order for <strong>Kafastha Ayurvedic Granules</strong> has been received by Omshree Sidha Hospital Pharmacy. A confirmation email has been dispatched to <strong>{formData.email}</strong>.
            </p>
          </div>

          {/* Reference IDs Box */}
          <div className="p-4 rounded-2xl bg-[#FAF7F0] border border-[#E3D8C1] grid sm:grid-cols-2 gap-3 text-left text-xs">
            <div>
              <span className="text-[#81754B] block">Razorpay Order Reference</span>
              <strong className="font-mono text-sm text-[#2B1A0E]">{confirmedOrderData.orderId}</strong>
            </div>
            <div>
              <span className="text-[#81754B] block">Payment ID</span>
              <strong className="font-mono text-sm text-[#517B32]">{confirmedOrderData.paymentId}</strong>
            </div>
          </div>

          {/* Order Items & Payment Breakdown */}
          <div className="text-left p-5 rounded-2xl bg-white border border-[#E3D8C1] space-y-3">
            <h3 className="font-heading font-bold text-base text-[#2B1A0E] flex items-center justify-between">
              <span>Order Summary</span>
              <span className="text-sm font-bold text-[#517B32]">Paid: ₹{totalPayableRupees}</span>
            </h3>
            <div className="text-xs text-[#5C4A36] space-y-1.5 pt-1 border-t border-[#E3D8C1]/60">
              <div className="flex justify-between">
                <span>Kafastha Ayurvedic Granules ({selectedPack.size} × {quantity})</span>
                <span className="text-[#2B1A0E] font-medium">₹{subtotalRupees}</span>
              </div>
              <div className="flex justify-between">
                <span>Doorstep Delivery Charges</span>
                <span className={isFreeDelivery ? "text-[#517B32] font-semibold" : "text-[#2B1A0E] font-medium"}>
                  {isFreeDelivery ? "FREE (Orders ₹500+)" : "₹50"}
                </span>
              </div>
              <div className="flex justify-between text-sm font-bold text-[#2B1A0E] pt-2 border-t border-[#E3D8C1]/60">
                <span>Total Amount Paid</span>
                <span className="text-[#517B32]">₹{totalPayableRupees}</span>
              </div>
            </div>
          </div>

          {/* Shipping Address Summary */}
          <div className="text-left p-5 rounded-2xl bg-white border border-[#E3D8C1] space-y-3">
            <h3 className="font-heading font-bold text-base text-[#2B1A0E] flex items-center gap-2">
              <Truck className="w-4 h-4 text-[#517B32]" />
              <span>Shipping &amp; Delivery Destination</span>
            </h3>
            <div className="text-xs text-[#5C4A36] leading-relaxed space-y-1">
              <p className="font-semibold text-[#2B1A0E] text-sm">{formData.fullName}</p>
              <p>{formData.address}</p>
              {formData.landmark && <p>Landmark: {formData.landmark}</p>}
              <p>{formData.city}, {formData.state} — <strong>{formData.pincode}</strong></p>
              <p>Contact Phone: <strong>+91 {formData.phone}</strong></p>
            </div>
          </div>

          {/* Dispatch Notice */}
          <div className="p-4 rounded-2xl bg-[#517B32]/10 border border-[#517B32]/20 flex items-start gap-3 text-left">
            <Clock className="w-5 h-5 text-[#517B32] shrink-0 mt-0.5" />
            <div className="text-xs text-[#2F4A1E] leading-relaxed">
              <strong>Pharmacy Dispatch Timeline:</strong> Fresh hospital batch prepared under GMP standards in Vayala, Kottayam, Kerala. Your package will be dispatched within <strong>24 to 48 hours</strong> with reliable doorstep delivery to your address.
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <a
              href={getConfirmationWhatsAppUrl()}
              target="_blank"
              rel="noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] text-white hover:bg-[#1EBE5D] px-6 py-3.5 text-sm font-bold shadow-md transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Get Dispatch Updates on WhatsApp</span>
            </a>

            <Link
              href="/products/kafastha"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#DBCFA8] bg-white text-[#2B1A0E] hover:bg-[#FAF7F0] px-6 py-3.5 text-sm font-semibold transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Return to Kafastha Details</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FBF7EE] text-[#3A2A1C] font-sans pb-16">
      {/* Top Navigation Bar */}
      <header className="border-b border-[#E3D8C1] bg-white sticky top-0 z-30 shadow-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
          <Link
            href="/products/kafastha"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#517B32] hover:text-[#213714] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Kafastha Product</span>
          </Link>

          <div className="flex items-center gap-2 text-xs text-[#81754B]">
            <Lock className="w-3.5 h-3.5 text-[#517B32]" />
            <span className="font-medium">256-Bit SSL Encrypted Checkout</span>
          </div>
        </div>
      </header>

      {/* Main Checkout Container */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Header Breadcrumbs & Title */}
        <div className="max-w-3xl mb-8 space-y-2">
          <nav className="flex items-center gap-2 text-xs text-[#81754B]">
            <Link href="/" className="hover:text-[#517B32]">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-[#517B32]">Pharmacy Products</Link>
            <span>/</span>
            <Link href="/products/kafastha" className="hover:text-[#517B32]">Kafastha</Link>
            <span>/</span>
            <span className="text-[#2B1A0E] font-medium">Checkout</span>
          </nav>

          <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#2B1A0E]">
            Secure Order &amp; Delivery Checkout
          </h1>
          <p className="text-xs sm:text-sm text-[#5C4A36]">
            Please enter your complete postal shipping address and contact details to receive your fresh hospital formulation directly from Omshree Sidha Hospital Pharmacy.
          </p>
        </div>

        {/* 2-Column Responsive Checkout Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: Customer Delivery & Address Details (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Form Section 1: Customer Contact Details */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E3D8C1] shadow-xs space-y-5">
              <div className="flex items-center gap-3 pb-3 border-b border-[#E3D8C1]">
                <div className="w-8 h-8 rounded-full bg-[#517B32]/10 text-[#517B32] flex items-center justify-center font-bold text-sm">
                  1
                </div>
                <div>
                  <h2 className="font-heading font-bold text-base sm:text-lg text-[#2B1A0E]">
                    Contact Information
                  </h2>
                  <p className="text-xs text-[#81754B]">For dispatch notifications and delivery coordination</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div className="sm:col-span-2 space-y-1.5">
                  <label htmlFor="fullName" className="text-xs font-semibold text-[#2B1A0E] flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#517B32]" />
                    <span>Full Name *</span>
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="e.g. Rajesh Kumar / Anitha Menon"
                    className={`w-full px-4 py-3 rounded-2xl border bg-white text-sm focus:outline-none transition-all ${
                      fieldErrors.fullName
                        ? "border-red-500 focus:ring-2 focus:ring-red-400"
                        : "border-[#E3D8C1] focus:ring-2 focus:ring-[#517B32]"
                    }`}
                  />
                  {fieldErrors.fullName && (
                    <p className="text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {fieldErrors.fullName}
                    </p>
                  )}
                </div>

                {/* Mobile / WhatsApp Number */}
                <div className="space-y-1.5">
                  <label htmlFor="phone" className="text-xs font-semibold text-[#2B1A0E] flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#517B32]" />
                    <span>Mobile / WhatsApp Number *</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-3 text-xs font-bold text-[#81754B]">
                      +91
                    </span>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="98469 92789"
                      className={`w-full pl-12 pr-4 py-3 rounded-2xl border bg-white text-sm focus:outline-none transition-all ${
                        fieldErrors.phone
                          ? "border-red-500 focus:ring-2 focus:ring-red-400"
                          : "border-[#E3D8C1] focus:ring-2 focus:ring-[#517B32]"
                      }`}
                    />
                  </div>
                  {fieldErrors.phone && (
                    <p className="text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {fieldErrors.phone}
                    </p>
                  )}
                </div>

                {/* Email Address */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-semibold text-[#2B1A0E] flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#517B32]" />
                    <span>Email Address *</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="rajesh@gmail.com"
                    className={`w-full px-4 py-3 rounded-2xl border bg-white text-sm focus:outline-none transition-all ${
                      fieldErrors.email
                        ? "border-red-500 focus:ring-2 focus:ring-red-400"
                        : "border-[#E3D8C1] focus:ring-2 focus:ring-[#517B32]"
                    }`}
                  />
                  {fieldErrors.email && (
                    <p className="text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {fieldErrors.email}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Form Section 2: Postal Delivery Address */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E3D8C1] shadow-xs space-y-5">
              <div className="flex items-center gap-3 pb-3 border-b border-[#E3D8C1]">
                <div className="w-8 h-8 rounded-full bg-[#517B32]/10 text-[#517B32] flex items-center justify-center font-bold text-sm">
                  2
                </div>
                <div>
                  <h2 className="font-heading font-bold text-base sm:text-lg text-[#2B1A0E]">
                    Shipping &amp; Delivery Address
                  </h2>
                  <p className="text-xs text-[#81754B]">Where should we ship your hospital medicine package?</p>
                </div>
              </div>

              <div className="space-y-4">
                {/* Street Address */}
                <div className="space-y-1.5">
                  <label htmlFor="address" className="text-xs font-semibold text-[#2B1A0E] flex items-center gap-1.5">
                    <Home className="w-3.5 h-3.5 text-[#517B32]" />
                    <span>Flat / House No., Apartment, Street &amp; Locality *</span>
                  </label>
                  <textarea
                    id="address"
                    name="address"
                    required
                    rows={2}
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="e.g. House No. 14B, Green Gardens, Near MG Road"
                    className={`w-full px-4 py-2.5 rounded-2xl border bg-white text-sm focus:outline-none transition-all ${
                      fieldErrors.address
                        ? "border-red-500 focus:ring-2 focus:ring-red-400"
                        : "border-[#E3D8C1] focus:ring-2 focus:ring-[#517B32]"
                    }`}
                  />
                  {fieldErrors.address && (
                    <p className="text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {fieldErrors.address}
                    </p>
                  )}
                </div>

                {/* Landmark */}
                <div className="space-y-1.5">
                  <label htmlFor="landmark" className="text-xs font-semibold text-[#2B1A0E] flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <Navigation className="w-3.5 h-3.5 text-[#517B32]" />
                      <span>Landmark / Area</span>
                    </span>
                    <span className="text-[11px] text-[#81754B] font-normal">(Optional)</span>
                  </label>
                  <input
                    id="landmark"
                    name="landmark"
                    type="text"
                    value={formData.landmark}
                    onChange={handleInputChange}
                    placeholder="e.g. Opposite Post Office / Near St. Mary Church"
                    className="w-full px-4 py-3 rounded-2xl border border-[#E3D8C1] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#517B32]"
                  />
                </div>

                {/* City, State, PIN Code Row */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {/* City */}
                  <div className="space-y-1.5">
                    <label htmlFor="city" className="text-xs font-semibold text-[#2B1A0E]">
                      City / Town *
                    </label>
                    <input
                      id="city"
                      name="city"
                      type="text"
                      required
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="e.g. Kottayam"
                      className={`w-full px-4 py-3 rounded-2xl border bg-white text-sm focus:outline-none transition-all ${
                        fieldErrors.city
                          ? "border-red-500 focus:ring-2 focus:ring-red-400"
                          : "border-[#E3D8C1] focus:ring-2 focus:ring-[#517B32]"
                      }`}
                    />
                    {fieldErrors.city && (
                      <p className="text-xs text-red-600">{fieldErrors.city}</p>
                    )}
                  </div>

                  {/* State */}
                  <div className="space-y-1.5">
                    <label htmlFor="state" className="text-xs font-semibold text-[#2B1A0E]">
                      State *
                    </label>
                    <select
                      id="state"
                      name="state"
                      required
                      value={formData.state}
                      onChange={handleInputChange}
                      className="w-full px-3 py-3 rounded-2xl border border-[#E3D8C1] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#517B32]"
                    >
                      {INDIAN_STATES.map((st) => (
                        <option key={st} value={st}>
                          {st}
                        </option>
                      ))}
                    </select>
                    {fieldErrors.state && (
                      <p className="text-xs text-red-600">{fieldErrors.state}</p>
                    )}
                  </div>

                  {/* PIN / Postal Code */}
                  <div className="space-y-1.5">
                    <label htmlFor="pincode" className="text-xs font-semibold text-[#2B1A0E]">
                      Postal / PIN Code *
                    </label>
                    <input
                      id="pincode"
                      name="pincode"
                      type="text"
                      maxLength={10}
                      required
                      value={formData.pincode}
                      onChange={handleInputChange}
                      placeholder="e.g. 686587 / ZIP"
                      className={`w-full px-4 py-3 rounded-2xl border bg-white text-sm focus:outline-none transition-all ${
                        fieldErrors.pincode
                          ? "border-red-500 focus:ring-2 focus:ring-red-400"
                          : "border-[#E3D8C1] focus:ring-2 focus:ring-[#517B32]"
                      }`}
                    />
                    {fieldErrors.pincode && (
                      <p className="text-xs text-red-600">{fieldErrors.pincode}</p>
                    )}
                  </div>
                </div>

                {/* Delivery Instructions */}
                <div className="space-y-1.5 pt-2">
                  <label htmlFor="deliveryNotes" className="text-xs font-semibold text-[#2B1A0E] flex items-center justify-between">
                    <span>Special Delivery Notes</span>
                    <span className="text-[11px] text-[#81754B] font-normal">(Optional)</span>
                  </label>
                  <input
                    id="deliveryNotes"
                    name="deliveryNotes"
                    type="text"
                    value={formData.deliveryNotes}
                    onChange={handleInputChange}
                    placeholder="e.g. Please call before delivery, leave with security"
                    className="w-full px-4 py-2.5 rounded-2xl border border-[#E3D8C1] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#517B32]"
                  />
                </div>
              </div>
            </div>

            {/* Helpline Guarantee Notice */}
            <div className="p-4 rounded-2xl bg-white border border-[#E3D8C1] flex items-center justify-between gap-4 text-xs text-[#5C4A36]">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#517B32]/10 text-[#517B32] flex items-center justify-center shrink-0">
                  <HelpCircle className="w-4 h-4" />
                </div>
                <span>Need assistance with your delivery address or clinical dosage?</span>
              </div>
              <a
                href="tel:+919846992789"
                className="font-bold text-[#517B32] hover:underline whitespace-nowrap shrink-0"
              >
                +91 98469 92789
              </a>
            </div>

          </div>

          {/* RIGHT COLUMN: Order Summary, Size Switcher & Razorpay Payment Action (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E3D8C1] shadow-md space-y-6 sticky top-24">
              
              <div className="pb-3 border-b border-[#E3D8C1]">
                <h2 className="font-heading font-bold text-xl text-[#2B1A0E]">
                  Order Summary
                </h2>
                <p className="text-xs text-[#81754B]">Direct dispatch from hospital pharmacy</p>
              </div>

              {/* Product Preview Card */}
              <div className="flex items-start gap-4 p-3.5 rounded-2xl bg-[#FAF7F0] border border-[#E3D8C1]">
                <div className="relative w-16 h-16 rounded-xl bg-white border border-[#E3D8C1] p-1.5 shrink-0">
                  <Image
                    src="/images/products/kafastha.png"
                    alt="Kafastha Ayurvedic Granules"
                    fill
                    sizes="64px"
                    className="object-contain"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-sm text-[#2B1A0E] truncate">
                    Kafastha Respiratory Granules
                  </h3>
                  <p className="text-[11px] text-[#81754B]">
                    GMP Certified • Omshree Sidha Pharma
                  </p>
                  <p className="text-xs text-[#517B32] font-semibold mt-1">
                    Selected: {selectedPack.size}
                  </p>
                </div>
              </div>

              {/* Change Bottle Size Selector (Interactive Pills) */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-[#2B1A0E] block">
                  Select Bottle Size:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {PACK_OPTIONS.map((pack) => {
                    const isSelected = selectedPack.id === pack.id;
                    return (
                      <button
                        key={pack.id}
                        type="button"
                        onClick={() => setSelectedPack(pack)}
                        className={`p-2.5 rounded-2xl border text-center transition-all flex flex-col items-center justify-between cursor-pointer ${
                          isSelected
                            ? "border-[#517B32] bg-[#FAF4E5] ring-2 ring-[#517B32]/30 shadow-xs"
                            : "border-[#E3D8C1] bg-white hover:border-[#81754B]"
                        }`}
                      >
                        <span className="text-[9px] font-bold uppercase tracking-wider text-[#B4833D] block">
                          {pack.badge}
                        </span>
                        <span className="text-xs font-semibold text-[#2B1A0E] block mt-0.5">
                          {pack.size}
                        </span>
                        <span className="text-sm font-bold text-[#517B32] mt-0.5">
                          ₹{pack.price}
                        </span>
                        <span className="text-[9px] text-[#81754B] block mt-0.5">
                          {pack.price >= 500 ? "Free Delivery" : "+₹50 Delivery"}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center justify-between p-3 rounded-2xl bg-[#FAF7F0] border border-[#E3D8C1]">
                <span className="text-xs font-semibold text-[#2B1A0E]">Quantity:</span>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    disabled={quantity <= 1}
                    className="w-7 h-7 rounded-full bg-white border border-[#E3D8C1] flex items-center justify-center text-sm font-bold text-[#2B1A0E] hover:bg-[#FAF4E5] disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="font-bold text-sm w-4 text-center">{quantity}</span>
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.min(10, q + 1))}
                    disabled={quantity >= 10}
                    className="w-7 h-7 rounded-full bg-white border border-[#E3D8C1] flex items-center justify-center text-sm font-bold text-[#2B1A0E] hover:bg-[#FAF4E5] disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Delivery Promotion Notice */}
              {isFreeDelivery ? (
                <div className="p-3 rounded-2xl bg-[#517B32]/10 border border-[#517B32]/25 flex items-center gap-2.5 text-xs text-[#2F4A1E]">
                  <Truck className="w-4 h-4 text-[#517B32] shrink-0" />
                  <span>
                    🎉 Your order qualifies for <strong>FREE Doorstep Delivery</strong> (orders ₹500+).
                  </span>
                </div>
              ) : (
                <div className="p-3 rounded-2xl bg-[#FAF4E5] border border-[#B4833D]/30 flex items-center gap-2.5 text-xs text-[#81551D]">
                  <Truck className="w-4 h-4 text-[#B4833D] shrink-0" />
                  <span>
                    Delivery is <strong>₹50</strong> for orders below ₹500. Add <strong>₹{500 - subtotalRupees} more</strong> to get <strong>FREE Delivery</strong>!
                  </span>
                </div>
              )}

              {/* Price Breakdown Calculation */}
              <div className="space-y-2 text-xs sm:text-sm text-[#5C4A36] pt-3 border-t border-[#E3D8C1]">
                <div className="flex justify-between">
                  <span>Unit Price ({selectedPack.size})</span>
                  <span className="text-[#2B1A0E] font-medium">₹{selectedPack.price}</span>
                </div>
                {quantity > 1 && (
                  <div className="flex justify-between">
                    <span>Quantity Multiplier</span>
                    <span className="text-[#2B1A0E] font-medium">× {quantity}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Items Subtotal</span>
                  <span className="text-[#2B1A0E] font-medium">₹{subtotalRupees}</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <span>Doorstep Delivery</span>
                    <span className="block text-[10px] text-[#81754B]">
                      {isFreeDelivery ? "Free for orders ₹500 and above" : "Standard courier charge (orders under ₹500)"}
                    </span>
                  </div>
                  {isFreeDelivery ? (
                    <span className="text-[#517B32] font-semibold">FREE</span>
                  ) : (
                    <span className="text-[#2B1A0E] font-semibold">₹50</span>
                  )}
                </div>
                <div className="flex justify-between">
                  <span>Taxes &amp; Packaging</span>
                  <span className="text-[#517B32] font-semibold">Included</span>
                </div>
                <div className="flex justify-between text-base sm:text-lg font-bold text-[#2B1A0E] pt-3 border-t border-[#E3D8C1]">
                  <span>Total Payable</span>
                  <span className="text-[#517B32] font-heading text-xl">
                    ₹{totalPayableRupees}
                  </span>
                </div>
              </div>

              {/* Razorpay Online Payment Action */}
              <div className="space-y-3 pt-2">
                <RazorpayCheckoutButton
                  amount={currentAmountPaise}
                  currency="INR"
                  productName={`Kafastha Granules (${selectedPack.size})${quantity > 1 ? ` x ${quantity}` : ""}`}
                  productDescription={`Direct Hospital Pharmacy Dispatch to ${formData.city || "your address"}`}
                  buttonText={`Pay ₹${totalPayableRupees} Online via Razorpay`}
                  prefill={{
                    name: formData.fullName,
                    email: formData.email,
                    contact: formData.phone,
                  }}
                  notes={{
                    customer_name: formData.fullName,
                    customer_phone: formData.phone,
                    customer_email: formData.email,
                    shipping_address: formData.address,
                    landmark: formData.landmark || "",
                    city: formData.city,
                    state: formData.state,
                    pincode: formData.pincode,
                    delivery_notes: formData.deliveryNotes || "",
                    product: "Kafastha Ayurvedic Respiratory Granules",
                    pack_size: selectedPack.size,
                    quantity: quantity.toString(),
                    subtotal_amount: `₹${subtotalRupees}`,
                    delivery_charge: isFreeDelivery ? "FREE" : "₹50",
                    total_amount_inr: `₹${totalPayableRupees}`,
                  }}
                  onBeforePayment={validateForm}
                  onSuccess={(data) => {
                    setConfirmedOrderData({
                      orderId: data.order_id,
                      paymentId: data.payment_id,
                    });
                    setOrderConfirmed(true);
                  }}
                  className="w-full inline-flex items-center justify-center gap-2.5 rounded-full bg-[#213714] text-white hover:bg-[#3D5C26] px-6 py-4 text-sm sm:text-base font-bold shadow-md hover:shadow-lg transition-all cursor-pointer"
                />

                <p className="text-[11px] text-center text-[#81754B]">
                  Supported: UPI (Google Pay, PhonePe, Paytm), All Bank Debit/Credit Cards, Netbanking.
                </p>
              </div>

              {/* Security & Verification Badges */}
              <div className="pt-3 border-t border-[#E3D8C1] space-y-2 text-[11px] text-[#81754B]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#517B32] shrink-0" />
                  <span>256-Bit SSL Encrypted Banking Channel</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck2 className="w-4 h-4 text-[#517B32] shrink-0" />
                  <span>GMP Certified In-House Hospital Pharmacy</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-[#517B32] shrink-0" />
                  <span>Doorstep Delivery (Free for orders ₹500+)</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </main>
    </div>
  );
}

function CheckoutLoading() {
  return (
    <div className="min-h-screen bg-[#FBF7EE] flex items-center justify-center py-24">
      <div className="text-center space-y-3">
        <div className="w-12 h-12 rounded-full border-4 border-[#517B32] border-t-transparent animate-spin mx-auto" />
        <p className="text-sm font-semibold text-[#66371B]">Loading Secure Checkout...</p>
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<CheckoutLoading />}>
      <CheckoutContent />
    </Suspense>
  );
}
