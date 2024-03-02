import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { Button } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const Trending = () => {

  const handleChangeTheme=()=>{
    console.log("theme changed")
  };

  return (
    <div className="py-5 sticky top-0">
      <div className="relative flex items-center">
           
        <input type="text" placeholder='Search Twitter' className='py-3 w-full text-gray-400 rounded-full pl-12 bg-gray-950'/>

        <div className='absolute pl-3 pt-3 top-0 left-0'>
          <SearchIcon className="text-gray-500"/>
        </div>
        <Brightness4Icon className='cursor-pointer ml-3' onClick={handleChangeTheme}/>
          
      </div>

      
      <section className='my-5'>
        <h1 className='font-bold text-2xl flex items-start ml-2'>  Subscribe to Premium</h1>
        <h1 className='font-semibold my-2 flex items-start'>Subscribe to unlock new features and if eligible, receive a share of ads revenue.</h1>
        <div className="flex items-start ml-2">
         <Button variant='contained' sx={{ padding: "6px", paddingX: "18px", textTransform:"none", borderRadius: "22px", bgcolor: "#2196f3", fontWeight: 'bold', fontSize: '16px' }}>Subscribe</Button>
        </div>

      </section>

      <section className='mt-7 space-y-5 '>
        <h1 className='font-bold text-2xl py-1 flex items-start'>What's happening</h1>

        
        <div className='flex items-center justify-between'>
           <div>
           <p className='text-gray-500 leading-tight flex items-start'>Sports · Trending</p>
           <p className='font-bold leading-tight flex items-start cursor-pointer'>#Kohli</p>
           <p className='text-gray-500 leading-tight flex items-start'>44.7K posts</p>
           </div>
           <div><MoreHorizIcon/></div>
        </div>

        <div className='flex items-center justify-between'>
           <div>
           <p className='text-gray-500 leading-tight flex items-start'>Trending in India</p>
           <p className='font-bold leading-tight flex items-start cursor-pointer'>#ViralVideo</p>
           <p className='text-gray-500 leading-tight flex items-start'>66.2K posts</p>
           </div>
           <div><MoreHorizIcon/></div>
        </div>
       
        <div className='flex items-center justify-between'>
           <div>
           <p className='text-gray-500 leading-tight flex items-start'>Cricket · Trending</p>
           <p className='font-bold leading-tight flex items-start cursor-pointer'>#RohitSharma</p>
           <p className='text-gray-500 leading-tight flex items-start'>14.8K posts</p>
           </div>
           <div><MoreHorizIcon/></div>
        </div>

        <div className='flex items-center justify-between'>
           <div>
           <p className='text-gray-500 leading-tight flex items-start'>Entertainment · Trending</p>
           <p className='font-bold leading-tight flex items-start cursor-pointer'>#MeaCulpaNetflix</p>
           <p className='text-gray-500 leading-tight flex items-start'>21.5K posts</p>
           </div>
           <div><MoreHorizIcon/></div>
        </div>
        <span className='flex items-start text-[#2196f3] cursor-pointer'>Show more</span>
      </section>
      
      

    </div>
  )
}

export default Trending
