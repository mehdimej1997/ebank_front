// 'use client';

// import { ColumnDef, Row, Table } from '@tanstack/react-table';
// import { MouseEventHandler } from 'react';

// import { Checkbox } from '@/components/ui';

// import { priorities, types } from './data';
// import { DataTableColumnHeader } from './data-table-column-header';
// import { DataTableRowActions } from './data-table-row-action';

// type Columns<T> = {
//   data: T[];
//   checkbox?: boolean;
//   actions?: [{ label: string; action: MouseEventHandler<HTMLDivElement> }];
// };

// export const columns = <T,>({
//   data,
//   checkbox,
//   actions,
// }: Columns<T>): ColumnDef<T>[] => {
//   // const columnsHeader = Object.keys(data.at(0) as object).map((key) => ({
//   //   accessorKey: 'status',
//   //   header: ({ column }) => (
//   //     <DataTableColumnHeader column={column} title="Status" />
//   //   ),
//   //   cell: ({ row }) => {
//   //     const status = types.find(
//   //       (status) => status.value === row.getValue('status')
//   //     );

//   //     if (!status) {
//   //       return null;
//   //     }

//   //     return (
//   //       <div className="flex w-[100px] items-center">
//   //         {status.icon && (
//   //           <status.icon className="mr-2 h-4 w-4 text-muted-foreground" />
//   //         )}
//   //         <span>{status.label}</span>
//   //       </div>
//   //     );
//   //   },
//   //   filterFn: (row, id, value) => {
//   //     return value.includes(row.getValue(id));
//   //   },
//   // }));

//   return [
//     ...(checkbox
//       ? [
//           {
//             id: 'select',
//             header: ({ table }: { table: Table<T> }) => (
//               <Checkbox
//                 checked={
//                   table.getIsAllPageRowsSelected() ||
//                   (table.getIsSomePageRowsSelected() && 'indeterminate')
//                 }
//                 onCheckedChange={(value) =>
//                   table.toggleAllPageRowsSelected(!!value)
//                 }
//                 aria-label="Select all"
//                 className="translate-y-[2px]"
//               />
//             ),
//             cell: ({ row }: { row: Row<T> }) => (
//               <Checkbox
//                 checked={row.getIsSelected()}
//                 onCheckedChange={(value) => row.toggleSelected(!!value)}
//                 aria-label="Select row"
//                 className="translate-y-[2px]"
//               />
//             ),
//             enableSorting: false,
//             enableHiding: false,
//           },
//         ]
//       : []),
//     {
//       accessorKey: 'id',
//       header: ({ column }) => (
//         <DataTableColumnHeader column={column} title="Task" />
//       ),
//       cell: ({ row }) => <div className="w-[80px]">{row.getValue('id')}</div>,
//       enableSorting: false,
//       enableHiding: false,
//     },
//     {
//       accessorKey: 'status',
//       header: ({ column }) => (
//         <DataTableColumnHeader column={column} title="Status" />
//       ),
//       cell: ({ row }) => {
//         const status = types.find(
//           (status) => status.value === row.getValue('status')
//         );

//         if (!status) {
//           return null;
//         }

//         return (
//           <div className="flex w-[100px] items-center">
//             {status.icon && (
//               <status.icon className="mr-2 h-4 w-4 text-muted-foreground" />
//             )}
//             <span>{status.label}</span>
//           </div>
//         );
//       },
//       filterFn: (row, id, value) => {
//         return value.includes(row.getValue(id));
//       },
//     },
//     {
//       accessorKey: 'priority',
//       header: ({ column }) => (
//         <DataTableColumnHeader column={column} title="Priority" />
//       ),
//       cell: ({ row }) => {
//         const priority = priorities.find(
//           (priority) => priority.value === row.getValue('priority')
//         );

//         if (!priority) {
//           return null;
//         }

//         return (
//           <div className="flex items-center">
//             {priority.icon && (
//               <priority.icon className="mr-2 h-4 w-4 text-muted-foreground" />
//             )}
//             <span>{priority.label}</span>
//           </div>
//         );
//       },
//       filterFn: (row, id, value) => {
//         return value.includes(row.getValue(id));
//       },
//     },
//     {
//       id: 'actions',
//       header: ({ column }) => (
//         <DataTableColumnHeader column={column} title="Action" />
//       ),
//       cell: () => <DataTableRowActions actions={actions} />,
//     },
//   ];
// };
