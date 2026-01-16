import React, { useEffect, useState } from "react";

function GlobalLoader() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const show = () => setLoading(true);
    const hide = () => setLoading(false);

    document.addEventListener("loader:show", show);
    document.addEventListener("loader:hide", hide);

    return () => {
      document.removeEventListener("loader:show", show);
      document.removeEventListener("loader:hide", hide);
    };
  }, []);
  if (!loading) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="h-14 w-14 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}

export default GlobalLoader;
