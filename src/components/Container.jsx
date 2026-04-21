export function Container({ className = "", children }) {
  return (
    <div className={`mx-auto w-full max-w-[1100px] px-5 sm:px-7 ${className}`}>
      {children}
    </div>
  );
}

