import Sidebar from "../ui/dashboard/sidebar";
import Navbar from "../ui/dashboard/navbar";
import Notifiaciones from "../ui/dashboard/notifications";

export default function Layout(
    {children}: {
        children: React.ReactNode})
    {
    return  (
        <div className="flex  min-h-dvh flex-col 2xl:flex-row ">
            <div className="flex-none md:w-60 2xl:w-[270px]">
                <Sidebar />
            </div>
            <div className="flex-grow  " >
                <Navbar />
                <div className="p-6 flex  flex-col md:p-8 " >{children}</div>
            </div>
            
        </div>
    )
}