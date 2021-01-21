import { makeStyles } from "@material-ui/core";
import { green, red } from "@material-ui/core/colors";

const AuthStyle = makeStyles((theme)=>({
    container:{
        marginTop:150,
    },
    productContainer:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center'
    },
    form:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        width:'100%',
        padding:20,
        [theme.breakpoints.down('xs')]:{
            width:'100%'
        }
    },
    label:{
        color:'#808080'
    },
    divider:{
        width:'100%'
    },
    inputs:{
        width:'100%',
        marginTop:25,
        marginBottom:25,
        padding:10,
        display: 'flex',
        border: '1px solid #808080',
        borderRadius: 4,
        boxSizing:'border-box'
    },
    button:{
        paddingLeft:50,
        paddingRight:50,
        paddingTop:10,
        paddingBottom:10,
        backgroundColor:'#555555',
        color:'white',
        width:'100%'
    },
    success:{
        color:green[500]
    },
    error:{
        color:red[600],
        margin:5
    }


 }))

export default AuthStyle