import uploadImageClodinary from "../utils/uploadImageCloudinary.js"

const uploadImageController = async(request,response)=>{
    try {
        const file = request.file
        const uploadImage = await uploadImageClodinary(file)

        return response.json({
            message : "Upload Successful",
            data : uploadImage,
            success : true,
            error : false
        })


    } catch (error) {
        return response.status(500).json({
            message : error.message || error,
            error : true,
            success : false
        })
    }
}

export default uploadImageController