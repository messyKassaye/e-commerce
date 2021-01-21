import { Divider } from "@material-ui/core";
import { useState } from "react";
import UseForm from "../../commons/UseForm";
import axios from 'axios'
import HomeStyles from "./styles/HomeStyle"
import { API_URL } from "../../../constants/constants";
import {useHistory} from 'react-router-dom'
import { set } from "../../../TokenService";

function SignUp(){
    const classes = HomeStyles()
    const {inputs, handleInputChange} = UseForm({name:'',email:'',password:''}); 
    const [submitted,setSubmitted] = useState(false)
    const [errorMessage,setErrorMessage] = useState('')
    const history  =useHistory()

    const handleSubmit =(e)=>{
        e.preventDefault()

        {/*check validation of the form */}
        if(inputs.name===''){
            setErrorMessage('Please enter your name')
        }else if(inputs.email===''){
            setErrorMessage('Please enter your email address')
        }else if(inputs.password===''){
            setErrorMessage('please enter your password')
        }else{
            setSubmitted(true)
            signUp()
        }
    }

    const signUp = ()=>{
        axios.post(`/api/signup`,inputs,{
            headers: { 
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
            }
        })
     .then(response=>response.data)
     .then(res=>{
        set(res.token)
        history.push('/auth')
     })
     .catch(onerror=>{
        if(!onerror.response){
            setErrorMessage('Something is not good. Please check your internet connection ):')
            setSubmitted(false)
        }
     })
    }
    return <div  className={classes.container}>
             <form className={classes.form} onSubmit={handleSubmit}>
                <h3 className={classes.label}>Register now and try it for your future</h3>
                <Divider className={classes.divider}/>
                    <input
                     placeholder={'Your name'}
                     type={'text'}
                     name={'name'}
                     onChange={handleInputChange}
                     value={inputs.name}
                     className={classes.inputs}
                    />

                    <input
                     placeholder={'Email address'}
                     type={'email'}
                     name={'email'}
                     onChange={handleInputChange}
                     value={inputs.email}
                     className={classes.inputs}
                    />

                    <input
                     placeholder={'Password'}
                     type={'password'}
                     name={'password'}
                     onChange={handleInputChange}
                     value={inputs.password}
                     className={classes.inputs}
                    />
                    <span className={classes.error}>{errorMessage}</span>

                    {
                        submitted
                        ?
                            (
                                <span className={classes.success}>
                                    Sign in on progress. Please wait...
                                </span>
                            )
                        :
                            (
                                <button className={classes.button}>
                                    Sign in
                                </button>
                            )
                    }

                <div className={classes.registered}>
                        <span>
                            I'm allready registeredr
                        </span>
                        <a className={classes.link} href={'/'}>
                            Login
                        </a>
                    </div>

            </form>
    </div>
}

export default SignUp