import React from 'react';

import { useStyles } from './code.module';
import { CreateAndDeleteCode } from './create-and-delete-code.component';
import { SelectCode } from './select-code.component';

export function Code() {
  const classes = useStyles();

  return (
    <div className={classes.center}>
      <CreateAndDeleteCode />
      <SelectCode />
    </div>
  );
}
