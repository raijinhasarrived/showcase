import React from 'react';

export const SkeletonOne = () => {
  return (
    <div className="flex w-screen h-screen gap-5 bg-black">
      <div className="max-w-[300px] min-[300px] rounded-full bg-gray-400 animate-pulse"></div>
      <div className="max-w-[250px] min-[150px] bg-gray-400 animate-pulse"></div>
    </div>
  );
};
