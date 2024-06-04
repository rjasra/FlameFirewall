import React from "react";

const Body = () => {
  return (
    <div className="grid gap-4 md:gap-6">
      <div>
        <img src="./assets/body1.png" alt="body1" className="size-70 " />
      </div>

      <div className="grid gap-4">
        <div>
          <p className="text-white text-5xl font-serif md:text-8xl">
            Secure your device today
          </p>
          <p className="text-white md:text-2xl">
            Explore from a wide range of{" "}
            <button className="bg-gradient-to-r from-fuchsia-600 to-purple-600 rounded-full px-2">
              {" "}
              Firewall-plans{" "}
            </button>{" "}
          </p>
        </div>

        <div className="flex gap-4 md:gap-6">
          <button className=" md:text-2xl bg-gradient-to-r from-amber-300 to-orange-600 text-xl text-white font-mono px-2 rounded-xl">
            Buy Now
          </button>
          <button className="md:text-2xl bg-gradient-to-r from-amber-300 to-orange-600 text-xl text-white font-mono px-2 rounded-xl">
            Schedule Free Demo
          </button>
        </div>
        <div className="">
          <form action="" className="flex gap-3 md:text-2xl">
            <input
              className="rounded-md px-4 py-3"
              type="email"
              placeholder="Enter email address"
            />
            <button className="text-white text-l">Subscribe Now</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Body;
