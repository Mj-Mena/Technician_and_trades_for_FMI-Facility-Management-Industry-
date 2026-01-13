import React from "react";
import Navbar from "../components/Navbar";
import coverpic from "../assets/landing.svg";
import Trybtn from "../components/Greenbtn";
import { easeOut, motion } from "framer-motion";
const Landing = () => {
  return (
    <>
      <div class="col-span-10 col-start-2 max-h-225 ">
        <div class="col-span-10 col-start-2">
          <Navbar />
        </div>
        {/* text beside image */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          class="col-span-10 col-start-2"
        >
          <div className="flex ">
            <div class=" col-span-5 col-start-1 z-20 mx-0 my-auto">
              <h1 class="text-4xl font-bold text-font-primary text-left">
                Find Trusted Technicians Near You.
              </h1>
              <hr class="mt-4" />
              <p class="text-left mt-5 mb-5">
                Select a trade below and discover skilled service providers in
                your area. No login required.
              </p>
              <div class="flex justify-start">
                <Trybtn class="items-start">Browse Trades</Trybtn>
              </div>
            </div>
            <div class=" col-span-7 col-start-4 pic">
              <img src={coverpic} alt="Landing" />
            </div>
          </div>
        </motion.div>

        <div className=" col-span-12 absolute inset-0 backdrop"></div>
      </div>
    </>
  );
};

export default Landing;
