
import Fotter from "@/components/footer";
import Header from "@/components/header";
import Homebody from "@/components/homebody";
import {Locale} from 'next-intl';
import {setRequestLocale} from 'next-intl/server';

import {use} from 'react';

   type Props = {
     params: Promise<{locale: Locale}>;
   };


const Side = ({params}: Props) => {
   const {locale} = use(params);
  
    // Enable static rendering
    setRequestLocale(locale);
  
   

    return ( 

    <div  className=" grid grid-cols-1  place-items-center   min-h-screen w-full  gap-4   ">
    
       <Header/>
       <Homebody/>
       <Fotter/>
    </div> );    
}
 
export default Side;