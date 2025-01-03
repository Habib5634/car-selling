"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Filter = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    const params = new URLSearchParams(searchParams);
    params.set(name, value);
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex items-center justify- flex-wrap gap-x-2 gap-y-4 md:gap-6">
      {/* <div className="flex gap-6 flex-wrap"> */}
        <select
          name="type"
          id=""
          className="py-2 px-4 rounded-md text-xs font-medium border   border-gray2 "
          onChange={handleFilterChange}
        >
          <option>Type</option>
          <option value="physical">Physical</option>
          <option value="digital">Digital</option>
        </select>
        <input
          type="text"
          name="min"
          placeholder="min price"
          className="text-xs rounded-md py-2 px-4 w-24 border   border-gray2 "
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="max"
          placeholder="max price"
          className="text-xs rounded-md py-2 px-4 w-24 border   border-gray2  "
          onChange={handleFilterChange}
        />
        {/* TODO: Filter Categories */}
        <select
          name="cat"
          className="py-2 px-4 rounded-md text-xs font-medium border   border-gray2 "
          onChange={handleFilterChange}
        >
          <option>Category</option>
          <option value="">New Arrival</option>
          <option value="">Popular</option>
        </select>
        <select
          name=""
          id=""
          className="py-2 px-4 rounded-md text-xs font-medium border   border-gray2 "
        >
          <option>All Filters</option>
        </select>
      {/* </div> */}
      {/* <div className=""> */}
        <select
          name="sort"
          id=""
          className="py-2 px-4 rounded-md text-xs font-medium bg-white border   border-gray2  "
          onChange={handleFilterChange}
        >
          <option>Sort By</option>
          <option value="asc price">Price (low to high)</option>
          <option value="desc price">Price (high to low)</option>
          <option value="asc lastUpdated">Newest</option>
          <option value="desc lastUpdated">Oldest</option>
        </select>
      {/* </div> */}
    </div>
  );
};

export default Filter;