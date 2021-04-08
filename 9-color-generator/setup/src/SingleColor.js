import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({color, index}) => {
  const [alert, setAlert] = useState(false);
  const bcg = color.rgb.join(',');
  // console.log(bcg);
  // const hex = rgbToHex(...color.rgb);
  const hexValue = `#${color.hex}`;
  
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setAlert(false);
    }, 2000);
    return () => clearTimeout(timeOut); 
  }, [alert]);

  return (
    <article className={`color ${index > 10 && 'color-light'}`} 
    style={{backgroundColor: `rgb(${bcg})`}}
    onClick={() => {
      setAlert(true)
      navigator.clipboard.writeText(hexValue);
      }}
    >
        <p className="percent-value">{color.weight}%</p>
        <p className="color-value">{hexValue}</p>
        {alert && <p className="alert">copied to clipboard</p>}
      </article>
  );
      
}

export default SingleColor
