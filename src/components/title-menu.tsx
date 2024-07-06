import Wrapper from "./wrapper";

interface TitleMenuProps {
  title: string;
  description: string;
  className?: React.ReactNode;
}
const TitleMenu = ({ title, description, className }: TitleMenuProps) => {
  return (
    <Wrapper className={`p-10 ${className}`}>
      <div className="flex flex-col gap-x-24 md:flex-row items-center gap-4">
        <h1 className="p-4 bg-[#B9FF66] inline-block font-semibold text-2xl rounded-md">
          {title}
        </h1>
        <p className="mt-2 text-muted-foreground max-w-lg text-lg text-center md:text-left">
          {description}
        </p>
      </div>
    </Wrapper>
  );
};

export default TitleMenu;
