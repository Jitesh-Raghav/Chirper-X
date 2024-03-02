import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  border:"none",
  outline:"gray",
  bgcolor: 'black',
  border: '1px solid gray',
  boxShadow: 24,
  borderRadius:3 ,
  p: 4,
};

export default function SubscriptionModal({open, handleClose}) {
  
  

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
              <div className='flex items-center space-x-3'>
                <IconButton onClick={handleClose} aria-label='delete'>
                  <CloseIcon sx={{color:"white"}}/>
                </IconButton>
              </div>

            <div className='w-full bg-black text-white'>
              <div className='pt-10  '>
                  <p className='font-bold text-4xl ml-[140px] mb-6'>Who are you?</p>
                  <p className='py-3 ml-[125px]'>Choose the right subscription for you:</p>
              </div>

              <div className='flex py-4 ml-5 space-x-5'>
                  <button className='bg-gray-950 py-7 px-8 rounded-xl cursor-pointer border border-gray-700 hover:border-blue-500 shadow-lg'>
                     <p className='flex items-start text-sm text-gray-600 py'>Premium</p>
                     <p className='font-lg font-semibold flex items-start text-white'>I am an individual</p>
                     <p className='flex items-start text-sm text-gray-600'>For individuals and creators</p>
                  </button>

                  <button className='bg-gray-950 py-7 px-8 rounded-xl cursor-pointer border border-gray-700 hover:border-blue-500 shadow-lg'>
                     <p className='flex items-start text-sm  text-gray-600'>Verified Organizations</p>
                     <p className='font-lg font-semibold flex items-start text-white'>I am an Organization</p>
                     <p className='flex items-start text-sm  text-gray-600'>For business agencies, govt</p>
                  </button>
              </div>

              <div className='py-5'>
                <button className='rounded-full bg-[#2196f3] text-white w-[85%] py-5 text-xl ml-8 cursor-pointer hover:bg-blue-500'>
                   Subscribe
                </button>
                <div className='ml-[65px]'> 
                <p className='flex items-center mt-7 mb-8'>Learn more about <span className='text-[#2196f3] mx-1 hover:underline cursor-pointer'>Premium</span> and <span className='text-[#2196f3] mx-1 hover:underline cursor-pointer'>Verified Organizations</span></p>
                </div>
               
              </div>
              
            </div>  
        </Box>
      </Modal>
    </div>
  );
}
