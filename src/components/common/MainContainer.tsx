import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
export default function MainContainer({ children }: Props) {
  return <div className="max-w-[1680px] mx-auto">{children}</div>;
}
