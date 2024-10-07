import React, { useState } from 'react';
import { Button, Grid } from '@mui/material';
import { GoogleLogin } from '@react-oauth/google';
import AuthModal from './AuthModal';
import { useNavigate } from 'react-router-dom';  // Import useNavigate

const Authentication = () => {
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const navigate = useNavigate();  // Initialize useNavigate

  const handleOpenAuthModal = (path) => {
    // Use navigate to redirect to signup or signin
    navigate(path);
    setOpenAuthModal(true);
  };

  const handleCloseAuthModal = () => setOpenAuthModal(false);

  return (
    <div className='bg-black text-white min-h-screen'>
       <Grid className="overflow-y-hidden" container>
          <Grid className="hidden lg:block" item lg={7}>
            <div className="relative inline-block">
              <img src="https://static.vecteezy.com/system/resources/previews/002/392/802/non_2x/seamless-patterns-with-colorful-waves-in-blue-shades-for-print-and-web-vector.jpg" alt="" className="w-full" />
              <svg viewBox="0 0 24 24" aria-hidden="true" className="absolute top-[0%] left-[7%] w-[80%] h-[80%]">
                <g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g>
              </svg>
            </div>
          </Grid>

          <Grid className='lg:px-16 px-6' item lg={5} xs={12}>
            <h1 className='font-bold lg:text-8xl lg:mt-16 lg:ml-[-10%] text-7xl mt-16'>Happening Now</h1>
            <h1 className='font-bold text-3xl lg:pt-16 lg:pb-10 pt-[130px] pb-0 flex lg:items-start lg:ml-0 ml-[110px]'>Join today.</h1>
          
            <div className='w-[80%] mt-14 ml-[40px] lg:mt-0 lg:ml-0 lg:w-[60%]'>
              <div className='lg:w-full'>
                <div className="w-[300px] sm:w-[100px] lg:w-[310px] rounded-2xl"><GoogleLogin /></div>
                <p className='py-5 text-center'>OR</p>

                {/* Create account button that navigates to /signup */}
                <Button 
                  onClick={() => handleOpenAuthModal('/signup')}  // Navigate to /signup
                  fullWidth 
                  variant="contained" 
                  size="large" 
                  sx={{ borderRadius: "29px", py: "7px", textTransform: "none" }}
                >
                  Create account
                </Button>
                
                <p className='text-xs mt-1 text-justify text-gray-500 leading-tight'>
                  By signing up, you agree to the 
                  <span className='text-blue-400 hover:underline cursor-pointer'> Terms of Service </span> 
                  and 
                  <span className='text-blue-400 hover:underline cursor-pointer'> Privacy Policy</span>, 
                  including 
                  <span className='text-blue-400 hover:underline cursor-pointer'> Cookie Use</span>.
                </p>
              </div>

              <div>
                <h1 className='mt-10 mb-4 flex items-start'>Already have an account?</h1>

                {/* Sign In button that navigates to /signin */}
                <Button 
                  onClick={() => handleOpenAuthModal('/signin')}  // Navigate to /signin
                  fullWidth 
                  variant="outlined" 
                  size="large" 
                  sx={{ borderRadius: "29px", py: "7px", textTransform: "none" }}
                >
                  Sign In
                </Button>
              </div>
            </div>
          
          </Grid>
       </Grid>

       <AuthModal open={openAuthModal} handleClose={handleCloseAuthModal} />
    </div>
  );
};

export default Authentication;











// import React from 'react'
// import { Button, Grid } from '@mui/material';
// import { GoogleLogin } from '@react-oauth/google';
// import AuthModal from './AuthModal';
// import { useState } from 'react';

// const Authentication = () => {

//   const [openAuthModal, setOpenAuthModal]= useState(false);
//   const handleOpenAuthModal=()=>setOpenAuthModal(true);
//   const handleCloseAuthModal=()=>setOpenAuthModal(false);

//   return (
//     <div className='bg-black text-white min-h-screen'>
//        <Grid className="overflow-y-hidden" container>
//           <Grid className="hidden lg:block" item lg={7}>

//          <div className="relative inline-block">
//          <img src="https://static.vecteezy.com/system/resources/previews/002/392/802/non_2x/seamless-patterns-with-colorful-waves-in-blue-shades-for-print-and-web-vector.jpg" alt="" className="w-full" />
//           <svg viewBox="0 0 24 24" aria-hidden="true" className="absolute top-[0%] left-[7%] w-[80%] h-[80%]">
//           <g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g>
//          </svg>
//         </div>
//       </Grid>

//           <Grid className='lg:px-16 px-6' item lg={5} xs={12}>
//             <h1 className='font-bold lg:text-8xl lg:mt-16 lg:ml-[-10%] text-7xl mt-16'>Happening Now</h1>
//             <h1 className='font-bold text-3xl lg:pt-16 lg:pb-10 pt-[130px] pb-0 flex lg:items-start lg:ml-0 ml-[110px]'>Join today.</h1>
          
//             <div className='w-[80%] mt-14 ml-[40px] lg:mt-0 lg:ml-0 lg:w-[60%]'>
//                <div className='lg:w-full'>
//                <div className="w-[300px] sm:w-[100px] lg:w-[310px] rounded-2xl"><GoogleLogin /></div>
//                  <p className='py-5 text-center'>OR</p>
//                  <Button onClick={handleOpenAuthModal} fullWidth variant="contained" size="large" sx={{borderRadius:"29px", py:"7px", textTransform:"none"}}>Create account</Button>
//                  <p className='text-xs mt-1 text-justify text-gray-500 text leading-tight'>By signing up, you agree to the <span className='text-blue-400 hover:underline cursor-pointer'>Terms of Service</span> and <span className='text-blue-400 hover:underline cursor-pointer'>Privacy Policy</span>, including <span className='text-blue-400 hover:underline cursor-pointer'>Cookie Use</span>.</p>
//                </div>

//                <div>
//                 <h1 className='mt-10 mb-4 flex items-start'>Already have an account?</h1>
//                 <Button onClick={handleOpenAuthModal} fullWidth variant="outlined" size="large" sx={{borderRadius:"29px", py:"7px", textTransform:"none"}}>Sign In</Button>
//                </div>
//             </div>
          
          
//           </Grid>


//        </Grid>

//        <AuthModal open={openAuthModal} handleClose={handleCloseAuthModal}/>
//     </div>
//   )
// }

// export default Authentication;
  