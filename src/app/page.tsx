'use client '

import Image from 'next/image'
import Layout from './layout'


import ClientComponent from './components/clientcomponent'
import ServerComponent from './components/servercomponent'
import Sidebar from './components/Sidebar';


//import dynamic from 'next/dynamic'



//const NoSSR = dynamic(() => import('./components/SideBar'), { ssr: false })

//import { getClient } from './lib/client'

export const dynamic = "force-dynamic";

/*
//firing up mock server 
import('./mocks').then( ({setupMocks}) => {
    setupMocks()
  })
*/



type clients_info = {
  __typename: string,
  name: string,
  ID: number,
  address: string,
  phone: string
}



type tabletype1 = {


__typename: string,
  name: string,
  ID: number,
  address: string,
  phone: string
}

type tabletype2 = {
clients_info:   clients_info[]
}









// this will call createapollocliient to use 

export default  function Home( 
  


) {


let IDs : number[] = [11112];
let names : string[] = ['2121212'];
let phones : string[] = ['212121'] ;
let addreses : string[] = ['212121'] ;
let counter = 0;


  return (
    <>
      <div>

      </div>
      <div className=' border-b bg-gray-300 h-12 flex items-center'>
          <div className=' px-3'> logo </div>
          <div className=' px-10 '>maintenance note</div>
          <div>  </div>
         
      </div>

      <div className='flex'>
     
          <Sidebar/>
          

          <ClientComponent  />
            
             
          
      </div>


        

    </>

  )
 
}
function forceUpdate() {
  throw new Error('Function not implemented.')
}
