import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren { }

export default function Row({ children }: Props) {
  return (
    <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
      {children}
    </div>
  );
}