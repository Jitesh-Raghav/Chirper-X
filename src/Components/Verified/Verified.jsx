import React from 'react';
import VerifiedIcon from '@mui/icons-material/Verified';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';

const VerifiedUsers = () => {
  return (
    <div>
      <div className='flex items-center justify-between mt-3 mb-8'>
        <p className='font-bold text-2xl text-white'>Verified Users</p>
      </div>

      <div className='relative w-full'>
        <span className="absolute inset-y-0 left-4 flex items-center text-gray-400"><SearchIcon /></span>
        <input 
          type="text" 
          className='h-12 w-full bg-transparent rounded-full pl-12 bg-opacity-20 text-white border border-gray-700 focus:border-blue-600 outline-none' 
          placeholder="Search Verified Users" 
        />
      </div>

      {/* Verified User Card 1 */}
      <div className='flex items-center justify-start mt-6 space-x-3 cursor-pointer hover:bg-gray-800 hover:bg-opacity-30 p-4 rounded-lg'>
        <PersonIcon className='text-yellow-500' style={{ fontSize: 40 }} />
        <div>
          <span className='font-bold text-lg'>Elon Musk</span>
          <VerifiedIcon className='text-blue-500 ml-1' style={{ fontSize: 18 }} />
          <p className='text-gray-400 text-lg font-light'>@elonmusk</p>
          <p className='text-gray-400 text-md'>CEO of SpaceX and Tesla.</p>
        </div>
      </div>

      {/* Verified User Card 2 */}
      <div className='flex items-center justify-start mt-6 space-x-3 cursor-pointer hover:bg-gray-800 hover:bg-opacity-30 p-4 rounded-lg'>
        <PersonIcon className='text-green-500' style={{ fontSize: 40 }} />
        <div>
          <span className='font-bold text-lg'>Barack Obama</span>
          <VerifiedIcon className='text-blue-500 ml-1' style={{ fontSize: 18 }} />
          <p className='text-gray-400 text-lg font-light'>@BarackObama</p>
          <p className='text-gray-400 text-md'>44th President of the USA.</p>
        </div>
      </div>

      {/* Verified User Card 3 */}
      <div className='flex items-center justify-start mt-6 space-x-3 cursor-pointer hover:bg-gray-800 hover:bg-opacity-30 p-4 rounded-lg'>
        <PersonIcon className='text-red-500' style={{ fontSize: 40 }} />
        <div>
          <span className='font-bold text-lg'>Taylor Swift</span>
          <VerifiedIcon className='text-blue-500 ml-1' style={{ fontSize: 18 }} />
          <p className='text-gray-400 text-lg font-light'>@taylorswift13</p>
          <p className='text-gray-400 text-md'>American singer-songwriter.</p>
        </div>
      </div>

      {/* Verified User Card 4 - Virat Kohli */}
      <div className='flex items-center justify-start mt-6 space-x-3 cursor-pointer hover:bg-gray-800 hover:bg-opacity-30 p-4 rounded-lg'>
        <PersonIcon className='text-blue-500' style={{ fontSize: 40 }} />
        <div>
          <span className='font-bold text-lg'>Virat Kohli</span>
          <VerifiedIcon className='text-blue-500 ml-1' style={{ fontSize: 18 }} />
          <p className='text-gray-400 text-lg font-light'>@virat.kohli</p>
          <p className='text-gray-400 text-md'>Former Captain of India.</p>
        </div>
      </div>

      {/* Verified User Card 5 - MS Dhoni */}
      <div className='flex items-center justify-start mt-6 space-x-3 cursor-pointer hover:bg-gray-800 hover:bg-opacity-30 p-4 rounded-lg'>
        <PersonIcon className='text-yellow-700' style={{ fontSize: 40 }} />
        <div>
          <span className='font-bold text-lg'>MS Dhoni</span>
          <VerifiedIcon className='text-blue-500 ml-1' style={{ fontSize: 18 }} />
          <p className='text-gray-400 text-lg font-light'>@msdhoni</p>
          <p className='text-gray-400 text-md'>Former Captain of India.</p>
        </div>
      </div>

      {/* Verified User Card 6 - Sachin Tendulkar */}
      <div className='flex items-center justify-start mt-6 space-x-3 cursor-pointer hover:bg-gray-800 hover:bg-opacity-30 p-4 rounded-lg'>
        <PersonIcon className='text-pink-500' style={{ fontSize: 40 }} />
        <div>
          <span className='font-bold text-lg'>Sachin Tendulkar</span>
          <VerifiedIcon className='text-blue-500 ml-1' style={{ fontSize: 18 }} />
          <p className='text-gray-400 text-lg font-light'>@sachin_rt</p>
          <p className='text-gray-400 text-md'>Legendary Indian Cricketer.</p>
        </div>
      </div>

      {/* Verified User Card 7 - Brian Lara */}
      <div className='flex items-center justify-start mt-6 space-x-3 cursor-pointer hover:bg-gray-800 hover:bg-opacity-30 p-4 rounded-lg'>
        <PersonIcon className='text-purple-500' style={{ fontSize: 40 }} />
        <div>
          <span className='font-bold text-lg'>Brian Lara</span>
          <VerifiedIcon className='text-blue-500 ml-1' style={{ fontSize: 18 }} />
          <p className='text-gray-400 text-lg font-light'>@BrianLara</p>
          <p className='text-gray-400 text-md'>West Indian Cricketer.</p>
        </div>
      </div>
    </div>
  );
};

export default VerifiedUsers;
