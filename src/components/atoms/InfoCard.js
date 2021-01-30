import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

const useStyle = makeStyles((theme) => ({
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[200]
        : theme.palette.grey[700],
  },
}));

const InfoCard = ({ children, header, subheader, buttonVariant, link }) => {
  const classes = useStyle();

  const openInNewTab = (link) => {
    const newWindow = window.open(link, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  return (
    <Card>
      <CardHeader
        title={header}
        subheader={subheader}
        titleTypographyProps={{ align: 'center' }}
        subheaderTypographyProps={{ align: 'center' }}
        className={classes.cardHeader}
      />
      {children}
      <CardActions>
          
        <Button fullWidth variant={buttonVariant} color="primary" onClick={() => openInNewTab(link)}>
            Get Started
        </Button>
      </CardActions>
    </Card>
  );
};

export default InfoCard;
