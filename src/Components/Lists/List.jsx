import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ListIcon from '@mui/icons-material/List';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';

const Lists = () => {
  return (
    <div>
      <div className='flex items-center justify-between mt-3 mb-8'>
        <p className='font-bold text-2xl text-white'>Lists</p>
      </div>

      <div className='relative w-full'>
        <span className="absolute inset-y-0 left-4 flex items-center text-gray-400"><SearchIcon /></span>
        <input 
          type="text" 
          className='h-12 w-full bg-transparent rounded-full pl-12 bg-opacity-20 text-white border border-gray-700 focus:border-blue-600 outline-none' 
          placeholder="Search Lists" 
        />
      </div>

      {/* List Card 1 */}
      <div className='flex items-center justify-start mt-10 space-x-3 cursor-pointer hover:bg-gray-800 hover:bg-opacity-30 p-3 rounded-lg'>
        <ListIcon className='text-yellow-500' style={{ fontSize: 40 }} />
        <div>
          <span className='font-bold text-lg'>Tech Updates</span>
          <span className='font-normal text-lg text-gray-400'> . 20 Members</span>
          <p className='text-gray-400 text-lg font-light'>Stay updated with the latest tech trends!</p>
        </div>
      </div>

      {/* List Card 2 */}
      <div className='flex items-center justify-start mt-10 space-x-3 cursor-pointer hover:bg-gray-800 hover:bg-opacity-30 p-3 rounded-lg'>
        <FavoriteIcon className='text-pink-500' style={{ fontSize: 40 }} />
        <div>
          <span className='font-bold text-lg'>Foodies</span>
          <span className='font-normal text-lg text-gray-400'> . 35 Members</span>
          <p className='text-gray-400 text-lg font-light'>Share and discover amazing recipes!</p>
        </div>
      </div>

      {/* List Card 3 */}
      <div className='flex items-center justify-start mt-10 space-x-3 cursor-pointer hover:bg-gray-800 hover:bg-opacity-30 p-3 rounded-lg'>
        <StarIcon className='text-blue-500' style={{ fontSize: 40 }} />
        <div>
          <span className='font-bold text-lg'>Top Movies</span>
          <span className='font-normal text-lg text-gray-400'> . 50 Members</span>
          <p className='text-gray-400 text-lg font-light'>Discuss your favorite films and series.</p>
        </div>
      </div>
    </div>
  );
};

export default Lists;
