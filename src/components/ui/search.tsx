// src/components/ui/search.tsx

import { $, component$ } from "@builder.io/qwik";
import { useLocation, useNavigate } from "@builder.io/qwik-city";
import { HiMagnifyingGlassOutline } from "@qwikest/icons/heroicons";
import { useDebouncer } from "~/hooks/debouncer";

export const Search = component$(({ placeholder }: { placeholder: string }) => {
  const loc = useLocation();
  const path = loc.url.pathname;
  const nav = useNavigate();
  const searchParams = loc.url.searchParams;
  const handleSearch = $((term: string) => {
    console.log("SEARCH", term);
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");

    term ? params.set("query", term) : params.delete("query");

    nav(`${path}?${params.toString()}`, { replaceState: true });
  });

  const debouncedSearch = useDebouncer(handleSearch, 300);
  return (
    <div class="relative flex flex-1 shrink-0">
      <label for="search" class="sr-only">
        Search
      </label>
      <input
        class="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        id="search"
        onInput$={(e) => {
          const value = (e.target as HTMLInputElement).value;
          debouncedSearch(value);
        }}
        defaultValue={searchParams.get("query")?.toString()}
        // value={searchParams.get("query")?.toString() }
      />
      <HiMagnifyingGlassOutline class="absolute top-1/2 left-3 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  );
});
