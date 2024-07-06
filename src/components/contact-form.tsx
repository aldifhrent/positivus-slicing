import React from "react";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const ContactForm = () => {
  return (
    <div className="flex flex-col p-0 sm:p-12">
      <div className="flex gap-x-12 ">
        <RadioGroup defaultValue="option-one" className="flex items-center">
          <RadioGroupItem value="option-one" id="option-one" />
          <Label htmlFor="option-one" className="text-xl">
            Say Hi
          </Label>
        </RadioGroup>
        <RadioGroup className="flex items-center">
          <RadioGroupItem value="option-two" id="option-two" />
          <Label htmlFor="option-one " className="text-xl">
            Get a Quote
          </Label>
        </RadioGroup>
      </div>
      <div className="flex flex-col gap-2 mt-4 w-full md:w-[556px]">
        <Label>Name</Label>
        <Input placeholder="Name" className="h-12" />
        <Label>Email</Label>
        <Input placeholder="Email" className="h-12" />
        <Label>Message</Label>
        <Textarea placeholder="Message" />
      </div>
      <Button className="mt-4 h-12">Send Message</Button>
    </div>
  );
};

export default ContactForm;
