import React,{Component} from 'react'
import { Typography } from '@material-ui/core'
import HomeStyles from './styles/HomeStyle';
import { Link } from 'react-router-dom';

function LogoComponent(props){
    const classes =HomeStyles()
        return <div component={Link} to={'/'} className={classes.logo}>
            <h3 style={{color:props.firstColor,}}>E-</h3>
            <h3 style={{color:props.secondColor}}>commerce</h3>
        </div>
}


export default LogoComponent;
