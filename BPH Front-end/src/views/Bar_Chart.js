import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
      name: 'BPHs',
      HongNgu: 4000,
      ThapMuoi: 2400,
      TamNong: 2400,
    },
    {
      name: 'Eggs',
      HongNgu: 3000,
      ThapMuoi: 1398,
      TamNong: 2210,
    },
    {
      name: 'LW',
      HongNgu: 2000,
      ThapMuoi: 9800,
      TamNong: 2290,
    },
    {
      name: 'SW',
      HongNgu: 2780,
      ThapMuoi: 3908,
      TamNong: 2000,
    },
  ];

  export default class barC extends PureComponent {
  
    render() {
      return (
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="HongNgu" fill="#8884d8" />
            <Bar dataKey="ThapMuoi" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      );
    }
  }