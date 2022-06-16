/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import MainPageLayout from '../components/MainPageLayout';

function Home() {
  const [input, setInput] = useState('');
  const onInputChange = ev => {
    setInput(ev.target.value);
    console.log(ev.target.value);
  };
  return (
    <MainPageLayout>
      <input type="text" onChange={onInputChange} />
    </MainPageLayout>
  );
}

export default Home;
