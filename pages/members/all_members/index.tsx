import { NextPage } from "next";
import { DashboardLayout } from "../../../components/Dashboard/Member/Sidebar/dashboard-layout";
import MemberCard from "../../../components/memberCard/memberCard";
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Box } from "@mui/material";
import { a11yProps, TabPanel } from "../dues";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { selectMemberAndExco } from "../../../redux/members/membersSlice";
import Spinner from "../../../components/Spinner";
import { getCouncilMembers, getMembersAndExco } from "../../../redux/members/membersApi";
import axios from "../../../helpers/axios";



type CouncilType ={
    "id": number,
    "name":string,
    "about": string,
    "can_upload_min":boolean,
    "chapter_id": number|string
}

const AllMembers:NextPage = ()=>{
    const [value, setValue] = React.useState(0);
    const dispatch = useAppDispatch()
    const {status,error,data} =useAppSelector(selectMemberAndExco)
    const [council,setCouncil] = React.useState<CouncilType[]>([])
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
      };
    const get_council_name = async ()=>{
        const resp:any = await axios.get('/tenant/user/ManageAssigningExos/')
        setCouncil(resp.data.data)
    }
      React.useEffect(()=>{
        if(value===0){
            //get allmemmbers
            dispatch(getMembersAndExco({'get_excos':false}))
        }else{
          console.log({'councilid':value})
          dispatch(getCouncilMembers(value))
        }
        // if(value===1){
        //     //filter by exco allmemmbers
        //     dispatch(getMembersAndExco({'get_excos':true}))

        // }
        // console.log()
      },[value])
    React.useEffect(()=>{
        get_council_name()
    },[])
      return (
        <DashboardLayout>
            {
                status==='loading'?
                <Spinner/>:''
            }
<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="All Members" {...a11yProps(0)} />
          {/* <Tab label="All Exco" {...a11yProps(1)} /> */}
          {
            council.map((data,index:number)=>(
                <Tab label={data.name} {...a11yProps(data.id)} key={index+1} />
            ))
          }
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
                {/* <h1>All Memebers</h1> */}

            <div style={{'display':'flex','flexWrap':'wrap','gap':'5px','padding':'1rem .3rem'}}>
                {
                   data.map((data,index)=>(
                        <MemberCard  member={data} key={index}/>
                    ))
                }
            </div>
      </TabPanel>
      
      {
           council.map((council,index:number)=>(
             <TabPanel value={value} index={council.id} key={index}>
       
                <div style={{'display':'flex','flexWrap':'wrap','gap':'5px','padding':'1rem .3rem'}}>
                    {
                      data.map((data,index)=>(
                            <MemberCard member={data} key={index}/>
                        ))
                    }
                </div>
             </TabPanel>
           ))
      }

        </DashboardLayout>
    )
}

export default AllMembers