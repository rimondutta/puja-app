import React from "react";

const FormCard = ({
  name,
  setName,
  address,
  setAddress,
  onSubmit,
  loading,
  modalResult,
}) => {
  const buttonText = loading
    ? "খোঁজা হচ্ছে... একটু দাঁড়ান ⏳"
    : "পূজায় হাত ধরে ঘুরার জন্য গার্লফ্রেন্ড খুঁজুন";

  return (
    <div className="w-full max-w-md p-6 sm:p-8 bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-slate-200 text-slate-900 mb-8">
      <h1 className="mb-6 text-2xl sm:text-3xl font-extrabold text-black text-center tracking-tight">
        পূজায় হাত ধরে ঘুরার জন্য গার্লফ্রেন্ড খুঁজুন
      </h1>

      <p className="mb-6 text-sm text-slate-700 text-center">
        ফর্মটি পূরণ করে আপনার নাম এবং ঠিকানা দিন। তারপর "খুঁজুন" বাটনে ক্লিক
        করুন
      </p>

      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-bold text-slate-900 mb-1"
          >
            আপনার নাম দিন
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="আপনার পুরো নাম"
            required
            className="w-full p-3 border-2 border-fuchsia-500 rounded-lg text-slate-900 focus:ring-fuchsia-500 focus:border-fuchsia-500 transition duration-150 placeholder:text-slate-500"
            disabled={loading || !!modalResult}
          />
        </div>

        <div>
          <label
            htmlFor="address"
            className="block text-sm font-bold text-slate-900 mb-1"
          >
            আপনার ঠিকানা দিন
          </label>
          <input
            id="address"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="যেমন: Kotowali, Chattogram"
            required
            className="w-full p-3 border-2 border-fuchsia-500 rounded-lg text-slate-900 focus:ring-fuchsia-500 focus:border-fuchsia-500 transition duration-150 placeholder:text-slate-500"
            disabled={loading || !!modalResult}
          />
        </div>

        <button
          type="submit"
          className={`w-full rounded-lg px-6 py-3 font-bold transition duration-300 transform text-white ${
            loading || !!modalResult
              ? "bg-slate-500 cursor-not-allowed"
              : "bg-black hover:bg-gray-800 active:scale-[0.98] shadow-lg shadow-black/30"
          }`}
          disabled={loading || !!modalResult}
        >
          {buttonText}
        </button>
      </form>
    </div>
  );
};

export default FormCard;
