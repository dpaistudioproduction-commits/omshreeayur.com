"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Star,
  CheckCircle2,
  ThumbsUp,
  Quote,
  PenLine,
  X,
  CreditCard,
  MessageCircle,
  Stethoscope,
  Filter,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

export interface CustomerReview {
  id: number | string;
  author: string;
  initials: string;
  location: string;
  roleOrAge?: string;
  packPurchased: string;
  rating: number;
  date: string;
  isoDate: string;
  condition: string;
  title: string;
  content: string;
  verifiedBadge: string;
  helpfulCount: number;
  isUserSubmitted?: boolean;
}

interface KafasthaReviewsSectionProps {
  initialReviews: CustomerReview[];
  buyUrl: string;
  consultUrl: string;
}

const STORAGE_KEY = "omshree_kafastha_reviews_v1";

const RATING_LABELS: Record<number, string> = {
  1: "1 Star — Poor relief",
  2: "2 Stars — Fair / Mild effect",
  3: "3 Stars — Average / As expected",
  4: "4 Stars — Good / Noticeable comfort",
  5: "5 Stars — Excellent / Highly Recommended",
};

export default function KafasthaReviewsSection({
  initialReviews,
  buyUrl,
  consultUrl,
}: KafasthaReviewsSectionProps) {
  const [reviews, setReviews] = useState<CustomerReview[]>(initialReviews);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filterRating, setFilterRating] = useState<number | null>(null);
  const [helpfulVoted, setHelpfulVoted] = useState<Record<string | number, boolean>>({});
  const [notification, setNotification] = useState<string | null>(null);

  // Form states
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [authorName, setAuthorName] = useState("");
  const [location, setLocation] = useState("");
  const [roleOrAge, setRoleOrAge] = useState("");
  const [packPurchased, setPackPurchased] = useState("150g Granules Bottle");
  const [condition, setCondition] = useState("Persistent Cough & Mucus Relief");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isVerifiedBuyer, setIsVerifiedBuyer] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Load custom reviews from localStorage on client mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed: CustomerReview[] = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          // Merge user-submitted reviews before initialReviews
          setReviews([...parsed, ...initialReviews]);
        }
      }
    } catch {
      // LocalStorage unavailable or parsing failed
    }
  }, [initialReviews]);

  // Handle helpful voting
  const handleHelpfulClick = (reviewId: number | string) => {
    if (helpfulVoted[reviewId]) return;

    setHelpfulVoted((prev) => ({ ...prev, [reviewId]: true }));
    setReviews((prev) =>
      prev.map((r) =>
        r.id === reviewId ? { ...r, helpfulCount: r.helpfulCount + 1 } : r
      )
    );
  };

  // Compute dynamic stats
  const totalReviewsCount = reviews.length;
  const averageRating = (
    reviews.reduce((acc, r) => acc + r.rating, 0) / totalReviewsCount
  ).toFixed(1);

  const fiveStarCount = reviews.filter((r) => r.rating === 5).length;
  const fourStarCount = reviews.filter((r) => r.rating === 4).length;
  const threeStarCount = reviews.filter((r) => r.rating === 3).length;
  const twoStarCount = reviews.filter((r) => r.rating === 2).length;
  const oneStarCount = reviews.filter((r) => r.rating === 1).length;

  const fiveStarPct = Math.round((fiveStarCount / totalReviewsCount) * 100);
  const fourStarPct = Math.round((fourStarCount / totalReviewsCount) * 100);
  const threeStarPct = Math.round((threeStarCount / totalReviewsCount) * 100);
  const twoStarPct = Math.round((twoStarCount / totalReviewsCount) * 100);
  const oneStarPct = Math.round((oneStarCount / totalReviewsCount) * 100);

  // Filtered reviews
  const displayedReviews = filterRating
    ? reviews.filter((r) => r.rating === filterRating)
    : reviews;

  // Submit new review
  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorName.trim() || !title.trim() || !content.trim()) {
      alert("Please enter your name, headline, and your review comments.");
      return;
    }

    setIsSubmitting(true);

    const nameParts = authorName.trim().split(" ");
    const initials =
      nameParts.length >= 2
        ? `${nameParts[0][0]}${nameParts[nameParts.length - 1][0]}`.toUpperCase()
        : authorName.slice(0, 2).toUpperCase();

    const today = new Date();
    const formattedDate = today.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
    const isoDate = today.toISOString().split("T")[0];

    const newReview: CustomerReview = {
      id: `user-${Date.now()}`,
      author: authorName.trim(),
      initials,
      location: location.trim() || "India",
      roleOrAge: roleOrAge.trim() || undefined,
      packPurchased,
      rating,
      date: formattedDate,
      isoDate,
      condition,
      title: title.trim(),
      content: content.trim(),
      verifiedBadge: isVerifiedBuyer
        ? "Verified Hospital Pharmacy Order"
        : "Patient Review",
      helpfulCount: 1,
      isUserSubmitted: true,
    };

    // Save to local storage
    try {
      const existingSaved = localStorage.getItem(STORAGE_KEY);
      const parsed: CustomerReview[] = existingSaved
        ? JSON.parse(existingSaved)
        : [];
      const updated = [newReview, ...parsed];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch {
      // Ignored
    }

    setReviews((prev) => [newReview, ...prev]);
    setIsSubmitting(false);
    setIsModalOpen(false);

    // Reset form
    setAuthorName("");
    setLocation("");
    setRoleOrAge("");
    setTitle("");
    setContent("");
    setRating(5);

    setNotification("Thank you! Your review has been published successfully.");
    setTimeout(() => setNotification(null), 7000);
  };

  return (
    <section
      id="reviews"
      className="max-w-7xl mx-auto w-full px-4 sm:px-6 py-20 md:py-24 border-t border-[#E3D8C1]"
    >
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
        <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#B4833D] block">
          Patient &amp; Customer Experiences
        </span>
        <h2 className="font-heading text-3xl sm:text-4xl text-[#2B1A0E] font-bold">
          Customer Reviews &amp; Real Patient Experiences
        </h2>
        <p className="text-sm sm:text-base text-[#5C4A36] leading-relaxed">
          Authentic feedback from individuals, families, and healthcare professionals who rely on Kafastha Granules for cough relief, phlegm liquefaction, and respiratory wellness.
        </p>
      </div>

      {/* Success Notification Banner */}
      {notification && (
        <div className="mb-8 p-4 rounded-2xl bg-[#EAF5E4] border border-[#517B32]/30 text-[#213714] flex items-center justify-between gap-3 shadow-sm animate-fade-in">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#517B32] shrink-0" />
            <span className="text-sm font-semibold">{notification}</span>
          </div>
          <button
            onClick={() => setNotification(null)}
            className="text-[#213714] hover:text-[#517B32] p-1"
            aria-label="Dismiss message"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Amazon-Style Rating Summary & Write Review Box */}
      <div className="rounded-3xl bg-gradient-to-br from-[#FAF7F0] via-white to-[#F5EED9] border border-[#E3D8C1] p-6 sm:p-8 md:p-10 mb-12 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Column 1: Overall Rating Score */}
          <div className="lg:col-span-4 text-center lg:text-left lg:border-r border-[#E3D8C1] lg:pr-8 space-y-2.5">
            <div className="inline-flex items-baseline gap-2">
              <span className="text-5xl sm:text-6xl font-heading font-black text-[#2B1A0E] tracking-tight">
                {averageRating}
              </span>
              <span className="text-lg font-bold text-[#81754B]">out of 5</span>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-1 text-amber-500">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-5 h-5 ${
                    star <= Math.round(Number(averageRating))
                      ? "fill-amber-400 text-amber-500"
                      : "text-[#D8CDAF]"
                  }`}
                />
              ))}
            </div>
            <p className="text-xs sm:text-sm font-semibold text-[#2B1A0E]">
              {totalReviewsCount} customer ratings • 100% recommended
            </p>
            <p className="text-xs text-[#81754B]">
              Based on verified hospital pharmacy dispatches &amp; clinical outpatient follow-ups.
            </p>
          </div>

          {/* Column 2: Amazon-Style Star Breakdown Bars (Clickable) */}
          <div className="lg:col-span-4 space-y-2 lg:px-4">
            <div className="space-y-1.5 text-xs text-[#5C4A36]">
              {[
                { stars: 5, pct: fiveStarPct, count: fiveStarCount },
                { stars: 4, pct: fourStarPct, count: fourStarCount },
                { stars: 3, pct: threeStarPct, count: threeStarCount },
                { stars: 2, pct: twoStarPct, count: twoStarCount },
                { stars: 1, pct: oneStarPct, count: oneStarCount },
              ].map((row) => (
                <button
                  key={row.stars}
                  onClick={() =>
                    setFilterRating(filterRating === row.stars ? null : row.stars)
                  }
                  className={`w-full flex items-center gap-2 group text-left p-1 rounded-md transition-colors ${
                    filterRating === row.stars
                      ? "bg-[#FAF4E5] font-bold"
                      : "hover:bg-black/5"
                  }`}
                  title={`Filter by ${row.stars} star reviews`}
                >
                  <span className="w-12 font-medium group-hover:text-[#517B32] transition-colors">
                    {row.stars} star
                  </span>
                  <div className="flex-1 h-3 rounded-full bg-[#E8DEC7] overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        row.stars >= 4 ? "bg-[#B4833D]" : "bg-gray-400"
                      }`}
                      style={{ width: `${row.pct}%` }}
                    />
                  </div>
                  <span className="w-9 text-right font-bold text-[#2B1A0E]">
                    {row.pct}%
                  </span>
                </button>
              ))}
            </div>

            {filterRating && (
              <div className="pt-1 flex items-center justify-between text-xs text-[#517B32]">
                <span>Showing {filterRating}-star reviews</span>
                <button
                  onClick={() => setFilterRating(null)}
                  className="underline hover:text-[#213714] font-semibold"
                >
                  Clear filter
                </button>
              </div>
            )}
          </div>

          {/* Column 3: Amazon-Style "Review this product" Action Box */}
          <div className="lg:col-span-4 lg:border-l border-[#E3D8C1] lg:pl-8 space-y-3.5 text-center lg:text-left">
            <div>
              <h3 className="font-heading font-bold text-lg text-[#2B1A0E]">
                Review this product
              </h3>
              <p className="text-xs text-[#5C4A36] mt-0.5">
                Share your experience with other patients and families.
              </p>
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full inline-flex items-center justify-center gap-2.5 rounded-full bg-[#213714] text-white hover:bg-[#32521F] py-3 px-5 text-sm font-bold shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <PenLine className="w-4 h-4 text-[#D9B872]" />
              <span>Write a Customer Review</span>
            </button>

            <div className="pt-2 flex flex-col gap-1.5 text-xs text-[#2B1A0E]">
              <div className="flex items-center justify-center lg:justify-start gap-1.5 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#517B32] shrink-0" />
                <span>Verified Direct Pharmacy Orders</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-1.5 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-[#517B32] shrink-0" />
                <span>No Antihistamine Drowsiness</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Reviews Controls & Filter Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-[#E3D8C1]">
        <div className="flex items-center gap-2">
          <span className="font-heading font-bold text-lg text-[#2B1A0E]">
            Top Reviews from India
          </span>
          <span className="text-xs bg-[#FAF4E5] border border-[#E3D8C1] text-[#81754B] px-2.5 py-0.5 rounded-full font-semibold">
            {displayedReviews.length} {displayedReviews.length === 1 ? "Review" : "Reviews"}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {filterRating && (
            <button
              onClick={() => setFilterRating(null)}
              className="text-xs text-[#517B32] hover:underline font-semibold flex items-center gap-1"
            >
              <Filter className="w-3 h-3" />
              <span>Filtered ({filterRating} Stars) • Reset</span>
            </button>
          )}

          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#517B32] hover:text-[#213714] border border-[#517B32]/30 hover:border-[#517B32] bg-white px-3 py-1.5 rounded-full transition-colors"
          >
            <PenLine className="w-3.5 h-3.5" />
            <span>Add Review</span>
          </button>
        </div>
      </div>

      {/* Reviews Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedReviews.map((review) => (
          <div
            key={review.id}
            className={`rounded-3xl bg-white border border-[#E3D8C1] p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow relative ${
              review.isUserSubmitted
                ? "ring-2 ring-[#517B32]/40 bg-gradient-to-b from-white to-[#F9FAF6]"
                : ""
            }`}
          >
            <div className="space-y-4">
              {/* Header: Author Avatar & Metadata */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#2F4A1E] to-[#517B32] text-white flex items-center justify-center font-bold text-sm tracking-wide shadow-xs shrink-0">
                    {review.initials}
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-base text-[#2B1A0E] leading-snug">
                      {review.author}
                    </h4>
                    <p className="text-xs text-[#81754B]">
                      {review.location}
                      {review.roleOrAge ? ` • ${review.roleOrAge}` : ""}
                    </p>
                  </div>
                </div>
                {review.isUserSubmitted ? (
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#517B32] bg-[#517B32]/10 px-2 py-0.5 rounded-full border border-[#517B32]/30 shrink-0 flex items-center gap-1">
                    <Sparkles className="w-2.5 h-2.5" />
                    <span>Your Review</span>
                  </span>
                ) : (
                  <Quote className="w-6 h-6 text-[#E3D8C1] shrink-0" />
                )}
              </div>

              {/* Rating & Verified Pill */}
              <div className="flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-[#F0E8D5]">
                <div className="flex items-center text-amber-500">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-500" />
                  ))}
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#517B32] bg-[#517B32]/10 px-2.5 py-0.5 rounded-full">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>{review.verifiedBadge}</span>
                </span>
              </div>

              {/* Condition Tag */}
              <div className="inline-block bg-[#FAF4E5] border border-[#E3D8C1] rounded-lg px-2.5 py-1 text-[11px] font-medium text-[#81754B]">
                <strong className="text-[#2B1A0E]">Condition:</strong> {review.condition}
              </div>

              {/* Title & Body */}
              <div className="space-y-2">
                <h5 className="font-heading font-bold text-base text-[#2B1A0E] leading-snug">
                  &ldquo;{review.title}&rdquo;
                </h5>
                <p className="text-xs sm:text-sm text-[#5C4A36] leading-relaxed">
                  {review.content}
                </p>
              </div>
            </div>

            {/* Card Footer: Pack size & Amazon-style Helpful Button */}
            <div className="pt-4 mt-4 border-t border-[#F0E8D5] flex items-center justify-between text-[11px] text-[#81754B]">
              <span className="font-medium text-[#2B1A0E]">{review.packPurchased}</span>
              <button
                onClick={() => handleHelpfulClick(review.id)}
                className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs transition-colors cursor-pointer ${
                  helpfulVoted[review.id]
                    ? "bg-[#EAF5E4] text-[#517B32] font-bold"
                    : "bg-[#FAF4E5] hover:bg-[#F3EAD3] text-[#5C4A36]"
                }`}
                title="Mark this review as helpful"
              >
                <ThumbsUp className="w-3 h-3 text-[#517B32]" />
                <span>
                  {helpfulVoted[review.id] ? "Helpful ✓" : "Helpful"} ({review.helpfulCount})
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Hospital Trust Note */}
      <div className="mt-12 rounded-2xl bg-[#FAF4E5] border border-[#E3D8C1] p-6 sm:p-8 text-center space-y-3">
        <p className="text-sm sm:text-base text-[#2B1A0E] font-medium max-w-2xl mx-auto">
          Have you or a family member taken Kafastha Ayurvedic Granules? Share your recovery experience with our clinical team or consult an Omshree physician.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 rounded-full bg-[#213714] text-white hover:bg-[#32521F] px-6 py-2.5 text-xs font-bold transition-colors shadow-sm cursor-pointer"
          >
            <PenLine className="w-3.5 h-3.5 text-[#D9B872]" />
            <span>Write a Review</span>
          </button>
          <a
            href={consultUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[#2F4A1E] text-[#2F4A1E] hover:bg-[#2F4A1E] hover:text-white px-5 py-2.5 text-xs font-bold transition-colors"
          >
            <Stethoscope className="w-3.5 h-3.5" />
            <span>Discuss with Physician</span>
          </a>
          <a
            href={buyUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white hover:bg-[#1EBE5D] px-5 py-2.5 text-xs font-bold transition-colors shadow-sm"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Submit via WhatsApp</span>
          </a>
        </div>
      </div>

      {/* ============================================================ */}
      {/* AMAZON-STYLE "WRITE A REVIEW" MODAL DIALOG                   */}
      {/* ============================================================ */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 overflow-y-auto">
          <div
            className="relative w-full max-w-2xl bg-white rounded-3xl border border-[#E3D8C1] shadow-2xl p-6 sm:p-8 my-8 max-h-[90vh] overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-labelledby="write-review-title"
          >
            {/* Modal Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-700 transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="space-y-1 mb-6 pr-8">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#B4833D] block">
                Share Your Experience
              </span>
              <h3
                id="write-review-title"
                className="font-heading text-2xl font-bold text-[#2B1A0E]"
              >
                Create Customer Review
              </h3>
              <p className="text-xs text-[#81754B]">
                Your honest feedback helps fellow patients suffering from cough, wheezing, and chest heaviness.
              </p>
            </div>

            {/* Review Form */}
            <form onSubmit={handleSubmitReview} className="space-y-5">
              
              {/* Overall Rating (Interactive 5 Stars) */}
              <div className="space-y-2 p-4 rounded-2xl bg-[#FAF7F0] border border-[#E3D8C1]">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#2B1A0E]">
                  Overall Rating <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(null)}
                      className="p-1 hover:scale-110 transition-transform cursor-pointer focus:outline-hidden"
                      aria-label={`${star} star`}
                    >
                      <Star
                        className={`w-7 h-7 ${
                          star <= (hoverRating ?? rating)
                            ? "fill-amber-400 text-amber-500"
                            : "text-gray-300"
                        }`}
                      />
                    </button>
                  ))}
                  <span className="text-xs font-semibold text-[#517B32] ml-2">
                    {RATING_LABELS[hoverRating ?? rating]}
                  </span>
                </div>
              </div>

              {/* Review Headline / Title */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#2B1A0E]">
                  Add a Headline / Summary <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. Significant chest relief within 3 days, smooth night sleep"
                  className="w-full px-4 py-3 rounded-xl border border-[#DBCFA8] bg-[#FAF7F0]/40 text-sm focus:outline-hidden focus:border-[#517B32] focus:ring-2 focus:ring-[#517B32]/20"
                />
              </div>

              {/* Detailed Review Textarea */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#2B1A0E]">
                  Written Review <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="How did Kafastha help your cough or breathing? How did you take it (with warm water or ghee)? What did you like about the formula?"
                  className="w-full px-4 py-3 rounded-xl border border-[#DBCFA8] bg-[#FAF7F0]/40 text-sm focus:outline-hidden focus:border-[#517B32] focus:ring-2 focus:ring-[#517B32]/20"
                />
              </div>

              {/* Author & Location Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#2B1A0E]">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    placeholder="e.g. Anand K. Menon"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#DBCFA8] bg-[#FAF7F0]/40 text-sm focus:outline-hidden focus:border-[#517B32]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#2B1A0E]">
                    Location (City / State)
                  </label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="e.g. Kochi, Kerala or Mumbai"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#DBCFA8] bg-[#FAF7F0]/40 text-sm focus:outline-hidden focus:border-[#517B32]"
                  />
                </div>
              </div>

              {/* Pack Size & Health Condition */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#2B1A0E]">
                    Bottle Size Used
                  </label>
                  <select
                    value={packPurchased}
                    onChange={(e) => setPackPurchased(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#DBCFA8] bg-[#FAF7F0]/40 text-sm focus:outline-hidden focus:border-[#517B32]"
                  >
                    <option value="150g Granules Bottle">150g Granules Bottle (Standard)</option>
                    <option value="75g Granules Bottle">75g Granules Bottle (Starter)</option>
                    <option value="300g Family Economy Bottle">300g Family Economy Bottle</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#2B1A0E]">
                    Primary Health Complaint
                  </label>
                  <select
                    value={condition}
                    onChange={(e) => setCondition(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#DBCFA8] bg-[#FAF7F0]/40 text-sm focus:outline-hidden focus:border-[#517B32]"
                  >
                    <option value="Persistent Morning Phlegm & Cough">Persistent Morning Phlegm &amp; Cough</option>
                    <option value="Dry Tickling Night Cough">Dry Tickling Night Cough</option>
                    <option value="Seasonal Wheezing & Dust Allergy">Seasonal Wheezing &amp; Dust Allergy</option>
                    <option value="Elderly Airway Congestion & Tightness">Elderly Airway Congestion &amp; Tightness</option>
                    <option value="Post-Viral Bronchial Irritation">Post-Viral Bronchial Irritation</option>
                    <option value="General Respiratory Wellness">General Respiratory Wellness</option>
                  </select>
                </div>
              </div>

              {/* Verified Buyer Checkbox */}
              <div className="flex items-center gap-2.5 pt-1">
                <input
                  type="checkbox"
                  id="verified-check"
                  checked={isVerifiedBuyer}
                  onChange={(e) => setIsVerifiedBuyer(e.target.checked)}
                  className="w-4 h-4 rounded text-[#517B32] focus:ring-[#517B32] accent-[#517B32]"
                />
                <label
                  htmlFor="verified-check"
                  className="text-xs text-[#5C4A36] cursor-pointer"
                >
                  I purchased / used Kafastha directly through Omshree Sidha Hospital or Pharmacy.
                </label>
              </div>

              {/* Buttons */}
              <div className="pt-3 border-t border-[#E3D8C1] flex flex-wrap items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-5 py-2.5 rounded-full border border-gray-300 text-xs font-semibold text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 px-7 py-2.5 rounded-full bg-[#517B32] hover:bg-[#3D5C26] text-white text-xs font-bold shadow-md hover:shadow-lg transition-all disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? "Submitting..." : "Submit Review"}
                </button>
              </div>

            </form>
          </div>
        </div>
      )}
    </section>
  );
}

