export function Heading({ title, subtitle, className }) {
  return (
    <div className={clsx("mb-16", className)}>
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 bg-gradient-to-br from-white to-white/60 bg-clip-text text-transparent">
        {title}
      </h2>
      {subtitle && (
        <p className="text-[var(--muted)] text-lg max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
