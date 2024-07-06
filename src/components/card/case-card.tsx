import React from "react";
import Wrapper from "../wrapper";
import { casemenus } from "@/lib/data";
import { Button } from "../ui/button";
import { MoveUpRight } from "lucide-react";

interface CaseCardProps {
  detail: string;
}
const CaseCard = ({ detail }: CaseCardProps) => {
  return (
    <div className="px-24 pt-4 bg-[#191A23] rounded-[45px]">
      <div className="flex flex-col">
        <p className="text-white text-[16px]">{detail}</p>
        <Button
          variant="link"
          className="text-limegreen justify-start text-left items-center p-0"
        >
          Learn More <MoveUpRight />
        </Button>
      </div>
    </div>
  );
};

export default CaseCard;
