import { forwardRef, useState } from "react";
import Image from "next/image";

const ImageZoom = forwardRef<HTMLImageElement, any>(function ImageZoom(
  props: { imgSrc: string; alt: string },
  ref
) {
  const { imgSrc, alt } = props;
  const [showZoom, setShowZoom] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const bgImg = `url('${imgSrc}')`;

  const getCursorPos = (e) => {
    const offsetX = e.offsetX;
    const offsetY = e.offsetY;
    // e.offsetX ? (offsetX = e.offsetX) : (offsetX = e.touches[0].pageX);
    // e.offsetY ? (offsetY = e.offsetY) : (offsetX = e.touches[0].pageX);
    // const x = e.clientX - e.target.offsetLeft;
    // const y = e.clientY - e.target.offsetHeight;
    const x = (e.nativeEvent.offsetX / e.target.offsetWidth) * 100;
    const y = (e.nativeEvent.offsetY / e.target.offsetHeight) * 100;
    setMousePos({ x: x, y: y });
  };

  return (
    <div className="border border-black lg:w-3/4">
      <figure
        className={showZoom ? `bg-[length:200%] cursor-zoom-in` : undefined}
        style={
          showZoom
            ? {
                backgroundImage: `${bgImg}`,
                backgroundPosition: `${mousePos.x}% ${mousePos.y}%`,
              }
            : {}
        }
        onMouseMove={(e) => getCursorPos(e)}
      >
        <Image
          ref={ref}
          src={imgSrc}
          alt={alt}
          className={`w-full block ${showZoom ? "opacity-0" : "opacity-1"}`}
          width={0}
          height={0}
          sizes="100vw"
          onClick={() => setShowZoom((showZoom) => !showZoom)}
        />
      </figure>
    </div>
  );
});

export default ImageZoom;
