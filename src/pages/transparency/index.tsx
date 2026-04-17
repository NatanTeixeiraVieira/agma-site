import { useTransparency } from './transparency';
import HeroBanner from '@/components/hero-banner';
import TypeTabs from '@/components/type-tabs';
import DocumentList from '@/components/document-list';

export default function TransparencyPage() {
  const {
    currentType,
    filteredTransparency,
    transparencyTypes,
    setActiveType,
  } = useTransparency();

  return (
    <div className="min-h-screen bg-background">
      <HeroBanner />
      <TypeTabs
        types={transparencyTypes}
        activeType={currentType}
        onSelect={setActiveType}
      />
      <DocumentList
        title={
          transparencyTypes.find(({ id }) => id === currentType)?.name ?? ''
        }
        documents={filteredTransparency}
      />
    </div>
  );
}
