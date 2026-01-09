import React from "react";

const Navbar = () => {
  return (
    <>
      <div class="navbar bg-base-100 shadow-sm">
        <div class="navbar-start">
          <div class="dropdown">
            <div
              tabindex="0"
              role="button"
              class="btn btn-ghost lg:hidden"
            ></div>
          </div>
          <a class="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div class="navbar-center hidden lg:flex"></div>
        <div class="navbar-end">
          <a class="btn">Button</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
