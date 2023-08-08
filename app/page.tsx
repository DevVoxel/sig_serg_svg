import React from 'react';
import LengthButton from '../components/Lengthbutton';
import OutlineFirst from '../components/OutlineFirst';
import LightShade from '../components/LightShade';
import AllShade from '../components/AllShade';

export default function Home() {
  return (
    <main>
      <div className='grid grid-cols-2 gap-4'>
        <OutlineFirst />
        <LightShade />
        <AllShade />
      </div>
    </main>
  );
}
