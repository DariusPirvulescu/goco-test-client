import React from "react";

import { makeStyles } from "@material-ui/core/styles"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"

const useStyle = makeStyles(theme => ({
  cardBody: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
}))

const CardBody = ({ title, subtitle, children }) => {
  const classes = useStyle()

  return (
    <CardContent>
        <div className={classes.cardBody}>
          <Typography component="h2" variant="h3" color="textPrimary">
            {title}
          </Typography>
          <Typography variant="h6" color="textSecondary">
            {subtitle}
          </Typography>
        </div>
        <ul>
          { children }
        </ul>
      </CardContent>
  )
  
}

export default CardBody;