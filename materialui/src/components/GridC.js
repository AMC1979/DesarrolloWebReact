import "../App.css";
import React, { Fragment } from "react";
//import { makeStyles } from "@material-ui/core/styles";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

//ejemplo make styles
/* const useStyles = makeStyles((theme) => ({
  //nuestras propiedades dentreo de nuestro usestyles  representan nuestros selectores
  //como si fuese un css
  root: {
    width: "50%",
  },
})); */

function GridComp() {
  /* const classes = useStyles(); */

  return (
    <Fragment> {/* frag  principal */}
      <Container className="container"> {/* contenedor principal */}
        <Grid container spacing={3} > {/* Grid principal */}
          <Grid className="gridItem" item lg={3} md={4} sm={6} xs={12}>
            Grid 1
          </Grid>

          <Grid className="gridItem" item lg={3} md={4} sm={6} xs={12}>
            Grid 2
          </Grid>
          <Grid className="gridItem" item lg={3} md={4} sm={6} xs={12}>
            Grid 13
          </Grid>

          <Grid className="gridItem" item lg={3} md={4} sm={6} xs={12}>
            Grid 4
          </Grid>

          {/* Grid con sub grid */}
          <Grid className="gridItem" item lg={3} md={4} sm={6} xs={12}>
            Grid container
            <Grid container >
              <Grid className="gridItem" item xs={12} sm={12}>
                <div className="anidado">Sub Grid 1</div>
              </Grid>
            </Grid>
          </Grid>

        </Grid>{/* Fin grid principal */}
      </Container> {/* Fin contenedor principal */}
    </Fragment> /* Fin frag  principal  */
  );
};

export default GridComp;
