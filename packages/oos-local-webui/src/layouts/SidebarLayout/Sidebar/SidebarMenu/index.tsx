import { Fragment, useContext, useState } from 'react';
import { menuItems, menuOpen } from './menuItems';
import {
  ListSubheader,
  alpha,
  Box,
  List,
  styled,
  Button,
  ListItem,
  useTheme,
  ListItemButton,
  ListItemIcon,
  Collapse,
  Icon,
  useMediaQuery
} from '@mui/material';
import MuiListItemText from '@mui/material/ListItemText'
import { Link, NavLink as RouterLink } from 'react-router-dom';
import { SidebarContext } from '../../../../contexts/SidebarContext';

import DesignServicesTwoToneIcon from '@mui/icons-material/DesignServicesTwoTone';
import BrightnessLowTwoToneIcon from '@mui/icons-material/BrightnessLowTwoTone';
import MmsTwoToneIcon from '@mui/icons-material/MmsTwoTone';
import TableChartTwoToneIcon from '@mui/icons-material/TableChartTwoTone';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import BallotTwoToneIcon from '@mui/icons-material/BallotTwoTone';
import BeachAccessTwoToneIcon from '@mui/icons-material/BeachAccessTwoTone';
import EmojiEventsTwoToneIcon from '@mui/icons-material/EmojiEventsTwoTone';
import FilterVintageTwoToneIcon from '@mui/icons-material/FilterVintageTwoTone';
import HowToVoteTwoToneIcon from '@mui/icons-material/HowToVoteTwoTone';
import LocalPharmacyTwoToneIcon from '@mui/icons-material/LocalPharmacyTwoTone';
import RedeemTwoToneIcon from '@mui/icons-material/RedeemTwoTone';
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';
import TrafficTwoToneIcon from '@mui/icons-material/TrafficTwoTone';
import CheckBoxTwoToneIcon from '@mui/icons-material/CheckBoxTwoTone';
import ChromeReaderModeTwoToneIcon from '@mui/icons-material/ChromeReaderModeTwoTone';
import WorkspacePremiumTwoToneIcon from '@mui/icons-material/WorkspacePremiumTwoTone';
import CameraFrontTwoToneIcon from '@mui/icons-material/CameraFrontTwoTone';
import DisplaySettingsTwoToneIcon from '@mui/icons-material/DisplaySettingsTwoTone';

import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

const MenuWrapper = styled(Box)(
  ({ theme }) => `
  .MuiList-root {
    padding: ${theme.spacing(1)};

    & > .MuiList-root {
      padding: 0 ${theme.spacing(0)} ${theme.spacing(1)};
    }
  }

    .MuiListSubheader-root {
      text-transform: uppercase;
      font-weight: bold;
      font-size: ${theme.typography.pxToRem(12)};
      color: ${theme.colors.alpha.trueWhite[50]};
      padding: ${theme.spacing(0, 2.5)};
      line-height: 1.4;
    }
`
);

const SubMenuWrapper = styled(Box)(
  ({ theme }) => `
    .MuiList-root {

      .MuiListItem-root {
        padding: 1px 0;

        .MuiBadge-root {
          position: absolute;
          right: ${theme.spacing(3.2)};

          .MuiBadge-standard {
            background: ${theme.colors.primary.main};
            font-size: ${theme.typography.pxToRem(10)};
            font-weight: bold;
            text-transform: uppercase;
            color: ${theme.palette.primary.contrastText};
          }
        }
    
        .MuiButton-root {
          display: flex;
          color: ${theme.colors.alpha.trueWhite[70]};
          background-color: transparent;
          width: 100%;
          justify-content: flex-start;
          padding: ${theme.spacing(1.2, 3)};

          .MuiButton-startIcon,
          .MuiButton-endIcon {
            transition: ${theme.transitions.create(['color'])};

            .MuiSvgIcon-root {
              font-size: inherit;
              transition: none;
            }
          }

          .MuiButton-startIcon {
            color: ${theme.colors.alpha.trueWhite[30]};
            font-size: ${theme.typography.pxToRem(20)};
            margin-right: ${theme.spacing(1)};
          }
          
          .MuiButton-endIcon {
            color: ${theme.colors.alpha.trueWhite[50]};
            margin-left: auto;
            opacity: .8;
            font-size: ${theme.typography.pxToRem(20)};
          }

          &.active,
          &:hover {
            background-color: ${alpha(theme.colors.alpha.trueWhite[100], 0.06)};
            color: ${theme.colors.alpha.trueWhite[100]};

            .MuiButton-startIcon,
            .MuiButton-endIcon {
              color: ${theme.colors.alpha.trueWhite[100]};
            }
          }
        }

        &.Mui-children {
          flex-direction: column;

          .MuiBadge-root {
            position: absolute;
            right: ${theme.spacing(7)};
          }
        }

        .MuiCollapse-root {
          width: 100%;

          .MuiList-root {
            padding: ${theme.spacing(1, 0)};
          }

          .MuiListItem-root {
            padding: 1px 0;

            .MuiButton-root {
              padding: ${theme.spacing(0.8, 3)};

              .MuiBadge-root {
                right: ${theme.spacing(3.2)};
              }

              &:before {
                content: ' ';
                background: ${theme.colors.alpha.trueWhite[100]};
                opacity: 0;
                transition: ${theme.transitions.create([
                  'transform',
                  'opacity'
                ])};
                width: 6px;
                height: 6px;
                transform: scale(0);
                transform-origin: center;
                border-radius: 20px;
                margin-right: ${theme.spacing(1.8)};
              }

              &.active,
              &:hover {

                &:before {
                  transform: scale(1);
                  opacity: 1;
                }
              }
            }
          }
        }
      }
    }
`
);

