import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
export default function MainContainer({ children, ...props }: Props) {
  return (
    <div className="max-w-[1680px] mx-auto" {...props}>
      {children}
    </div>
  );
}
