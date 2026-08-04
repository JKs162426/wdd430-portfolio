"use client";

import { useDebounce, useDebouncedCallback } from "use-debounce";

import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function ProjectSearch() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1"); // reset to page 1 on every new search
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <input
      type="search"
      placeholder="Search projects..."
      defaultValue={searchParams.get("query")?.toString()}
      onChange={(e) => handleSearch(e.target.value)}
    />
  );
}
