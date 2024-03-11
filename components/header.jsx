import React, { useEffect, useRef } from 'react';

export default function Header({ fn }) {
  const headerRef = useRef();

  useEffect(() => {
    const header = headerRef.current;

    const handleScroll = () => {
      if (header) {
        header.classList.toggle('header-scroll', window.scrollY > 0);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="header" ref={headerRef}>
      <div className="wrapper">
        <img
          src="./pizzalogo.png"
          alt=""
          className="logo"
          onClick={() => {
            fn(0);
            document.querySelector('.menybtn').style.color = 'white'
            document.querySelector('.omossbtn').style.color = 'white'
            document.querySelector('.kontaktbtn').style.color = 'white'
            window.scrollTo({top:0,  behavior: 'smooth'})
          }}
        />
        <h2
          className="menybtn"
          onClick={() => {
            fn(1);
            window.scrollTo({top:0,  behavior: 'smooth'})
            document.querySelector('.menybtn').style.color = 'black'
            document.querySelector('.omossbtn').style.color = 'black'
            document.querySelector('.kontaktbtn').style.color = 'black'
          }}
        >
          MENY
        </h2>
        <h2 className="omossbtn" onClick={()=>{
                      document.querySelector('.menybtn').style.color = 'white'
                      document.querySelector('.omossbtn').style.color = 'white'
                      document.querySelector('.kontaktbtn').style.color = 'white'
          fn(0);
          document.querySelector('.about').scrollIntoView({behavior:'smooth'})
        }}>OM OSS</h2>
        <h2 className="kontaktbtn" onClick={()=>{
                      document.querySelector('.menybtn').style.color = 'white'
                      document.querySelector('.omossbtn').style.color = 'white'
                      document.querySelector('.kontaktbtn').style.color = 'white'
           fn(0);
           document.querySelector('.footer').scrollIntoView({behavior:'smooth'})
        }}>KONTAKT</h2>
      </div>
    </div>
  );
}