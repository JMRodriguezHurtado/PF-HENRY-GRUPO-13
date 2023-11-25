import React from 'react';
import Card from './Card';
import { useSelector } from 'react-redux';

const Searchs = () => {
  const productsByName = useSelector((state) => state.productsByName);

  return (
    <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
      <div className='grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>        
        { productsByName?.map((result) => (
        <Card
          key={result._id} 
          name={result.name}
          price={result.price} 
          img={result.img}
          _id={result._id}
        />
        ))
        }
      </div>    
    </div>
  )
}

export default Searchs
