import { Skeleton, SVGSkeleton } from "../skeleton";

const LoadingSkeleton = () => (
    <>
      <div className="dark:shadow-darkshadow shadow-custom rounded-2xl  flex-inline flex 2xl:p-7 py-5  p-4 2xl:space-x-5 space-x-1 overflow-x-auto">
        <div className="flex items-center 2xl:space-x-4 pr-2 space-x-1 justify-center w-full min-w-[160px] border-r border-dashed">
          <SVGSkeleton className="lg:p-2 p-1.5 w-[62px] h-[62px] rounded-full" />
          <div className="p-6 space-y-0.5 py-1 px-1">
            <h3 className="tracking-tight">
              <Skeleton className="w-[120px] max-w-full" />
            </h3>
            <p>
              <Skeleton className="w-[112px] max-w-full" />
            </p>
          </div>
        </div>
        <div className="flex items-center 2xl:space-x-4 space-x-1 justify-center min-w-[150px] w-full border-r border-dashed">
          <SVGSkeleton className="lg:p-2 p-1.5 w-[62px] h-[62px] rounded-full" />
          <div className="p-6 space-y-0.5 py-1 px-1">
            <h3 className="tracking-tight">
              <Skeleton className="w-[104px] max-w-full" />
            </h3>
            <p>
              <Skeleton className="w-[88px] max-w-full" />
            </p>
          </div>
        </div>
        <div className="flex items-center 2xl:space-x-4 space-x-1 justify-center min-w-[150px] w-full border-r border-dashed">
          <SVGSkeleton className="lg:p-2 p-1.5 w-[62px] h-[62px] rounded-full" />
          <div className="p-6 space-y-0.5 py-1 px-1">
            <h3 className="tracking-tight">
              <Skeleton className="w-[130px] max-w-full" />
            </h3>
            <p>
              <Skeleton className="w-[88px] max-w-full" />
            </p>
          </div>
        </div>
        <div className="flex items-center 2xl:space-x-4 space-x-1 justify-center w-full min-w-[160px] border-r border-dashed">
          <SVGSkeleton className="lg:p-2 p-1.5 w-[62px] h-[62px] rounded-full" />
          <div className="p-6 space-y-0.5 py-1 px-1">
            <h3 className="tracking-tight">
              <Skeleton className="w-[130px] max-w-full" />
            </h3>
            <p>
              <Skeleton className="w-[88px] max-w-full" />
            </p>
          </div>
        </div>
        <div className="flex items-center 2xl:space-x-3 space-x-1 justify-center w-full min-w-[150px] border-dashed">
          <SVGSkeleton className="lg:p-2 p-1.5 w-[62px] h-[62px] rounded-full" />
          <div className="p-6 space-y-0.5 py-1 px-1">
            <h3 className="tracking-tight">
              <Skeleton className="w-[130px] max-w-full" />
            </h3>
            <p>
              <Skeleton className="w-[64px] max-w-full" />
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center 2xl:space-x-3 min-w-[150px] space-x-1 w-full border-l border-dashed">
          <SVGSkeleton className="lg:p-2 p-1.5 w-[62px] h-[62px] rounded-full" />
          <div className="p-6 space-y-0.5 py-1 px-1">
            <h3 className="tracking-tight">
              <Skeleton className="w-[96px] max-w-full" />
            </h3>
            <p>
              <Skeleton className="w-[24px] max-w-full" />
            </p>
          </div>
        </div>
      </div>
    </>
  );
  
  const SandboxMantenimiento = () => (
    <div className=" w-full h-full ">
      <LoadingSkeleton />
    </div>
  );
  
  export default SandboxMantenimiento;
