import Card1 from './Card1';
import Card2 from './Card2';
import React from 'react';

const FirstPage = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '15%', backgroundColor: '#e3f2fd' }}>
    <Card1 />
    <Card2 />
    
    </div>
  );
};

export default FirstPage;