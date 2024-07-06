import React from "react";
import Wrapper from "@/components/wrapper";
import Image from "next/image";
import { images } from "@/lib/data";
import TitleMenu from "./title-menu";

const Sponsor = () => {
  return (
    <Wrapper className="mt-24">
      <div className="p-12 flex flex-wrap mt-24 md:flex-row gap-x-12 items-center justify-between grayscale">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image.imageUrl}
            alt={image.name}
            width={120}
            height={120}
          />
        ))}
      </div>
    </Wrapper>
  );
};

export default Sponsor;
