import React, { useState, useEffect, useRef } from 'react'
import Electronics from './Electronics.svg';
import Fashsion from './Fashion.svg';
import left from './left.svg';
import right from './right.svg';

export default function Category() {

  const [selectedCat, setSelectedCat] = useState([])
  let [page, setPage] = useState(1);
  const pageRef = useRef(1);

  const category = [
    { img: Electronics },
    { img: Electronics },
    { img: Electronics },
    { img: Electronics },
    { img: Fashsion },
    { img: Fashsion },
    { img: Fashsion },
    { img: Fashsion },
    { img: Electronics },
    { img: Fashsion },
  ];
  const pageSize = 4;
  const noOfPages = Math.floor(category.length / pageSize);

  const goLeft = () => {
    let temp = 1;
    let state = pageRef.current;
    state--;
    if (state < 2) {
      temp = 1;
    } else {
      temp = state;
    }
    pageRef.current = temp;
    setSelectedCat(category.slice((temp * pageSize) - pageSize, temp * pageSize));
  }
  console.log(" Leg ", page)

  const goRight = () => {
    let temp = 1;
    let state = pageRef.current;
    state++;
    if (state > (noOfPages + 1)) {
      temp = state % (noOfPages + 1);
    } else {
      temp = state;
    }
    pageRef.current = temp;
    setSelectedCat(category.slice((temp * pageSize) - pageSize, temp * pageSize));
  }

  useEffect(() => {
    setSelectedCat(category.slice(0, pageSize))
  }, [])

  return (
    <div className='category'>
      <img src={left} alt="img" onClick={goLeft}></img>
      {selectedCat.map((element, index) => (
        <div className='categoryimg'>
          <img key={index} src={element.img} alt="img"></img>
          <div className='categorycard'>
            <span>Electronics</span>
            <span>Shop</span>
          </div>
        </div>
      ))}
      <img src={right} alt="img" onClick={goRight}></img>
    </div>
  )
}
