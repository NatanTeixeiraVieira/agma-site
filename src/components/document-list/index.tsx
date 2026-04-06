import { Transparency } from '@/types/transparency';

type DocumentListProps = {
  title: string;
  documents: Transparency[];
};

const EmptyState = () => (
  <div className="text-center py-16 text-muted-foreground">
    <p>Nenhum documento disponível nesta categoria.</p>
  </div>
);

export default function DocumentList({ title, documents }: DocumentListProps) {
  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <h2 className="text-2xl md:text-3xl text-blue font-extrabold text-primary mb-6 uppercase">
        {title}
      </h2>

      {documents.length === 0 ? (
        <EmptyState />
      ) : (
        <ul className="space-y-5 pl-2">
          {documents.map((doc) => (
            <li key={doc.id} className="flex items-center gap-2">
              <a
                href={doc.path}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-h hover:text-blue transition-colors text-[15px] hover:underline underline-offset-4"
              >
                {doc.filename}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
