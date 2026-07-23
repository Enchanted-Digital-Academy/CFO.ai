type EmptyStateProps = {
  title: string;
  description: string;
};

const EmptyState = ({ title, description }: EmptyStateProps) => {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl bg-zinc-900 p-8 text-center shadow-lg">
      <h2 className="text-2xl font-bold text-yellow-400">
        {title}
      </h2>

      <p className="mt-3 text-zinc-400">
        {description}
      </p>
    </div>
  );
};

export default EmptyState;