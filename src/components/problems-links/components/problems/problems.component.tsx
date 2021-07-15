import React from 'react';
import { Card, CardContent } from '@material-ui/core';

import { ListOfProblems } from './list-of-problems.component';

export function Problems() {
  return (
    <Card>
      <CardContent>
        <ListOfProblems />
      </CardContent>
    </Card>
  );
}
