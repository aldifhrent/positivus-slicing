import React from "react";
import Wrapper from "@/components/wrapper";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <Wrapper className="p-12">
      <div className="flex flex-col md:flex-row justify-between items-center">
        {/* Bagian untuk judul */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left ">
          <h1 className="font-bold text-5xl md:text-7xl leading-tight ">
            Navigating the <br /> digital landscape <br />
            for success
          </h1>
          <Image
            src="/hero.svg"
            alt="Hero Image"
            width={800}
            height={800}
            className="block w-full max-w-sm mt-6 md:max-w-none md:hidden"
          />
          <div className="flex flex-col items-center md:items-start text-center md:text-left mt-6 ">
            <p className="max-w-lg leading-loose text-md ">
              Our digital marketing agency helps businesses grow and succeed
              online through a range of services including SEO, PPC, social
              media marketing, and content creation.
            </p>
          </div>
          <Button className="mt-4 text-white text-[18px] w-full md:w-[250px] h-[50px] hover:text-black">
            Book a consultation
          </Button>
        </div>

        {/* Bagian untuk penjelasan dan tombol */}
        <div className="hidden md:block justify-center  mt-6 md:mt-0">
          <Image
            src="/hero.svg"
            alt="Hero Image"
            width={600}
            height={600}
            className="w-full md:max-w-none"
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default Hero;
