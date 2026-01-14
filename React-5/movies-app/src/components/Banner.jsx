import React from "react";

function Banner() {
  return (
    <div className="h-[50vh] md:h-[75vh] bg-cover bg-center bg-no-repeat flex items-end"
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGlmZXxlbnwwfHwwfHx8MA%3D%3D)`,
      }}
    >
        <div className="text-white w-full text-center text-2xl p-2 font-semibold">Placeholder Movie</div>
    </div>
  );
}

export default Banner;
