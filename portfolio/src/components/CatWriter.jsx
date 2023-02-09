import React, { useState } from 'react';
import styles from '../Pages/MainPage/MainPage.module.scss';
import Typewriter from 'typewriter-effect';
import CatGif from '../assets/catGif.gif';
import Quotes from './Quotes';

// styles placed in '../Pages/MainPage/MainPage.module.scss'
const CatWriter = () => {
  const randomPhrase = Quotes[Math.floor(Math.random() * Quotes.length)];
  const [catSay, setCaySay] = useState('Let me tell you something');

  const handleClickCat = () => {
    setCaySay(randomPhrase);
  };
  const handleDoubleClickCat = () => {
    setCaySay(`Easy, easy, I can't type so fast by my paws)`);
  };
  return (
    <div className={styles.catBlock}>
      <img
        onClick={handleClickCat}
        onDoubleClick={handleDoubleClickCat}
        src={CatGif}
        alt='where the cat? kis... kis..'
      />
      <h4>
        <Typewriter
          options={{
            strings: catSay,
            autoStart: true,
            loop: false,
            deleteSpeed: 50,
            delay: 50,
            skipAddStyles: true,
          }}
        />
      </h4>
    </div>
  );
};

export default CatWriter;
