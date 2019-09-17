import React from 'react';
import IconButtonDrawerToggler from "../containers/IconButtonDrawerToggler";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';

const Header = () => {

    return (
        <AppBar position="static">
            <Toolbar>

                <IconButtonDrawerToggler edge="start" color="inherit" aria-label="menu">
                    <MenuIcon/>
                </IconButtonDrawerToggler>
                <Typography variant="h6">
                    Analytics on www.chazelle.pro
                </Typography>
            </Toolbar>
        </AppBar>
    )

};

export default Header;