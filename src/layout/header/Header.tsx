import React from 'react';

export const Header = () => {
  return (
    <header className="w-screen fixed z-50 flex px-2 text-white ">
      <div className="bg-zinc-900 w-[20%] h-14 flex items-center mx-auto justify-center rounded-md">
        Text
      </div>
      <div className="h-10  bg-zinc-900  w-1/2  flex items-center mx-auto justify-center rounded-md">
        Header
      </div>
      <div className="bg-zinc-900 w-[20%] h-12 flex items-center mx-auto justify-center rounded-md">
        Text
      </div>
    </header>
  );
};
