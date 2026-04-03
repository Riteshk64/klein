type ImagePlaceholderProps = {
  label: string;
  className?: string;
};

export function ImagePlaceholder({
  label,
  className = "",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`flex w-full aspect-[16/9] items-center justify-center rounded-xl border-2 border-dashed border-gray-300 text-center text-gray-500 ${className}`}
    >
      <p className="px-6 text-sm font-medium leading-6">{label}</p>
    </div>
  );
}
