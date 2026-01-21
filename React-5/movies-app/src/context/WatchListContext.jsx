import { createContext, useEffect, useState } from "react";

const WatchListContext = createContext();

export function WatchListContextWrapper({ children }) {
  const [watchList, setWatchList] = useState([]);

  const addToWatchList = (movieObj) => {
    const updatedWatchList = [...watchList, movieObj];
    setWatchList(updatedWatchList);
    localStorage.setItem("watchlist", JSON.stringify(updatedWatchList));
  };

  const removeFromWatchList = (movieObj) => {
    const updatedWatchList = watchList.filter((item) => {
      return item.id != movieObj.id;
    });
    setWatchList(updatedWatchList);
    localStorage.setItem("watchlist", JSON.stringify(updatedWatchList));
  };

  useEffect(() => {
    const allWatchList = JSON.parse(localStorage.getItem("watchlist"));
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setWatchList(allWatchList ? allWatchList : []);
  }, []);

  return (
    <WatchListContext.Provider
      value={{ watchList, setWatchList, addToWatchList, removeFromWatchList }}
    >
      {children}
    </WatchListContext.Provider>
  );
}

export default WatchListContext;
