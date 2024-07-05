'use client';

import { Cross2Icon } from '@radix-ui/react-icons';
import { Table } from '@tanstack/react-table';
import { ReactNode } from 'react';

import {
  Button,
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Input,
  InputProps,
} from '@/components/ui';

import { priorities, types } from './data';
import { DataTableFacetedFilter } from './data-table-faceted-filter';
import { DataTableViewOptions } from './data-table-view-options';

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  filterProps?: InputProps;
  actions?: {
    label: string;
    dialogActions: ReactNode;
    form: ReactNode;
    open?: boolean;
  }[];
}

export const DataTableToolbar = <TData,>({
  table,
  filterProps,
  actions,
}: DataTableToolbarProps<TData>) => {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input className="h-8 w-[150px] lg:w-[250px]" {...filterProps} />
        {table.getColumn('type') && (
          <DataTableFacetedFilter
            column={table.getColumn('type')}
            title="Type"
            options={types}
          />
        )}
        {table.getColumn('priority') && (
          <DataTableFacetedFilter
            column={table.getColumn('priority')}
            title="Priority"
            options={priorities}
          />
        )}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      <div className="flex gap-2">
        {actions?.map(({ label, dialogActions, form, open }) => (
          <Dialog key={label} open={open}>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="ml-auto hidden h-8 lg:flex"
              >
                {label}
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{label}</DialogTitle>
              </DialogHeader>
              {form}
              <DialogFooter>{dialogActions}</DialogFooter>
            </DialogContent>
          </Dialog>
        ))}

        <DataTableViewOptions table={table} />
      </div>
    </div>
  );
};
