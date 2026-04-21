export function Card({ className = "", children }) {
  return (
    <div
      className={[
        "relative rounded-[28px] bg-white/80 backdrop-blur-md",
        "shadow-[var(--shadow)] ring-1 ring-[var(--border)]",
        "overflow-hidden",
        className,
      ].join(" ")}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_240px_at_10%_0%,rgba(234,243,255,0.9),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-40 [background:linear-gradient(180deg,rgba(201,164,75,0.12),transparent_40%,transparent_70%,rgba(19,32,53,0.06))]" />
      <div className="relative">{children}</div>
    </div>
  );
}

