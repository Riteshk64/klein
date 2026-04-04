type ValueCardProps = {
  title: string;
  description: string;
};

export function ValueCard({ title, description }: ValueCardProps) {
  return (
    <article className="surface-card surface-card-hover rounded-[24px] p-6">
      <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      <p className="mt-3 leading-7 text-gray-600">{description}</p>
    </article>
  );
}
