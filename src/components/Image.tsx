interface Props extends React.ImgHTMLAttributes<HTMLImageElement> { }

export default function Image(props: Props) {
  return (
    <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
      <img {...props} />
    </div>
  );
}