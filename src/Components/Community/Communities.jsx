import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import VerifiedIcon from '@mui/icons-material/Verified';
import CommunityIcon from '@mui/icons-material/Group';
import NatureIcon from '@mui/icons-material/Nature';
import SportsIcon from '@mui/icons-material/Sports';

const Communities = () => {
  return (
    <div>
      <div className='flex items-center justify-between mt-3 mb-8'>
        <p className='font-bold text-2xl text-white'>Communities</p>
      </div>

      <div className='relative w-full'>
        <span className="absolute inset-y-0 left-4 flex items-center text-gray-400"><SearchIcon /></span>
        <input 
          type="text" 
          className='h-12 w-full bg-transparent rounded-full pl-12 bg-opacity-20 text-white border border-gray-700 focus:border-blue-600 outline-none' 
          placeholder="Search Communities" 
        />
      </div>

      {/* Community Card 1 */}
      <div className='flex items-center justify-start mt-10 space-x-3 cursor-pointer hover:bg-gray-800 hover:bg-opacity-30 p-3 rounded-lg'>
        <CommunityIcon className='text-blue-500' style={{ fontSize: 40 }} />
        <div>
          <span className='font-bold text-lg'>Nature Lovers</span>
          <VerifiedIcon className='text-blue-500 ml-1' style={{ fontSize: 18 }} />
          <span className='font-normal text-lg text-gray-400'>@NatureLovers . Sep 27</span>
          <p className='text-gray-400 text-lg font-light'>Join us in exploring the beauty of nature!</p>
        </div>
      </div>

      {/* Community Card 2 */}
      <div className='flex items-center justify-start mt-10 space-x-3 cursor-pointer hover:bg-gray-800 hover:bg-opacity-30 p-3 rounded-lg'>
        <SportsIcon className='text-green-500' style={{ fontSize: 40 }} />
        <div>
          <span className='font-bold text-lg'>Sports Fanatics</span>
          <VerifiedIcon className='text-blue-500 ml-1' style={{ fontSize: 18 }} />
          <span className='font-normal text-lg text-gray-400'>@SportsFanatics . Sep 26</span>
          <p className='text-gray-400 text-lg font-light'>Connect with other sports lovers!</p>
        </div>
      </div>

      {/* Community Card 3 */}
      <div className='flex items-center justify-start mt-10 space-x-3 cursor-pointer hover:bg-gray-800 hover:bg-opacity-30 p-3 rounded-lg'>
        <NatureIcon className='text-yellow-500' style={{ fontSize: 40 }} />
        <div>
          <span className='font-bold text-lg'>Healthy Living</span>
          <VerifiedIcon className='text-blue-500 ml-1' style={{ fontSize: 18 }} />
          <span className='font-normal text-lg text-gray-400'>@HealthyLiving . Sep 25</span>
          <p className='text-gray-400 text-lg font-light'>Share tips and tricks for a healthier life.</p>
        </div>
      </div>
    </div>
  );
};

export default Communities;
