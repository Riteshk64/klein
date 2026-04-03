type PriceSummaryProps = {
  totalPrice: string;
};

export function PriceSummary({ totalPrice }: PriceSummaryProps) {
  return (
    <div className="mt-8 rounded-xl bg-gray-100 p-6">
      <p className="text-sm font-medium text-gray-600">Total Price</p>
      <p className="mt-3 text-3xl font-bold text-gray-900">{totalPrice}</p>
    </div>
  );
}
