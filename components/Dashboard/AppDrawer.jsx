import React,{useState} from 'react'
import {Box, Grid, Button, Avatar} from '@mui/material';
import Drawer from '@mui/material/Drawer';
 import { Typography } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { styled, useTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import styles from '../../styles/Home.module.css'
import Logo from "../../images/logo.png"
import DashboardRounded from '@mui/icons-material/DashboardRounded'
import Logout from '@mui/icons-material/Logout'
import ArrowBack from '@mui/icons-material/ArrowBack'
// import Modal from '@mui/icons-material/Modal'
import Person from '@mui/icons-material/Person'
import Photo from '@mui/icons-material/Photo'
import LogoutRounded from '@mui/icons-material/LogoutRounded'
import AccountBalanceWalletRounded from '@mui/icons-material/AccountBalanceWalletRounded'
import PeopleRounded from '@mui/icons-material/PeopleRounded'
import ChatBubble from '@mui/icons-material/ChatBubble'
import Info from '@mui/icons-material/Info'
import MenuBook from '@mui/icons-material/MenuBook'
import Settings from '@mui/icons-material/Settings'
import Notifications from '@mui/icons-material/Notifications'
import Home from './Home';
import MyAccount from './MyAccount';
import MemberDirectory from './MemberDirectory';
import Events from './Events';
import Chat from './Chat';
import News from './News';
import Gallery from './Gallery';
import Link from 'next/link'
import SingleChat from './SingleChat';
import SingleNews from './SingleNews';
import Receipt from './Receipt.';
import { NavLink } from './NavLink';
import Excos from './Excos';
import Profile from './Profile';
// import BasicModal from '../popModal';



const drawerWidth = 180;
const darkGreen ='//#region 436937'

// const style = {
//   paper: {
//     background: "blue"
//   }
// }

export function dropDown(){
  return(
    <h1>Hello</h1>
  )
}


const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: `${drawerWidth}px`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }));


  

export default function AppDrawer () {
    // const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = useState(true);
    const [selected, setSelected] = useState(0)
    
  
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };

    const [openD, setOpenD] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    

  
    return (
      <Box sx={{ display: 'flex' }}>



        {/* <Logout/> */}
        {/* <BasicModal open={openModal} handleClose={handleClose} /> */}
        <CssBaseline />
        <AppBar position="fixed" open={open} style={{backgroundColor:'white', boxShadow:'none'}} className={styles.appbar}>
          <Toolbar>
            <IconButton
             
              color="primary"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: 'none' }) }}
            >
              <MenuIcon />
            </IconButton>
            <Grid container justifyContent='space-between'>
              <Grid item>
                <Grid container paddingY={2} alignItems='center'>
                  <IconButton>
                    <ArrowBack />
                  </IconButton>
                  <Typography variant="body2" fontWeight='bolder' className='text' noWrap component="div">
                    General Dashboard
                  </Typography>
                </Grid>
              </Grid>
              
              <Grid item md={3}>
                <Grid container md={8}  justifyContent='space-around' alignItems='center' paddingY={1}>
                  <IconButton>
                    <Avatar className='' onClick={()=>setSelected(13)} sx={{bgcolor:'black', height:26, width:26}}   />
                  </IconButton>
                  <Settings className='text'  />
                  <IconButton edge=''>
                    <Notifications className='text '/>
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>    
          </Toolbar>
          
        </AppBar>
        <Drawer
           PaperProps={{
            sx: {
              backgroundColor: "#365C2A",
              color: "white",
              margin:"7px",
              borderRadius:"8px"
            }
          }}
          // classes={{ paper: classes.paper }}
          className={styles.drawer}
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            overflow:'hidden',
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <Link href="/">
              <img className='nav-link' src={Logo.src}/>
            </Link>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon sx={{color:'white'}} /> : <ChevronRightIcon sx={{color:'white'}}/>}
            </IconButton>
          </DrawerHeader>
          <br/>
          <br/>
          <br/>
          <List>
            {['Home', 'My Account', 'Member Directory', 'Events', 'Chat', 'News & Updates','Resources',  'Gallery', 'Logout'].map((text, index) => (
              <ListItem onClick={()=>{index !==8 ? setSelected(index):''}} className={index==selected? 'selectedNav':''}   key={text}>
                <ListItemIcon>
                  {/* {index % 2 === 0 ? <InboxIcon className='drawerIcon'  /> 
                  : <MailIcon className='drawerIcon'/>} */}
                  {[<DashboardRounded className={index==selected? 'selectedNav':'drawerIcon'} key={index} />, 
                  <AccountBalanceWalletRounded className={index==selected? 'selectedNav':'drawerIcon'} key={index} />,
                  <Person className={index==selected? 'selectedNav':'drawerIcon'}  key={index}/>, 
                  <PeopleRounded className={index==selected? 'selectedNav':'drawerIcon'}  key={index}/>,
                  <ChatBubble className={index==selected? 'selectedNav':'drawerIcon'}  key={index} />,
                  <Info className={index==selected? 'selectedNav':'drawerIcon'}   key={index}/>,
                  <MenuBook className={index==selected? 'selectedNav':'drawerIcon'}  key={index}/>,
                  <Photo className={index==selected? 'selectedNav':'drawerIcon'} key ={index}/>,
                  <LogoutRounded className={index==selected? 'selectedNav':'drawerIcon'} key={index}/>][index]}
                  {/* <NavLink href="/search" className="nav-item nav-link">Users</NavLink>, */}

                </ListItemIcon>
                <ListItemText className='iconsText'   primary={<Typography type="body2" className='text nav-link' style={{ color: index==selected?'#365C2A':'white', fontSize:'12px' }}>{text}</Typography>}/>
              </ListItem>
            ))}
          </List>
        </Drawer>
        <Main open={open}>

          
          <DrawerHeader />

          {
            selected == 0 
            ? <Home setSelected={setSelected} />:(
               selected ==1 ? <MyAccount setSelected={setSelected}/>:
              (selected ==2 ? <MemberDirectory/>:
              (selected ==3 ? <Events/>:
              (selected ==4 ? <Chat setSelected={setSelected} />:
              (selected ==5 ? <News setSelected={setSelected} />: 
              (selected ==6 ? <News setSelected={setSelected} />: 
              (selected ==7 ? <Gallery/>: 
              (selected ==9 ? <SingleChat/>: 
              (selected ==10 ? <SingleNews />: 
              (selected ==11 ? <Receipt />: 
              (selected ==12 ? <Excos setSelected={setSelected} />: 
              (selected ==13 ? <Profile setSelected={setSelected} />: <div>Nothing Yet</div>
                  )
                  )
                  )
                ))
                )
                  ))
              ))
              )
              )
          }
          
        </Main>

       
      </Box>

      
    );
}