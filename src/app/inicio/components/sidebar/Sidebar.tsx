
import { Logo } from "./components/Logo";
import { Footer } from "./components/Footer";
import { Body } from "./components/Body";



export const Sidebar = () => {


  return (
    <div className="flex flex-col items-center w-auto h-full overflow-hidden text-gray-700 bg-white rounded border-[1px]  sticky">
      <Logo/>
      <Body/>
      <Footer/>
    </div>
  
  );
};
