function ShimmerGrid() {
  return (
    <div className="min-h-screen w-full px-4 sm:px-6 lg:px-10 py-6">
      <div
        className="
          grid gap-4
          grid-cols-2
          sm:grid-cols-3
          md:grid-cols-4
          lg:grid-cols-5
          xl:grid-cols-6
        "
      >
        {Array(24)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              className="relative aspect-[2/3] rounded-lg bg-gray-300 overflow-hidden"
            >
              <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300" />
            </div>
          ))}
      </div>
    </div>
  );
}

export default ShimmerGrid;
