import React from "react";

const ResultModal = ({ result, onClose }) => {
  if (!result) return null;

  const solidEffect = "bg-white border border-slate-300"; // <-- solid white
  const icon = result.type === "success" ? "❌" : "❌";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 p-4 transition-opacity duration-300">
      <div
        className={`w-full max-w-sm rounded-2xl p-6 shadow-2xl transition-transform duration-300 transform scale-100 ${solidEffect}`}
      >
        <div className="flex justify-center mb-4">
          <span className="text-4xl">{icon}</span>
        </div>
        <h2 className="text-xl font-extrabold text-center mb-4 text-slate-900">
          সার্ভার রিপোর্ট
        </h2>
        <p className="text-center mb-6 font-medium leading-relaxed text-slate-900">
          {result.text}
        </p>
        <button
          onClick={onClose}
          className="w-full rounded-lg px-6 py-3 font-semibold transition duration-300 bg-black text-white hover:bg-gray-800"
        >
          বন্ধ করুন
        </button>
      </div>
    </div>
  );
};

export default ResultModal;
