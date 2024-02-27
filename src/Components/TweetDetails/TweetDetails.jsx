import React from 'react'
import { useNavigate } from 'react-router-dom';
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace"
import TweetCard from '../HomeSection/TweetCard';
import { Divider } from '@mui/material';

const TweetDetails = () => {

 
    const navigate = useNavigate();
    const handleBack = () => navigate(-1);

  return (
    <React.Fragment>
        <section className={"z-50 flex items-center sticky top-0 opacity-85 bg-black"}>
                <KeyboardBackspaceIcon className='cursor-pointer' onClick={handleBack} />

                <div >
                    <h1 className="pt-5 text-xl font-bold opacity-90 ml-5 leading-tight">Tweet</h1>
                </div>

        </section>

        <section>
            <TweetCard/>
            <Divider/>
        </section>
    </React.Fragment>
  )
}

export default TweetDetails
