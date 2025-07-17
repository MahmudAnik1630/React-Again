import React, { useRef } from 'react';

function UserefImage() {
  const myimg = useRef();

  const changeimg = () => {
    myimg.current.src = "https://placehold.co/600x400";
    myimg.current.setAttribute('height', '200');
    myimg.current.setAttribute('width', '300');
  };

  return (
    <div>
      <img ref={myimg} src="https://picsum.photos/200/300" alt="Random" />
      <button onClick={changeimg} className='login'>Change Image</button>
    </div>
  );
}

export default UserefImage;
