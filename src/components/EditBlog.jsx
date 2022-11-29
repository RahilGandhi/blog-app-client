import React from 'react'
import {FormGroup,FormControl,InputLabel,Input,styled,Select,MenuItem,Button} from '@mui/material';
import { useState } from 'react';
import {useParams,useNavigate} from 'react-router-dom';
import { useEffect } from 'react';
import {getSingleData,editSingleData} from '../services';



  const FGroup=styled(FormGroup)`
  width:80%;
  margin:30px auto 0px auto;
  `
  const FControl=styled(FormControl)`
    margin-top:30px;
  `
  const defaultValue={
    title:'',
    type:'',
    blog:''
  }

function EditBlog() {
  useEffect(()=>{
    getData();
  },[])
  const {id}=useParams();


  const getData=async()=>{
    const res=await getSingleData(id);
    console.log(res.data)
    setBlog(res.data);
  }


  const [blog,setBlog]=useState(defaultValue);

  const onValueChange=(e)=>{
    console.log(e.target.value);
    setBlog({...blog,[e.target.name]:e.target.value});
  }
  
  const navigate=useNavigate();

  const editData=async()=>{
    await editSingleData(blog,id);
    navigate('/all');
  }

 


  return (
    <div>
      <FGroup>
        <FControl>
          <InputLabel>Title:</InputLabel>
          <Input name='title' value={blog.title} onChange={e=>onValueChange(e)}/>
        </FControl>
        <FControl>
          <InputLabel>Type:</InputLabel>
          <Select style={{marginTop:'40px'}} name='type' value={blog.type} onChange={e=>onValueChange(e)} >
            <MenuItem value='React'>React</MenuItem>
            <MenuItem value='Algorithms'>Algorithms</MenuItem>
            <MenuItem value='Science'>Science</MenuItem>
            <MenuItem value='Data Structure'>Data Structure</MenuItem>
            <MenuItem value='Javascript'>JavaScript</MenuItem>
          </Select>
        </FControl>
        
        <FControl>
          <InputLabel>Blog:</InputLabel>
          <Input name='blog' value={blog.blog} onChange={e=>onValueChange(e)} />
        </FControl>
        <Button variant='contained' style={{marginTop:20}} onClick={()=>editData()} >Edit</Button>
      </FGroup>

    </div>
  )
}

export default EditBlog