import { IconButton } from "@material-ui/core"
import { Add } from "@material-ui/icons"
import AuthStyle from "../styles/AuthStyle"
import {useState,useEffect} from 'react'
import UseForm from "../../commons/UseForm"
import{get} from '../../../TokenService'
import axios from "axios"
function UploadProduct(){
    const classes =AuthStyle()
    const [newProduct,setNewProduct] = useState(false)
    const {inputs, handleInputChange} = UseForm({name:'',description:''}); 
    const [message,setMessage]=useState('')
    const [uploading,setUploading] = useState(false)

    useEffect(()=>{
        console.log(get())
    })
    const addNewProduct =()=>{
        setNewProduct(true)
    }

    const handleSubmit =(event)=>{
        event.preventDefault()
        setUploading(true)
        axios.post('/api/products',inputs,{
            headers: { 
                'Content-Type': 'application/json',
                "Authorization":`Bearer ${get()}`
            }
        })
        .then(response=>response.data)
        .then(res=>{
            setMessage(res.message)
            setUploading(false)
            window.location.reload()
        })

    }
    return <div>
         {
             newProduct
             ?
                (
                    <div className={classes.productContainer}>
                        <form className={classes.form} onSubmit={handleSubmit}>

                            <input
                            placeholder={'Product name'}
                            type={'text'}
                            name={'name'}
                            onChange={handleInputChange}
                            value={inputs.name}
                            className={classes.inputs}
                            />

                          <textarea
                            rows="10" cols="50"
                            placeholder={'Product description'}
                            type={'text'}
                            name={'description'}
                            onChange={handleInputChange}
                            value={inputs.description}
                            className={classes.inputs}
                            />
                            {
                                uploading
                                ?
                                    (
                                        <span className={classes.success}>
                                            Uploading on progress...
                                        </span>
                                    )
                                :
                                    (
                                        <div>
                                            <span className={classes.success}>
                                                {message}
                                            </span>
                                            <button className={classes.button}>
                                                    Upload product
                                            </button>
                                        </div>
                                    )
                            }

                        </form>
                    </div>
                )
             :
                (
                    <div className={classes.productContainer}>
                        <span>
                            Upload new product
                        </span>
                        <IconButton onClick={addNewProduct} color={'primary'}>
                            <Add/>
                        </IconButton>
                    </div>
                )
         }
    </div>
}

export default UploadProduct