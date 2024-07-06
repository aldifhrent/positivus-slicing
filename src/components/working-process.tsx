"use client";

import React, { useState } from "react";
import Wrapper from "./wrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import WorkingCard from "./card/working-card";
import { processes } from "@/lib/data";

const WorkingProcess = () => {
  const [value, setValue] = useState<string>("");

  const handleAccordion = (value: string) => {
    setValue(value);
  };
  return (
    <Wrapper className="p-12">
      <div className="mt-[80px]">
        <Accordion
          type="single"
          collapsible
          className="w-full"
          onValueChange={handleAccordion}
        >
          {processes.map((process, index) => (
            <WorkingCard {...process} currentValue={value} key={index} />
          ))}
        </Accordion>
      </div>
    </Wrapper>
  );
};

export default WorkingProcess;
