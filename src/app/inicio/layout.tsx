import React from "react";
import { Sidebar } from "./components/sidebar/Sidebar";
interface LayoutInicioWithProps {
  children: React.ReactElement;
}
export default function LayoutInicio  ({
  children,
}: LayoutInicioWithProps): JSX.Element  {
  return (
    <div className=" grid grid-cols-[14rem_auto] h-screen w-screen">
      <div className="h-full">
        <Sidebar />
      </div>
      <div className="h-full flex flex-col relative">
        <div className="py-4  text-center text-white bg-blue-600 font-bold shadow-sm border-b-1 ">
          <div className="">
            <p>
              Servicio Autónomo de Administración Tributaria del Municipio
              Cabimas
            </p>
          </div>
        </div>
        <div className=" flex-auto">

        {children}
        </div>
      </div>
    </div>
  );
};
