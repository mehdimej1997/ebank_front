import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpIcon,
} from '@radix-ui/react-icons';
import { ArrowRightLeft, Banknote, HandCoins } from 'lucide-react';

export const types = [
  {
    value: 'DEBIT',
    label: 'Debit',
    icon: HandCoins,
  },
  {
    value: 'CREDIT',
    label: 'Credit',
    icon: Banknote,
  },
  {
    value: 'TRANSFER',
    label: 'Transfer',
    icon: ArrowRightLeft,
  },
];

export const priorities = [
  {
    label: 'Low',
    value: 'low',
    icon: ArrowDownIcon,
  },
  {
    label: 'Medium',
    value: 'medium',
    icon: ArrowRightIcon,
  },
  {
    label: 'High',
    value: 'high',
    icon: ArrowUpIcon,
  },
];
