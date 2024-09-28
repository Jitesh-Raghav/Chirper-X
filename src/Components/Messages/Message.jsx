import React from 'react'
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import SearchIcon from '@mui/icons-material/Search';
import Namo from '../../assets/namo.jpeg'
import Virat from '../../assets/virat.jpeg'
import VerifiedIcon from '@mui/icons-material/Verified';
import Kutta from '../../assets/dpal.jpeg'
import Cena from '../../assets/cena.jpeg'

const Message = () => {
  return (
    <div>
        <div className='flex items-center justify-between mt-3 mb-8'> 
           <p className='font-bold text-2xl text-white'>Messages</p>
           <ForwardToInboxIcon className='text-white'/>
        </div>
        <div className='relative w-full'>
           <span className="absolute inset-y-0 left-4 flex items-center text-gray-400"><SearchIcon /></span>
           <input  type="text" className='h-12 w-full bg-transparent rounded-full pl-12 bg-opacity-20 text-white border border-gray-700 focus:border-blue-600 outline-none' placeholder="Search Direct Messages" />
           </div>

           <div className='flex items-center justify-start mt-10 space-x-3 cursor-pointer hover:bg-gray-800 hover:bg-opacity-30 p-3 rounded-lg'>
             <img src={Virat} className='w-12 rounded-full' alt="" />
             <div>
             <span className='font-bold text-lg'>Virat Kohli</span>
             <VerifiedIcon className='text-blue-500 ml-1' style={{ fontSize: 18 }} /> {/* Verified Icon */}
             <span className='font-normal text-lg text-gray-400'>@imVKohli . Sep 27</span>
             <p className='text-gray-400 text-lg font-light items-start justify-start text-start'>You sent a link</p>
             </div>
           </div>
           
           <div className='flex items-center justify-start mt-10 space-x-3 cursor-pointer hover:bg-gray-800 hover:bg-opacity-30 p-3 rounded-lg'>
             <img src={Namo} className='w-12 rounded-full' alt="" />
             <div>
             <span className='font-bold text-lg'>Narendra Modi</span>
             <VerifiedIcon className='text-blue-500 ml-1' style={{ fontSize: 18 }} /> {/* Verified Icon */}
             <span className='font-normal text-lg text-gray-400'>@dicktate . Sep 19</span>
             <p className='text-gray-400 text-lg font-light items-start justify-start text-start'>🙏🏼🌷</p>
             </div>
           </div>

           <div className='flex items-center justify-start mt-10 space-x-3 cursor-pointer hover:bg-gray-800 hover:bg-opacity-30 p-3 rounded-lg'>
             <img src={Kutta} className='w-12 rounded-full' alt="" />
             <div>
             <span className='font-bold text-lg'>Dhrampal</span>
             <span className='font-normal text-lg text-gray-400 ml-1'>@bossmanpro . Sep 19</span>
             <p className='text-gray-400 text-lg font-light items-start justify-start text-start'>Bhai phone utha, matter ho gya hai.</p>
             </div>
           </div>

           <div className='flex items-center justify-start mt-10 space-x-3 cursor-pointer hover:bg-gray-800 hover:bg-opacity-30 p-3 rounded-lg'>
             <img src={Cena} className='w-12 rounded-full' alt="" />
             <div>
             <span className='font-bold text-lg'>John Cena</span>
             <VerifiedIcon className='text-blue-500 ml-1' style={{ fontSize: 18 }} /> {/* Verified Icon */}
             <span className='font-normal text-lg text-gray-400'>@imjohncena . Sep 18</span>
             <p className='text-gray-400 text-lg font-light items-start justify-start text-start'>I challenge you for Hell in a cell</p>
             </div>
           </div>
    </div>
  )
}

export default Message
