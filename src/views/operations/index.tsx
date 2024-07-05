'use client';

import { DataTable } from '@/components/shared';
import { Button, DialogClose, DialogTrigger } from '@/components/ui';

import { columns } from './columns';
import { OperationForm } from './operation-form';

const OPERATIONS = {
  accountId: 'string',
  balance: 0,
  currentPage: 0,
  totalPages: 0,
  pageSize: 0,
  accountOperationDTOS: [
    {
      id: 0,
      amount: 0,
      operationDate: '2024-07-05T19:52:40.580Z',
      type: 'DEBIT',
      description: 'string',
    },
    {
      id: 1,
      amount: 0,
      operationDate: '2024-07-05T19:52:40.580Z',
      type: 'DEBIT',
      description: 'string',
    },
  ],
};

export const OperationsTable = () => {
  return (
    <div className="container hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Operations!</h2>
          <p className="text-muted-foreground">
            Voici la list de vos opérations!
          </p>
        </div>
        <div className="flex items-center space-x-2">{/* <UserNav /> */}</div>
      </div>
      <DataTable
        data={OPERATIONS.accountOperationDTOS as []}
        columns={columns}
        filterProps={{
          placeholder: 'Filter Opération...',
          onChange: console.log,
        }}
        actions={[
          {
            label: 'Nouvelle Operation',
            dialogActions: (
              <>
                <DialogClose>
                  <Button
                    variant="outline"
                    size="sm"
                    className="ml-auto hidden h-8 lg:flex"
                  >
                    {/* <MixerHorizontalIcon className="mr-2 h-4 w-4" /> */}
                    Annuler
                  </Button>
                </DialogClose>

                <DialogTrigger>
                  <Button
                    variant="default"
                    size="sm"
                    className="ml-auto hidden h-8 lg:flex"
                  >
                    {/* <MixerHorizontalIcon className="mr-2 h-4 w-4" /> */}
                    Confirmer
                  </Button>
                </DialogTrigger>
              </>
            ),
            form: <OperationForm />,
          },
        ]}
      />
    </div>
  );
};
