import React, { useState } from "react";
import Image from "next/image";

const ImageZoom = (props) => {
  const imgSrc = props.imgSrc;
  const alt = props.alt;
  const [showZoom, setShowZoom] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [zoomPos, setZoomPos] = useState({});
  const [opacity, setOpacity] = useState("1");

  const getCursorPos = (e) => {
    // console.log(e.nativeEvent);
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

  const moveLens = (e) => {
    /* Prevent any other actions that may occur when moving over the image */
    // e.preventDefault();
    /* Get the cursor's x and y positions: */
    /* Calculate the position of the lens: */
    let x = mousePos.x;
    let y = mousePos.y;
    /* Prevent the lens from being positioned outside the image: */
    // if (x > img.width - lens.offsetWidth) {
    //   x = img.width - lens.offsetWidth;
    // }
    if (x < 0) {
      x = 0;
    }
    // if (y > img.height - lens.offsetHeight) {
    //   y = img.height - lens.offsetHeight;
    // }
    if (y < 0) {
      y = 0;
    }
    getCursorPos({ x: x, y: y });
    /* Set the position of the lens: */
    // lens.style.left = x + "px";
    // lens.style.top = y + "px";
    /* Display what the lens "sees": */
    // setZoomPos({ })
    // result.style.backgroundPosition = "-" + x * cx + "px -" + y * cy + "px";
  };

  const getZoomStyle = (showZoom, imgSrc, x, y) => {
    if (!showZoom) {
      return {};
    }

    const style = {
      backgroundImage: `url(${imgSrc}})`,
      // width: "100%",
      display: "block",
      cursor: "zoom-in",
      // height: "100%",
      backgroundPosition: `${x}% ${y}%`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "200%",
    };
    console.log(style);
    return style;
  };

  return (
    <>
      <figure
        style={
          showZoom
            ? {
                // position: "relative",
                backgroundImage: `url(${imgSrc})`,
                width: "100%",
                display: "block",
                cursor: "zoom-in",
                // overflow: "hidden",
                height: "100%",
                backgroundPosition: `${mousePos.x}% ${mousePos.y}%`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "200%",
                // left: `${mousePos.x}px`,
                // top: `${mousePos.y}px`,
              }
            : {}
        }
        // style={getZoomStyle(showZoom, imgSrc, mousePos.x, mousePos.y)}
        onMouseMove={(e) => getCursorPos(e)}
        // onMouseEnter={() => setOpacity("0")}
        // onMouseLeave={() => setOpacity("1")}
      >
        {/* <div> */}
        <img
          src={imgSrc}
          alt={alt}
          style={{
            // opacity: `${opacity}`,
            opacity: showZoom ? "0" : "1",
            display: "block",
            // backgroundPosition: "50% 50%",
            width: "100%",
          }}
          onClick={() => setShowZoom((showZoom) => !showZoom)}
        />
        {/* </div> */}
      </figure>
    </>
    // <>
    //   <img
    //     // hidden={showZoom}
    //     src={imgSrc}
    //     alt={alt}
    //     onClick={() => setShowZoom(true)}
    //     onMouseMove={(e) => getCursorPos(e)}
    //     // style={{ visibility: showZoom ? "hidden" : "visible" }}
    //   />
    //   {showZoom && (
    //     <div
    //       style={{
    //         // position: "relative",
    //         backgroundImage: `url(${imgSrc})`,
    //         borderStyle: "solid",
    //         borderWidth: "2px",
    //         borderColor: "green",
    //         // width: "400px",
    //         // height: "300px",
    //         backgroundPosition: `${mousePos.x}%, ${mousePos.y}%`,
    //         backgroundSize: "fill",
    //         left: `${mousePos.x}px`,
    //         top: `${mousePos.y}px`,
    //       }}
    //       onClick={() => setShowZoom(false)}
    //       className="testing"
    //     >
    //       {/* <img
    //         src="vercel.svg"
    //         alt={alt}
    //         onClick={() => setShowZoom(false)}
    //         style={{ position: "relative", "background-position": `${mousePos.x}, ${mousePos.y}` }}
    //         onMouseMove={moveLens}
    //       /> */}
    //     </div>
    //   )}
    // </>
  );
};

export default ImageZoom;
