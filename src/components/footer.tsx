import React from "react";
import { Separator } from "./ui/separator";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Facebook, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import { menus } from "@/lib/data";
import Wrapper from "./wrapper";
import Link from "next/link";

const Footer = () => {
  return (
    <Wrapper className="pt-0 px-0 md:pt-12 lg:px-12 mt-24 ">
      <div className=" bg-[#191A23] h-full p-12 rounded-t-0 lg:rounded-t-[30px]">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <Image
            src="/logowhite.svg"
            alt="Logo Footer"
            width={100}
            height={100}
          />
          <div className="flex flex-col mt-8 md:flex-row gap-x-12 md:mt-0">
            {menus.map((menu) => (
              <Link href={menu.href || ""} key={menu.name}>
                <ul className="flex flex-col md:flex-row gap-x-4">
                  <li className="text-white">{menu.name}</li>
                </ul>
              </Link>
            ))}
          </div>
          {/* Button */}
          <div className="hidden md:flex gap-x-4">
            <Button className="bg-white text-black" size="icon">
              <Linkedin />
            </Button>
            <Button className="bg-white text-black" size="icon">
              <Facebook />
            </Button>
            <Button className="bg-white text-black" size="icon">
              <Twitter />
            </Button>
          </div>
        </div>
        {/* Contact */}
        <div className="flex flex-col md:flex-row justify-between mt-4 md:mt-12">
          <div className="flex flex-col gap-2 items-center text-center md:items-start md:text-start">
            <h1 className="bg-limegreen px-2 inline-block font-medium text-lg rounded-full mt-4 md:mt-0">
              Contact us:
            </h1>
            <p className="text-white">Email: info@positivus.com</p>
            <p className="text-white">Phone: 555-567-8901</p>
            <p className="text-white w-2/3">
              Address: 1234 Main St Moonstone City, Stardust State 12345
            </p>
          </div>
          <div className="flex flex-col md:flex-row bg-[#292A32]/90 w-full h-full mt-12 md:mt-0 md:w-[634px] md:h-[184px] rounded-lg items-center justify-center gap-4 pb-2">
            <Input
              placeholder="Email"
              className="w-4/12 bg-transparent border border-gray-300 rounded px-4 py-2 outline-none focus:ring-2 mt-4 "
            />
            <Button className="bg-limegreen text-black">
              Subscribe to news
            </Button>
          </div>
          <div className="flex gap-x-4 md:hidden p-2 justify-center items-center mt-4">
            <Button className="bg-white text-black" size="icon">
              <Linkedin />
            </Button>
            <Button className="bg-white text-black" size="icon">
              <Facebook />
            </Button>
            <Button className="bg-white text-black" size="icon">
              <Twitter />
            </Button>
          </div>
        </div>
        <Separator className="mt-8" />
        <div className="flex flex-col lg:flex-row gap-x-12 text-white mt-12 items-center md:item-left">
          <h1>© 2023 Positivus. All Rights Reserved.</h1>
          <h1 className="underline">Privacy Policy</h1>
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;
