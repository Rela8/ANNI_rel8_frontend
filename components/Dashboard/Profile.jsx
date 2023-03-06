import { Divider, Grid, Typography } from "@mui/material"
import ProfileImage from '../../images/logo.png'
import HeadText from "./DashboardHead"

export default function Profile (props){
    return(
        <Grid container paddingX={2} >
            <Grid container marginBottom={2}>
              <HeadText text='Profile' />  
            </Grid>
            
            <Grid container>
                <Grid item md={5}>
                    <image src={ProfileImage.src}/>
                </Grid>

                <Grid item md={7} marginBottom={4}>
                    <Typography className='text' fontWeight='bolder' variant='h5'>MD Abubakar</Typography>
                    
                    <Typography marginTop={2} className='light-text'>Address:</Typography>
                    <Typography className='text' fontWeight='' variant='subtitle2'>123, Simpson street, Ikeja G.R.A, Lagos</Typography>
                
                    <Typography marginTop={2} className='light-text'>Email:</Typography>
                    <Typography className='text' fontWeight='' variant='subtitle2'>mdAbbk2022@yahoo.com</Typography>

                    <Typography marginTop={2} className='light-text'>State of Origin:</Typography>
                    <Typography className='text' fontWeight='' variant='subtitle2'>Kaduna State</Typography>

                    <Typography marginTop={2} className='light-text'>Phone:</Typography>
                    <Typography className='text' fontWeight='' variant='subtitle2'>08034387832</Typography>

                    <Typography marginTop={2} className='light-text'>Position:</Typography>
                    <Typography className='text' fontWeight='' variant='subtitle2'>Member</Typography>

                </Grid>
            </Grid>
            <br/>
            <Grid item md={12}>
                <Divider variant='inset' />
            </Grid>
            
            <Grid container md={12} justifyContent='space-between'>
                <Grid item md={4}>
                    <Grid>
                        <Typography variant='subtitle1' fontWeight='bolder' className='text' md={3} >
                            About Me
                        </Typography>
                        <Typography variant='subtitle2' className='light-text' >
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                            sed diam nonumy eirmod tempor invidunt ut labore et dolore 
                            magna aliquyam erat, sed diam voluptua. At vero eos et accusam 
                            et justo duo dolores et ea rebum. Stet clita kasd gubergren, 
                            no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum....... 
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam n
                        </Typography>
                    </Grid>
                </Grid>

                <Grid item md={7} >
                    
                    <Typography marginTop={2} className='light-text'>Course of Study:</Typography>
                    <Typography className='text' fontWeight='' variant='subtitle2'>Project Management</Typography>

                    <Typography marginTop={2} className='light-text'>Period of Study:</Typography>
                    <Typography className='text' fontWeight='' variant='subtitle2'>2018 - 2019</Typography>
                    

                    <Typography marginTop={2} className='light-text'>Exco Position:</Typography>
                    <Typography className='text' fontWeight='' variant='subtitle2'>Chairman</Typography>

                    <Typography marginTop={2} className='light-text'>Tenure Ends:</Typography>
                    <Typography className='text' fontWeight='' variant='subtitle2'>May 15, 2022</Typography>

                </Grid>
                
            </Grid>
        </Grid>
    )
}