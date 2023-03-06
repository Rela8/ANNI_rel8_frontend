import { useEffect } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { Box, Button, Divider, Drawer, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { NavItem } from './nav-item';
import Person from  '@mui/icons-material/Person'
import DashboardCustomize from  '@mui/icons-material/DashboardCustomize'
import PeopleRounded from  '@mui/icons-material/PeopleRounded'
import AccountBalanceWalletRounded from  '@mui/icons-material/AccountBalanceWalletRounded'
import PersonPinRounded from  '@mui/icons-material/PersonPinRounded'
import SettingsSuggest from  '@mui/icons-material/SettingsSuggest'
import Info from  '@mui/icons-material/Info'
import LogoutRounded from  '@mui/icons-material/LogoutRounded'
import EventRounded from  '@mui/icons-material/EventRounded'
import LogoImage from '../../../../images/logo.png'

const items = [
  {
    href: '/admin/home',
    icon: (<DashboardCustomize fontSize="small" />),
    title: 'Dashboard'
  },
  // {
  //   href: '/admin/members',
  //   icon: (<PeopleRounded fontSize="small" />),
  //   title: 'Members'
  // },

  {
    href: '/admin/events',
    icon: (<EventRounded fontSize="small" />),
    title: 'Events'
  },
  // {
  //   href: '/products',
  //   icon: (<PersonPinRounded fontSize="small" />),
  //   title: 'Excos'
  // },
  // {
  //   href: '/account',
  //   icon: (<SettingsSuggest fontSize="small" />),
  //   title: 'Committee'
  // },
  {
    href: '/admin/dues',
    icon: (<AccountBalanceWalletRounded fontSize="small" />),
    title: 'Dues'
  },
  
  // {
  //   href: '/login',
  //   icon: (<Info fontSize="small" />),
  //   title: 'News/ Publications'
  // },

  {

    href: '#',
    isDroppable:true,
    icon: (<Info fontSize="small" />),
    title: 'Resources'
  },

  {
    href: '#',
    icon: (<LogoutRounded fontSize="small" />),
    title: 'Logout'
  }
];

export const DashboardSidebar = (props) => {
  const { open, onClose } = props;
  const router = useRouter();
  const theme = useTheme();
  const lgUp = useMediaQuery(theme.breakpoints.up('lg')
)
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

  const content = (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%'
        }}
      >
        <div>
          <Box sx={{ px: 2 }}>
            <Box
              my={2}
              sx={{
                alignItems: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                px: 3,
                py: '11px',
                borderRadius: 1,
              }}
            >
              <image src={LogoImage.src}/>
              {/* <SelectorIcon
                sx={{
                  color: 'neutral.500',
                  width: 14,
                  height: 14
                }}
              /> */}
            </Box>
          </Box>
        </div>
        <Divider
          sx={{
            borderColor: 'rgba(255, 255, 255, 0.04)',
            my: 1
          }}
        />
        <Box sx={{ flexGrow: 1 }}>
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
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: '#365C2A',
            color: '#FFFFFF',
            width: 200,
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
          backgroundColor: 'neutral.900',
          color: '#FFFFFF',
          width: 170
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
