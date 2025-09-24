export default function CircleBlur({ right, top, left, bottom }) {
  return (
    <div
      className="
        absolute
        w-[900px] h-[900px] 
        rounded-full 
        bg-[#F0131E] 
        blur-[200px]
        opacity-50
            z-0
      "
      style={{ top, right, bottom, left }} // dynamic positioning
    />
  );
}
