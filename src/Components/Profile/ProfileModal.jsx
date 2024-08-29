import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useFormik } from 'formik';
import { Avatar, IconButton, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { grey } from '@mui/material/colors';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserProfile } from '../../Store/Auth/Action';
import { UploadToCloudinary } from '../../Utils/UploadToCloudinary';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  maxWidth: '570px',
  bgcolor: 'black', // Set background color to black
  border: 'none',
  outline: "none",
  boxShadow: 24,
  borderRadius: 3,
  p: { xs: 2, sm: 4 },
  color: 'white', // Set text color to white
};

const ProfileModal = ({ open, handleClose }) => {
  const [uploading, setUploading] = useState(false);
  const dispatch = useDispatch();
  const [selectedImage, setSelectedImage] = useState("");
  const { auth } = useSelector(store => store);

  const handleSubmit = (values) => {
    dispatch(updateUserProfile(values));
    setSelectedImage("");
    handleClose();
  }

  const formik = useFormik({
    initialValues: {
      fullName: "",
      website: "",
      location: "",
      bio: "",
      background: "",
      image: "",
    },
    onSubmit: handleSubmit
  });

  const handleImageChange = async (event) => {
    setUploading(true);
    const { name } = event.target;
    const file = await UploadToCloudinary(event.target.files[0]);
    formik.setFieldValue(name, file);
    setSelectedImage(file);
    setUploading(false);
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
          <form onSubmit={formik.handleSubmit}>
            <div className='flex items-center justify-between text-white'>
              <div className='flex items-center space-x-3'>
                <IconButton onClick={handleClose} aria-label='close' sx={{ color: 'white' }}>
                  <CloseIcon />
                </IconButton>
                <p className='text-lg'>Edit Profile</p>
              </div>
              <Button type='submit' sx={{ color: 'white' }}>Save</Button>
            </div>

            <div className='hide-scrollbar overflow-y-scroll overflow-x-hidden h-[60vh] sm:h-[70vh]'>
              <div>
                <div className='w-full'>
                  <div className='relative'>
                    <img
                      src={auth?.user?.backgroundImage || selectedImage || "https://ogden_images.s3.amazonaws.com/www.lockhaven.com/images/2021/01/06173002/BreakingBad1.jpg"}
                      className="w-full h-[10rem] sm:h-[12rem] object-cover object-top"
                      alt="Background"
                    />
                    <input
                      type="file"
                      className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer'
                      onChange={handleImageChange}
                      name='backgroundImage'
                    />
                  </div>
                </div>

                <div className='py-4 ml-4 w-full h-[6rem]'>
                  <div className='-mt-[79px]'>
                    <Avatar
                      alt={auth?.user?.fullName || "User Avatar"}
                      src={auth?.user?.image || selectedImage || ""}
                      sx={{ width: "6rem", height: "6rem", border: "4px solid black", marginLeft: '1rem' }}
                    />
                    <input
                      type='file'
                      name='image'
                      className='absolute top-0 left-0 w-[10rem] h-full opacity-0 cursor-pointer'
                      onChange={handleImageChange}
                    />
                  </div>
                </div>
              </div>

              <div className='space-y-3'>
                <TextField
                  fullWidth
                  id="fullName"
                  name="fullName"
                  label="Full Name"
                  value={formik.values.fullName}
                  onChange={formik.handleChange}
                  error={formik.touched.fullName && Boolean(formik.errors.fullName)}
                  helperText={formik.touched.fullName && formik.errors.fullName}
                  InputLabelProps={{ style: { color: 'white' } }} // Label color
                  sx={{
                    color: 'white', // Input text color
                    '& .MuiInputBase-root': {
                      color: 'white',
                      borderColor: grey[900], // Border color
                    },
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: grey[800], // Default border color
                      },
                      '&:hover fieldset': {
                        borderColor: grey[800], // Border color on hover
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: grey[500], // Border color when focused
                      },
                    },
                  }}
                />

                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  id="bio"
                  name="bio"
                  label="Bio"
                  value={formik.values.bio}
                  onChange={formik.handleChange}
                  error={formik.touched.bio && Boolean(formik.errors.bio)}
                  helperText={formik.touched.bio && formik.errors.bio}
                  InputLabelProps={{ style: { color: 'white' } }}
                  sx={{
                    color: 'white',
                    '& .MuiInputBase-root': {
                      color: 'white',
                      borderColor: grey[900],
                    },
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: grey[800],
                      },
                      '&:hover fieldset': {
                        borderColor: grey[800],
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: grey[500],
                      },
                    },
                  }}
                />

                <TextField
                  fullWidth
                  id="website"
                  name="website"
                  label="Website"
                  value={formik.values.website}
                  onChange={formik.handleChange}
                  error={formik.touched.website && Boolean(formik.errors.website)}
                  helperText={formik.touched.website && formik.errors.website}
                  InputLabelProps={{ style: { color: 'white' } }}
                  sx={{
                    color: 'white',
                    '& .MuiInputBase-root': {
                      color: 'white',
                      borderColor: grey[900],
                    },
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: grey[800],
                      },
                      '&:hover fieldset': {
                        borderColor: grey[800],
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: grey[500],
                      },
                    },
                  }}
                />

                <TextField
                  fullWidth
                  id="location"
                  name="location"
                  label="Location"
                  value={formik.values.location}
                  onChange={formik.handleChange}
                  error={formik.touched.location && Boolean(formik.errors.location)}
                  helperText={formik.touched.location && formik.errors.location}
                  InputLabelProps={{ style: { color: 'white' } }}
                  sx={{
                    color: 'white',
                    '& .MuiInputBase-root': {
                      color: 'white',
                      borderColor: grey[900],
                    },
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: grey[800],
                      },
                      '&:hover fieldset': {
                        borderColor: grey[800],
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: grey[500],
                      },
                    },
                  }}
                />

                <div className='my-3'>
                  <p className='text-sm text-gray-400'>Birth Date . <span className='text-blue-500 hover:underline cursor-pointer'>Edit</span></p>
                  <p className='text-lg font-semibold text-white'>April 18, 1857</p>
                </div>

                <div className='flex items-center justify-between'>
                  <p className='text-xl text-white'>Edit Professional Profile</p>
                  <KeyboardArrowRightIcon sx={{ color: grey[500], margin: "2px" }} />
                </div>
                <p className='text-sm text-blue-500 hover:underline cursor-pointer leading-tight -mt-8'>Learn More.</p>
              </div>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}

export default ProfileModal;
