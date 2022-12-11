export const MuiButton = {
  defaultProps: {
    disableElevation: true,
    disableRipple: true,
  },
  styleOverrides: {
    root: (prop: any) => {
      const containedStyles = {
        backgroundColor: "white",
        color: prop.theme.palette.primary.main,
        "&:hover": {
          backgroundColor: "white",
          color: prop.theme.palette.primary.main,
        },
      };

      return prop.ownerState.variant == "contained" ? containedStyles : {};
    },
  },
};
