import { MoveUpRight } from "lucide-react";
import { Button } from "./ui/button";
import Wrapper from "./wrapper";
import { casemenus } from "@/lib/data";
import CaseCard from "./card/case-card";
import TitleMenu from "./title-menu";
import { Separator } from "./ui/separator";

const CaseStudies = () => {
  // 1. size small showing card
  return (
    <Wrapper className="p-12">
      <TitleMenu
        className="px-0"
        title={"Case Studies"}
        description={
          "Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
        }
      />
      <div className="flex justify-center items-center">
        <div className="hidden md:flex justify-between p-12 bg-[#191A23] rounded-xl mt-24 gap-x-12 w-full h-[324px]">
          {casemenus.map((menu, index) => (
            <div
              className="flex  mx-auto justify-center gap-x-12 items-center"
              key={index}
            >
              <div>
                <p className="text-white max-w-mdz">{menu.detail}</p>
                <Button
                  variant="link"
                  className="text-limegreen justify-start text-left items-center p-0"
                >
                  Learn More <MoveUpRight />
                </Button>
              </div>
              <Separator orientation="vertical" className="" />
            </div>
          ))}
        </div>
      </div>
      <div className="md:hidden flex justify-between gap-x-12 mt-12">
        {casemenus.map((menu, index) => (
          <div
            className="bg-[#191A23] rounded-[45px] p-12 h-[400px]"
            key={index}
          >
            <div className="flex flex-col ">
              <p className="text-white text-[16px] text-left">{menu.detail}</p>
              <Button variant="link" className="text-limegreen items-center">
                Learn More <MoveUpRight />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default CaseStudies;
