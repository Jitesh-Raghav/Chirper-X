import { Avatar, Button } from '@mui/material';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import ImageIcon from '@mui/icons-material/Image';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import TweetCard from './TweetCard';
import ReplyModal from './ReplyModal';
import { createTweet, getAllTweets } from '../../Store/Tweet/Action';
import { useDispatch, useSelector } from 'react-redux';
import { tweetReducer } from '../../Store/Tweet/Reducer';
import { UploadToCloudinary } from '../../Utils/UploadToCloudinary';
import { Divider } from '@mui/material';

const validationSchema = Yup.object().shape({
  content: Yup.string().required("Tweet text is required")
});

const HomeSection = () => {
  const [uploadingImage, setUploadingImage] = useState(false);
  const [selectedImage, setSelectedImage] = useState();
  const dispatch = useDispatch();

  const { auth } = useSelector(store => store);
  const { tweet } = useSelector(store => store);

  console.log("STORE TWEET", tweet);

  const handleSubmit = (values, actions) => {
    dispatch(createTweet(values));
    actions.resetForm();
    console.log("values ", values);
    setSelectedImage("");
  };

  useEffect(() => {
    dispatch(getAllTweets());
  }, [tweet.like, tweet.retweet]);

  const formik = useFormik({
    initialValues: {
      content: "",
      image: "",
      isTweet: true
    },
    onSubmit: handleSubmit,
    validationSchema
  });

  const handleSelectImage = async (event) => {
    setUploadingImage(true);
    const imgUrl = await UploadToCloudinary(event.target.files[0]);
    formik.setFieldValue("image", imgUrl);
    setSelectedImage(imgUrl);
    setUploadingImage(false);
  };

  return (
    <div className="space-y-5 p-4 md:p-6 sm:justify-start"> {/* Added padding for responsiveness */}
      <section>
        <h1 className="py-5 flex text-xl font-bold opacity-90">Home</h1>
      </section>

      <section className="pb-7 flex items-start flex-col md:flex-row sm:justify-start"> {/* Stack vertically on small screens */}
        <div className="flex sm:justify-start space-x-0 md:space-x-5 w-full">
          <Avatar alt="username" src={auth?.user?.image} className="hidden lg:block mb-4 md:mb-0"  sx={{display: { xs: 'none', md: 'flex' }  }}/> {/* Added margin for spacing on small screens */}
          <div className="w-full">
            <form onSubmit={formik.handleSubmit} className="flex flex-col space-y-3 sm:justify-start"> {/* Flex column for stacking input and button on small screens */}
              <div>
                <input
                  type="text"
                  name="content"
                  placeholder='What is happening?'
                  className="border-none outline-none text-lg md:text-xl bg-transparent flex items-start w-full md:w-[90%]" 
                  {...formik.getFieldProps("content")}
                />
                {formik.errors.content && formik.touched.content && (
                  <span className='text-red-500 flex items-start'>{formik.errors.content}</span>
                )}
              </div>

              <div className="flex lg:justify-between sm:mt-8 items-center mt-3 md:mt-5 flex-col md:flex-row space-y-3 md:space-y-0"> {/* Stacked on small screens */}
                <div className="flex sm:justify-start items-center space-x-5 w-full">
              
                  <label className="flex items-center cursor-pointer rounded-sm space-x-3">
                    <ImageIcon className="text-[#2196f3]" />
                    <input type="file" name="imageFile" className="hidden" onChange={handleSelectImage} />
                  </label> 
                  <FmdGoodIcon className="text-[#2196f3] cursor-pointer" />
                  <TagFacesIcon className="text-[#2196f3] cursor-pointer" />
                </div>
                
                <div className="w-full md:w-auto"> {/* Adjusted width for responsiveness */}
                  <Button
                    sx={{ width: "100%", borderRadius: "20px", py: "8px", px: "20px", bgcolor: "#2196f3" }}
                    variant='contained'
                    type="submit"
                    className="w-full md:w-auto" 
                  >
                    Tweet
                  </Button>
                </div>
              </div>
            </form>
            <div className={`${selectedImage ? 'rounded-xl mt-5 p-5 border border-solid border-blue-400' : ''}`}>
              {selectedImage && <img className="rounded-lg w-full h-auto" src={selectedImage} />} {/* Made image responsive */}
            </div>
          </div>
        </div>
      </section>

      <Divider sx={{ bgcolor: 'grey.900' }} />

      <section>
        {tweet.tweets.map((item, index) => (
          <React.Fragment key={item.id}>
            <TweetCard item={item} />
            {index !== tweet.tweets.length - 1 && <hr className="p-2 border-gray-900" />}
          </React.Fragment>
        ))}
      </section>
    </div>
  );
}

export default HomeSection;
