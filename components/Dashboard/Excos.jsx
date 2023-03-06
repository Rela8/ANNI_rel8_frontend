import { Grid } from "@mui/material"
import ExcoCard from "../ExcoCard"
import HeadText from "./DashboardHead"
import  ImageCard from "../../images/logo.png"


export default function Excos(){
    return(
        <Grid container>
            <HeadText text='Meet the Excos' />

            <Grid container paddingX={2}>
                <ExcoCard 
                    image={ImageCard} 
                    name='MD Abubakar' 
                    post='MD/CEO' 
                    company='Blaid Group' 
                    body='Lorem ipsum dolor sit amet, 
                    consetetur sadipscing elitr, sed 
                    diam nonumy eirmod tempor invidunt 
                    ut labore et dolore maet justo duo 
                    dolores et ea rebum. Stet clita kasd gubergren'/>

                <ExcoCard 
                    image={ImageCard} 
                    name='MD Abubakar' 
                    post='MD/CEO' 
                    company='Blaid Group' 
                    body='Lorem ipsum dolor sit amet, 
                    consetetur sadipscing elitr, sed 
                    diam nonumy eirmod tempor invidunt 
                    ut labore et dolore maet justo duo 
                    dolores et ea rebum. Stet clita kasd gubergren'/>
            
            <ExcoCard 
                    image={ImageCard} 
                    name='MD Abubakar' 
                    post='MD/CEO' 
                    company='Blaid Group' 
                    body='Lorem ipsum dolor sit amet, 
                    consetetur sadipscing elitr, sed 
                    diam nonumy eirmod tempor invidunt 
                    ut labore et dolore maet justo duo 
                    dolores et ea rebum. Stet clita kasd gubergren'/>
            </Grid>
        </Grid>
    )
}