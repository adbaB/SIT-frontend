"use client";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import {
  PDFDownloadLink,
  PDFViewer,
} from "@react-pdf/renderer/lib/react-pdf.browser.cjs";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { MdOutlineExpandLess } from "react-icons/md";
import { MdPictureAsPdf } from "react-icons/md";
import { RiFileExcel2Fill } from "react-icons/ri";

import { ReporteRecibo } from "./reportes-component/ReporteRecibo";
export default function Reportes() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [recibos, setRecibos] = useState<any[]>([]);
  const [verRecibo, setVerRecibo] = useState(false);

  const handlerClickDownload = async () => {
    const newStartDate = dayjs(startDate).format("YYYY-MM-DD");
    const newEndDate = dayjs(endDate).format("YYYY-MM-DD");
    fetch(
      `http://localhost:3002/recibos?fechaInicio=${newStartDate}&fechaFinal=${newEndDate}`
    )
      .then((response) => response.json())
      .then((data) => {
        setRecibos(data.results);
        setVerRecibo(true);
      });
  };
  return (
    <>
      <div className="px-7 pt-6 relative">
        <h1 className="font-bold mb-3 text-xl">Reportes: </h1>
        <div></div>
        <Accordion className="shadow-none">
          <AccordionSummary
            expandIcon={<MdOutlineExpandLess />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            className="border-solid border-b-2 border-blue-500 bg-blue-50 rounded"
          >
            <p className="font-bold">Reporte de Recibos </p>
          </AccordionSummary>
          <AccordionDetails className="border-solid border-2 rounded-b-lg border-blue-100 bg-blue-50 border-t-0">
            <h2 className="font-bold text-lg mb-1">Filtros:</h2>
            <div className=" flex justify-between ">
              <div>
                <div>
                  <p className="font-medium">Desde: </p>
                  <DatePicker
                    selected={startDate}
                    onChange={(date: Date) => {
                      setStartDate(date);
                    }}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    dateFormat="yyyy-MM-dd"
                    className="border-solid border-2 border-blue-500 rounded"
                  />
                </div>
                <div>
                  <p className="font-medium">Hasta: </p>
                  <DatePicker
                    selected={endDate}
                    onChange={(date: Date) => setEndDate(date)}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                    dateFormat="yyyy-MM-dd"
                    className="border-solid border-2 border-blue-500 rounded"
                  />
                </div>
              </div>
              <div className="flex items-end">
                <button
                  className="p-3 bg-red-600 rounded-xl text-slate-200 font-semibold mr-4 flex justify-center items-center gap-2"
                  onClick={handlerClickDownload}
                >
                  <span className="">
                    <MdPictureAsPdf size={24} />
                  </span>
                  <p>Descargar</p>
                </button>
                <button className="p-3 bg-green-600 rounded-xl text-slate-200 font-semibold mr-4 flex justify-center items-center gap-2">
                  <span>
                    <RiFileExcel2Fill size={24} />
                  </span>
                  Descargar
                </button>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
        {verRecibo && (
          <div className="z-40 h-full w-full  top-0 left-0  bg-white  absolute ">
            <div className=" flex justify-end w-[90%] m-auto">
              <button
                className="p-3 rounded-lg bg-red-600 text-white"
                onClick={() => {
                  setVerRecibo(false);
                }}
              >
                X
              </button>
            </div>
            <div className=" m-auto h-[90%] ">
              <PDFViewer width="90%" height="90%" style ={{margin:'auto'}}>
                <ReporteRecibo recibos={recibos} fechaInicio={ dayjs(startDate).format("YYYY-MM-DD")} fechaFinal= { dayjs(endDate).format("YYYY-MM-DD")} />
              </PDFViewer>
            </div>
          </div>
        )} 
    </>
  );
}
