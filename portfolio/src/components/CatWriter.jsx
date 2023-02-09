import React, { useState } from 'react';
import styles from '../Pages/MainPage/MainPage.module.scss';
import Typewriter from 'typewriter-effect';
import CatGif from '../assets/catGif.gif';
import Quotes from './Quotes';

// styles placed in '../Pages/MainPage/MainPage.module.scss'
const CatWriter = () => {
  const [catSay, setCaySay] = useState('OneClick to get wise quote. Double to get menu.');
  const randomPhrase = Quotes[Math.floor(Math.random() * Quotes.length)];

  const handleClickCat = () => {
    setCaySay(randomPhrase);
  };
  const handleDoubleClickCat = () => {
    setCaySay('how can I help you?');
  };
  return (
    <div className={styles.catBlock}>
      <img
        onClick={handleClickCat}
        onDoubleClick={handleDoubleClickCat}
        src={CatGif}
        alt='where the cat?'
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
