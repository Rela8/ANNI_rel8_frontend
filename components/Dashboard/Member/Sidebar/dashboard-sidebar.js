import { useEffect,useState } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { Box, Button, Divider, Drawer, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { NavItem } from '../nav-item';
import Person from '@mui/icons-material/Person'
import DashboardCustomize from '@mui/icons-material/DashboardCustomize'
import PeopleRounded from '@mui/icons-material/PeopleRounded'
import PersonPinRounded from '@mui/icons-material/PersonPinRounded'
import SettingsSuggest from '@mui/icons-material/SettingsSuggest'
import AccountBalanceWalletRounded from '@mui/icons-material/AccountBalanceWalletRounded'
import Info from '@mui/icons-material/Info'
import LogoutRounded from '@mui/icons-material/LogoutRounded'
import Photo from '@mui/icons-material/Photo'
import EventRounded from '@mui/icons-material/EventRounded'
import MenuBook from '@mui/icons-material/MenuBook'
import ChatBubble from '@mui/icons-material/ChatBubble'
import LogoImage from '../../../../images/logo.png'
import SwitchLabels from '../../../SwitchLabels';
import Spinner from "../../../Spinner";
import {BsBriefcaseFill} from 'react-icons/bs'
import {FaUsers} from 'react-icons/fa'
import SimpleAccordion from '../../../Accordion';
const centerSwitch={
         'display':'flex',
         'padding':' 0 .7rem'
        }
const items = [
  {
    href: '/members/home',
    icon: (<DashboardCustomize fontSize="small" />),
    title: 'Dashboard'
  },
  // {
  //   href: '/members/account',
  //   icon: (<AccountBalanceWalletRounded fontSize="small" />),
  //   title: 'My Account'
  // },

  
  {
    href: '/members/events',
    icon: (<PeopleRounded fontSize="small" />),
    title: 'Events'
  },
  {
    href: '/members/committee',
    icon: (<EventRounded fontSize="small" />),
    title: 'My Committee'
  },
  {

    href: '#',
    isDroppable:true,
    icon: (<MenuBook fontSize="small" />),
    title: 'Resources'
  },
  {
    href: '/members/gallery',
    icon: (<Photo fontSize="small" />),
    title: 'Gallery'
  },
  // {
  //   href: '/members/service_request',
  //   icon: (<BsBriefcaseFill fontSize="small" />),
  //   title: 'Services'
  // },
  {
    href: '/members/single-chat',
    icon: (<ChatBubble fontSize="small" />),
    title: 'Single Chat'
  },
  
  {
    href: '/members/groupchat',
    icon: (<ChatBubble fontSize="small" />),
    title: 'Group Chat'
  },
  
  {
    href: '/members/news',
    icon: (<Info fontSize="small" />),
    title: 'Nimn News'
  },
  {
    href: '/members/all_members/',
    icon: (<FaUsers fontSize="small" />),
    title: 'All Members'
  },
  {
    href: '/members/fund_a_project',
    icon: (<Photo fontSize="small" />),
    title: 'Fund A Project'
  },
  {
    href: '/members/services',
    icon: (<Photo fontSize="small" />),
    title: 'Service Request'
  },
  {
    href: '/members/dues/',
    icon: (<Person fontSize="small" />),
    title: 'Account'
  },
  {
    href: '/members/profile/',
    icon: (<Person fontSize="small" />),
    title: 'My profile'
  },
  // {
  //   href: '/members/settings/',
  //   icon: (<Person fontSize="small" />),
  //   title: 'My Settings'
  // },
  {
    href: '#',
    icon: (<LogoutRounded fontSize="small" />),
    title: 'Logout'
  }
];

export const DashboardSidebar = (props) => {
  const [custom_window,setCustom_window] = useState(null)
  const { open, onClose } = props;
  const router = useRouter();
  const theme = useTheme();
  const lgUp = useMediaQuery(theme.breakpoints.up('lg'))
  const [council,setCouncil] = useState([])
  const [comittee,setComittee] = useState([])
  const [chapter,setChapter] = useState(null)
  const [url_status,setUrl_status] =useState({
    'status':'general_status','id':0})
  useEffect(
    () => {
      if (!router.isReady) {
        return;
      }

      if (open) {
        onClose?.();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [router.asPath]
  );


  useEffect(()=>{
    let localData = localStorage.getItem('token')
    if(localData){
      localData = JSON.parse(localStorage.getItem('token'))
      setCouncil(localData.council)
      setComittee(localData.commitee)
      setChapter(localData.chapter)
    }
    let urlStatus = localStorage.getItem('url_status')
    if(urlStatus){
      urlStatus = JSON.parse(localStorage.getItem('url_status'))
      setUrl_status(urlStatus)
    }
  },[])


const content = (
  <>
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }}
  >
    <div style={{'backgroundColor':'white'}}>
      <br/>
      <img 
          src={LogoImage.src}
          alt='logo'
          style={{
            'width':'100%',
            'margin':'0 auto',
            'display':'block',
            'height':'100%'

          }}
          />
    </div>
    <Divider
      sx={{
        borderColor: 'rgba(255, 255, 255, 0.04)',
        my: 1
      }}
    />
<br/>


<br/>
    <Box sx={{ flexGrow: 1 }}>
    <div style={{'color':'white'}}>
      <SimpleAccordion
      header='Other Environment'
      >
        {
          council.map((data,index)=>(
            <div 
            key={index}
            style={{'display':'flex','justifyContent':'spaceBetween','fontSize':'.9rem','margin':'.4rem 0'}}
            >
                  <p>{data.name}</p>
                  <SwitchLabels
                  func={(checked)=>{
                    let new_url_status = {'status':'general_status','id':0}
                    if(checked){
                      //set it back to it orginal state
                      new_url_status={'status':'council','id':data.id}
                      // u want to filter by this
                      setUrl_status(new_url_status)
                    }else{
                      setUrl_status(new_url_status)
                    }
                    localStorage.setItem('url_status',JSON.stringify(new_url_status))
                    window.location.reload()

                  }}
                  label={''}
                  switch={url_status.status=='council'&&url_status.id==data.id}
                  />

            </div>
          ))
        }

      {
        chapter?
        <div 
        style={{'display':'flex','justifyContent':'spaceBetween','fontSize':'.9rem','margin':'.4rem 0'}}
        >
              <p>{chapter.name}</p>
              <SwitchLabels
              label={''}
              switch={url_status.status=='chapter'&&url_status.id==chapter.id}
              func={(checked)=>{
                let new_url_status = {'status':'general_status','id':0}
                if(checked){
                  //set it back to it orginal state
                  new_url_status={'status':'chapter','id':chapter.id}
                  // u want to filter by this
                  setUrl_status(new_url_status)
                }else{
                  setUrl_status(new_url_status)
                }
                localStorage.setItem('url_status',JSON.stringify(new_url_status))
                window.location.reload()

              }}
              />

        </div>
        :''
      }
      </SimpleAccordion>
    </div>

    <div style={{'color':'white'}}>
      <SimpleAccordion
      header='Commitee Environment'
      >
     {
          comittee.map((data,index)=>(
            <div 
            key={index}
            style={{'display':'flex','justifyContent':'spaceBetween','fontSize':'.9rem',}}
            >
                  <p>{data.name}</p>
                  <SwitchLabels
                  label={''}
                  switch={url_status.status=='comittee'&&url_status.id==data.id}
                  func={(checked)=>{
                    let new_url_status = {'status':'general_status','id':0}
                    if(checked){
                      //set it back to it orginal state
                      new_url_status={'status':'comittee','id':data.id}
                      // u want to filter by this
                      setUrl_status(new_url_status)
                    }else{
                      setUrl_status(new_url_status)
                    }
                    localStorage.setItem('url_status',JSON.stringify(new_url_status))
                    window.location.reload()

                  }}
                  />

            </div>
          ))
        }
      </SimpleAccordion>
    </div>
    
      {items.map((item) => (
        <NavItem
          key={item.title}
          icon={item.icon}
          href={item.href}
          title={item.title}
        />
      ))}

    
    </Box>
    </Box>
</>
)

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: '#2e3715',
            color: '#FFFFFF',
            width: 220,
            borderRadius:"10px"
          }
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }



  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: '#2e3715',
          color: '#FFFFFF',
          width: 250
        }
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
   {content}
    </Drawer>
  );
};

DashboardSidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool
};
