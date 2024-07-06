import React from "react";
import Wrapper from "./wrapper";
import ServicesCard from "./card/service-card";
import { services } from "@/lib/data";
import TitleMenu from "./title-menu";

const Services = () => {
  return (
    <Wrapper className="p-12">
      <TitleMenu
        className="px-0"
        title={"Services"}
        description={
          "At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
        }
      />
      <div className="grid grid-cols-1 gap-24 mt-24 md:grid-cols-2 ">
        {services.map((service, index) => {
          return (
            <ServicesCard
              bgTitle={service.bgTitle}
              key={index}
              title={service.title}
              colorTitle={service.colorTitle}
              imageUrl={service.imageUrl}
              backgroundColor={service.backgroundColor}
              darkArrow={service.darkArrow}
            />
          );
        })}
      </div>
    </Wrapper>
  );
};

export default Services;
