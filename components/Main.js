import React from 'react';
import { useState } from "react";
import Link from 'next/link'

export default function Main() {  

    return (
        <div className="relative overflow-hidden h-screen">
            <img src="/assets/images/bg-main.jpg" className="absolute h-full w-full object-cover" />            
            <div className="inset-0 absolute"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between">
          <div className="flex">
            {/* 
          <Link href="https://instagram.com/pamajans" legacyBehavior>
            <button
              className="relative flex h-[64px] w-[65px] bg-[length:100%_100%] bg-center bg-no-repeat"
              ><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1000px-Instagram_logo_2022.svg.png"/>
            </button>
          </Link>
          */}
          </div>
        </div>
      </div>
            <div className="container mx-auto w-4/5 relative z-10 flex items-center sm:mt-6 mt-[90px] ">
                <div className="w-full flex flex-col items-center justify-between relative z-10 sm:-mt-[10px] -mt-[80px]">
                <img src="./assets/images/pushouse.png" className="h-100 w-2000"/>

                    <p className="mt-[250px] flex flex-col items-center font-titanone text-5xl text-center md:text-8xl text-[#000000]">
                        Çok yakında
                        </p>
                    <div className='group flex items-center justify-center overflow-hidden mt-6'>
                      <p className='text-2xl font-kdam sm:mt-[300px] mt-[150px] text-center'>
                        MURAT ERDOGAN<br/>
                        +90 850 308 9530<br/>
                        KIZILIRMAK MAH. 1443. CAD. NO: 25 C IÇ KAPI NO: 97 CANKAYA/ANKARA 
                      </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
