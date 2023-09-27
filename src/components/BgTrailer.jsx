import React from "react";

const BgTrailer = () => {
  return (
    <div className="w-full relative mt-[-16vh] ">
      <iframe
        className="w-full aspect-video "
        src={`https://www.youtube.com/embed/hXzcyx9V0xw?autoplay=1&mute=1&controls=0&loop=1`}
        title="hXzcyx9V0xw"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default BgTrailer;
