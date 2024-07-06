import ContactForm from "./contact-form";
import TitleMenu from "./title-menu";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Textarea } from "./ui/textarea";
import Wrapper from "./wrapper";
import Image from "next/image";

const ContactUs = () => {
  return (
    <Wrapper className="p-12 ">
      <TitleMenu
        title={"Contact Us"}
        description={
          "Connect with Us: Let's Discuss Your Digital Marketing Needs"
        }
      />
      <div className="bg-[#F3f3f3] h-full p-4 mt-24 rounded-xl">
        <div className="flex justify-between">
          <ContactForm />
          <Image
            src="/contact.svg"
            className="hidden md:block ml-[24rem] "
            alt="Contact Us"
            width={500}
            height={500}
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default ContactUs;
