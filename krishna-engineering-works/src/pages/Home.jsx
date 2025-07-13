import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Users,
  Award,
  Settings,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";
import HeroImage from "../assets/HeroImage1.png";
import HeroImageThree from "../assets/HeroImage4.png";
import HeroImageTwo from "../assets/HeroImage2.png";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import HomeProducts from "../components/HomeProducts/HomeProducts.jsx";
import AboutImage from "../assets/AboutImage.png";
import CustomerTestimonials from "../components/testimonials/Testimonials.jsx";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: "Leading Manufacturer of Press Machines",
      subtitle: "Excellence in Engineering Since 2011",
      image: HeroImage,
      overlay: "bg-black/40",
    },
    {
      title: "Precision Draw Bench Machines",
      subtitle: "Advanced Technology for Modern Industry",
      image: HeroImageThree,
      overlay: "bg-black/40",
    },
    {
      title: "Hydraulic Baling Solutions",
      subtitle: "Innovative Equipment for Every Need",
      image: HeroImageTwo,
      overlay: "bg-black/40",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section id="home" className="relative h-screen overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            /> */}
            <img
              src={slide.image}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-fill md:object-cover sm:object-center"
            />

            <div className={`absolute inset-0 ${slide.overlay}`} />
            <div className="relative z-10 flex items-center justify-center h-full text-center text-white">
              <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
                  {slide.title}
                </h2>
                <p className="text-xl md:text-2xl mb-8 animate-fade-in-up opacity-90">
                  {slide.subtitle}
                </p>
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 animate-fade-in-up">
                  Explore Our Products
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all z-20"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all z-20"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? "bg-white scale-125" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Products Section */}
      <HomeProducts />

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                About Krishna Engineering Works
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Established in 2011, Krishna Engineering Works has been at the
                forefront of manufacturing high-quality Press Machines and Draw
                Bench Machines. Under the efficient guidance of Mr. Santosh
                Kumar (Owner), we have achieved recognition in this competitive
                domain.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our commitment to excellence, precision engineering, and
                customer satisfaction has made us a trusted partner for
                industries across the region. We combine traditional
                craftsmanship with modern technology to deliver solutions that
                exceed expectations.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-blue-50 px-4 py-2 rounded-full">
                  <span className="text-blue-600 font-semibold">
                    Quality Assured
                  </span>
                </div>
                <div className="bg-purple-50 px-4 py-2 rounded-full">
                  <span className="text-purple-600 font-semibold">
                    Expert Team
                  </span>
                </div>
                <div className="bg-green-50 px-4 py-2 rounded-full">
                  <span className="text-green-600 font-semibold">
                    Timely Delivery
                  </span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img src={HeroImageThree} className="rounded" alt="" />
              {/* <div className="rounded-2xl p-8 text-white"> */}
              {/* <div className="text-center">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Award className="w-12 h-12" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                  <p className="text-lg opacity-90">
                    To provide innovative engineering solutions that enhance
                    productivity and efficiency for our clients while
                    maintaining the highest standards of quality and service.
                  </p>
                </div> */}
              {/* </div> */}
            </div>
          </div>
        </div>
      </section>

      <CustomerTestimonials />

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ready to discuss your engineering needs? Contact us today for
              expert solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-gray-300">08047-515-273</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-300">info@krishnaengineering.com</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-gray-300">
                B-12/2 Kh No-105/9, Swaran Park, Munda, Near Industrial Area,
                Anand Parbat, New Delhi-110041 Delhi, India
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}

      <Footer />

      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Home;
