export function Heading({ title, subtitle }) {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-medium mb-4">{title}</h2>
      {subtitle && <p className="text-muted max-w-xl">{subtitle}</p>}
    </div>
  );
}
