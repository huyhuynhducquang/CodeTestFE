import { Divider, ListSubheader, Typography } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';

import './Sidebar.scss';

function Sidebar() {
    return (
        <div>
            <div className="sidebar-logo">
                <h1>LOGO HERE</h1>
            </div>
            <MenuList>
                <ListSubheader>Personal</ListSubheader>
                <MenuItem>Dashboard</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Uploads</MenuItem>
                <Divider />
                <ListSubheader>Apps</ListSubheader>
                <MenuItem>Users</MenuItem>
                <MenuItem>Tests</MenuItem>
                <MenuItem>Questions</MenuItem>
                <Divider />
                <ListSubheader>Inbox</ListSubheader>
                <MenuItem>Contact</MenuItem>
            </MenuList>
        </div>
    );
}

export default Sidebar;
