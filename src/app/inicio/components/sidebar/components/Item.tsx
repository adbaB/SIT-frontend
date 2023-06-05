"use client";
import Link from "next/link";
import { MouseEventHandler } from "react";

import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
interface ItemProps {
  title: string;
  icon: React.ReactElement;
  hrefe: string;
  handlerClick: any;
  itemActive: string | boolean;
}
export const Item = ({
  title,
  icon,
  hrefe,
  handlerClick,
  itemActive,
}: ItemProps) => {
  return (
    <>
      <Link
        onClick={(e) => {
          handlerClick(e, title);
        }}
        className={`flex items-center w-full h-full  mt-2 rounded ${
          itemActive === title ? "bg-blue-600 text-white" : "bg-gray-200 "
        } shadow-sm hover:bg-blue-600 hover:text-white `}
        href={hrefe}
      >
        <ListItem>
          <ListItemIcon
            className={`${
              itemActive === title && " text-white" 
            }`}
          >
            {icon}
          </ListItemIcon>
          <ListItemText primary={title} />
        </ListItem>
      </Link>
    </>
  );
};
