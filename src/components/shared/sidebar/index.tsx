import React, { ComponentPropsWithoutRef } from 'react';
import { Handshake, Landmark, Users } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui';

type SidebarProps = ComponentPropsWithoutRef<'div'>;

export const Sidebar = ({ className }: SidebarProps) => {
  return (
    <div className={cn('bg-slate-100 pb-12', className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="space-y-1">
            <Button
              variant="secondary"
              className="w-full justify-start space-x-2"
            >
              <Users />
              <span>Utilisateurs</span>
            </Button>
            <Button variant="ghost" className="w-full justify-start space-x-2">
              <Handshake />
              <span>Opérations</span>
            </Button>
            <Button variant="ghost" className="w-full justify-start space-x-2">
              <Landmark />
              <span>Compte Bancaire</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
