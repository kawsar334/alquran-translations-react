import React from 'react';

const Rightbar = ({ openRight }) => {
  return (
    <div className={`w-full md:w-[360px] bg-[white] absolute right-0 top-[110px] md:top-[70px] h-[calc(100vh-80px)] ${openRight ? "flex" : "hidden md:flex"} flex-col p-4`}>
      <h2 className="text-white text-xl font-bold mb-4">Suggested Pages</h2>
      <div className="flex flex-col gap-4">
        <div className="bg-white p-2 rounded shadow">
          <h3 className="text-teal-800 font-semibold">Page 1</h3>
          <p className="text-[#555]">Description for Page 1</p>
        </div>
        <div className="bg-white p-2 rounded shadow">
          <h3 className="text-teal-800 font-semibold">Page 2</h3>
          <p className="text-[#555]">Description for Page 2</p>
        </div>
        <div className="bg-white p-2 rounded shadow">
          <h3 className="text-teal-800 font-semibold">Page 3</h3>
          <p className="text-[#555]">Description for Page 3</p>
        </div>
      </div>
      <h2 className="text-white text-xl font-bold mt-6 mb-4">Friends</h2>
      <div className="flex flex-col gap-4">
        <div className="bg-white p-2 rounded shadow flex items-center gap-2">
          <img src="https://via.placeholder.com/40" alt="Friend 1" className="rounded-full" />
          <div>
            <h3 className="text-teal-800 font-semibold">Friend 1</h3>
            <p className="text-[#555]">Online</p>
          </div>
        </div>
        <div className="bg-white p-2 rounded shadow flex items-center gap-2">
          <img src="https://via.placeholder.com/40" alt="Friend 2" className="rounded-full" />
          <div>
            <h3 className="text-teal-800 font-semibold">Friend 2</h3>
            <p className="text-[#555]">Offline</p>
          </div>
        </div>
        <div className="bg-white p-2 rounded shadow flex items-center gap-2">
          <img src="https://via.placeholder.com/40" alt="Friend 3" className="rounded-full" />
          <div>
            <h3 className="text-teal-800 font-semibold">Friend 3</h3>
            <p className="text-[#555]">Online</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
