import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

interface WorkingCardProps {
  label: string;
  title: string;
  description: string;
  currentValue: string;
}

const WorkingCard = ({
  label,
  title,
  description,
  currentValue,
}: WorkingCardProps) => {
  return (
    <div
      className={cn(
        currentValue === `item-${label}` ? "bg-limegreen" : "bg-[#F3F3F3]",
        "rounded-[45px]  p-[50px] border-b-[6px] border-b-black mb-[30px] max-w-screen"
      )}
    >
      <Accordion type="single" collapsible>
        <AccordionItem value={`item-${label}`}>
          <AccordionTrigger className="hover:no-underline">
            {" "}
            <div className="flex items-center gap-4">
              <span className="text-[30px] md:text-h1 font-bold">{label}</span>{" "}
              <span className="text-[18px] md:text-h3 font-bold">{title}</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="text-[18px]">
            {description}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default WorkingCard;
