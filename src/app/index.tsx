import React, { useState } from 'react';
import Input1 from './Input1';
import Input2Wrap from './Input2Wrap';

const Main = () => {
  const [show, setShow] = useState(true);

  return (
    <div>
      <div onClick={() => setShow(!show)}>onChange</div>
      {show ? <Input1 /> : <Input2Wrap />}
    </div>
  );
};

export default Main;
