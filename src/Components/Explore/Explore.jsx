import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import Port from '../../assets/port.jpeg'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const SearchBar = () => {
  return (
    <div>
        <div className='flex items-center justify-between mt-2 w-full space-x-3 text-white'>
           <div className='relative w-[85%]'>
           <span className="absolute inset-y-0 left-4 flex items-center text-gray-400"><SearchIcon /></span>
           <input  type="text" className='h-12 w-full bg-gray-500 rounded-full pl-12 bg-opacity-20 text-white border border-transparent focus:border-blue-600 focus:outline-none' placeholder="Search" />
           </div>
      <SettingsIcon />
       </div>
       <div className='flex items-center justify-between'>
          <p className='text-white font-bold py-4 text-lg border-b-4 border-blue-500 px-2'>For you</p>
          <p className='text-gray-500 font-bold py-4 text-lg'>Trending</p>
          <p className='text-gray-500 font-bold py-4 text-lg'>Music</p>
          <p className='text-gray-500 font-bold py-4 text-lg'>Sports</p>
          <p className='text-gray-500 font-bold py-4 text-lg'>Entertaintent</p>
       </div>

       <div className='flex items-center justify-center h-full w-full mt-4 px-0 overflow-hidden'>
          <img src={Port} alt="" className='px-0 w-full object-center scale-150 scale-y-125'/>
       </div>
    
    <div className='mt-6 space-y-4'>
    <div className='flex items-center justify-between w-full'>
       <div className='flex flex-col justify-start items-start w-full hover:bg-gray-800 hover:bg-opacity-30'>
      <p className='text-md text-gray-500 ml-0'>Sports . Trending</p>
      <p className='font-bold text-lg text-white ml-0'>#IPLRetention</p>
      <p className='text-md text-gray-500 ml-0'>2,394 posts</p>
   </div>
   <MoreHorizIcon className='cursor-pointer'/>
</div>


    <div className='flex items-center justify-between w-full hover:bg-gray-800 hover:bg-opacity-30'>
      <div className='flex flex-col justify-start items-start w-full'>
          <p className='text-md text-gray-500 ml-0'>US . Trending</p>
          <p className='font-bold text-lg text-white ml-0'>#Trump</p>
          <p className='text-md text-gray-500 ml-0 text-start'>4,554 posts</p>
       </div>
       <MoreHorizIcon className='cursor-pointer'/>
    </div>

    <div className='flex items-center justify-between w-full hover:bg-gray-800 hover:bg-opacity-30'>
      <div className='flex flex-col justify-start items-start w-full'>
          <p className='text-md text-gray-500 ml-0'>IPL . Trending</p>
          <p className='font-bold text-lg text-white ml-0'>#CSKvsRCB</p>
          <p className='text-md text-gray-500 ml-0 text-start'>456k posts</p>
       </div>
       <MoreHorizIcon className='cursor-pointer'/>
    </div>

    <div className='flex items-center justify-between w-full hover:bg-gray-800 hover:bg-opacity-30'>
      <div className='flex flex-col justify-start items-start w-full'>
          <p className='text-md text-gray-500 ml-0'>Tesla . Trending</p>
          <p className='font-bold text-lg text-white ml-0'>#ElonMusk</p>
          <p className='text-md text-gray-500 ml-0 text-start'>2,394 posts</p>
       </div>
       <MoreHorizIcon className='cursor-pointer'/>
    </div>

    <div className='flex items-center justify-between w-full hover:bg-gray-800 hover:bg-opacity-30'>
      <div className='flex flex-col justify-start items-start w-full'>
          <p className='text-md text-gray-500 ml-0'>Israel . News</p>
          <p className='font-bold text-lg text-white ml-0'>#Putin</p>
          <p className='text-md text-gray-500 ml-0 text-start'>234k posts</p>
       </div>
       <MoreHorizIcon className='cursor-pointer'/>
    </div>
    </div>
    
       
    </div>
    
  );
};

export default SearchBar;
