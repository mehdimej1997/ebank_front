'use client';

import { ColumnDef } from '@tanstack/react-table';
import { formatDate } from 'date-fns';

import { types } from '@/components/shared/data-table/data';
import { AccountOperationDto } from '@/dtos/operation';
import { DataTableColumnHeader } from '@/components/shared';

export const columns: ColumnDef<AccountOperationDto>[] = [
  {
    accessorKey: 'id',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="id" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue('id')}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'type',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Type" />
    ),
    cell: ({ row }) => {
      const type = types.find((type) => type.value === row.getValue('type'));

      if (!type) {
        return null;
      }

      return (
        <div className="flex items-center">
          {type.icon && (
            <type.icon className="mr-2 h-4 w-4 text-muted-foreground" />
          )}
          <span>{type.label}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: 'operationDate',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Date d'opération" />
    ),
    cell: ({ row }) => (
      <div className="w-[150px]">
        {formatDate(row.getValue('operationDate'), 'dd-MM-yyyy')}
      </div>
    ),
  },
  {
    accessorKey: 'amount',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Montant" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue('amount')}</div>,
  },
  {
    accessorKey: 'description',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Description" />
    ),
    cell: ({ row }) => (
      <div className="w-[180px]">{row.getValue('description')}</div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
];
