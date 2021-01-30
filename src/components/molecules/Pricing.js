import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import InfoCard from "components/atoms/InfoCard";
import CardBody from "components/atoms/CardBody";
import ActionButton from "components/atoms/ActionButton";

import { priceGroups } from "assets/data/priceGroups";

const useStyle = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  root: {
    padding: 24,
  },
}));

const Pricing = () => {
  const classes = useStyle();

  return (
    <div className={classes.root} id="pricing">
      <Typography
        component="h2"
        variant="h3"
        color="textPrimary"
        align="center"
        gutterBottom
      >
        Pricing
      </Typography>
      <Typography
        variant="h6"
        align="center"
        color="textSecondary"
        component="p"
        gutterBottom
        paragraph
      >
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur.
      </Typography>
      <Grid container spacing={5} alignItems="flex-end">
        {priceGroups.map((group) => (
          <Grid
            item
            key={group.title}
            xs={12}
            sm={group.title === "Enterprise" ? 12 : 6}
            md={4}
          >
            <InfoCard
              header={group.title}
              subheader={group.subheader}
              buttonVariant={group.buttonVariant}
              link={group.link}
            >
              <CardBody title={group.price} subtitle="/mo">
                {group.description.map((line) => (
                  <Typography
                    component="li"
                    variant="subtitle1"
                    align="center"
                    key={line}
                  >
                    {line}
                  </Typography>
                ))}{" "}
              </CardBody>
            </InfoCard>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Pricing;
