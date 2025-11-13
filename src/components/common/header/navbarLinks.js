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
      { title: "Sea Freight", path: "/services/sea-freight" },
      { title: "Air Freight", path: "/services/air-freight" },
      { title: "Land Freight", path: "/services/land-freight" },
      { title: "Packing & Crafting", path: "/services/packing-crafting" }
    ],
  },
  {
    id: 4,
    title: "Blog",
    url: "/blogs",
    icon: <FiBookOpen />,
  },
 {
    id: 6,
    title: "Contact",
    url: "/contact-us",
    icon: <FiPhone />,
  },
  
  
];

export default navLinks;
