export function Button({ children, size, variant, className = "", ...props }) {
  const base = "px-4 py-2 rounded font-medium flex items-center justify-center";
  const sizeClass = size === "lg" ? "text-lg" : "text-sm";
  const variantClass =
    variant === "outline"
      ? "bg-transparent border border-gray-600 hover:bg-gray-800"
      : "bg-blue-600 hover:bg-blue-700";
  return (
    <button className={`${base} ${sizeClass} ${variantClass} ${className}`} {...props}>
      {children}
    </button>
  );
}
