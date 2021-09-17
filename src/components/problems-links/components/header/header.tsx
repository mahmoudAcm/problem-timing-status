import React, { useContext } from 'react';
import { Box, Button, Typography } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import { useStyles } from './styles';
import { Context } from '../../../../context';
import FadeMenu from './fadeMenu';

export const HeaderTitle = () => {
  const {
    state: {
      SelectCodeReducer: { code },
    },
  } = useContext(Context);

  return (
    <>
      <Typography
        align="center"
        style={{ fontFamily: 'Varela Round', fontWeight: 300, fontSize: 16 }}
      >
        WORKING ON
      </Typography>
      <Typography
        align="center"
        style={{ fontFamily: 'Varela Round', fontWeight: 100, fontSize: 18 }}
      >
        {code}
      </Typography>
    </>
  );
};

export const Header = () => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <Box className={classes.playgroundHeader}>
        <Typography className="title">Problems</Typography>
        <Button
          className="menu"
          variant="outlined"
          size="small"
          onClick={handleClick}
        >
          <MoreVertIcon />
        </Button>
      </Box>
      <FadeMenu anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
    </>
  );
};
