import React from "react";

const NewsLetterBox = () => {
  const onSubmiteHandler = (event) => {
    event.preventDefault();
  };
  return (
    <div className="text-center pb-10">
      <p className="text-2xl font-medium text-gray-800">
        Subscribe now and get 20% off
      </p>
      <form
        onSubmit={onSubmiteHandler}
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3 rounded-full"
      >
        <input
          className="w-full sm:flex-1 outline-none"
          type="email"
          placeholder="Enter your email"
          required
        />
        <button
          className="bg-black text-white text-xs px-6 py-4 sm:px-10 sm:py-10 rounded-full"
          type="submit"
        >
          SUBSICRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsLetterBox;
