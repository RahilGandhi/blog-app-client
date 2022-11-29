import React from 'react'
import {Card,CardContent,CardActions,Typography,Button, Styled} from '@mui/material';
import { fetchAllBlogs,deleteData } from '../services';
import { useState } from 'react';
import { useEffect } from 'react';
import {Link} from 'react-router-dom'


function AllBlogs() {
  const [blogs,setBlogs]=useState([]);
  
  useEffect(()=>{
    getAllBlogs();
  },[]);


  const getAllBlogs=async()=>{
     const response=await fetchAllBlogs();
      setBlogs(response.data);
      
  }
  
  const deleteBlog=async(id)=>{
    await deleteData(id);
    getAllBlogs();
  }

  return (
    <div>
      
      {blogs.map( (blog) =>(

        <Card key={blog._id} sx={{maxWidth:1200 ,maxHeight: 600, backgroundColor:'#e9ecef', marginLeft: `6%`, marginTop:"15px", display:"flex", borderRadius:5}}>
          <div>
          <img 
              src={`https://picsum.photos/300/400?random=${blog._id}`}
              alt="new"
            />
          </div>
        <div>
        <CardContent>
          <h5>ID : {blog._id}</h5>
          <h5>Title : {blog.title}</h5>
          <h5>Type : {blog.type}</h5>
          <Typography  variant='h5' >Blog: </Typography>
          <p>{blog.blog}</p>
        </CardContent>
        <CardActions>
          <Button variant='contained' style={{margin:`0px 10px 0px 0px`}} component={Link} to={`/edit/${blog._id}`} >Edit</Button>
          <Button style={{backgroundColor:'red', color:'white'}} onClick={()=>deleteBlog(blog._id)} >Delete</Button>
        </CardActions>
        </div>

      </Card>

        ))}

      

    </div>
  )
}

export default AllBlogs