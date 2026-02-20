import Container from "./Container";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 border-b border-[var(--color-border)] bg-[#0b0d10]/70 backdrop-blur-md">
      <Container className="flex justify-between items-center h-16 px-6">
        <h1 className="text-lg font-semibold tracking-tight">
          Xai Insight Studio
        </h1>
        <nav className="hidden md:flex gap-6 text-sm text-[var(--muted)]">
          <span className="hover:text-white cursor-pointer transition-colors">
            Product
          </span>
          <span className="hover:text-white cursor-pointer transition-colors">
            Solutions
          </span>
        </nav>
      </Container>
    </header>
  );
}
