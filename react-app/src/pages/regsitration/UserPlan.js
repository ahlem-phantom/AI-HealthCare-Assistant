/* eslint-disable import/no-anonymous-default-export */
import React, { useContext } from "react";
//GENERAL
import { Grid } from "@material-ui/core";
//CONTEXT
import { UserContext } from "./UserContext";
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import StarIcon from '@material-ui/icons/StarBorder';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
  
  cardHeader: {
    backgroundColor:
      '#009efb',
      color: 'white',
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
    width: '200px',
  },

}));

const onChangeValue = (e) => {
  const status = e.target.value;
};

const tiers = [
  {
    title: 'Basic Plan',
    price: '30',
    mon: 'month',

    description: [
      'All features included',
      'Available for one month',
      'Help center access',
      'Phone & email support',
    ],
    buttonText: <div onChange={onChangeValue}><input type="radio" value="30" name="plan" /></div> ,
    buttonVariant: 'outlined',
  },
  {
    title: 'Pro Plan',
    price: '60',
    mon: 'month',
    description: [
      'All features included',
      'Available for 6 months',
      'Help center access',
      'Phone & email support',
    ],
    buttonText:  <div onChange={onChangeValue}><input type="radio" value="60" name="plan" /></div>,
    buttonVariant: 'outlined',
  },
  {
    title: 'Premium Plan',
    price: '90',
    mon: 'year',
    description: [
      'All features included',
      'Available for one year',
      'Help center access',
      'Phone & email support',
    ],
    buttonText:  <div onChange={onChangeValue}><input type="radio" value="120" name="plan" /></div>,
    buttonVariant: 'outlined',
  },
];



export default (props) => {
  const [state] = useContext(UserContext);
  const { user } = state;
  const classes = useStyles();

  console.log('plan' + user.plan);

  return (
    <div>
     
      {/* Hero unit */}
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography component="h1" variant="h4" align="center" color="textPrimary" gutterBottom>
          Choose Your Payment Plan
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container>
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Pro' ? <StarIcon /> : null}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div className={classes.cardPricing}>
                    <Typography component="h2" variant="h3" color="textPrimary">
                      ${tier.price}
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                      / {tier.mon}
                    </Typography>
                  </div>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography component="li" variant="subtitle1" align="center" key={line}>
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant} color="primary">
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* Footer */}

    </div>
  );
};
