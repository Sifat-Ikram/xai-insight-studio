import clsx from "clsx";

export default function Section({ children, className }) {
  return (
    <section className={clsx("py-32 px-6", className)}>{children}</section>
  );
}
