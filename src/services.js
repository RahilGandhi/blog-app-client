import axios from 'axios'

const URL='http://localhost:8000'

//Post Code
export const postBlog=async(defaultValue)=>{
    try {
      return await axios.post(`${URL}/add`,defaultValue)
    } catch (error) {
        console.log(error)
    }
}

//Fetching All Blogs

export const fetchAllBlogs=async()=>{
  try {
    return await axios.get(`${URL}/all`);
  } catch (error) {
    console.log(error);
  }
}



//Updating Section
export const getSingleData=async(id)=>{
  try {
   return await axios.get(`${URL}/edit/${id}`)
  } catch (error) {
    console.log(error);
  }
}

export const editSingleData=async(user,id)=>{
  try {
    return await axios.put(`${URL}/edit/${id}`,user)
  } catch (error) {
    console.log(error)
  }
}

export const deleteData = async(id)=>{
  try {
    return await axios.delete(`${URL}/delete/${id}`)
  } catch (error) {
    console.log(error)
  }
}


