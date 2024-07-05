'use client';

import { DotsHorizontalIcon } from '@radix-ui/react-icons';
import { MouseEventHandler } from 'react';

import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui';

interface DataTableRowActionsProps {
  actions?: {
    label: string;
    action: MouseEventHandler<HTMLDivElement>;
  }[];
}

export const DataTableRowActions = ({ actions }: DataTableRowActionsProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
        >
          <DotsHorizontalIcon className="h-4 w-4" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[160px]">
        {actions?.map(({ label, action }) => (
          <DropdownMenuItem key={label} onClick={action}>
            {label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
