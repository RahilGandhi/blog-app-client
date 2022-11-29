import React from 'react'
import {AppBar,Toolbar,styled} from '@mui/material'
import {NavLink} from 'react-router-dom'

const Navlink = styled(NavLink)`
    color:inherit;
    text-decoration:none;
    margin-right:20px;
    font-size:22px;
`

function NavBar() {
  return (
    <div>
        <AppBar position='static'>
            <Toolbar style={{backgroundColor:'#343a40'}}>
                <Navlink to='/'> Blogs</Navlink>
                <Navlink to='all'>All Blogs</Navlink>
                <Navlink to='add'> Add Blogs</Navlink>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default NavBar