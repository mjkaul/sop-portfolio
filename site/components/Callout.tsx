export function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-4 rounded-md border-l-4 border-blue-400 bg-blue-50 px-4 py-3 text-sm text-blue-900 dark:border-blue-500 dark:bg-blue-950 dark:text-blue-100">
      <p className="mb-1 font-semibold uppercase tracking-wide text-xs text-blue-700 dark:text-blue-300">
        Note
      </p>
      {children}
    </div>
  );
}
