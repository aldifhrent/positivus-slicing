import Image from "next/image";
import { Button } from "./ui/button";
import Wrapper from "./wrapper";
import TitleMenu from "./title-menu";

const Proposal = () => {
  return (
    <Wrapper className="p-12 ">
      <div className="p-12 flex flex-col md:flex-rows bg-[#F3F3F3] rounded-lg max-h-screen mt-24 md:max-h-[300px]">
        <div className="flex flex-col md:flex-row justify-between text-center md:text-left">
          <div className="flex flex-col">
            <h1 className="font-bold leading-tight text-3xl">
              Let&apos;s make things happen
            </h1>
            <p className="max-w-md mt-4">
              Contact us today to learn more about how our digital marketing
              services can help your business grow and succeed online.
            </p>
            <Button className="max-w-[200px] h-12 mt-4 items-center justify-center mx-auto md:mx-0">
              Get your free proposal
            </Button>
          </div>
          <Image
            src="/proposal.svg"
            alt="Proposal Image"
            width={300}
            height={300}
            className="hidden md:block mr-24 mt-4 md:-mt-12"
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default Proposal;
