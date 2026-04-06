import { useMemo, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getTransparency } from '@/services/transparency';
import { getTransparencyTypes } from '@/services/transparency-types';
import {
  transparencyDocumentsKey,
  transparencyTypesKey,
} from '@/constants/query-keys';

export function useTransparency() {
  const { data: transparencyTypes = [] } = useQuery({
    queryKey: transparencyTypesKey(),
    queryFn: async () => (await getTransparencyTypes()).data,
  });

  const [activeType, setActiveType] = useState<string>('');

  const currentType = useMemo(
    () => activeType || transparencyTypes[0]?.id || '',
    [activeType, transparencyTypes[0]?.id],
  );

  const { data: transparency = [] } = useQuery({
    queryKey: transparencyDocumentsKey({ transparencyType: currentType }),
    queryFn: async () =>
      (await getTransparency({ transparencyType: currentType })).data.items,
  });

  const filteredTransparency = transparency;

  return {
    transparencyTypes,
    currentType,
    setActiveType,
    filteredTransparency,
  };
}
