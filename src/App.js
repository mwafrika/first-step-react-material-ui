import React from "react";
import {
  AppBar,
  Typography,
  CssBaseline,
  Toolbar,
  Container,
  Button,
  ButtonGroup,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons";
import useStyles from "./styles";

const App = () => {
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera className={classes.icon} />
          <Typography variant="h6" color="inherit">
            Photo album
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxwidth="sm">
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Photo Galery
            </Typography>
            <Typography
              align="center"
              variant="h5"
              color="textSecondary"
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              atque nihil possimus sint, quaerat ex? Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Fugit, molestias pariatur! Maxime
            </Typography>
            <div className={classes.button}>
              <Grid container justifyContent="center" spacing={3}>
                <Grid item>
                  <Button variant="contained" color="primary">
                    My Photos
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Second photo
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxwidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image Title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5">
                      Heading
                    </Typography>
                    <Typography gutterBottom variant="h5">
                      Lorem ipsum dolor sit amet.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary">
          Footer this is the awasome footer guys
        </Typography>
      </footer>
    </>
  );
};

export default App;
