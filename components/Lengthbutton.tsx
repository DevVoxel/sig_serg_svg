'use client';
import React from 'react';

function LengthButton(): JSX.Element {
  function lengthGrabber(): void {
    let path = document.querySelector('path') as SVGPathElement;
    let length = path.getTotalLength();
    console.log(length);
  }

  return <button onClick={lengthGrabber}>Length</button>;
}

export default LengthButton;
