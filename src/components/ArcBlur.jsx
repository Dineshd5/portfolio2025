export default function ArcBlur({ top, right, bottom, left }) {
  return (
    <div
      className="
        absolute
        w-[250px] h-[250px]
        bg-[#F0131E]
        blur-[200px]   /* smaller blur so it's visible */
      "
      style={{
        top,
        right,
        bottom,
        left,
        borderTopLeftRadius: "250px",
        borderTopRightRadius: "250px",
      }}
    />
  );
}
