import React from "react";

const Technology = () => {
  return (
    <div className="w-full px-4 sm:px-6 md:px-10 lg:px-16 py-10">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="font-bold text-3xl md:text-4xl text-slate-900 mb-4">
          Why Hire Developers From Our Name
        </h1>
        <p className="text-gray-600 leading-relaxed text-base md:text-lg">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since.
        </p>
      </div>

      {/* Responsive Grid */}
      <div
        className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        lg:grid-cols-3 
        gap-10
      "
      >
        {/* Technology Card */}
        <div className="p-6 bg-blue-100 rounded-xl shadow-md border-b-[6px] border-red-700">
          <div className="w-20 h-20  flex items-center justify-center mb-6">
            <span className="text-gray-600">
               <img src={require("../assets/im7.png")} />
            </span>
          </div>
          <h6 className="text-lg font-semibold text-slate-900 mb-2">
            Backend Development
          </h6>
          <p className="text-sm text-gray-600 leading-relaxed">
            .NET | C/C++ | Django | Firebase | Golang | Symfony | Laravel | Node
            | PHP | Python | Ruby on Rails | Java
          </p>
        </div>

        <div className="p-6 bg-yellow-100 rounded-xl shadow-md border-b-[6px] border-yellow-700">
          <div className="w-20 h-20  flex items-center justify-center mb-6">
            <span className="text-gray-600">
              <img src={require("../assets/im8.png")} />
            </span>
          </div>
          <h6 className="text-lg font-semibold text-slate-900 mb-2">
            Frontend Development
          </h6>
          <p className="text-sm text-gray-600 leading-relaxed">
            React | Vue | Angular | HTML | CSS | JS | Tailwind | Next.js
          </p>
        </div>

        <div className="p-6 bg-blue-300 rounded-xl shadow-md border-b-[6px] border-yellow-900">
          <div className="w-20 h-20 flex items-center justify-center mb-6">
            <span className="text-gray-600">
              <img src={require("../assets/im9.png")} />
            </span>
          </div>
          <h6 className="text-lg font-semibold text-slate-900 mb-2">
            Mobile Development
          </h6>
          <p className="text-sm text-gray-600 leading-relaxed">
            Flutter | React Native | Kotlin | Swift | Java
          </p>
        </div>

        <div className="p-6 bg-blue-200 rounded-xl shadow-md border-b-[6px] border-red-700">
          <div className="w-20 h-20 flex items-center justify-center mb-6">
            <span className="text-gray-600">
              <img src={require("../assets/im10.png")} />
            </span>
          </div>
          <h6 className="text-lg font-semibold text-slate-900 mb-2">
            Blockchain, AI/ML
          </h6>
          <p className="text-sm text-gray-600 leading-relaxed">
            Solidity | Web3 | TensorFlow | PyTorch | ML Models
          </p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow-md border-b-[6px] border-yellow-200">
          <div className="w-20 h-20 flex items-center justify-center mb-6">
            <span className="text-gray-600">
              <img src={require("../assets/im11.png")} />
            </span>
          </div>
          <h6 className="text-lg font-semibold text-slate-900 mb-2">
            DevOps & Low Code
          </h6>
          <p className="text-sm text-gray-600 leading-relaxed">
            AWS | Docker | Kubernetes | CI/CD | PowerApps
          </p>
        </div>

        <div className="p-6 bg-red-100 rounded-xl shadow-md border-b-[6px] border-green-700">
          <div className="w-20 h-20 flex items-center justify-center mb-6">
            <span className="text-gray-600">
              <img src={require("../assets/im12.png")} />
            </span>
          </div>
          <h6 className="text-lg font-semibold text-slate-900 mb-2">
            E-commerce & CMS
          </h6>
          <p className="text-sm text-gray-600 leading-relaxed">
            Shopify | WooCommerce | Magento | WordPress | Strapi
          </p>
        </div>
      </div>
    </div>
  );
};

export default Technology;