const ListItemText = styled(MuiListItemText)(
  ({theme}) => ({
  })
    
)

function SidebarMenu() {
  const [menu, setOpen] = useState(menuItems);
  const { sidebarOpen } = useContext(SidebarContext);
  const theme = useTheme();

  const handleClick = (s:string,e:any) => {
    setOpen((m) => { 
      let idx = m.findIndex( i => i.id === s)
      if (idx) m[idx].open = !m[idx].open
      return [...m];
    });
  };

  const buildMenu = ( items: any[], depth: number = 0) => 
    items.map( item => (
      item.items ? 
        <Fragment key={item.name}>
          <ListItemButton
            key={item.name}
            onClick={(event) => handleClick(item.id,event)}
          >
            <ListItemIcon>
              <Icon>{item.icon}</Icon>
            </ListItemIcon>
            <ListItemText primary={item.name} />
            {item.open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={item.open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              { buildMenu(item.items, depth + 2) }
            </List>
          </Collapse>
        </Fragment>
      : 
        <ListItemButton
          key={item.name}
          component={Link}
          to={item.url}
          sx={{ pl: 2 + depth }}
        >
          <ListItemIcon>
            <Icon>{item.icon}</Icon>
          </ListItemIcon>
          <ListItemText primary={item.name} />
        </ListItemButton>
    ))

  return (
    <List
      sx={{ width: sidebarOpen ? '100%' : '72px'}}
      component="nav"
      aria-labelledby="menu options"
    >
      { buildMenu(menuItems) }
    </List>
  );
}
/*
function SidebarMenu1() {
  const { closeMobileSidebar } = useContext(SidebarContext);
  const theme = useTheme();
  return (
    <MenuWrapper 
    >
      <List component="div">
        <SubMenuWrapper>
          <List component="div">
            <ListItem component="div">
              <Button
                disableRipple
                component={RouterLink}
                onClick={closeMobileSidebar}
                to="/overview"
                startIcon={<DesignServicesTwoToneIcon />}
              >
                Overview
              </Button>
            </ListItem>
          </List>
        </SubMenuWrapper>
      </List>
      <List
        component="div"
        subheader={
          <ListSubheader component="div" disableSticky>
            Dashboards
          </ListSubheader>
        }
      >
        <SubMenuWrapper>
          <List component="div">
            <ListItem component="div">
              <Button
                disableRipple
                component={RouterLink}
                onClick={closeMobileSidebar}
                to="/dashboards/tasks"
                startIcon={<BrightnessLowTwoToneIcon />}
              >
                Manage Tasks
              </Button>
            </ListItem>
            <ListItem component="div">
              <Button
                disableRipple
                component={RouterLink}
                onClick={closeMobileSidebar}
                to="/dashboards/messenger"
                startIcon={<MmsTwoToneIcon />}
              >
                Messenger
              </Button>
            </ListItem>
          </List>
        </SubMenuWrapper>
      </List>
      <List
        component="div"
        subheader={
          <ListSubheader component="div" disableSticky>
            Management
          </ListSubheader>
        }
      >
        <SubMenuWrapper>
          <List component="div">
            <ListItem component="div">
              <Button
                disableRipple
                component={RouterLink}
                onClick={closeMobileSidebar}
                to="/management/transactions"
                startIcon={<TableChartTwoToneIcon />}
              >
                Transactions List
              </Button>
            </ListItem>
          </List>
        </SubMenuWrapper>
      </List>
      <List
        component="div"
        subheader={
          <ListSubheader component="div" disableSticky>
            Accounts
          </ListSubheader>
        }
      >
        <SubMenuWrapper>
          <List component="div">
            <ListItem component="div">
              <Button
                disableRipple
                component={RouterLink}
                onClick={closeMobileSidebar}
                to="/management/profile/details"
                startIcon={<AccountCircleTwoToneIcon />}
              >
                User Profile
              </Button>
            </ListItem>
            <ListItem component="div">
              <Button
                disableRipple
                component={RouterLink}
                onClick={closeMobileSidebar}
                to="/management/profile/settings"
                startIcon={<DisplaySettingsTwoToneIcon />}
              >
                Account Settings
              </Button>
            </ListItem>
          </List>
        </SubMenuWrapper>
      </List>
      <List
        component="div"
        subheader={
          <ListSubheader component="div" disableSticky>
            Components
          </ListSubheader>
        }
      >
        <SubMenuWrapper>
          <List component="div">
            <ListItem component="div">
              <Button
                disableRipple
                component={RouterLink}
                onClick={closeMobileSidebar}
                to="/components/buttons"
                startIcon={<BallotTwoToneIcon />}
              >
                Buttons
              </Button>
            </ListItem>
            <ListItem component="div">
              <Button
                disableRipple
                component={RouterLink}
                onClick={closeMobileSidebar}
                to="/components/modals"
                startIcon={<BeachAccessTwoToneIcon />}
              >
                Modals
              </Button>
            </ListItem>
            <ListItem component="div">
              <Button
                disableRipple
                component={RouterLink}
                onClick={closeMobileSidebar}
                to="/components/accordions"
                startIcon={<EmojiEventsTwoToneIcon />}
              >
                Accordions
              </Button>
            </ListItem>
            <ListItem component="div">
              <Button
                disableRipple
                component={RouterLink}
                onClick={closeMobileSidebar}
                to="/components/tabs"
                startIcon={<FilterVintageTwoToneIcon />}
              >
                Tabs
              </Button>
            </ListItem>
            <ListItem component="div">
              <Button
                disableRipple
                component={RouterLink}
                onClick={closeMobileSidebar}
                to="/components/badges"
                startIcon={<HowToVoteTwoToneIcon />}
              >
                Badges
              </Button>
            </ListItem>
            <ListItem component="div">
              <Button
                disableRipple
                component={RouterLink}
                onClick={closeMobileSidebar}
                to="/components/tooltips"
                startIcon={<LocalPharmacyTwoToneIcon />}
              >
                Tooltips
              </Button>
            </ListItem>
            <ListItem component="div">
              <Button
                disableRipple
                component={RouterLink}
                onClick={closeMobileSidebar}
                to="/components/avatars"
                startIcon={<RedeemTwoToneIcon />}
              >
                Avatars
              </Button>
            </ListItem>
            <ListItem component="div">
              <Button
                disableRipple
                component={RouterLink}
                onClick={closeMobileSidebar}
                to="/components/cards"
                startIcon={<SettingsTwoToneIcon />}
              >
                Cards
              </Button>
            </ListItem>
            <ListItem component="div">
              <Button
                disableRipple
                component={RouterLink}
                onClick={closeMobileSidebar}
                to="/components/forms"
                startIcon={<TrafficTwoToneIcon />}
              >
                Forms
              </Button>
            </ListItem>
          </List>
        </SubMenuWrapper>
      </List>
      <List
        component="div"
        subheader={
          <ListSubheader component="div" disableSticky>
            Extra Pages
          </ListSubheader>
        }
      >
        <SubMenuWrapper>
          <List component="div">
            <ListItem component="div">
              <Button
                disableRipple
                component={RouterLink}
                onClick={closeMobileSidebar}
                to="/status/404"
                startIcon={<CheckBoxTwoToneIcon />}
              >
                Error 404
              </Button>
            </ListItem>
            <ListItem component="div">
              <Button
                disableRipple
                component={RouterLink}
                onClick={closeMobileSidebar}
                to="/status/500"
                startIcon={<CameraFrontTwoToneIcon />}
              >
                Error 500
              </Button>
            </ListItem>
            <ListItem component="div">
              <Button
                disableRipple
                component={RouterLink}
                onClick={closeMobileSidebar}
                to="/status/coming-soon"
                startIcon={<ChromeReaderModeTwoToneIcon />}
              >
                Coming Soon
              </Button>
            </ListItem>
            <ListItem component="div">
              <Button
                disableRipple
                component={RouterLink}
                onClick={closeMobileSidebar}
                to="/status/maintenance"
                startIcon={<WorkspacePremiumTwoToneIcon />}
              >
                Maintenance
              </Button>
            </ListItem>
          </List>
        </SubMenuWrapper>
      </List>
    </MenuWrapper>
  );
}
*/
export default SidebarMenu;
