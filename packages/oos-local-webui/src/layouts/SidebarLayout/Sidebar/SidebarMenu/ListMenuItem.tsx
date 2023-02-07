import { Avatar, Icon, ListItemButton, ListItemIcon, ListItemText, Tooltip, useTheme } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { MenuItem } from "../../../../interfaces/interfaces";
import { SidebarContext } from "../../../../services/SidebarContext";

type MenuItemProps = {
    item: MenuItem;
    depth: number;
    selected: string;
    handler: (name:string) => void;
}

const ListMenuItem = ({item, depth, selected, handler}:MenuItemProps) => {
    const { sidebarOpen, sidebarMobileOpen } = useContext(SidebarContext);
    const theme = useTheme();

    const open = sidebarMobileOpen || sidebarOpen;

    return (
        <Tooltip
            arrow
            title={item.name}
            placement="right"
            enterDelay={1500}
        >
            <ListItemButton
                component={Link}
                to={item.url || ''}
                onClick={(event:any) => handler(item.name) }
                sx={{ pl: open ? 2 + depth : 2 }}
            >
                <ListItemIcon
                    sx={{ color: selected === item.name ? theme.palette.secondary.main : theme.palette.common.white }}
                >
                    {item.icon && (
                        <Icon>{item.icon}</Icon>
                    )}
                    {item.avatar && (
                        <Avatar src={item.avatar} sx={{ width: 24, height: 24 }} />
                    )}
                </ListItemIcon>
                {open && <ListItemText primary={item.name} />}
            </ListItemButton>
        </Tooltip>
    );
};

export default ListMenuItem;