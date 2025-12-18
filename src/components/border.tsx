interface IBorder {
  children: React.ReactNode;
}

export default function Border({ children }: IBorder) {
  return (
    <div className="border px-2 py-2 border-gray-500 rounded-md">
      <p className="text-sm">{children}</p>
    </div>
  );
}
