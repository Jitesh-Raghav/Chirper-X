import React from 'react'
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';

const Message = () => {
  return (
    <div>
        <div className='flex items-center justify-between mt-3'> 
           <p className='font-bold text-2xl text-white'>Messages</p>
           <ForwardToInboxIcon className='text-white'/>
        </div>
    </div>
  )
}

export default Message
