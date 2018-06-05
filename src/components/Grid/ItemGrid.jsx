import React from "react";

// material-ui components
import withStyles from "material-ui/styles/withStyles";
import Grid from "material-ui/Grid";
import PropTypes from "prop-types";

const style = {
  grid: {
    padding: "0 15px !important"
  }
};

function ItemGrid({ ...props }) {
  const { classes, children, className, ...rest } = props;
  return (
    <Grid item {...rest} className={classes.grid + " " + className}>
      {children}
    </Grid>
  );
}

ItemGrid.propTypes = {
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
    component: PropTypes.node,
    container: PropTypes.bool,
    item: PropTypes.bool,
    alignItems: PropTypes.string,
    alignContent: PropTypes.string,
    direction: PropTypes.string,
    spacing: PropTypes.number,
    lg:PropTypes.number,
    md:PropTypes.number,
    sm:PropTypes.number,
    xl:PropTypes.number,
    xs:PropTypes.number,
    zeroMinWidth:PropTypes.bool
}

export default withStyles(style)(ItemGrid);
