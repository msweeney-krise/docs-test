import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren { }

export default function Row({ children }: Props) {
  return (
    <div style={{ display: "flex", flexDirection: "column", margin: "10px" }}>
      {children}
    </div>
  );
}