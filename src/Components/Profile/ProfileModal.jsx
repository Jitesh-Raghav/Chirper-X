import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useFormik } from 'formik';
import { Avatar, IconButton, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { grey } from '@mui/material/colors';
import { useDispatch } from 'react-redux';
import { updateUserProfile } from '../../Store/Auth/Action';
import { UploadToCloudinary } from '../../Utils/UploadToCloudinary';

const style = {
  position: 'absolute',
  top: '50%',
  left: '48%',
  transform: 'translate(-50%, -50%)',
  width: 570,
  bgcolor: 'white',
  border: 'none',
  outline: "none",
  boxShadow: 24,
  borderRadius: 3,
  p: 4,

};

const ProfileModal = ({ open, handleClose }) => {

  // const [open, setOpen] = React.useState(false);
  const [uploading, setUploading] = useState(false);
  const dispatch = useDispatch();
  const [selectedImage, setSelectedImage]= useState("")

  const handleSubmit = (values) => {
    dispatch(updateUserProfile(values))
    console.log("handle submit", values)
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
  })

  const handleImageChange = async (event) => {
    setUploading(true);
    const { name } = event.target
    const file = await UploadToCloudinary(event.target.files[0]);
    formik.setFieldValue(name, file);
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
                <IconButton onClick={handleClose} aria-label='delete'>
                  <CloseIcon />
                </IconButton>
                <p className='text-lg'>Edit Profile</p>
              </div>
              <Button type='submit'>Save</Button>
            </div>

            <div className='hide-scrollbar overflow-y-scroll overflow-x-hidden h-[70vh]'>
              <div>
                <React.Fragment>
                  <div className='w-full'>
                    <div className='relative'>
                      <img src="https://ogden_images.s3.amazonaws.com/www.lockhaven.com/images/2021/01/06173002/BreakingBad1.jpg" className="w-full h-[12rem] object-cover object-top" alt="" />

                      <input type="file" className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer'
                        onChange={handleImageChange} name='backgroundImage'
                      />

                    </div>
                  </div>

                  <div className='py-4 ml-4 w-full h-[6rem]'>
                    <div className=' -mt-[79px]'>
                      <Avatar alt="Jitesh Raghav" src="https://avatars.githubusercontent.com/u/93904444?v=4" sx={{ width: "8rem", height: "8rem", border: "4px solid white" }} />

                      <input type='file' name='image' className='absolute top-0 left-0 w-[10rem] h-full opacity-0 cursor-pointer' onChange={handleImageChange} />

                    </div>
                  </div>
                </React.Fragment>
              </div>

              <div className='space-y-3'>
                <TextField fullWidth id="fullName" name="fullName" label="Full Name" value={formik.values.fullName}
                  onChange={formik.handleChange} error={formik.touched.fullName && Boolean(formik.errors.fullName)}
                  helperText={formik.touched.fullName && formik.errors.fullName} />

                <TextField fullWidth multiline rows={4} id="bio" name="bio" label="Bio" value={formik.values.bio}
                  onChange={formik.handleChange} error={formik.touched.bio && Boolean(formik.errors.bio)}
                  helperText={formik.touched.bio && formik.errors.bio} />

                <TextField fullWidth id="website" name="website" label="Website" value={formik.values.website}
                  onChange={formik.handleChange} error={formik.touched.website && Boolean(formik.errors.website)}
                  helperText={formik.touched.website && formik.errors.website} />

                <TextField fullWidth id="location" name="location" label="Location" value={formik.values.location}
                  onChange={formik.handleChange} error={formik.touched.location && Boolean(formik.errors.location)}
                  helperText={formik.touched.location && formik.errors.location} />

                <div className='my-3'>
                  <p className='text-sm text-gray-500 '>Birth Date . <span className='text-blue-500 hover:underline cursor-pointer'>Edit</span></p>
                  <p className='text-lg font-semibold'>Apri 18, 1857</p>
                </div>

                <div className='flex items-center justify-between'>
                  <p className='text-xl '>Edit Professional Profile</p>
                  <KeyboardArrowRightIcon sx={{ color: grey[500], margin: "2px" }} />
                </div>
                <p className='text-sm text-blue-500 hover:underline cursor-pointer leading-tight -mt-8'>Learn More.</p>



              </div>

            </div>
          </form>
        </Box>
      </Modal>
    </div>
  )
}

export default ProfileModal
