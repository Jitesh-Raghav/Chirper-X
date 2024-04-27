import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace"
import { Divider } from '@mui/material';
import TweetDetailsCard from './TweetDetailsCard';
import { useDispatch, useSelector } from 'react-redux';
import { findTweetsById } from '../Tweet/Action';
import TweetCard from '../HomeSection/TweetCard';

const TweetDetails = () => {

 
    const navigate = useNavigate();
    const handleBack = () => navigate(-1);

    const dispatch = useDispatch();
    const {id}= useParams()
    const {tweet}= useSelector(store=>store)

    useEffect(()=>{
      if(id){
        dispatch(findTweetsById(id))
      }
    },[])
    

  return (
    <React.Fragment>
        
        <div className='flex items-center mt-6 mb-6'>
        <section className={"z-50 flex items-center sticky top-0 opacity-85 bg-black"}>
                <KeyboardBackspaceIcon className='cursor-pointer' onClick={handleBack} />

                <div >
                    <h1 className="text-xl font-bold opacity-90 ml-5 leading-tight">Tweet</h1>
                </div>
        </section>
      </div>
      
      <div className='my-6'> 
        <section>
          <TweetCard item={tweet.tweet}/>
          <Divider sx={{ bgcolor: 'grey.900' }}/>
        </section>
       </div>
       

      <section>
        {tweet.tweet.replyTweets.map((item)=><TweetCard item={item}/>)}
      </section>

        {/* <section>
            <TweetDetailsCard/>
        </section> */}
    </React.Fragment>
  )
}

export default TweetDetails
