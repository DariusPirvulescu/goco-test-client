import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({
  center: {
    margin: 'auto'
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  medium: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
}))

const UserAvatar = ({ children, imgSrc, variant, size }) => {
  const classes = useStyles();

  return (
    
       <Avatar alt="user's avatar" src={imgSrc} variant={variant} className={`${classes[size]} ${classes.center}`}>
         { children }
       </Avatar>
    
  );
}

export default UserAvatar ;


// "/static/images/avatar/1.jpg"
