import React from 'react';
import { Typography } from '@material-ui/core';
import {
  Timeline,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
} from '@material-ui/lab';

import { formatTime, loadData } from '../../common';

const statusKeys = ['Reading', 'Thinking', 'Coding', 'Debugging'];

export function Summary({ link }: any) {
  const { timers } = loadData(link);
  const sum = statusKeys.reduce(
    (sum, status) => sum + timers[status.toLowerCase()],
    0,
  );
  timers['total'] = sum;
  return (
    <Timeline align="alternate">
      {statusKeys.concat('Total').map((status) => (
        <TimelineItem key={status}>
          <TimelineOppositeContent>
            <Typography
              color="textSecondary"
              style={{
                fontFamily: 'Reenie Beanie',
                fontStyle: 'normal',
                fontWeight: 500,
                fontSize: 30.65,
                textTransform: 'uppercase',
                marginTop: -12,
              }}
            >
              {formatTime(Math.round(timers[status.toLowerCase()] / 1000))}
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            {status !== 'Total' ? <TimelineConnector /> : <></>}
          </TimelineSeparator>
          <TimelineContent>
            <Typography>{status}</Typography>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
