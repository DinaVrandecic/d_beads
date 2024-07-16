import React from 'react';
import Link from "next/link";

const SignUp = () => {
  return (
      <div className="flex flex-col items-center justify-center w-full mt-[80px]">
        <div className="bg-peach1 p-8 m-[30px] md:m-[0px] shadow-md w-full md:w-1/2 ">
          <h2 className="text-2xl font-bold font-serif text-dark_blue mb-4">SIGN UP</h2>
          <form>
            <div className="mb-4">
              <label className="block text-dark_blue text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="shadow appearance-none  w-full py-2 px-3 text-brown1 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-dark_blue text-sm font-bold mb-2" htmlFor="surname">
                Surname
              </label>
              <input
                className="shadow appearance-none  w-full py-2 px-3 text-brown1 leading-tight focus:outline-none focus:shadow-outline"
                id="surname"
                type="text"
                placeholder="Enter your surname"
              />
            </div>
            <div className="mb-4">
              <label className="block text-dark_blue text-sm font-bold mb-2" htmlFor="emailSignup">
                Email
              </label>
              <input
                className="shadow appearance-none  w-full py-2 px-3 text-brown1 leading-tight focus:outline-none focus:shadow-outline"
                id="emailSignup"
                type="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-dark_blue text-sm font-bold mb-2" htmlFor="passwordSignup">
                Password
              </label>
              <input
                className="shadow appearance-none  w-full py-2 px-3 text-brown1 leading-tight focus:outline-none focus:shadow-outline"
                id="passwordSignup"
                type="password"
                placeholder="Enter your password"
              />
            </div>
            <div className="mb-6">
              <label className="block text-dark_blue text-sm font-bold mb-2" htmlFor="confirmPassword">
                Confirm Password
              </label>
              <input
                className="shadow appearance-none  w-full py-2 px-3 text-brown1 leading-tight focus:outline-none focus:shadow-outline"
                id="confirmPassword"
                type="password"
                placeholder="Confirm your password"
              />
            </div>
            <div className='my-[10px]'>
              <Link href="/login" className=" font-serif text-peach1 bg-dark_blue hover:peach1 hover:bg-blue1 p-[15px]  rounded-sm">
                SIGN UP
              </Link>
            </div>
          </form>
        </div>
        <div className='mt-[30px]'>
          <p className="font-serif text-brown1">We've already met?</p>
          <div className='flex justify-center my-[10px]'>
              <Link href="login" className=" font-serif text-peach1 bg-dark_blue hover:text-dark_blue hover:bg-peach1 p-[15px]  rounded-sm">
                LOG IN
              </Link>
            </div>
        </div>
      </div>
  );
};

export default SignUp;


