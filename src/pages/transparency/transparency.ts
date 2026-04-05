import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getTransparency } from '@/services/transparency';
import { getTransparencyTypes } from '@/services/transparency-types';

export function useTransparency() {
  const { data: transparency = [] } = useQuery({
    queryKey: ['transparency'],
    queryFn: async () => (await getTransparency()).data.items,
  });

  const { data: transparencyTypes = [] } = useQuery({
    queryKey: ['transparency-types'],
    queryFn: async () => (await getTransparencyTypes()).data,
  });

  const [activeType, setActiveType] = useState<string>('');

  const currentType = activeType || transparencyTypes[0]?.name || '';

  const filteredTransparency = transparency;

  return {
    transparencyTypes,
    currentType,
    setActiveType,
    filteredTransparency,
  };
}
