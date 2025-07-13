import React from "react";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <div className="bg-white">
      {/* Main Footer Content */}
      <footer className="bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Commitment with Quality Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 border-b-2 border-gray-300 pb-2">
                Commitment with Quality
              </h3>
              <div className="space-y-4 text-gray-700">
                <p className="leading-relaxed">
                  We believe in following a routing to deliver the best services
                  and products to our customers.
                </p>
                <p className="leading-relaxed">
                  With a health mindset and to deliver the best. We have 100%
                  customer satisfaction
                </p>
              </div>
            </div>

            {/* Our Expertise Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 border-b-2 border-gray-300 pb-2">
                Our Expertise
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>Baling and Hydraulic Presses</li>
                <li>Draw Benches</li>
                <li>Mindray Cell Counter</li>
                <li>Scrap Baling Press</li>
                <li>Draw Bench Machine</li>
                <li>Paper Baling Press</li>
                <li>Bottle Filling Machine</li>
              </ul>
            </div>

            {/* Contact Us Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 border-b-2 border-gray-300 pb-2">
                Contact Us
              </h3>
              <div className="space-y-4">
                {/* Address */}
                <div className="flex items-start space-x-3">
                  <MapPin
                    className="text-gray-600 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div className="text-gray-700">
                    <p>
                      B-12/2 Kh No-105/9, Swaran Park, Munda, Near Industrial
                      Area
                    </p>
                    <p> Anand Parbat, New Delhi-110041</p> <p>Delhi, India</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="text-gray-600 flex-shrink-0" size={20} />
                  <a
                    href="tel:08047515273"
                    className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200"
                  >
                    08047-515-273
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="mt-12 pt-8 border-t border-gray-200 text-center">
            <p className="text-gray-600 text-sm">
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 hover:underline mr-2"
              >
                Terms And Conditions
              </a>
              | © 2025 Krishna Engineering Works Ltd. All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
