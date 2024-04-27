import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useNavigate } from 'react-router-dom';
import VerifiedIcon from '@mui/icons-material/Verified';
import { Avatar } from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { createTweetReply } from '../Tweet/Action';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'black',
  border: '1px solid gray',
  outline: 'none',
  boxShadow: 24,
  p: 4,
  borderRadius: 4
};

export default function ReplyModal({ open, handleClose, item }) {
 
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [uploadingImage, setUploadingImage] = useState(false);
  const [selectedImage, setSelectedImage] = useState();

  const handleSubmit = (values) => {
    dispatch(createTweetReply(values))
    console.log("handle submit", values)
    handleClose()
  }

  const formik = useFormik({
    initialValues: {
      content: "",
      image: "",
      tweetId: item?.id,
    },
    onSubmit: handleSubmit
  })



  const handleSelectImage = (event) => {
    setUploadingImage(true);
    const imgUrl = event.target.files[0]
    formik.setFieldValue("image", imgUrl);
    setSelectedImage(imgUrl);
    setUploadingImage(false);

  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className='flex space-x-5  text-white'>
            <Avatar onClick={() => navigate(`/profile/${item?.user?.id}`)} className="cursor-pointer" alt="username" src="https://avatars.githubusercontent.com/u/93904444?v=4" />

            <div className="w-full">
              <div className="flex justify-between items-center">
                <div className="flex items-center cursor-pointer space-x-2">

                  <span className="font-semibold">{item?.user.fullName}</span>
                  <VerifiedIcon fontSize='small' className="text-[#2196f3]" />
                  <span className="text-gray-600">@{item?.user.fullName.split(" ").join("_").toLowerCase()} .    2m</span>

                </div>

              </div>

              <div className="mt-2">
                <div className="cursor-pointer w-full" onClick={() => navigate(`/tweet/${item?.id}`)}>
                  <p className='mb-2 p-0 flex items-start'>{item?.user?.content}</p>
                  <img className="border border-gray-400 p-2  rounded-sm w-[34rem]" src={item?.image} alt="" />
                </div>
              </div>

            </div>
          </div>



          <section className="py-5 mt-4 flex items-start text-white">
            <div className="flex space-x-5">
              <Avatar alt="username" src="https://avatars.githubusercontent.com/u/93904444?v=4" />
              <div className="w-full">
                <form onSubmit={formik.handleSubmit}>
                  <div>
                    <input type="text" name="content" placeholder='What is happening?'
                      className="border-none outline-none text-xl bg-transparent flex items-start w-full"
                      {...formik.getFieldProps("content")} />
                    {formik.errors.content && formik.touched.content && (
                      <span className='text-red-500 flex items-start'>{formik.errors.content}</span>
                    )}
                  </div>

                  <div className="flex justify-between items-center mt-5">
                    <div className="flex items-center space-x-5">
                      <label className="flex items-center cursor-pointer rounded-sm space-x-2">
                        <ImageIcon className="text-[#2196f3]" />
                        <input type="file" name="imageFile" className="hidden" onChange={handleSelectImage} />
                      </label>
                      <FmdGoodIcon className="text-[#2196f3] cursor-pointer" />
                      <TagFacesIcon className="text-[#2196f3] cursor-pointer" />
                    </div>

                    <div className="ml-[270px]">
                      <Button sx={{ width: "100%", borderRadius: "20px", py: "8px", px: "20px", bgcolor: "#2196f3" }} variant='contained' type="submit">Tweet</Button>
                    </div>
                  </div>

                </form>
              </div>
            </div>
          </section>

        </Box>
      </Modal>
    </div>
  );
}

