import { Avatar, Card, CardContent, CardHeader, Divider, Grid, Typography } from "@material-ui/core"
import AuthStyle from "../styles/AuthStyle"
import {useEffect,useState} from 'react'
import axios from "axios"
import { get } from "../../../TokenService"
function Products(){
    const classes = AuthStyle()
    const [products,setProducts] = useState([])
    
    useEffect(()=>{
        axios.get('/api/products',{
            headers: { 
                'Content-Type': 'application/json',
                "Authorization":`Bearer ${get()}`
            }
        })
        .then(response=>response.data)
        .then(res=>{
            setProducts(res.data)
        })
    },[])
    return <div className={classes.productContainer}>
        <Typography color={'textSecondary'} variant={'h5'}>
            All of your Products
        </Typography>
        <Divider style={{marginTop:15,marginBottom:15}}/>
        <Grid container spacing={2}>
        {
            products.map(product=>(
                <Grid key={product.id} item md={12} xs={12}>
                    <Card>
                    <CardHeader
                     title={product.name}
                     avatar={
                         <Avatar>{product.name.charAt(0)}</Avatar>
                     }
                    />
                    <Divider/>
                    <CardContent>
                     {product.description}
                    </CardContent>
                </Card>
                </Grid>
            ))
        }
        </Grid>
    </div>
}

export default Products