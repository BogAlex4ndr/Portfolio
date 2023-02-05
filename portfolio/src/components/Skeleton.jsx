import React from 'react';
import ContentLoader from 'react-content-loader';
import '../styles/App.scss';

const Skeleton = (props) => (
  <div className='aaa'>
    <ContentLoader
      className='skeleton'
      speed={2}
      width={324}
      height={520}
      viewBox='0 0 324 520'
      backgroundColor='grey'
      foregroundColor="#1f213480"
      {...props}>
      <rect x='20' y='20' rx="20" ry="20" width='280' height='260' />
      <rect x='60' y='320' rx="2" ry="2" width='200' height='24' />
      <rect x='10' y='370' rx="2" ry="2" width='300' height='80' />
      <rect x='80' y='470' rx="12" ry="12" width='66' height='40' />
      <rect x='166' y='470' rx="12" ry="12" width='75' height='40' />
      
    </ContentLoader>
  </div>
);

export default Skeleton;
