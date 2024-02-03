'use client'
import React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';


type PieData = {
  id: number;
  value: number;
  label?: string;
}[]

export default function Pie({data}: {data: PieData}) {
  return (
    <PieChart
      series={[
        {
          data,
          highlightScope: { faded: 'global', highlighted: 'item' },
          faded: { innerRadius: 10, additionalRadius: -10, color: 'gray' },
        },
      ]}
      width={400}
      height={200}
      slotProps={{ legend: { hidden: true } }}
    >
    </PieChart>
  );
}
