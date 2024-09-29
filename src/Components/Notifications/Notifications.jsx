import React from 'react'
import SettingsIcon from '@mui/icons-material/Settings';
import { Divider } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import VerifiedIcon from '@mui/icons-material/Verified';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import RepeatIcon from '@mui/icons-material/Repeat';
import Namo from '../../assets/namo.jpeg'
import Virat from '../../assets/virat.jpeg'

const Notifications = () => {
  return (
    <div>
      
      <div className='flex items-center justify-between mt-3 mb-6'>
        <p className='font-bold text-2xl'>Notifications</p>
        <SettingsIcon/>
        
      </div>

      <div className='flex items-center justify-around border-b border-gray-700'>
        <p className='text-xl font-bold text-white border-b-4 border-blue-500 mt-1 px-5 py-3'>All</p>
        <p className='text-xl font-bold text-gray-400 mt-1 py-3'>Verified</p>
        <p className='text-xl font-bold text-gray-400 mt-1 py-3'>Mentions</p>
      </div>

      <div className='mt-6 ml-3 border-b border-gray-700 cursor-pointer hover:bg-gray-800 hover:bg-opacity-30'>
        <div className='flex items-center justify-start space-x-1'>
        <FavoriteIcon className='text-pink-600' style={{ fontSize: 30 }} />
        <img src={Virat} className='w-8 rounded-full' alt="" />
        </div>
        <p className='ml-2 font-normal text-white flex items-center justify-start mt-2 text-lg mb-4'>
        <span className='font-bold text-sm'>Virat Kohli</span>
        <VerifiedIcon className='text-blue-500 ml-1' style={{ fontSize: 18 }} /> {/* Verified Icon */}
        <span className='ml-1 text-sm'>liked your Post</span>
      </p>
   </div>

      <div className='mt-6 ml-3 border-b border-gray-700 cursor-pointer hover:bg-gray-800 hover:bg-opacity-30'>
         <div className='flex items-center justify-start'>
            <RepeatIcon className='text-green-500' style={{ fontSize: 30 }}/>
            <AccountCircleIcon style={{ fontSize: 30 }}/>
         </div>
         <p className='ml-2 font-normaltext-xl text-white flex items-center justify-start mt-2 text-sm mb-4'><span className='font-bold'>Garima </span><span className='ml-1'>liked your retweet</span></p>
      </div>

      <div className='mt-6 ml-3 border-b border-gray-700 cursor-pointer hover:bg-gray-800 hover:bg-opacity-30'>
         <div className='flex items-center justify-start'>
            <FavoriteIcon className='text-pink-600' style={{ fontSize: 30 }}/>
            <AccountCircleIcon style={{ fontSize: 30 }}/>
         </div>
         <p className='ml-2 font-normaltext-xl text-white flex items-center justify-start mt-2 text-sm mb-4'><span className='font-bold'>Garima </span><span className='ml-1'>retweetd your post</span></p>
      </div>

      <div className='mt-6 ml-3 border-b  border-gray-700 cursor-pointer hover:bg-gray-800 hover:bg-opacity-30'>
         <div className='flex items-center justify-start'>
            <PersonIcon style={{ fontSize: 30 }}/>
            <AccountCircleIcon style={{ fontSize: 30 }}/>
         </div>
         <p className='ml-2 font-normaltext-xl text-white flex items-center justify-start mt-2 text-sm mb-4'><span className='font-bold'>Benjamin </span><span className='ml-1'>followed you</span></p>
      </div>

      <div className='mt-6 ml-3 border-b  border-gray-700 cursor-pointer hover:bg-gray-800 hover:bg-opacity-30'>
        <div className='flex items-center justify-start space-x-1'>
        <RepeatIcon className='text-green-500' style={{ fontSize: 30 }} />
        <img src={Namo} className='w-8 rounded-full' alt="" />
        </div>
        <p className='ml-2 font-normal text-white flex items-center justify-start mt-2 text-lg mb-4'>
        <span className='font-bold text-sm'>Narendra Modi</span>
        <VerifiedIcon className='text-blue-500 ml-1' style={{ fontSize: 18 }} /> {/* Verified Icon */}
        <span className='ml-1 text-sm'>liked your Post</span>
      </p>
   </div>


      <div className='mt-6 ml-3 border-b  border-gray-700 cursor-pointer hover:bg-gray-800 hover:bg-opacity-30'>
         <div className='flex items-center justify-start'>
            <PersonIcon style={{ fontSize: 30 }}/>
            <AccountCircleIcon style={{ fontSize: 30 }}/>
         </div>
         <p className='ml-2 font-normaltext-xl text-white flex items-center justify-start mt-2 text-sm mb-4'><span className='font-bold'>Devanshu Chauhan </span><span className='ml-1'>followed you</span></p>
      </div>

      <div className='mt-6 ml-3 border-b  border-gray-700 cursor-pointer hover:bg-gray-800 hover:bg-opacity-30'>
         <div className='flex items-center justify-start'>
            <FavoriteIcon  className='text-pink-600' style={{ fontSize: 30 }}/>
            <AccountCircleIcon style={{ fontSize: 30 }}/>
         </div>
         <p className='ml-2 font-normaltext-xl text-white flex items-center justify-start mt-2 text-sm mb-4'><span className='font-bold'>Devanshu Chauhan </span><span className='ml-1'>liked your tweet</span></p>
      </div>
    </div>
  )
}

export default Notifications
