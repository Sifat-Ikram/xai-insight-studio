import clsx from "clsx";

export default function Container({ children, className }) {
  return (
    <div className={clsx("max-w-6xl mx-auto px-6 w-full", className)}>
      {children}
    </div>
  );
}
