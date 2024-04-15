import Sidebar from "../ui/dashboard/sidebar";
import Navbar from "../ui/dashboard/navbar";
import { notificationsqueyModel } from "@/src/models/notificationsqueryModel";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data } = await notificationsqueyModel();
  return (
    <div className="grid grid-cols-1 2xl:grid-cols-[270px,1fr] min-h-dvh">
      <div className="fixed h-screen flex-none border-r dark:border-[#2F3746] hidden 2xl:flex dark:bg-nav_bg border-[#F3F4F6] overflow-y-auto md:w-60 2xl:w-[270px] 2xl:sticky 2xl:top-0">
        <Sidebar />
      </div>
      <div className="flex-grow">
        <Navbar dataNotificaciones={data} />
        <div className="p-6 flex flex-col md:p-8">{children}</div>
      </div>
    </div>
  );
}
