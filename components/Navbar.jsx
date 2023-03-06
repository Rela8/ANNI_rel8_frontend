import {AppBar,Typography,Box, Container, Button, Drawer, Toolbar, Grid, IconButton} from '@mui/material';
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Logo from '../images/logo.png'
import {useState, useEffect} from 'react'
import Popover from '@mui/material/Popover';
import Menu from '@mui/material/Menu';
// import {useSty}
import MenuItem from '@mui/material/MenuItem';
// import Button from '@mui/material/Button';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import  ArrowDropDown from '@mui/icons-material/ArrowDropDown';
import MenuRounded  from '@mui/icons-material/MenuRounded';
import { style } from '@mui/system';
import { useTheme, makeStyles } from '@mui/styles';


const useStyles = makeStyles({
    root: {
      background: 'rgba(255, 255, 255, 0.8)',
      boxShadow:'none',
      paddingX:2
    },
   
  });

export default function Navbar(){

    const [anchorEl, setAnchorEl] = useState(null);
    const [anchorElR, setAnchorElR] = useState(null);
    const [selectedMenu, setSelectedMenu] = useState(2)
    const open = Boolean(anchorEl);
    const openResource = Boolean(anchorElR);
    const [openTop, setOpenTop]= useState(false)
    const [width, setWidth] = useState(768);


    const handleWindowSizeChange = () => {
            setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    console.log(width)
 

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClickResource = (event) => {
        setAnchorElR(event.currentTarget);
    };

    const handleCloseResource = () => {
        setAnchorElR(null);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    // const Theme = useTheme();
   
      const classes = useStyles();
   return( 
   <AppBar className={styles.appbar}  style={{backgroundColor:'#fff', boxShadow:'none'}}>
       <Grid container sx={{width:'100%'}}  justifyContent='space-between'>
               <Grid item sm={4} marginLeft={2} >
                    <img src={Logo.src} height='70px' className={styles.logo}  />
                </Grid>
                {width < 768 ?
                <Grid md={11} >
                    <Grid container paddingY={2}>
                        <IconButton marginTop={3} onClick={()=>setOpenTop(!openTop)}>
                            <MenuRounded />
                        </IconButton>
                    </Grid>
                    <Drawer
                        anchor='top'
                        open={openTop}
                        onClose={()=>setOpenTop(false)}
                        paddingTop={5}
                    >
                        <Grid container padding={2} justifyContent='flex-end'>
                            <MenuRounded onClick={()=>setOpenTop(false)}/>
                        </Grid>
                        <Link href="/">
                            <Typography onClick={()=>setOpenTop(false)} textAlign='center' className='text nav-link'  variant="body2" component="div" sx={{ flexGrow: 1 }}>
                                Home
                            </Typography>
                        </Link>
                    
                        <Link href='/jlj'>
                                <Typography onClick={()=>setOpenTop(false)} textAlign='center' className='text nav-link' variant="body2" component="div" sx={{ flexGrow: 1 }}>
                                    Events
                                </Typography>
                        </Link>
        
                        <Typography textAlign='center' id="demo-positioned-menu" onClick={handleClickResource }  className='text nav-link' variant="body2" component="div" sx={{ flexGrow: 1 }}>
                            <Grid className='text' container  justifyContent='center'>   
                                Resources
                            <ArrowDropDown />
                            </Grid>
                        </Typography>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorElR}
                                open={openResource}
                                onClose={handleCloseResource}
                                MenuListProps={{
                                'aria-labelledby': 'basic-button',
                                }}
                                classes={{ paper: classes.menuPaper }}
                            >
                                <MenuItem onClick={handleClose}>Articles</MenuItem>
                                <MenuItem onClick={handleClose}>Research Papers</MenuItem>
                                <MenuItem onClick={handleClose}>Constitution</MenuItem>
                                <MenuItem onClick={handleClose}>Newsletter</MenuItem>     
                            </Menu>
                                
                            {/* <Typography textAlign='center' onClick={handleClick}   className='text nav-link' variant="body2" component="div" sx={{ flexGrow: 1}}>
                                <Grid className='text' justifyContent='center'  container>
                                    Meet Our People
                                    <ArrowDropDown />
                                </Grid>
                              </Typography> */}
                              
                              <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                'aria-labelledby': 'basic-button'
                                }}
                                xs={{backgroundColor:'red'}}
                                className={classes.root}
                                >
                                <Link href="search">
                                    <MenuItem onClick={handleClose}>Members</MenuItem>
                                </Link>
                                <Link href="search">
                                    <MenuItem onClick={handleClose}>Exco</MenuItem>
                                </Link>
                                <Link href="search">
                                    <MenuItem onClick={handleClose}>Commitee Members</MenuItem>
                                </Link>
                                <Link href="search">
                                    <MenuItem onClick={handleClose}>Sub-Commitee Members</MenuItem>
                                </Link>
                                {/* </> */}
                                
                            </Menu>
                              
                        <Link href="/login"  component="button">
                            <div onClick={()=>setOpenTop(false)} className='nav-link'>
                                <Typography paddingBottom={3} textAlign='center' className='text' variant="body2"  sx={{ flexGrow: 1 }}>
                                Login
                                </Typography>
                            </div>
                        </Link>
                    </Drawer>
                </Grid> 
                
                :

                <Grid item md={7} sm={7} >
                    <Toolbar  >
                        <Link href="/">
                            <Typography className='text nav-link'  variant="body2" component="div" sx={{ flexGrow: 1 }}>
                                Home
                            </Typography>
                        </Link>
                    
                        <Link href='/jlj'>
                                <Typography className='text nav-link' variant="body2" component="div" sx={{ flexGrow: 1 }}>
                                    Events
                                </Typography>
                        </Link>
                       
                            {/* <Typography id="demo-positioned-menu" onClick={handleClickResource }  className='text nav-link' variant="body2" component="div" sx={{ flexGrow: 1 }}>
                                <Grid container>   
                                    Resources
                                <ArrowDropDown />
                                </Grid>
                            </Typography> */}
                            <Menu
                            id="basic-menu"
                            anchorEl={anchorElR}
                            open={openResource}
                            onClose={handleCloseResource}
                            MenuListProps={{
                            'aria-labelledby': 'basic-button',
                            }}
                            // className={classes.root}
                            classes={{ paper: classes.root }}
                            >
                            <MenuItem onClick={handleClose}>Articles</MenuItem>
                            <MenuItem onClick={handleClose}>Research Papers</MenuItem>
                            <MenuItem onClick={handleClose}>Constitution</MenuItem>
                            <MenuItem onClick={handleClose}>Newsletter</MenuItem>
                            {/* </> */}
                            
                        </Menu>
                                
                            {/* </>
                        </Link> */}

                        
                        
                        
                                {/* <Typography onClick={handleClick}   className='text nav-link' variant="body2" component="div" sx={{ flexGrow: 1 }}>
                                    <Grid  container>
                                    Meet Our People
                                    <ArrowDropDown />
                                    </Grid>
                              </Typography> */}
                              
                              <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                'aria-labelledby': 'basic-button',
                                }}
                                classes={{ paper: classes.root }}
                                
                                >
                                <Link href="search">
                                    <MenuItem onClick={handleClose}>Members</MenuItem>
                                </Link>
                                <Link href="search">
                                    <MenuItem onClick={handleClose}>Exco</MenuItem>
                                </Link>
                                <Link href="search">
                                    <MenuItem onClick={handleClose}>Commitee Members</MenuItem>
                                </Link>
                                <Link href="search">
                                    <MenuItem onClick={handleClose}>Sub-Commitee Members</MenuItem>
                                </Link>
                                {/* </> */}
                                
                            </Menu>
                              
                        <Link href="/login"  component="button">
                            <div className='nav-link'>
                                <Typography className='text' variant="body2"  sx={{ flexGrow: 1 }}>
                                Login
                                </Typography>
                            </div>
                        </Link>
                        
                    </Toolbar>
                </Grid>}
          </Grid>
                            
    </AppBar>
    

    )
    
}