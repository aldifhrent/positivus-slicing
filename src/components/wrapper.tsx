interface WrapperProps {
  children: React.ReactNode;
  className?: string;
}
const Wrapper = ({ children, className }: WrapperProps) => {
  return <main className={`w-full pb-0 ${className}`}>{children}</main>;
};

export default Wrapper;
