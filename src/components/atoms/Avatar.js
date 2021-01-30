import React, { useContext } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

import { UserContext } from 'contexts/userContext';

const useStyles = makeStyles((theme) => ({
  avatar: {
    margin: 'auto',
    backgroundColor: '#e86166',
    fontSize: '2em'
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
}));

const UserAvatar = ({ imgSrc, variant, size, children }) => {
  const classes = useStyles();
  const { providedUser } = useContext(UserContext);

  const renderContent = () => {
    if (providedUser.user.name) {
      const userName = providedUser.user.name;
      return userName[0].toUpperCase();
    }
    return '';
  };

  return (
    <Avatar
      alt="user's avatar"
      src={imgSrc}
      variant={variant}
      className={`${classes[size]} ${classes.avatar}`}
    >
      {renderContent()}
    </Avatar>
  );
};

export default UserAvatar;
