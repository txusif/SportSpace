"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import FilterButton from "./FilterButton";

const Filter = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const path = usePathname();

  const activeFilter = searchParams.get("sport") ?? "all";

  function handleFilter(filter: string) {
    const params = new URLSearchParams(searchParams);
    params.set("sport", filter);

    router.replace(`${path}?${params.toString()}`, { scroll: false });
  }

  return (
    <>
      <FilterButton
        activeFilter={activeFilter}
        filter="all"
        handleFilter={handleFilter}
      >
        All
      </FilterButton>
      <FilterButton
        activeFilter={activeFilter}
        filter="cricket"
        handleFilter={handleFilter}
      >
        Cricket
      </FilterButton>
      <FilterButton
        activeFilter={activeFilter}
        filter="football"
        handleFilter={handleFilter}
      >
        Football
      </FilterButton>
    </>
  );
};

export default Filter;
