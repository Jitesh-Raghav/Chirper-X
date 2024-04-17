import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import SigninForm from './SigninForm';
import SignUpForm from './SignUpForm';
import { useLocation, useNavigate } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius:2,
  outline:"none"
};

export default function AuthModal({open, handleClose}) {
   
    const location= useLocation();
    const navigate= useNavigate();

    const handleNavigate=()=>{
        const path=location.pathname==="/signup"?"/signin":"/signup"
        navigate(path)
    }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
    
         {location.pathname==="/signup"?<SignUpForm/>:<SigninForm/>}
         
         <h1 className='text-center pt-6 pb-2 font-semibold text-lg text-gray-500'>
            {location.pathname==="/signup"?"Already have an account?":"Don't have an account?"}
         </h1>

         <Button fullWidth variant='outlined' onClick={handleNavigate} sx={{borderRadius:"29px", py:"15px", textTransform:"none"}}>
         {location.pathname==="/signup"?"Sign in":"Sign Up"}
         </Button>

        </Box>
      </Modal>
    </div>
  );
}
