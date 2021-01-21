import { makeStyles } from "@material-ui/core";
import { blue, green, red } from "@material-ui/core/colors";

const HomeStyles = makeStyles((theme)=>({
    logo:{
        display:"flex",
        flexDirection:'row',
        justifyContent:'center',
        marginLeft:150,
        cursor:'pointer',
        [theme.breakpoints.down('xs')]:{
            marginLeft:0
        }
    },
    container:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        marginTop:150,
        [theme.breakpoints.down('xs')]:{
            marginTop:100
        }
    },
    form:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        width:'50%',
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
    },
    registered:{
        display:'flex',
        flexDirection:'row',
    },
    link:{
        marginLeft:25,
        color:blue[500],
        textDecoration:'none'
    }

 }))

export default HomeStyles