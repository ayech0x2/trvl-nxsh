import ImgBottomBorder from "@/components/svg/img-bottom-border";

function MobileCover() {
  return (
    <div
      className={`relative w-full min-h-[500px] bg-gray-100 bg-cover bg-center bg-no-repeat flex justify-center py-[25%]`}
      style={{ backgroundImage: "url('/img.jpg')" }}
    >
      <ImgBottomBorder />
      <div className="absolute top-0 left-0 w-full h-full bg-black/40" />
      <div className="text-center z-1">
        <p className="text-white">
          Welcome to the Hotel &quot;Royal Court&quot;!
        </p>
        <p className="text-5xl font-bold text-white">
          Here you will <br />
          feel at home.
        </p>
      </div>
    </div>
  );
}

export default MobileCover;
