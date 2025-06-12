
import Header from "@/components/Home/header";
import Homebody from "@/components/Home/homebody";
import {Locale} from 'next-intl';
import {setRequestLocale} from 'next-intl/server';

import {Suspense, use} from 'react';
import Loading from "../loading";


   type Props = {
     params: Promise<{locale: Locale}>;
   };


const Side = ({params}: Props) => {
   const {locale} = use(params);
  
    // Enable static rendering
    setRequestLocale(locale);
  
   

    return ( 

    <div  className="  flex flex-col    mx-0  min-h-screen w-full  space-y-2 mb-4 ">
       <Suspense fallback={<Loading/>}>
       <Header/>
       </Suspense>
         <Suspense fallback={<Loading/>}>
       <Homebody/>  
       </Suspense>
       
    </div> );    
}
 
export default Side;