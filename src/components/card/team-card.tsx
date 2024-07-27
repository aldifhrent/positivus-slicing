import Image from "next/image";
import { Button } from "../ui/button";
import { Linkedin, SeparatorHorizontal } from "lucide-react";
import { Separator } from "../ui/separator";

interface TeamProps {
  name: string;
  position: string;
  experience: string;
  imageUrl: string;
}
const TeamCard = ({ name, position, experience, imageUrl }: TeamProps) => {
  return (
    <div className="flex flex-col items-center">
      <div className="border bg-white rounded-[45px] p-8 md:p-[50px] border-b-[6px] border-b-black w-[387px] h-[331px]">
        <div className="flex gap-4">
          <Image src={imageUrl} alt={name} width={105.65} height={102.82} />
          <div className="flex flex-col justify-end">
            <h1 className="text-[20px] font-semibold">{name}</h1>
            <p className="text-[18px]">{position}</p>
          </div>
          <Button size="icon" className="rounded-full w-[34px] h-[26px]">
            <Linkedin className="h-4 w-4 text-limegreen" />
          </Button>
        </div>
        <Separator className="mt-4 border-1" />
        <p className="mt-4">{experience}</p>
      </div>
    </div>
  );
};

export default TeamCard;
