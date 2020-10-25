import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { Link } from '@material-ui/core';
import { IconContext } from 'react-icons';
import { WiDaySunny } from 'react-icons/wi';
import { Link as LinkRouter } from 'react-router-dom';
import Typograpphy from '@material-ui/core/Typography';

const AppFrame = ({ children }) => {
  return (
    <Grid container justify="center">
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton color="inherit" aria-label="menu">
            <Link
              component={LinkRouter}
              to="/main"
              color="inherit"
              aria-label="menu"
            >
              <IconContext.Provider value={{ size: '2em' }}>
                <WiDaySunny />
              </IconContext.Provider>
            </Link>
          </IconButton>
          <Typograpphy variant="h6" color="inherit">
            Weather App
          </Typograpphy>
        </Toolbar>
      </AppBar>
      <Grid item xs={12} sm={11} md={10} lg={8}>
        {children}
      </Grid>
    </Grid>
  );
};

AppFrame.propTypes = {
  children: PropTypes.node, // "node": Cualquier tipo de componente react valido
};

export default AppFrame;
