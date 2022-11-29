import React from 'react'
import {styled,FormGroup, FormControl,InputLabel,Input, Button, Select,MenuItem} from '@mui/material'
import { useState } from 'react'
import { postBlog } from '../services'
import {useNavigate} from 'react-router-dom'    
const Fgroup=styled(FormGroup)`
        width:80%;
        margin: 3% auto 0 auto;
        & > div {
            margin-top:25px;
        }
       
    `

const Btn=styled(Button)`
margin-top:20px;
`

const defaultValue={
    title:'',
    type:'',
    blog:'',
}


function AddBlog() {
    const [state,setState]=useState(defaultValue);

    const onValueChange=(e)=>{
        console.log(e.target.name + e.target.value);
        setState({...state,[e.target.name]:e.target.value})
    }
    
    const navigate=useNavigate();
    //post data function
    const uploadData=async()=>{
       await postBlog(state);
       navigate('/all');
    }

  return (
    <div>
        <Fgroup>
            <FormControl>
                <InputLabel>Blog Title:</InputLabel>
                <Input name='title' onChange={e=>onValueChange(e)}/>
            </FormControl>
            <FormControl >
            <InputLabel >Blog Type:</InputLabel>
                    <Select 
                    style={{marginTop:'40px'}}
                    value={state.type}
                    name='type' 
                    onChange={e=>onValueChange(e)} >
                      <MenuItem value='React' >React</MenuItem>
                      <MenuItem value='Algorithms' >Algorithms</MenuItem>
                      <MenuItem value='Science' >Science</MenuItem>
                      <MenuItem value='Data Structure' >Data Structure</MenuItem>
                      <MenuItem value='Javascript' >Javascript</MenuItem>
                    </Select>
                </FormControl>            
            <FormControl>
                <InputLabel>Blog:</InputLabel>
                <Input name='blog' onChange={e=>onValueChange(e)}/>
            </FormControl>
        <Btn style={{backgroundColor:'gray' , color:'white'}} onClick={()=>uploadData()}  > Add Blog</Btn>
        </Fgroup>

    </div>
  )
}

export default AddBlog