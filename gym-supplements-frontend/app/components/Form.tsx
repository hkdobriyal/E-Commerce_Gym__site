
// Gym__website\app\components\Form.tsx
import Link from "next/link";
import React from "react";

function Form({ register }: { register?: boolean }) {
  return (
    <section id="form">
      <div className="max-w-xl my-16 mx-8 lg:mx-auto p-8 lg:px-12 lg:py-16 bg-gradient-to-r from-gray-400 to-blu/30 text-black space-y-10 rounded-xl shadow-lg">
        <div className="space-y-6">
          {register && (
            <div className="flex flex-col gap-3">
              <label htmlFor="name" className="font-semibold text-lg">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="py-3 px-4 text-black rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          )}
          <div className="flex flex-col gap-3">
            <label htmlFor="email" className="font-semibold text-lg">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              className="py-3 px-4 text-black rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="password" className="font-semibold text-lg">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="py-3 px-4 text-black rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          {register && (
            <>
              <div className="flex flex-col gap-3">
                <label htmlFor="phone" className="font-semibold text-lg">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Your Phone Number"
                  className="py-3 px-4 text-black rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="flex flex-col gap-3">
                <label htmlFor="address" className="font-semibold text-lg">
                  Address <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="address"
                  placeholder="Your Address"
                  className="py-3 px-4 text-black rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={3}
                  required
                />
              </div>
            </>
          )}
        </div>
        <div>
          <button className="bg-blu p-3 text-center text-lg w-full rounded-lg shadow-md border-2 border-blue-500 transition-all duration-300 hover:bg-transparent hover:text-blue-500 hover:border-blue-500">
            {register ? "Register" : "Login"}
          </button>
        </div>
        <div className="flex flex-col gap-3 items-center">
          <p className="text-black">{register ? "Already have an account?" : "New to Muscle&Health?"}</p>
          <Link
            href={register ? "/login" : "/register"}
            className="text-blue-500 font-bold transition-all duration-300 hover:underline hover:text-blue-700"
          >
            {register ? "Login" : "Register"}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Form;
