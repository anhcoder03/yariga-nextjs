import { IconBeds, IconCross, IconLocation } from "@/components/icons";
import { Skeleton } from "@/components/loading";
import { PropertyItemData } from "@/types/property.types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
interface PropertyItemProps {
  item: PropertyItemData;
}
const PropertyItem = ({ item }: PropertyItemProps) => {
  if (!item) return null;
  return (
    <Link
      href={{
        pathname: "/property/[id]",
        query: { id: item.id },
      }}
      className="flex gap-2"
    >
      <Image
        src={item.image && item.image.length > 0 ? item.image[0] : ""}
        alt="setup"
        width={200}
        height={125}
        className="object-cover rounded-xl h-[125px]"
        priority
      ></Image>
      <div className="flex-1">
        <span className="inline-block text-xs font-semibold text-primary py-2 px-[10px] rounded-[5px] bg-primary bg-opacity-10 mb-2">
          ${item.price}
        </span>
        <h3 className="mb-1 text-base font-semibold text-primaryText">
          {item.title}
        </h3>
        <div className="flex items-center gap-1 mb-2 text-gray80">
          <IconLocation></IconLocation>
          <span>{item.address}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <IconBeds></IconBeds>
            <span className="text-xs font-medium">
              {item.facility?.beds} Beds
            </span>
          </div>
          <div className="flex items-center gap-1">
            <IconCross></IconCross>
            <span className="text-xs font-medium">{item.facility?.area}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};
export const PropertyItemLoading = () => {
  return (
    <div className="flex gap-2">
      <Skeleton className="w-[200px] h-[150px] rounded-xl"></Skeleton>
      <div className="flex-1">
        <Skeleton className="w-[50px] h-[30px] mb-2"></Skeleton>
        <Skeleton className="w-full h-3 mb-3"></Skeleton>
        <div className="flex items-center gap-1 mb-2 text-gray80">
          <IconLocation></IconLocation>
          <Skeleton className="w-20 h-3"></Skeleton>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <IconBeds></IconBeds>
            <Skeleton className="w-5 h-3"></Skeleton>
          </div>
          <div className="flex items-center gap-1">
            <IconCross></IconCross>
            <Skeleton className="w-5 h-3"></Skeleton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyItem;
