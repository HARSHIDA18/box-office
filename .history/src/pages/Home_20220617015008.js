/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import MainPageLayout from '../components/MainPageLayout';

function Home() {
  const [input, setInput] = useState('');
  const onInputChange = ev => {
    console.log(ev);
  };
  return (
    <MainPageLayout>
      <input type="text" onChange={() => {}} />
    </MainPageLayout>
  );
}

export default Home;
