import { Collapse, List, ListItemButton, ListItemIcon, ListItemText, Tooltip, useTheme } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useState, useContext } from "react";
import { SidebarContext } from "../../../../services/SidebarContext";
import { MenuItem } from "../../../../interfaces/interfaces";

type SubMenuItemProps = {
    item: MenuItem;
    depth: number;
    subMenu: (items:MenuItem[], depth:number) => JSX.Element[]
}

const ListSubMenuItem = ({item, depth, subMenu}:SubMenuItemProps) => {
    const [toggle, setToggle] = useState<boolean>(false);
    const { sidebarOpen, sidebarMobileOpen } = useContext(SidebarContext);

    const open = sidebarMobileOpen || sidebarOpen;

    const handleToggle = () => {
        setToggle(!toggle)
    };

    return (
        <>
            <Tooltip arrow title={item.name} placement="right" enterDelay={1500}>
                <ListItemButton
                    onClick={handleToggle}
                    sx={{ pl: 2 + depth }}
                >
                    <ListItemIcon>
                        {toggle ? <ExpandLess /> : <ExpandMore />}
                    </ListItemIcon>
                    {open && <ListItemText primary={item.name} />}
                </ListItemButton>
            </Tooltip>
            <Collapse in={toggle} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
                { subMenu(item.items || [], depth + 2) }
            </List>
            </Collapse>
        </>
    );
};

export default ListSubMenuItem;
