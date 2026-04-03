type FeatureGridProps = {
  features: string[];
};

export function FeatureGrid({ features }: FeatureGridProps) {
  return (
    <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
      {features.map((feature) => (
        <div key={feature} className="rounded-xl bg-gray-50 p-6 text-center">
          <p className="font-medium text-gray-900">{feature}</p>
        </div>
      ))}
    </div>
  );
}
