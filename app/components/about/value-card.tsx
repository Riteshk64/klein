type ValueCardProps = {
  title: string;
  description: string;
};

export function ValueCard({ title, description }: ValueCardProps) {
  return (
    <article className="rounded-xl bg-gray-50 p-6 shadow-sm">
      <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      <p className="mt-3 leading-7 text-gray-600">{description}</p>
    </article>
  );
}
