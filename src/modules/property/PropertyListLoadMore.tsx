import PropertyItem, { PropertyItemLoading } from "./PropertyItem";
import React, { useState } from "react";
import { debounce } from "lodash";
import { Dropdown } from "@/components/dropdown";
import { getProperties } from "@/store/property.service";
import { IconSearch, IconTune } from "@/components/icons";
import { PropertyItemData } from "@/types/property.types";
import {
  ITEMS_PER_PAGE,
  propertyStatusData,
  propertyTypeData,
} from "@/constants/general.const";
import {
  TFilter,
  TPropertyStatusData,
  TPropertyTypeData,
} from "@/types/general.types";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { Button } from "@/components/button";
import { Menu } from "@headlessui/react";
import { DropdownItem } from "@/components/dropdown/Dropdown";

const PropertyListLoadMore = () => {
  const [selected, setSelected] = useState({
    statusText: "Any Status",
    typeText: "Any Type",
    countryText: "All Countries",
    stateText: "All States",
  });
  const [filter, setFilter] = useState<TFilter>({
    text: "",
    status: "",
    country: "",
    type: "",
    state: "",
  });
  const {
    data,
    isLoading,
    error,
    fetchNextPage,
    isFetching,
    isFetchingNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ["properties", filter.text, filter.status, filter.type],
    queryFn: ({ pageParam = 0 }) =>
      getProperties({
        text: filter.text,
        status: filter.status,
        type: filter.type,
        limit: ITEMS_PER_PAGE,
        offset: pageParam,
      }),
    getNextPageParam: (lastPage) => {
      const properties = lastPage?.properties || [];
      if (properties?.length < ITEMS_PER_PAGE) {
        return undefined;
      }
      return properties.length + ((lastPage && lastPage?.offset) || 0);
    },
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 10,
  });
  if (!data) return null;
  const handleFilterProperty = debounce(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFilter({
        ...filter,
        text: e.target.value,
      });
    },
    500
  );
  const handleFilterByStatus = (value: TPropertyStatusData["value"]) => {
    setFilter({
      ...filter,
      status: value,
    });
    const foundStatus = propertyStatusData.find((item) => item.value === value);
    setSelected({
      ...selected,
      statusText: value ? foundStatus?.label || "" : "Any Status",
    });
  };
  const handleFilterByType = (value: TPropertyTypeData["value"]) => {
    setFilter({
      ...filter,
      type: value,
    });
  };
  const handleLoadMore = () => {
    hasNextPage && fetchNextPage();
  };
  if (error) return null;

  return (
    <div className="p-5 bg-white rounded-2xl">
      <div aria-label="filter" className="flex gap-5 mb-6">
        <div className="rounded-lg p-2.5 gap-2.5 bg-grayf7 flex items-center basis-[229px]">
          <IconSearch></IconSearch>
          <input
            type="text"
            className="w-full text-xs font-medium bg-transparent outline-none"
            placeholder="Enter an address, city or Zip code"
            onChange={handleFilterProperty}
          />
        </div>
        <Dropdown
          selected={selected.statusText}
          // onClick={handleFilterByStatus}
          data={propertyStatusData}
          renderItems={(item) => (
            <DropdownItem
              key={item.value}
              onClick={() => handleFilterByStatus(item.value)}
            >
              {item.label}
            </DropdownItem>
          )}
        ></Dropdown>
        <Dropdown
          selected={selected.typeText}
          data={propertyTypeData}
          renderItems={(item) => (
            <DropdownItem
              key={item.value}
              onClick={() => handleFilterByType(item.value)}
            >
              {item.label}
            </DropdownItem>
          )}
        ></Dropdown>
        <Dropdown selected="All Countries"></Dropdown>
        <Dropdown selected="All States"></Dropdown>
        <button className="flex items-center gap-2.5 rounded-lg bg-grayf7 p-2 text-xs font-medium text-gray80">
          <IconTune></IconTune>
          <span>More</span>
        </button>
      </div>
      <div aria-label="list" className="grid grid-cols-2 gap-x-16 gap-y-6 mb-9">
        {isLoading &&
          Array(2)
            .fill(0)
            .map((item, index) => (
              <PropertyItemLoading key={index}></PropertyItemLoading>
            ))}
        {data.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page?.properties &&
              page?.properties.length > 0 &&
              page?.properties.map((item: PropertyItemData) => (
                <PropertyItem item={item} key={item.id}></PropertyItem>
              ))}
          </React.Fragment>
        ))}
      </div>
      {hasNextPage && (
        <Button
          isLoading={isFetchingNextPage || isFetching}
          className="w-24 mx-auto text-sm font-medium rounded-lg"
          onClick={handleLoadMore}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          Load more
        </Button>
      )}
    </div>
  );
};

export default PropertyListLoadMore;
