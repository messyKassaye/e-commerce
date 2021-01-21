import { Container, Divider } from "@material-ui/core"
import UseForm from "../../commons/UseForm";
import HomeStyles from "./styles/HomeStyle"
import {useState} from 'react'
import { Link } from "react-router-dom";
import axios from "axios";
import { set } from "../../../TokenService";
import {useHistory} from 'react-router-dom'

function Login(){
    {/**style classes */}
    const classes = HomeStyles()
    const {inputs, handleInputChange} = UseForm({email:'',password:''}); 
    const [submitted,setSubmitted] = useState(false)
    const [errorMessage,setErrorMessage] = useState('')
    const history  =useHistory()

    const handleSubmit =(e)=>{
        e.preventDefault()
        setSubmitted(true)
        login()
    }

    const login = ()=>{
        axios.post(`/api/login`,inputs,{
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
        setSubmitted(false)
        setErrorMessage('Something is not good ):')
     })
    }

    return <div className={classes.container} >
            <form className={classes.form} onSubmit={handleSubmit}>
                <h3 className={classes.label}>Login to your dashboard</h3>
                <Divider className={classes.divider}/>
                    <input
                     placeholder={'Email address'}
                     type={'email'}
                     name={'email'}
                     onChange={handleInputChange}
                     value={inputs.email}
                     className={classes.inputs}
                    />

                    <input
                     placeholder={'Email address'}
                     type={'password'}
                     name={'password'}
                     onChange={handleInputChange}
                     value={inputs.password}
                     className={classes.inputs}
                    />
                    <span className={classes.error}>
                        {errorMessage}
                    </span>

                    {
                        submitted
                        ?
                            (
                                <span className={classes.success}>
                                    Login on progress....
                                </span>
                            )
                        :
                            (
                                <button className={classes.button}>
                                    Login
                                </button>
                            )
                    }

                    <div className={classes.registered}>
                        <span>
                            I'm new to e-commerce
                        </span>
                        <a className={classes.link} href={'/signup'}>
                            Sign up
                        </a>
                    </div>

            </form>
    </div>
}

export default Login