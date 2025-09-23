export default function CircleBlur({ right, top, left, bottom }) {
  return (
    <div className="relative h-screen bg-black">
      <div
        className="
          absolute
          w-[900px] h-[900px] 
          rounded-full 
          bg-[#F0131E] 
          blur-[500px]
        "
        style={{ top, right, bottom, left }} // dynamic values here
      />
    </div>
  );
}
