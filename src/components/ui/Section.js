import clsx from "clsx";

export default function Section({ children, className, id }) {
  return (
    <section
      id={id}
      className={clsx(
        "relative py-24 md:py-32 px-6 overflow-hidden",
        className,
      )}
    >
      {children}
    </section>
  );
}
