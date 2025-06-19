"use client";

import { ChevronUp } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { APP_NAME } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-black underline-link">
      <div className="w-full">
        {/* Back to Top Button */}
        <div className="flex py-4 justify-end mr-5">
          <Button
            variant="ghost"
            className="bg-white left-0 text-black w-12 h-12 rounded-full justify-center border border-gray-300 shadow-md hover:bg-gray-200 transition-colors"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <ChevronUp className="h-6 w-6" />
            <span className="sr-only">"Footer.Back to top"</span>
          </Button>
        </div>
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6 max-w-7xl mx-auto">
          {/* Shop Column */}
          <div>
            <h3 className="font-bold mb-2 uppercase">
              "Footer.Get to Know Us"
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/shop/popular-now">"Footer.Careers"</Link>
              </li>
              <li>
                <Link href="/shop/new-arrivals">"Footer.Blog"</Link>
              </li>
              <li>
                <Link href="/shop/sale">Sale</Link>
              </li>
              <li>
                <Link href="/shop/graphic-tees">Graphic Tees</Link>
              </li>
              <li>
                <Link href="/shop/blank-tees">Blank Tees</Link>
              </li>
              <li>
                <Link href="/shop/custom-tees">Custom Tees</Link>
              </li>
              <li>
                <Link href="/shop/accessories">Accessories</Link>
              </li>
            </ul>
          </div>

          {/* Help Column */}
          <div>
            <h3 className="font-bold mb-2 uppercase">
              "Footer.Let Us Help You"
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/page/shipping">Name</Link>
              </li>
              <li>
                <Link href="/page/returns-policy">
                  "Footer.Returns & Replacements"
                </Link>
              </li>
              <li>
                <Link href="/track-order">Track Your Order</Link>
              </li>
              <li>
                <Link href="/account">Your Account</Link>
              </li>
              <li>
                <Link href="/faqs">FAQs</Link>
              </li>
              <li>
                <Link href="/policies">Policies</Link>
              </li>
              <li>
                <Link href="/page/help">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* About Column */}
          <div>
            <h3 className="font-bold mb-2 uppercase">
              "Footer.Make Money with Us"
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/wholesale">Products</Link>
              </li>
              <li>"Become an Affiliate"</li>
              <li>
                <Link href="/bulk-custom">Advertisement</Link>
              </li>
              <li>
                <Link href="/gift-cards">Gift Cards</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup Column */}
          <div>
            <div className="flex items-center space-x-4 mb-2">
              <h3 className="font-bold uppercase">Newsletter</h3>
            </div>
            <p className="mb-4">High energy ✨</p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter email address"
                className="border border-gray-300 px-2 flex-1"
              />
              <Button className="border rounded-none border-gray-300 bg-white text-black hover:bg-gray-200">
                Sign Up
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-300">
          <div className="max-w-7xl mx-auto py-4 px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Social Media Icons */}
            <div className="flex items-center space-x-4">
              <Link href="https://facebook.com"></Link>
            </div>

            {/* Language and Currency Selectors */}
            <div className="flex items-center space-x-10">
              <p className="text-sm hidden md:block">© copyright </p>
            </div>

            {/* Payment Icons */}
            <div className="flex items-center space-x-2"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
