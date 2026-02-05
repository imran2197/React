import React, { useCallback, useRef, useState } from "react";

const dataList = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Banana" },
  { id: 3, name: "Cherry" },
  { id: 4, name: "Date" },
  { id: 5, name: "Elderberry" },
];

const Search = () => {
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState(dataList);
  const timeoutRef = useRef(null);

  const filterFn = useCallback((searchQuery) => {
    if (!searchQuery) {
      setFilteredData(dataList);
    } else {
      const filterList = dataList.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()),
      );
      setFilteredData(filterList);
    }
  });

  const debounce = useCallback(
    (searchQuery) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        filterFn(searchQuery);
      }, 300);
    },
    [filterFn],
  );

  const searchHandler = useCallback(
    (value) => {
      setSearch(value);
      debounce(value);
    },
    [setSearch, debounce],
  );
  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => searchHandler(e.target.value)}
      />
      <ul>
        {filteredData.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
