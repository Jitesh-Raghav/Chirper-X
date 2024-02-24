import { Avatar, Button } from '@mui/material'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import * as Yup from 'yup'
import ImageIcon from '@mui/icons-material/Image';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import TagFacesIcon from '@mui/icons-material/TagFaces';

const validationSchema= Yup.object().shape({     //for validation purposes
    content:Yup.string().required("Tweet text is required")
})

const HomeSection = () => {

  const [uploadingImage, setUploadingImage]=useState(false);
  const [selectedImage, setSelectedImage]= useState();

    const handleSubmit=(values)=>{
     console.log("values ", values)
    }

   const formik=useFormik({
    initialValues:{
        content:"",
        image:""
    },
    onSubmit:handleSubmit, 
    validationSchema
   });

   const handleSelectImage=(event)=>{
     setUploadingImage(true);
     const imgUrl= event.target.files[0]
     formik.setFieldValue("image", imgUrl);
     setSelectedImage(imgUrl);
     setUploadingImage(false);
      
   };

  return (
    <div className="space-y-5">
      <section>
        <h1 className="py-5 flex items-start text-xl font-bold opacity-90">Home</h1>
      </section>

      <section className={"pb-10 flex items-start"}>
        <div className="flex space-x-5">
            <Avatar alt="username" src="https://avatars.githubusercontent.com/u/93904444?v=4"/>
            <div className="w-full">
                <form>
                    <div>
                      <input type="text" name="content" placeholder='What is happening?'
                      className="border-none outline-none text-xl bg-transparent"
                      {...formik.getFieldProps("content")}/>
                      {formik.errors.content && formik.touched.content && (
                        <span className='text-red-500'>{formik.errors.content}</span>
                      )}
                    </div>

                    <div className="flex justify-between items-center mt-5">
                      <div className="flex items-center space-x-5">
                        <label className="flex items-center cursor-pointer rounded-sm space-x-2">
                           <ImageIcon className="text-[#2196f3]"/>
                           <input type="file" name="imageFile" className="hidden" onChange={handleSelectImage}/>
                        </label>
                         <FmdGoodIcon className="text-[#2196f3]"/>
                         <TagFacesIcon className="text-[#2196f3]"/>
                      </div>

                      <div className='flex justify'>
                        <Button sx={{ width: "100%", borderRadius: "20px", paddingY: "8px", paddingX:"20px", bgcolor: "#2196f3" }} variant='contained'>Tweet</Button>
                      </div>
                    </div>

                </form>
            </div>
        </div>
      </section>
    </div>
  )
}

export default HomeSection
