import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { MoveUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  bgTitle: string;
  colorTitle: string;
  imageUrl: string;
  backgroundColor: string;
  darkArrow: boolean;
}
const ServicesCard = ({
  bgTitle,
  title,
  colorTitle,
  imageUrl,
  backgroundColor,
  darkArrow,
}: ServiceCardProps) => {
  return (
    // Border + Background Color
    <div
      className={`flex flex-col lg:flex-row bg-[#${backgroundColor}] rounded-[45px] md:p-[30px] border-b-[6px] border-b-black justify-between w-full h-full`}
    >
      <div className="flex flex-col lg:flex-row justify-between p-8 md:p-0">
        <div>
          <h1
            className={`bg-${bgTitle} p-3 rounded-xl text-${colorTitle} font-bold text-2xl w-10/12`}
          >
            {title}
          </h1>
          <Link
            href="/"
            className="flex items-center gap-x-2 mt-0 md:mt-24 order-"
          >
            <Button
              className={
                (cn("hidden md:w-12 h-12 rounded-full"),
                darkArrow ? "bg-black" : "bg-white")
              }
              size="icon"
            >
              <MoveUpRight
                className={cn(
                  "mx-auto font-bold",
                  darkArrow ? "text-limegreen" : "text-black"
                )}
              />
            </Button>
            <p
              className={cn(
                "hidden md:block text-md font-semibold ",
                darkArrow ? "text-black" : "text-white"
              )}
            >
              Learn More
            </p>
          </Link>
        </div>
        <Image
          src={`${imageUrl}`}
          width={250}
          height={250}
          alt={title}
          className="block"
        />
        <div className="flex justify-between items-end md:hidden"></div>
      </div>
    </div>
  );
};

export default ServicesCard;
