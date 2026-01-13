import React from "react";
import Btnmain from "./Greenbtn";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <>
      <motion.div
        className="col-span-12 navbar bg-transparent z-10"
        initial={{ y: -50, opacity: 0 }} // start 50px above and invisible
        animate={{ y: 0, opacity: 1 }} // move to original position and fully visible
        transition={{ duration: 0.5 }}
      >
        <div className="navbar-start">
          <a className="font-bold text-font-primary text-3xl">FMI</a>
        </div>

        <div className="navbar-center">
          <ul className="flex gap-6">
            <li className="text-font-primary">Home</li>
            <li className="text-font-primary">Trades</li>
            <li className="text-font-primary">How it works</li>
          </ul>
        </div>

        <div className="navbar-end">
          <Btnmain>Be a service provider</Btnmain>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
