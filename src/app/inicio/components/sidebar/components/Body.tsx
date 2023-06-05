"use client"
import { useState, useCallback } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";


import { FaCarAlt } from "react-icons/fa";
import { TbZoomMoney, TbHomeDollar } from "react-icons/tb";
import { RiFilePaper2Fill } from "react-icons/ri";
import { MdOutlineMapsHomeWork, MdOutlineExpandLess } from "react-icons/md";
import { BsFillClipboard2DataFill, BsCalculatorFill } from "react-icons/bs";
import { HiDocumentSearch } from "react-icons/hi";
import { IoDocumentAttach } from "react-icons/io5";


import { Item } from "./Item";

export const Body = () => {
  const [expanded, setExpanded] = useState<string | false>(false);
  const [itemActive, setItemActive] = useState<string >('');
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
    const handleClick =useCallback( (    (event: React.SyntheticEvent,item:string) => {
      setItemActive(item);
    }),[]) 

  return (
    <div className="w-full">
      
    <Accordion
      expanded={expanded === "panel1"}
      onChange={handleChange("panel1")}
    >
      <AccordionSummary
        expandIcon={<MdOutlineExpandLess />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
        className="border-b-2 border-solid border-blue-500"
      >
        <Typography sx={{ width: "33%", flexShrink: 0 }}>General</Typography>
      </AccordionSummary>
      <AccordionDetails className="flex flex-col items-center w-full">
        
          <Item
            title="Liquidación Tasas y Tributos"
            icon={<BsCalculatorFill size={24} />}
            hrefe="/inicio"
            itemActive = {itemActive}
            handlerClick = {handleClick}
          />
          <Item
            title="Solicitud de Licencia"
            icon={<TbZoomMoney size={24} />}
            hrefe="/inicio"
            itemActive = {itemActive}
            handlerClick = {handleClick}
          />
          <Item
            title="Creditos Fiscales"
            icon={<BsFillClipboard2DataFill size={24} />}
            hrefe="/inicio"
            itemActive = {itemActive}
            handlerClick = {handleClick}
          />
          <Item
            title="Solvencias"
            icon={<RiFilePaper2Fill size={24} />}
            hrefe="/inicio"
            itemActive = {itemActive}
            handlerClick = {handleClick}
          />
       
      </AccordionDetails>
    </Accordion>
    <Accordion
      expanded={expanded === "panel2"}
      onChange={handleChange("panel2")}
    >
      <AccordionSummary
        expandIcon={<MdOutlineExpandLess />}
        aria-controls="panel2bh-content"
        id="panel2bh-header"
        className="border-b-2 border-solid border-blue-500"
      >
        <Typography sx={{ width: "33%", flexShrink: 0 }}>General</Typography>
      </AccordionSummary>
      <AccordionDetails>
        
          <Item
            title="Actividades Economicas"
            icon={<MdOutlineMapsHomeWork size={24} />}
            hrefe="/inicio"
            itemActive = {itemActive}
            handlerClick = {handleClick}
          />
          <Item
            title="Vehiculos"
            icon={<FaCarAlt size={24} />}
            hrefe="/inicio"
            itemActive = {itemActive}
            handlerClick = {handleClick}
          />
          <Item
            title="Inmubles Urbanos"
            icon={<TbHomeDollar size={24} />}
            hrefe="/inicio"
            itemActive = {itemActive}
            handlerClick = {handleClick}
          />
       
      </AccordionDetails>
    </Accordion>
    <Accordion
      expanded={expanded === "panel3"}
      onChange={handleChange("panel3")}
    >
      <AccordionSummary
        expandIcon={<MdOutlineExpandLess />}
        aria-controls="panel3bh-content"
        id="panel3bh-header"
        className="border-b-2 border-solid border-blue-500"
      >
        <Typography sx={{ width: "33%", flexShrink: 0 }}>
          Reportes
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        
          <Item
            title="Consultas"
            icon={<HiDocumentSearch size={24} />}
            hrefe="/inicio"
            itemActive = {itemActive}
            handlerClick = {handleClick}
          />
          <Item
            title="Reportes"
            icon={<IoDocumentAttach size={24} />}
            hrefe="/inicio/reportes"
            itemActive = {itemActive}
            handlerClick = {handleClick}
          />
       
      </AccordionDetails>
    </Accordion>
    </div>
  )
}
