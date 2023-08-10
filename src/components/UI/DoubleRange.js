import classes from "./DoubleRange.module.scss";

import React, { useCallback, useEffect, useState, useRef } from "react";

const MultiRangeSlider = ({ min, max }) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef(min);
  const maxValRef = useRef(max);
  const range = useRef();

  // Convert to percentage
  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal, getPercent]);

  // Get min and max values when their state changes

  return (
    <div className={classes.container}>
      <div className={classes["range-container"]}>
        <input
          type="range"
          name="min"
          min={min}
          max={max}
          value={minVal}
          onChange={(event) => {
            const value = Math.min(Number(event.target.value), maxVal - 1);

            setMinVal(value);
            minValRef.current = value;
          }}
          className={`${classes.thumb} ${classes["thumb--left"]}`}
          style={{ zIndex: minVal > max - 100 && "5" }}
        />
        <input
          type="range"
          name="max"
          min={min}
          max={max}
          value={maxVal}
          onChange={(event) => {
            const value = Math.max(Number(event.target.value), minVal + 1);
            setMaxVal(value);
            maxValRef.current = value;
          }}
          className={`${classes.thumb} ${classes["thumb--right"]}`}
          style={{ marginLeft: maxVal === minVal + 1 && "3px" }}
        />
      </div>

      <div className={classes.slider}>
        <div className={classes["slider__track"]} />
        <div ref={range} className={classes["slider__range"]} />
        <div className={classes["slider__left-value"]}>{`$${minVal}`}</div>
        <div className={classes["slider__right-value"]}>{`$${maxVal}`}</div>
      </div>
    </div>
  );
};

export default MultiRangeSlider;
