import {
  IconBuilding,
  IconDashboard,
  IconMessage,
  IconPerson,
  IconProfile,
  IconStar,
} from "@/components/icons";
import {
  TDropdownData,
  TPropertyStatusData,
  TPropertyTypeData,
  TSidebarLink,
} from "@/types/general.types";

export const sidebarLinks: TSidebarLink[] = [
  {
    title: "Dashboard",
    icon: <IconDashboard />,
    path: "/",
  },
  {
    title: "Property",
    icon: <IconBuilding />,
    path: "/properties",
  },
  {
    title: "Agent",
    icon: <IconPerson />,
    path: "/agent",
  },
  {
    title: "Review",
    icon: <IconStar />,
    path: "/review",
  },
  {
    title: "Message",
    icon: <IconMessage />,
    path: "/message",
  },
  {
    title: "My Profile",
    icon: <IconProfile />,
    path: "/my-profile",
  },
];
export const propertyStatusData: TPropertyStatusData[] = [
  {
    value: "",
    label: "Any Status",
  },
  {
    value: "sale",
    label: "For Sale",
  },
  {
    value: "rent",
    label: "For Rent",
  },
];
export const propertyTypeData: TPropertyTypeData[] = [
  {
    value: "",
    label: "Any Type",
  },
  {
    value: "apartments",
    label: "Appartments",
  },
  {
    value: "houses",
    label: "House",
  },
  {
    value: "commercial",
    label: "Commercial",
  },
  {
    value: "garages",
    label: "Garages",
  },
  {
    value: "lots",
    label: "Lots",
  },
];
export const ITEMS_PER_PAGE = 2;
