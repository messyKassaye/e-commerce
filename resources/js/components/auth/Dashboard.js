import { Grid, Typography } from "@material-ui/core"
import Products from "./components/Products"
import UploadProduct from "./components/UploadProduct"
import AuthStyle from "./styles/AuthStyle"

function Dashboard(){
    const classes = AuthStyle()
    return <Grid container spacing={2} className={classes.container}>

        <Grid item md={8} xs={12}>
            <Products/>
        </Grid>

        <Grid item md={4} xs={12}>
            <UploadProduct/>
        </Grid>

    </Grid>
}

export default Dashboard