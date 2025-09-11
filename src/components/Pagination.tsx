import { ArrowLeft, ArrowRight } from "lucide-react";
import React from "react";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center items-center space-x-5 mt-8">
      {/* Bouton pour la page précédente */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="  rounded-md text-gray-700 hover:bg-gray-100 disabled:opacity-50"
      >
        <ArrowLeft size={16} />
      </button>

      {/* Affichage des numéros de page */}
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-4 py-2 border rounded-md ${
            currentPage === page
              ? "bg-primary-80  text-white"
              : "text-gray-700 hover:bg-gray-100"
          }`}
        >
          {page}
        </button>
      ))}

      {/* Bouton pour la page suivante */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className=" rounded-md text-gray-700 hover:bg-gray-100 disabled:opacity-50"
      >
        <ArrowRight size={16} />
      </button>
    </div>
  );
};

export default Pagination;
