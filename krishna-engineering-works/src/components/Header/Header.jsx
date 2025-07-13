import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../../assets/Logo.png";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showProductDropdown, setShowProductDropdown] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

  const productCategories = [
    {
      name: "Baling and Hydraulic Presses",
      products: [
        "Hydraulic Press Machine",
        "Paper Baling Press",
        "Scrap Baling Press",
        "Industrial Hydraulic Press",
        "Heavy Duty Baling Press",
      ],
    },
    {
      name: "Draw Bench Machine",
      products: [
        "Wire Drawing Machine",
        "Tube Drawing Machine",
        "Bar Drawing Machine",
        "Precision Draw Bench",
      ],
    },
    {
      name: "Draw Benches",
      products: [
        "Heavy Duty Draw Bench",
        "Customized Draw Bench",
        "Multi-Stage Draw Bench",
        "Automatic Draw Bench",
      ],
    },
    {
      name: "Bottle Filling Machine",
      products: [
        "Automatic Bottle Filling",
        "Semi-Automatic Filling",
        "Multi-Head Filling Machine",
        "Liquid Filling System",
      ],
    },
    {
      name: "Mindray Cell Counter",
      products: [
        "Automated Cell Counter",
        "Digital Cell Counter",
        "Laboratory Cell Counter",
        "Medical Cell Counter",
      ],
    },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
              src={Logo}
              alt="Krishna Engineering Works Logo"
              className="h-15 w-auto object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-16">
            <a
              href="#home"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              About
            </a>

            <div
              className="relative"
              onMouseEnter={() => setShowProductDropdown(true)}
              onMouseLeave={() => {
                setShowProductDropdown(false);
                setActiveCategory(null);
              }}
            >
              <a
                href="#products"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Products
              </a>

              {showProductDropdown && (
                <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-2xl z-50 min-w-[280px] overflow-visible">
                  <div className="py-2 flex flex-col">
                    {productCategories.map((category, index) => (
                      <div
                        key={index}
                        className="relative group"
                        onMouseEnter={() => setActiveCategory(index)}
                        onMouseLeave={() => setActiveCategory(null)}
                      >
                        <a
                          href="#products"
                          className="block px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 transition-all font-medium border-b border-gray-100 last:border-b-0"
                        >
                          <div className="flex items-center justify-between">
                            <span>{category.name}</span>
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </div>
                        </a>

                        {/* Sub-dropdown */}
                        {activeCategory === index &&
                          category.products?.length > 0 && (
                            <div className="absolute top-0 left-full ml-2 bg-white border border-gray-200 rounded-xl shadow-2xl z-50 min-w-[250px]">
                              <div className="py-2">
                                <div className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 border-b border-gray-100">
                                  <h4 className="font-semibold text-blue-600 text-sm">
                                    {category.name}
                                  </h4>
                                </div>
                                {category.products.map(
                                  (product, productIndex) => (
                                    <a
                                      key={productIndex}
                                      href="#products"
                                      className="block px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-blue-600 transition-all text-sm border-b border-gray-50 last:border-b-0"
                                    >
                                      {product}
                                    </a>
                                  )
                                )}
                              </div>
                            </div>
                          )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <a
              href="#contact"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Contact
            </a>
          </nav>
          <button className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors text-sm cursor-pointer">
            Download Catalogue
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-3">
              <a
                href="#home"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                About
              </a>
              <div>
                <button
                  onClick={() => setShowProductDropdown(!showProductDropdown)}
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium flex items-center justify-between w-full"
                >
                  <span>Products</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      showProductDropdown ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {showProductDropdown && (
                  <div className="mt-2 ml-4 space-y-2">
                    {productCategories.map((category, index) => (
                      <div key={index}>
                        <button
                          onClick={() =>
                            setActiveCategory(
                              activeCategory === index ? null : index
                            )
                          }
                          className="text-gray-600 hover:text-blue-600 transition-colors text-sm flex items-center justify-between w-full py-1"
                        >
                          <span>{category.name}</span>
                          <svg
                            className={`w-3 h-3 transition-transform ${
                              activeCategory === index ? "rotate-180" : ""
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>

                        {activeCategory === index && (
                          <div className="mt-1 ml-4 space-y-1">
                            {category.products.map((product, productIndex) => (
                              <a
                                key={productIndex}
                                href="#products"
                                className="block text-gray-500 hover:text-blue-600 transition-colors text-xs py-1"
                              >
                                {product}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <a
                href="#contact"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Contact
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
