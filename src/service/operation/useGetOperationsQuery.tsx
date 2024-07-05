import { useQuery } from '@tanstack/react-query';

import { operationsList } from './operation.service';

export const useGetOperationsQuery = (userId: string) => {
  const mutation = useQuery({
    queryFn: () => operationsList(userId),
    queryKey: ['OPERATIONS', userId],
    enabled: !!userId,
  });

  return mutation;
};
