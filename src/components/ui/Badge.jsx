export function Badge({ children, variant, className = "" }) {
  const base = "inline-block px-2 py-1 rounded text-xs font-semibold";
  const variantClass = variant === "secondary" ? "bg-gray-700" : "bg-blue-600";
  return <span className={`${base} ${variantClass} ${className}`}>{children}</span>;
}
