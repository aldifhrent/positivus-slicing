import Header from "@/components/header";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Sponsor from "@/components/sponsor";
import Wrapper from "@/components/wrapper";
import Proposal from "@/components/proposal";
import WorkingProcess from "@/components/working-process";
import CaseStudies from "@/components/case-studies";
import TitleMenu from "@/components/title-menu";
import Team from "@/components/team";
import ContactUs from "@/components/contactus";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <Wrapper className="p-10">
      <Header />
      <Hero />
      <Sponsor />
      <Services />
      <Proposal />
      <CaseStudies />
      <WorkingProcess />
      <Team />
      <ContactUs />
      <Footer />
    </Wrapper>
  );
}
