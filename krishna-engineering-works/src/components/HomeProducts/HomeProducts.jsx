import React from "react";
import { ArrowRight } from "lucide-react";
import ProductOne from "../../assets/HeroImage2.png";

function HomeProducts() {
  const products = [
    {
      category: "Baling and Hydraulic Presses",
      description:
        "Manufacturer of a wide range of products which include Hydraulic Belling Press, Hydraulic Power Press, Hydraulic Scrap Baling Press, H Frame Hydraulic Press, Scrap Baling Press and Automatic Carton Scrap Baling Press.",
      items: [
        {
          title: "Hydraulic Belling Press",
          description:
            "Krishna Engineering Works is engaged in manufacturing of Press Machines, Draw Bench Machines, etc. Under the efficient guidance of Mr. Santosh Kumar (Owner), we have achieved a name for ourselves in this competitive domain.",
          image: ProductOne,
        },
        {
          title: "Hydraulic Power Press",
          description:
            "Efficient paper baling press machines for waste management and recycling operations with automated compression systems.",
          image:
            "https://5.imimg.com/data5/SELLER/Default/2023/4/301830101/XS/FB/ZE/60827842/hydraulic-power-press-500x500.jpeg",
        },
        {
          title: "Hydraulic Scrap Baling Press",
          description:
            "Robust scrap baling press machines for metal and waste processing with high compression ratios and durability.",
          image:
            "https://5.imimg.com/data5/ANDROID/Default/2023/6/314882679/QQ/WX/AS/60827842/product-jpeg-500x500.jpg",
        },
        {
          title: "H Frame Hydraulic Press",
          description:
            "Robust scrap baling press machines for metal and waste processing with high compression ratios and durability.",
          image:
            "https://5.imimg.com/data5/FY/AO/MY-60827842/hydraulic-press-500x500.jpg",
        },
        {
          title: "Hydraulic Belling Press",
          description:
            "Robust scrap baling press machines for metal and waste processing with high compression ratios and durability.",
          image:
            "https://5.imimg.com/data5/XE/YC/NH/SELLER-60827842/tube-draw-bench-machine-500x500.jpg",
        },
        {
          title: "Scrap Baling Press",
          description:
            "Robust scrap baling press machines for metal and waste processing with high compression ratios and durability.",
          image:
            "https://5.imimg.com/data5/AC/LX/SQ/SELLER-60827842/scrap-baling-press-500x500.jpg",
        },
        {
          title: "Automatic Carton Scrap Baling Press",
          description:
            "Robust scrap baling press machines for metal and waste processing with high compression ratios and durability.",
          image:
            "https://5.imimg.com/data5/UV/OV/GE/SELLER-60827842/automatic-carton-scrap-baling-press-500x500.jpg",
        },
      ],
    },
    {
      category: "Draw Bench Machine",
      description:
        "Leading Manufacturer of Automatic Draw Bench Machine, Semi Automatic Draw Bench Machine and Pipe Draw Bench Machine from New Delhi.",
      items: [
        {
          title: "Automatic Draw Bench Machine",
          description:
            "Precision draw bench machines for wire and tube drawing applications with advanced control systems and safety mechanisms.",
          image:
            "https://5.imimg.com/data5/SELLER/Default/2023/5/312308510/QI/PD/XY/60827842/automatic-draw-bench-machine-500x500.jpg",
        },
        {
          title: "Semi Automatic Draw Bench Machine",
          description:
            "Heavy-duty draw benches for metal forming and shaping operations with customizable specifications and configurations.",
          image:
            "https://5.imimg.com/data5/UN/EG/MY-60827842/semi-automatic-draw-bench-machine-500x500.jpg",
        },
        {
          title: "Pipe Draw Bench Machine",
          description:
            "Heavy-duty draw benches for metal forming and shaping operations with customizable specifications and configurations.",
          image:
            "https://5.imimg.com/data5/NV/DH/MY-60827842/pipe-draw-bench-machine-500x500.jpg",
        },
      ],
    },
    {
      category: "Specialized Equipment",
      items: [
        {
          title: "Bottle Filling Machine",
          description:
            "Automated bottle filling machines for liquid packaging with precise volume control and high-speed operation capabilities.",
          image:
            "https://5.imimg.com/data5/ANDROID/Default/2023/6/314889541/AS/FB/SZ/60827842/product-jpeg-500x500.jpg",
        },
        {
          title: "Mindray Cell Counter",
          description:
            "Advanced cell counting equipment for laboratory and medical applications with digital precision and user-friendly interface.",
          image:
            "https://5.imimg.com/data5/SELLER/Default/2023/5/312309919/KD/HG/FP/60827842/paper-belling-machine-500x500.jpg",
        },
        {
          title: "Draw Benches",
          description:
            "Advanced cell counting equipment for laboratory and medical applications with digital precision and user-friendly interface.",
          image:
            "https://5.imimg.com/data5/SELLER/Default/2023/4/301827599/EH/RE/KM/60827842/automatic-draw-bench-machine-500x500.jpeg",
        },
        {
          title: "Paper Baling Press",
          description:
            "Advanced cell counting equipment for laboratory and medical applications with digital precision and user-friendly interface.",
          image:
            "https://5.imimg.com/data5/SELLER/Default/2023/4/301828599/RV/ZE/QO/60827842/paper-baling-press-machine-500x500.jpeg",
        },
      ],
    },
  ];
  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Products
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of high-quality engineering
            solutions designed to meet your industrial needs
          </p>
        </div>

        {products.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              {category.category}
            </h3>
            <p className="text-xl text-gray-600 mb-10 mx-auto">
              {category.description}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.items.map((product, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="h-64 bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-800 mb-3">
                      {product.title}
                    </h4>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {product.description}
                    </p>
                    <button className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105">
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HomeProducts;
