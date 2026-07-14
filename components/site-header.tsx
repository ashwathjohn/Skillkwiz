"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const pathname = usePathname();

  const BrandLink = () => (
    <Link
      href="/"
      className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 ring-1 ring-white/20 shadow-sm transition-all duration-200 hover:bg-white/20"
    >
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 p-1 sm:h-9 sm:w-9">
        <Image
          src="/images/logo.png"
          alt="SkillKwiz logo"
          width={36}
          height={36}
          className="h-full w-full object-contain"
          priority
        />
      </div>
      <span className="text-sm font-bold tracking-wide text-purple-900 sm:text-base">
        SkillKwiz
        <p style={{ color:"black", fontSize: "10px", fontFamily: "Arial, sans-serif" }}>How much do you know?</p>
      </span>
    </Link>
  );

  return (
    <div className="w-full fixed top-0 left-0 z-50">
      <nav className="flex flex-col w-full md:w-4/5 lg:w-3/5 xl:w-1/2 mx-auto bg-[#335f92] text-white rounded-b-3xl">
        <div className="flex items-center justify-between px-4 py-2">
          <div className="flex items-center">
            <div className="md:hidden">
              <BrandLink />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:justify-center md:flex-1">
              <BrandLink />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="z-20 text-white focus:outline-none md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          <div className="hidden md:flex md:items-center md:justify-center md:flex-1">

            <Link
              href="/"
              className={`relative group py-4 px-2 text-sm md:px-4 lg:text-base transition-all ${
                pathname === "/"
                  ? "text-yellow-400 font-semibold"
                  : "text-white"
              }`}
            >
              <span>Home</span>
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-yellow-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
            <Link
              href="/about"
              className={`relative group py-4 px-2 text-sm md:px-4 lg:text-base transition-all ${
                pathname === "/about"
                  ? "text-yellow-400 font-semibold"
                  : "text-white"
              }`}
            >
              <span>About Us</span>
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-yellow-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
            <Link
              href="/services"
              className={`relative group py-4 px-2 text-sm md:px-4 lg:text-base transition-all ${
                pathname === "/services"
                  ? "text-yellow-400 font-semibold"
                  : "text-white"
              }`}
            >
              <span>Services</span>
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-yellow-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
            <Link
              href="/blog"
              className={`relative group py-4 px-2 text-sm md:px-4 lg:text-base transition-all ${
                pathname === "/blog"
                  ? "text-yellow-400 font-semibold"
                  : "text-white"
              }`}
            >
              <span>Blog</span>
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-yellow-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden flex flex-col items-center py-4 bg-[#335f92] rounded-b-3xl absolute top-0 left-0 w-full pt-16 shadow-lg transition-all duration-300 ease-in-out">
            <Link
              href="/"
              className="text-white relative group py-3 text-lg w-full text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <span>Home</span>
              <span className="absolute left-1/4 right-1/4 bottom-0 w-1/2 h-0.5 bg-gradient-to-r from-blue-600 to-yellow-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
            <Link
              href="/about"
              className="text-white relative group py-3 text-lg w-full text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <span>About Us</span>
              <span className="absolute left-1/4 right-1/4 bottom-0 w-1/2 h-0.5 bg-gradient-to-r from-blue-600 to-yellow-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
            <Link
              href="/services"
              className="text-white relative group py-3 text-lg w-full text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <span>Services</span>
              <span className="absolute left-1/4 right-1/4 bottom-0 w-1/2 h-0.5 bg-gradient-to-r from-blue-600 to-yellow-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
            <Link
              href="/blog"
              className="text-white relative group py-3 text-lg w-full text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <span>Blog</span>
              <span className="absolute left-1/4 right-1/4 bottom-0 w-1/2 h-0.5 bg-gradient-to-r from-blue-600 to-yellow-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
}
