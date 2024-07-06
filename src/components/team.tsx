import { teams } from "@/lib/data";
import TitleMenu from "./title-menu";
import Wrapper from "./wrapper";
import TeamCard from "./card/team-card";
import { Button } from "@/components/ui/button";

const Team = () => {
  return (
    <Wrapper className="p-12">
      <TitleMenu
        title={"Team"}
        description={
          "Meet the skilled and experienced team behind our successful digital marketing strategies"
        }
      />
      <div className="grid grid-cols-1 gap-12 md:grid-cols-3 mt-24">
        {teams.map((team, index) => (
          <TeamCard imageUrl={team.image} {...team} key={index} />
        ))}
      </div>
      <div className="flex mt-12 justify-end">
        <Button className="w-full md:w-2/12">See All Team</Button>
      </div>
    </Wrapper>
  );
};

export default Team;
