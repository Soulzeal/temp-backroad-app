import tour1 from './images/tour-1.jpeg'
import tour2 from './images/tour-2.jpeg'
import tour3 from './images/tour-3.jpeg'
import tour4 from './images/tour-4.jpeg'
import tour5 from './images/tour-5.jpeg'
import tour6 from './images/tour-6.jpeg'

import {
  FaFacebook,
  FaTwitter,
  FaSquarespace,
  FaWallet,
  FaTree,
  FaSocks,
} from "react-icons/fa";

export const pageLinks = [
  { id: 1, href: "#home", text: "Home" },
  { id: 2, href: "#about", text: "About" },
  { id: 3, href: "#services", text: "Services" },
  { id: 4, href: "#tours", text: "Tours" },
];

export const socialLinks = [
  { id: 1, href: "https://www.facebook.com", icon: <FaFacebook /> },
  { id: 2, href: "https://www.twitter.com", icon: <FaTwitter /> },
  { id: 3, href: "https://www.squarespace.com", icon: <FaSquarespace /> },
];

export const serData = [
  {
    id: 1,
    icon: <FaWallet />,
    titleText: "Saving Money",
    paraText: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
Asperiores, officia.`,
  },
  {
    id: 2,
    icon: <FaTree />,
    titleText: "Endless Hikings",
    paraText: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Asperiores, officia.`,
  },
  {
    id: 3,
    icon: <FaSocks />,
    titleText: "Amazing Comfort",
    paraText: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Asperiores, officia.`,
  },
];

export const tours = [
  {
    id:1,
    img: tour1,
    country: 'Tibet',
    date: "august 26th, 2020",
    title: "Tibet Adventure",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    duration : 6,
    cost : 2100
  },
  {
    id:2,
    img: tour2,
    country: 'Indonesia',
    date: "october 1th, 2020",
    title: "Best of java",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    duration : 11,
    cost : 1400
  },
  {
    id:3,
    img: tour3,
    country: 'Hong Kong',
    date: "september 15th, 2020",
    title: "explore hong kong",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    duration : 8,
    cost : 5000
  },
  {
    id:4,
    img: tour4,
    country: 'Kenya',
    date: "december 5th, 2019",
    title: "kenya highlights",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    duration : 20,
    cost : 3300
  },
  {
    id:5,
    img: tour5,
    country: 'Kenya',
    date: "november 15th, 2023",
    title: "Incredible India",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    duration : 10,
    cost : 2300
  },
  {
    id:6,
    img: tour6,
    country: 'UK',
    date: "April 5th, 2024",
    title: "United Kingdom",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    duration : 9,
    cost : 4300
  },
];
