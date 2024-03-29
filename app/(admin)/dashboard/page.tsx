"use client";
import DataTable from 'react-data-table-component';

export default function Dashboard() {  
  const columns = [
    {
      name: 'Title',
      selector: row => row.title,
    },
    {
      name: 'Year',
      selector: row => row.year,
    },
  ];
  
  const data = [
      {
      id: 1,
      title: 'Beetlejuice',
      year: '1988',
    },
    {
      id: 2,
      title: 'Ghostbusters',
      year: '1984',
    },
  ]
  return (
    <main className="h-screen">
      <DataTable columns={columns} data={data} />
    </main>
  );
}
