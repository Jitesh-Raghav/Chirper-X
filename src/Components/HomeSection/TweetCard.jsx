import React, { useState } from 'react';
import RepeatIcon from '@mui/icons-material/Repeat';
import { Avatar, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import VerifiedIcon from '@mui/icons-material/Verified';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import ReplyModal from './ReplyModal';
import { useDispatch, useSelector } from 'react-redux';
import { createRetweet, likeTweet } from '../../Store/Tweet/Action';
import moment from 'moment';
import { motion } from 'framer-motion';

const TweetCard = ({ item }) => {
  const [openReplyModal, setOpenReplyModal] = useState(false);
  const [liked, setLiked] = useState(item?.liked);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { auth } = useSelector((store) => store);
  
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
    const handleOpenReplyModal = () => setOpenReplyModal(true);
    const handleCloseReplyModal = () => setOpenReplyModal(false);
  const handleLike = () => {
    setLiked(!liked);
    dispatch(likeTweet(item?.id));
  };

  return (
    <div>
      <div className="flex space-x-4">
        <Avatar onClick={() => navigate(`/profile/${item?.user?.id}`)} className="cursor-pointer" alt="username" src={item?.user?.image} />

        <div className="w-full">
          <div className="flex justify-between items-center">
            <div className="flex items-center cursor-pointer space-x-2">
              <span className="font-semibold">{item?.user?.fullName}</span>
              {item?.user?.verified && <VerifiedIcon fontSize="small" className="text-[#2196f3]" />}
              {item?.createdAt && (
                <span className="text-gray-500 hidden lg:block">
                  @{item?.user?.fullName ? item.user.fullName.split(" ").join("_").toLowerCase() : ""} . {moment.utc(item.createdAt).local().fromNow(true)}
                </span>
              )}
            </div>

            <Button id="basic-button" aria-controls={open ? 'basic-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={handleClick}>
              <MoreHorizIcon />
            </Button>
            <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose}>
              <MenuItem onClick={handleClose}>Pin to Profile</MenuItem>
              <MenuItem onClick={handleClose}>Delete</MenuItem>
              <MenuItem onClick={handleClose}>Edit</MenuItem>
            </Menu>
          </div>

          <div className="mt-0">
            <div className="cursor-pointer w-full" onClick={() => navigate(`/tweet/${item?.id}`)}>
              <p className="mb p-0 flex items-start text-left">{item?.content}</p>
              {item?.image && <img className="border m-1 border-gray-800 p-2 rounded-sm w-[34rem]" src={item.image} alt="" />}
            </div>
          </div>

          <div className="flex justify-between items-center py-3 flex-wrap">
            {/* Comment Button with Animation */}
            <motion.div
              whileTap={{ scale: 1.3 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="flex items-center space-x-3 text-gray-500"
              onClick={handleOpenReplyModal}
            >
              <ChatBubbleOutlineRoundedIcon className="cursor-pointer" />
              <p>{item?.totalReplies}</p>
            </motion.div>

            {/* Retweet Button with Animation */}
            <motion.div
              whileTap={{ scale: 1.3 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className={item?.retweet ? "text-green-500 space-x-3 flex items-center" : "text-gray-500 space-x-3 flex items-center"}
              onClick={() => dispatch(createRetweet(item?.id))}
            >
              <RepeatIcon className="cursor-pointer" />
              <p>{item?.totalRetweets}</p>
            </motion.div>

            {/* Like Button with Animation */}
            <motion.div
              whileTap={{ scale: 1.3 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className={liked ? "text-pink-600 space-x-3 flex items-center" : "text-gray-500 space-x-3 flex items-center"}
              onClick={handleLike}
            >
              {liked ? <FavoriteRoundedIcon className="cursor-pointer" /> : <FavoriteBorderRoundedIcon className="cursor-pointer" />}
              <p>{liked ? item?.totalLikes + 1 : item?.totalLikes}</p>
            </motion.div>

            {/* Analytics Button with Animation */}
            <motion.div
              whileTap={{ scale: 1.3 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="hidden lg:flex items-center space-x-3 text-gray-500"
            >
              <BarChartOutlinedIcon className="cursor-pointer" />
              <p>{Math.floor(Math.random() * 1000)}</p>
            </motion.div>

            {/* Bookmark Button with Animation */}
            <motion.div
              whileTap={{ scale: 1.3 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="flex items-center space-x-3 text-gray-500"
            >
              <BookmarkBorderIcon className="cursor-pointer" />
            </motion.div>

            {/* Share Button with Animation */}
            <motion.div
              whileTap={{ scale: 1.3 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="items-center space-x-3 text-gray-500 hidden lg:block"
            >
              <FileUploadOutlinedIcon className="cursor-pointer" />
            </motion.div>
          </div>
        </div>
      </div>

      <ReplyModal item={item} open={openReplyModal} handleClose={handleCloseReplyModal} />
    </div>
  );
};

export default TweetCard;








// import React, { useState } from 'react'
// import RepeatIcon from '@mui/icons-material/Repeat';
// import { Avatar, Button } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import VerifiedIcon from '@mui/icons-material/Verified';
// import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
// import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
// import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
// import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
// import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
// import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
// import FavoriteRounded from '@mui/icons-material/FavoriteRounded';
// import ReplyModal from './ReplyModal';
// import { useDispatch, useSelector } from 'react-redux';
// import { createRetweet, likeTweet } from '../../Store/Tweet/Action';
// import moment from 'moment';


// const TweetCard = ({item}) => {

//     const [openReplyModal, setOpenReplyModal]= useState(false);
//     const handleOpenReplyModal = () => setOpenReplyModal(true);
//     const handleCloseReplyModal = () => setOpenReplyModal(false);

//     const dispatch= useDispatch();

//     const navigate = useNavigate();

//     const {auth}= useSelector(store=>store)
//     console.log("auth user is :", auth )

//     const [anchorEl, setAnchorEl] = React.useState(null);
//     const open = Boolean(anchorEl);
//     const handleClick = (event) => {
//       setAnchorEl(event.currentTarget);
//     };
//     const handleClose = () => {
//       setAnchorEl(null);
//     };
  
//     const handleDeleteTweet = () => {
//       console.log("Tweet Deleted");
//       handleClose()
//     }   

//     const OpenReplySection=()=>{
//       console.log("reply section")
//     }

//     const handleRetweet=()=>{
//         dispatch(createRetweet(item?.id))
//         console.log("handle retweet")
//     }

//     const handleLike=()=>{
//         dispatch(likeTweet(item?.id))
//         console.log("handle Likes")
//     }

//     return (
//         <div>

//             {/* <div className='flex items-center font-semibold text-gray-700 py-2'>    
//             <RepeatIcon/>
//             <p>You Retweet</p>
//         </div> */}

//             <div className='flex space-x-4'>
//                 { <Avatar onClick={() => navigate(`/profile/${item?.user?.id}`)} className="cursor-pointer" alt="username" src={item?.user?.image} /> }

//                 <div className="w-full">
//                     <div className="flex justify-between items-center">
//                     <div className="flex items-center cursor-pointer space-x-2">
//                <span className="font-semibold">{item?.user?.fullName}</span>
//                 {item?.user?.verified && <VerifiedIcon fontSize='small' className="text-[#2196f3]" />}
//                 {item?.createdAt && (
//                  <span className="text-gray-500 hidden lg:block">
//                  @{item?.user?.fullName ? item.user.fullName.split(" ").join("_").toLowerCase() : ""} . {moment.utc(item.createdAt).local().fromNow(true)}
//                </span>
//     )}
// </div>

//                         <div>
//                             <Button
//                                 id="basic-button"
//                                 aria-controls={open ? 'basic-menu' : undefined}
//                                 aria-haspopup="true"
//                                 aria-expanded={open ? 'true' : undefined}
//                                 onClick={handleClick}
//                             >
//                                 <MoreHorizIcon />
//                             </Button>

//                             <Menu
//                                 id="basic-menu"
//                                 anchorEl={anchorEl}
//                                 open={open}
//                                 onClose={handleClose}
//                                 MenuListProps={{
//                                     'aria-labelledby': 'basic-button',
//                                 }}
//                             >
//                                 <MenuItem onClick={handleDeleteTweet}>Pin to Profile</MenuItem>
//                                 <MenuItem onClick={handleDeleteTweet}>Delete</MenuItem>
//                                 <MenuItem onClick={handleDeleteTweet}>Edit</MenuItem>

//                             </Menu>
//                         </div>

//                     </div>

//                     <div className="mt-0">
//                        <div className="cursor-pointer w-full"  onClick={()=>navigate(`/tweet/${item?.id}`)} >
//                          <p className='mb p-0 flex items-start text-left'>{item?.content} <span className="text-[#2196f3]"></span></p>
//                          {item?.image && (<img className="border m-1 border-gray-800 p-2 rounded-sm w-[34rem]" src={item.image} alt="" />)}
//                        </div>
//                     </div>

//                     <div className="flex justify-between items-center py-3 flex-wrap">
//                         <div className='flex items-center space-x-3 text-gray-500'>
//                             <ChatBubbleOutlineRoundedIcon className='cursor-pointer' onClick={handleOpenReplyModal}/>
//                             <p>{item?.totalReplies}</p>
//                         </div>

//                         <div className={item?.retweet? "text-green-500  space-x-3 flex items-center":"text-gray-500 space-x-3 flex items-center"}>
//                             <RepeatIcon className='cursor-pointer' onClick={handleRetweet}/>
//                             <p>{item?.totalRetweets}</p>
//                         </div>

//                         <div className={item?.liked? "text-pink-600  space-x-3 flex items-center":"text-gray-500 space-x-3 flex items-center"}>
//                             {item?.liked? <FavoriteRoundedIcon className='cursor-pointer' onClick={handleLike}/>:
//                                   <FavoriteBorderRoundedIcon className='cursor-pointer' onClick={handleLike}/>
//                              }
//                             <p>{item?.totalLikes}</p>
//                         </div>
                        
//                         <div className='hidden lg:flex  items-center space-x-3 text-gray-500'>
//                             <BarChartOutlinedIcon className='cursor-pointer' onClick={OpenReplySection}/>
//                             <p>{Math.floor(Math.random() * 1000)}</p>
//                         </div>

//                         <div className='flex items-center space-x-3 text-gray-500'>
//                             <BookmarkBorderIcon className='cursor-pointer' onClick={OpenReplySection}/>
//                         </div>

//                         <div className=' items-center space-x-3 text-gray-500 hidden lg:block'>
//                             <FileUploadOutlinedIcon className='cursor-pointer' onClick={OpenReplySection}/>
//                         </div>


//                     </div>

//                 </div>

//             </div>

//           <section>
//             <ReplyModal item={item} open={openReplyModal} handleClose={handleCloseReplyModal}/>
//           </section>

//         </div>
//     )
// }

// export default TweetCard
