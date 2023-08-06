import Link from "next/link";
import React from "react";
import { LayoutMain } from "@/components/layout";
import PropertyList from "@/modules/property/PropertyList";
import PropertyListLoadMore from "@/modules/property/PropertyListLoadMore";

const PropertyPage = () => {
  return (
    <LayoutMain>
      <div className="flex items-center justify-between mb-5">
        <h1 className="font-bold text-[25px] text-primaryText">
          Property List
        </h1>
        <Link
          href="/property/create"
          className="flex items-center justify-center px-5 py-3 text-white bg-primary text-sm font-medium rounded-[10px] leading-normal"
        >
          + Add Property
        </Link>
      </div>
      <PropertyListLoadMore></PropertyListLoadMore>
    </LayoutMain>
  );
};

export default PropertyPage;
