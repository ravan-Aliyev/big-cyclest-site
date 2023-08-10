import { useState } from "react";
import classes from "./MagnifyImg.module.scss";

function MagnifyImg({ url }) {
  const [style, setStyle] = useState();

  const mouseHandler = (e) => {
    const { left, width, height } = e.target.getBoundingClientRect();

    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - 262.6000061035156) / height) * 100;

    setStyle({
      backgroundImage: `url(${url})`,
      backgroundPosition: `${x}% ${y}%`,
    });
  };

  return (
    <figure className={classes.figure} style={style} onMouseMove={mouseHandler}>
      <img src={url} alt="Product img" />
    </figure>
  );
}

export default MagnifyImg;
