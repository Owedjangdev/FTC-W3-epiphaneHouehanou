

import { products } from "@/data/Product";
import {   ChevronRight, ShoppingBag } from "lucide-react";

const OurProducts: React.FC = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-10">
        <div>
          <p className="text-gray-500 text-sm mb-1">
            Hard to choose right products for your pets?
          </p>
          <h2 className="text-3xl font-bold text-[#0c3c6d]">Our Products</h2>
        </div>
        <button className="flex items-center text-[#0c3c6d] border rounded-full px-3 py-3 justify-center  font-semibold mt-4 sm:mt-0">
          View More <ChevronRight className="ml-2 w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105"
          >
            <div className="relative h-64 flex items-center justify-center p-4">
              <img
                src={product.image}
                alt={product.name}
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div className="p-4 pt-0">
              <h3 className="text-lg font-semibold text-[#0c3c6d] mb-1">
                {product.name}
              </h3>
              <div className="text-sm text-gray-500 mb-2">
                <span className="font-medium">{product.productType}</span>
                {product.details && (
                  <span className="ml-1">・ {product.details}</span>
                )}
              </div>
              <p className="text-lg font-bold text-[#0c3c6d] mb-3">
                {product.price}
              </p>
              <div
                className={`flex items-center text-xs font-semibold rounded-full px-4 py-3 w-fit mb-4 ${
                  product.giftType === "cat"
                    ? "bg-secondary text-[#7f7754]"
                    : "bg-secondary text-[#547f7f]"
                }`}
              >
                <ShoppingBag className="w-3 h-3 mr-1" />
                {product.gift}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProducts;
