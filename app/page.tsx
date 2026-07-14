"use client";
import Link from "next/link";
import AuthenticateSkillsSection from "@/components/authenticate-skills-section";
import WhyChooseSection from "@/components/why-choose-section";
import LoginSection from "@/components/login-section";
import TestimonialsSection from "@/components/testimonials-section";
import LetterCarousel from "@/components/letter-carousel";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative w-full bg-[#071b36] pt-24 pb-8 sm:pt-28 lg:pt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-white/10 bg-[#0f2a52]/70 p-4 shadow-2xl shadow-slate-950/20 backdrop-blur-sm sm:p-6 lg:p-8">
            <div className="mb-6 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <p className="mb-3 inline-flex rounded-full border border-[#f5c547]/40 bg-[#f5c547]/15 px-3 py-1 text-sm font-semibold uppercase tracking-[0.25em] text-[#f5c547]">
                  Verified Skills
                </p>
                <h1 className="text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
                  Assessments in secure centers, designed for modern hiring.
                </h1>
                <p className="mt-4 max-w-xl text-base leading-7 text-slate-200 sm:text-lg">
                  Choose a trusted platform for skill validation, structured learning, and confident hiring decisions.
                </p>
                <Link
                  href="/services"
                  className="mt-6 inline-flex items-center justify-center rounded-full bg-[#f73e5d] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#df3351]"
                >
                  Get Started
                </Link>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-slate-100 backdrop-blur-sm">
                <p className="font-semibold text-white">SkillKwiz – Verified Skills, Simplified Hiring</p>
                <p className="mt-1 text-slate-200">Four focused slides, aligned and ready to guide your next step.</p>
              </div>
            </div>

            <LetterCarousel />
          </div>
        </div>
      </section>

      <div className="relative z-10 bg-white">
        <AuthenticateSkillsSection />
        <WhyChooseSection />
        <TestimonialsSection />
        <LoginSection />
      </div>
    </div>
  );
}
