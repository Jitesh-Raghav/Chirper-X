import React, { useState } from 'react'
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
import FavoriteRounded from '@mui/icons-material/FavoriteRounded';
import ReplyModal from './ReplyModal';
import { useDispatch, useSelector } from 'react-redux';
import { createRetweet, likeTweet } from '../../Store/Tweet/Action';
import moment from 'moment';

const TweetCard = ({item}) => {

    const [openReplyModal, setOpenReplyModal]= useState(false);
    const handleOpenReplyModal = () => setOpenReplyModal(true);
    const handleCloseReplyModal = () => setOpenReplyModal(false);

    const dispatch= useDispatch();

    const navigate = useNavigate();

    const {auth}= useSelector(store=>store)
    console.log("auth user is :", auth )

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const handleDeleteTweet = () => {
      console.log("Tweet Deleted");
      handleClose()
    }   

    const OpenReplySection=()=>{
      console.log("reply section")
    }

    const handleRetweet=()=>{
        dispatch(createRetweet(item?.id))
        console.log("handle retweet")
    }

    const handleLike=()=>{
        dispatch(likeTweet(item?.id))
        console.log("handle Likes")
    }

    return (
        <div>

            {/* <div className='flex items-center font-semibold text-gray-700 py-2'>    
            <RepeatIcon/>
            <p>You Retweet</p>
        </div> */}

            <div className='flex space-x-5'>
                { <Avatar onClick={() => navigate(`/profile/${item?.user?.id}`)} className="cursor-pointer" alt="username" src={item?.user?.image} /> }

                <div className="w-full">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center cursor-pointer space-x-2">

                            <span className="font-semibold">{item?.user?.fullName}</span>
                            <VerifiedIcon fontSize='small' className="text-[#2196f3]" />
                            <span className="text-gray-500">@{item?.user?.fullName.split(" ").join("_").toLowerCase()}  .  {moment(item?.createdAt).fromNow(true)}
</span>

                        </div>

                        <div>
                            <Button
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            >
                                <MoreHorizIcon />
                            </Button>

                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                <MenuItem onClick={handleDeleteTweet}>Pin to Profile</MenuItem>
                                <MenuItem onClick={handleDeleteTweet}>Delete</MenuItem>
                                <MenuItem onClick={handleDeleteTweet}>Edit</MenuItem>

                            </Menu>
                        </div>

                    </div>

                    <div className="mt-0">
                       <div className="cursor-pointer w-full"  onClick={()=>navigate(`/tweet/${item?.id}`)} >
                         <p className='mb p-0 flex items-start text-left'>{item?.content} <span className="text-[#2196f3]"></span></p>
                         {item?.image && (<img className="border m-1 border-gray-800 p-2 rounded-sm w-[34rem]" src={item.image} alt="" />)}
                       </div>
                    </div>

                    <div className="flex justify-between items-center py-3 flex-wrap">
                        <div className='flex items-center space-x-3 text-gray-500'>
                            <ChatBubbleOutlineRoundedIcon className='cursor-pointer' onClick={handleOpenReplyModal}/>
                            <p>{item?.totalReplies}</p>
                        </div>

                        <div className={item?.retweet? "text-green-500  space-x-3 flex items-center":"text-gray-500 space-x-3 flex items-center"}>
                            <RepeatIcon className='cursor-pointer' onClick={handleRetweet}/>
                            <p>{item?.totalRetweets}</p>
                        </div>

                        <div className={item?.liked? "text-pink-600  space-x-3 flex items-center":"text-gray-500 space-x-3 flex items-center"}>
                            {item?.liked? <FavoriteRoundedIcon className='cursor-pointer' onClick={handleLike}/>:
                                  <FavoriteBorderRoundedIcon className='cursor-pointer' onClick={handleLike}/>
                             }
                            <p>{item?.totalLikes}</p>
                        </div>
                        
                        <div className='flex items-center space-x-3 text-gray-500'>
                            <BarChartOutlinedIcon className='cursor-pointer' onClick={OpenReplySection}/>
                            <p>{Math.floor(Math.random() * 1000)}</p>
                        </div>

                        <div className='flex items-center space-x-3 text-gray-500'>
                            <BookmarkBorderIcon className='cursor-pointer' onClick={OpenReplySection}/>
                        </div>

                        <div className='flex items-center space-x-3 text-gray-500'>
                            <FileUploadOutlinedIcon className='cursor-pointer' onClick={OpenReplySection}/>
                        </div>


                    </div>

                </div>

            </div>

          <section>
            <ReplyModal item={item} open={openReplyModal} handleClose={handleCloseReplyModal}/>
          </section>

        </div>
    )
}

export default TweetCard
