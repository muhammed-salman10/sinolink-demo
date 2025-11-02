// src/components/common/header/navbarLinks.js

import {
  FiHome,
  FiInfo,
  FiGrid,
  FiBookOpen,
  FiBriefcase,
  FiPhone,
} from "react-icons/fi";

const navLinks = [
  {
    id: 1,
    title: "Home",
    url: "/",
    icon: <FiHome />,
  },
  {
    id: 2,
    title: "About",
    url: "/company/about-us",
    icon: <FiInfo />,
  },
  {
    id: 3,
    title: "Services",
    url: "/services",
    icon: <FiGrid />,
    children: [
      { title: "Freight Forwarding", path: "/services/freight-forwarding" },
      { title: "Multimodal Transport", path: "/services/multimodal-transport" },
      { title: "Sea Freight", path: "/services/sea-freight" },
      { title: "Land Freight", path: "/services/land-freight" },
      { title: "Air Freight", path: "/services/air-freight" },
      { title: "Auto Logistics", path: "/services/auto-logistics" },
      { title: "Custom Brokers", path: "/services/custom-brokers" },
      {
        title: "Event & Exhibition Logistics",
        path: "/services/event-exhibition-logistics",
      },
      { title: "Project Logistics", path: "/services/project-logistics" },
      { title: "Packing & Crafting", path: "/services/packing-crafting" },
      { title: "Chartering Services", path: "/services/chartering-services" },
      { title: "Shipping Agents", path: "/services/shipping-agents" },
      { title: "Contract Logistics", path: "/services/contract-logistics" },
      {
        title: "Warehousing & Distribution",
        path: "/services/warehousing-distribution",
      },
    ],
  },
  {
    id: 4,
    title: "Blog",
    url: "/blogs",
    icon: <FiBookOpen />,
  },
 
  
  
];

export default navLinks;
