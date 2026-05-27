import { CSSProperties, PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  centered: boolean;
}

export default function Row({ centered, children }: Props) {
  const style: CSSProperties = { display: "flex", flexDirection: "row" };
  if (centered) {
    style.justifyContent = "center";
  }

  return (
    <div style={style}>
      {children}
    </div>
  );
}