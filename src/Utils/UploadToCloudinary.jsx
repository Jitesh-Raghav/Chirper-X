export const UploadToCloudinary=async(pics)=>{

    if(pics){
        const data = new FormData();
        data.append("file", pics);
        data.append("upload_preset","twitter");
        data.append("cloud_name","dctrryilj");

        const res= await fetch("https://api.cloudinary.com/v1_1/dctrryilj/image/upload",{
            method:"post",
            body:data
        })

        const fileData= await res.json(); 
        return fileData.url.toString();
    }
    else{
        console.log("error aa gya in upload section")
    }
}