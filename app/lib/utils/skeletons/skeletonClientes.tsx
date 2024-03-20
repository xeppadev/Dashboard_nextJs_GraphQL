import { Skeleton, SVGSkeleton } from "../skeleton";

const LoadingSkeleton = () => (
  <>
    <div className="flex flex-col items-stretch 2xl:mx-16 space-y-5 w-full sm:w-auto">
      <div className="flex justify-between items-center">
        <div>
          <h2>
            <Skeleton className="w-[64px] max-w-full" />
          </h2>
        </div>
      </div>
      <div className="flex pt-5 pb-1 flex-row space-x-4 items-start w-full">
        <div className="relative flex flex-1 flex-shrink-0">
          <div className="h-[42px] border border-input px-3 rounded-lg transition-colors file:border-0 block w-full py-[8px] pl-10">
            <Skeleton className="w-[112px] max-w-full" />
          </div>
         
        </div>
        <div className="flex lspace-y-0 space-x-4 flex-row">
          <a>
            <div className="inline-flex items-center justify-center transition-colors h-9 px-4 pr-3 pl-4 py-[21px] border rounded-lg">
              <Skeleton className="w-[144px] max-w-full" />
              <SVGSkeleton className="ml-4 w-[24px] h-[24px]" />
            </div>
          </a>
        </div>
      </div>
      <div className="shadow-custom  rounded-lg dark:shadow-none">
        <div className="relative w-full overflow-auto">
          <table className="w-full caption-bottom">
            <thead className="[&amp;_tr]:border-b h-[60px]">
              <tr className="border-b border-slate-100 dark:border-border transition-colors">
                <th className="h-10 px-2 text-left align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                  <div className="ml-3">
                    <div className="h-4 w-4 shrink-0 border border-border_primary"></div>
                  </div>
                </th>
                <th className="h-10 px-2 text-left align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                  <Skeleton className="w-[48px] max-w-full" />
                </th>
                <th className="h-10 px-2 text-left align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                  <Skeleton className="w-[40px] max-w-full" />
                </th>
                <th className="h-10 px-2 text-left align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                  <div className="flex items-center">
                    <span>
                      <Skeleton className="w-[40px] max-w-full" />
                    </span>
                    <div className="inline-flex items-center justify-center transition-colors h-9 px-4 py-2">
                      <SVGSkeleton className="lucide-arrow-up-down ml-1 w-[24px] h-[24px]" />
                    </div>
                  </div>
                </th>
                <th className="h-10 px-2 text-left align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                  <Skeleton className="w-[48px] max-w-full" />
                </th>
                <th className="h-10 px-2 text-left align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                  <Skeleton className="w-[64px] max-w-full" />
                </th>
                <th className="h-10 px-2 text-left align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                  <Skeleton className="w-[72px] max-w-full" />
                </th>
                <th className="h-10 px-2 text-left align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                  <Skeleton className="w-[64px] max-w-full" />
                </th>
                <th className="h-10 px-2 text-left align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]"></th>
              </tr>
            </thead>
            <tbody className="[&amp;_tr:last-child]:border-0">
              <tr className="border-b border-slate-100 dark:border-border transition-colors">
                <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] h-[78px]">
                  <div className="ml-3">
                    <div className="h-4 w-4 shrink-0 border border-border_primary"></div>
                  </div>
                </td>
                <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] h-[78px]">
                  <a className="flex item-center min-w-[180px]">
                    <div className="flex space-x-4 justify-center">
                      <span className="relative flex shrink-0 h-11 w-11">
                        <span className="flex h-full w-full items-center justify-center">
                          <Skeleton className="w-[16px] max-w-full" />
                        </span>
                      </span>
                      <div className="flex-col flex justify-center">
                        <span>
                          <Skeleton className="w-[104px] max-w-full" />
                        </span>
                        <span>
                          <Skeleton className="w-[88px] max-w-full" />
                        </span>
                      </div>
                    </div>
                  </a>
                </td>
                <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] h-[78px]">
                  <Skeleton className="w-[104px] max-w-full" />
                </td>
                <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] h-[78px]">
                  <Skeleton className="w-[72px] max-w-full" />
                </td>
                <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] h-[78px]">
                  <div className="flex max-w-fit items-center px-1.5 py-1">
                    <Skeleton className="w-[48px] max-w-full" />
                  </div>
                </td>
                <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] h-[78px]">
                  <Skeleton className="w-[72px] max-w-full" />
                </td>
                <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] h-[78px]">
                  <Skeleton className="w-[144px] max-w-full" />
                </td>
                <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] h-[78px]">
                  <div className="max-w-fit justify-center flex flex-col">
                    <span>
                      <Skeleton className="w-[88px] max-w-full" />
                    </span>
                  </div>
                </td>
                <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] h-[78px]">
                  <div className="flex float-right items-center mt-1 max-w-[50px]">
                    <div>
                      <SVGSkeleton className="w-[24px] h-[24px]" />
                    </div>
                    <div className="items-center justify-center transition-colors flex h-8 w-8 p-0 text-right">
                      <SVGSkeleton className="w-[15px] h-[15px]" />
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="border-b border-slate-100 dark:border-border transition-colors">
                <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] h-[78px]">
                  <div className="ml-3">
                    <div className="h-4 w-4 shrink-0 border border-border_primary"></div>
                  </div>
                </td>
                <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] h-[78px]">
                  <a className="flex item-center min-w-[180px]">
                    <div className="flex space-x-4 justify-center">
                      <span className="relative flex shrink-0 h-11 w-11">
                        <span className="flex h-full w-full items-center justify-center">
                          <Skeleton className="w-[16px] max-w-full" />
                        </span>
                      </span>
                      <div className="flex-col flex justify-center">
                        <span>
                          <Skeleton className="w-[88px] max-w-full" />
                        </span>
                        <span>
                          <Skeleton className="w-[88px] max-w-full" />
                        </span>
                      </div>
                    </div>
                  </a>
                </td>
                <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] h-[78px]">
                  <Skeleton className="w-[104px] max-w-full" />
                </td>
                <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] h-[78px]">
                  <Skeleton className="w-[64px] max-w-full" />
                </td>
                <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] h-[78px]">
                  <div className="flex max-w-fit items-center px-1.5 py-1">
                    <Skeleton className="w-[48px] max-w-full" />
                  </div>
                </td>
                <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] h-[78px]">
                  <Skeleton className="w-[72px] max-w-full" />
                </td>
                <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] h-[78px]">
                  <Skeleton className="w-[144px] max-w-full" />
                </td>
                <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] h-[78px]">
                  <div className="max-w-fit justify-center flex flex-col">
                    <span>
                      <Skeleton className="w-[88px] max-w-full" />
                    </span>
                  </div>
                </td>
                <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] h-[78px]">
                  <div className="flex float-right items-center mt-1 max-w-[50px]">
                    <div>
                      <SVGSkeleton className="w-[24px] h-[24px]" />
                    </div>
                    <div className="items-center justify-center transition-colors flex h-8 w-8 p-0 text-right">
                      <SVGSkeleton className="w-[15px] h-[15px]" />
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="border-b border-slate-100 dark:border-border transition-colors">
                <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] h-[78px]">
                  <div className="ml-3">
                    <div className="h-4 w-4 shrink-0 border border-border_primary"></div>
                  </div>
                </td>
                <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] h-[78px]">
                  <a className="flex item-center min-w-[180px]">
                    <div className="flex space-x-4 justify-center">
                      <span className="relative flex shrink-0 h-11 w-11">
                        <span className="flex h-full w-full items-center justify-center">
                          <Skeleton className="w-[16px] max-w-full" />
                        </span>
                      </span>
                      <div className="flex-col flex justify-center">
                        <span>
                          <Skeleton className="w-[88px] max-w-full" />
                        </span>
                        <span>
                          <Skeleton className="w-[88px] max-w-full" />
                        </span>
                      </div>
                    </div>
                  </a>
                </td>
                <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] h-[78px]">
                  <Skeleton className="w-[104px] max-w-full" />
                </td>
                <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] h-[78px]">
                  <Skeleton className="w-[64px] max-w-full" />
                </td>
                <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] h-[78px]">
                  <div className="flex max-w-fit items-center px-1.5 py-1">
                    <Skeleton className="w-[48px] max-w-full" />
                  </div>
                </td>
                <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] h-[78px]">
                  <Skeleton className="w-[72px] max-w-full" />
                </td>
                <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] h-[78px]">
                  <Skeleton className="w-[144px] max-w-full" />
                </td>
                <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] h-[78px]">
                  <div className="max-w-fit justify-center flex flex-col">
                    <span>
                      <Skeleton className="w-[88px] max-w-full" />
                    </span>
                  </div>
                </td>
                <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] h-[78px]">
                  <div className="flex float-right items-center mt-1 max-w-[50px]">
                    <div>
                      <SVGSkeleton className="w-[24px] h-[24px]" />
                    </div>
                    <div className="items-center justify-center transition-colors flex h-8 w-8 p-0 text-right">
                      <SVGSkeleton className="w-[15px] h-[15px]" />
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="border-b border-slate-100 dark:border-border transition-colors">
                <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] h-[78px]">
                  <div className="ml-3">
                    <div className="h-4 w-4 shrink-0 border border-border_primary"></div>
                  </div>
                </td>
                <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] h-[78px]">
                  <a className="flex item-center min-w-[180px]">
                    <div className="flex space-x-4 justify-center">
                      <span className="relative flex shrink-0 h-11 w-11">
                        <span className="flex h-full w-full items-center justify-center">
                          <Skeleton className="w-[16px] max-w-full" />
                        </span>
                      </span>
                      <div className="flex-col flex justify-center">
                        <span>
                          <Skeleton className="w-[104px] max-w-full" />
                        </span>
                        <span>
                          <Skeleton className="w-[88px] max-w-full" />
                        </span>
                      </div>
                    </div>
                  </a>
                </td>
                <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] h-[78px]">
                  <Skeleton className="w-[104px] max-w-full" />
                </td>
                <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] h-[78px]">
                  <Skeleton className="w-[64px] max-w-full" />
                </td>
                <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] h-[78px]">
                  <div className="flex max-w-fit items-center px-1.5 py-1">
                    <Skeleton className="w-[64px] max-w-full" />
                  </div>
                </td>
                <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] h-[78px]">
                  <Skeleton className="w-[72px] max-w-full" />
                </td>
                <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] h-[78px]">
                  <Skeleton className="w-[144px] max-w-full" />
                </td>
                <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] h-[78px]">
                  <div className="max-w-fit justify-center flex flex-col">
                    <span>
                      <Skeleton className="w-[88px] max-w-full" />
                    </span>
                  </div>
                </td>
                <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] h-[78px]">
                  <div className="flex float-right items-center mt-1 max-w-[50px]">
                    <div>
                      <SVGSkeleton className="w-[24px] h-[24px]" />
                    </div>
                    <div className="items-center justify-center transition-colors flex h-8 w-8 p-0 text-right">
                      <SVGSkeleton className="w-[15px] h-[15px]" />
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="border-b border-slate-100 dark:border-border transition-colors">
                <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] h-[78px]">
                  <div className="ml-3">
                    <div className="h-4 w-4 shrink-0 border border-border_primary"></div>
                  </div>
                </td>
                <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] h-[78px]">
                  <a className="flex item-center min-w-[180px]">
                    <div className="flex space-x-4 justify-center">
                      <span className="relative flex shrink-0 h-11 w-11">
                        <span className="flex h-full w-full items-center justify-center">
                          <Skeleton className="w-[16px] max-w-full" />
                        </span>
                      </span>
                      <div className="flex-col flex justify-center">
                        <span>
                          <Skeleton className="w-[96px] max-w-full" />
                        </span>
                        <span>
                          <Skeleton className="w-[88px] max-w-full" />
                        </span>
                      </div>
                    </div>
                  </a>
                </td>
                <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] h-[78px]">
                  <Skeleton className="w-[104px] max-w-full" />
                </td>
                <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] h-[78px]">
                  <Skeleton className="w-[64px] max-w-full" />
                </td>
                <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] h-[78px]">
                  <div className="flex max-w-fit items-center px-1.5 py-1">
                    <Skeleton className="w-[48px] max-w-full" />
                  </div>
                </td>
                <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] h-[78px]">
                  <Skeleton className="w-[72px] max-w-full" />
                </td>
                <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] h-[78px]">
                  <Skeleton className="w-[144px] max-w-full" />
                </td>
                <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] h-[78px]">
                  <div className="max-w-fit justify-center flex flex-col">
                    <span>
                      <Skeleton className="w-[88px] max-w-full" />
                    </span>
                  </div>
                </td>
                <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] h-[78px]">
                  <div className="flex float-right items-center mt-1 max-w-[50px]">
                    <div>
                      <SVGSkeleton className="w-[24px] h-[24px]" />
                    </div>
                    <div className="items-center justify-center transition-colors flex h-8 w-8 p-0 text-right">
                      <SVGSkeleton className="w-[15px] h-[15px]" />
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="border-b border-slate-100 dark:border-border transition-colors">
                <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] h-[78px]">
                  <div className="ml-3">
                    <div className="h-4 w-4 shrink-0 border border-border_primary"></div>
                  </div>
                </td>
                <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] h-[78px]">
                  <a className="flex item-center min-w-[180px]">
                    <div className="flex space-x-4 justify-center">
                      <span className="relative flex shrink-0 h-11 w-11">
                        <span className="flex h-full w-full items-center justify-center">
                          <Skeleton className="w-[16px] max-w-full" />
                        </span>
                      </span>
                      <div className="flex-col flex justify-center">
                        <span>
                          <Skeleton className="w-[96px] max-w-full" />
                        </span>
                        <span>
                          <Skeleton className="w-[88px] max-w-full" />
                        </span>
                      </div>
                    </div>
                  </a>
                </td>
                <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] h-[78px]">
                  <Skeleton className="w-[104px] max-w-full" />
                </td>
                <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] h-[78px]">
                  <Skeleton className="w-[64px] max-w-full" />
                </td>
                <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] h-[78px]">
                  <div className="flex max-w-fit items-center px-1.5 py-1">
                    <Skeleton className="w-[64px] max-w-full" />
                  </div>
                </td>
                <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] h-[78px]">
                  <Skeleton className="w-[72px] max-w-full" />
                </td>
                <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] h-[78px]">
                  <Skeleton className="w-[144px] max-w-full" />
                </td>
                <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] h-[78px]">
                  <div className="max-w-fit justify-center flex flex-col">
                    <span>
                      <Skeleton className="w-[88px] max-w-full" />
                    </span>
                  </div>
                </td>
                <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] h-[78px]">
                  <div className="flex float-right items-center mt-1 max-w-[50px]">
                    <div>
                      <SVGSkeleton className="w-[24px] h-[24px]" />
                    </div>
                    <div className="items-center justify-center transition-colors flex h-8 w-8 p-0 text-right">
                      <SVGSkeleton className="w-[15px] h-[15px]" />
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-between space-x-2 py-4 px-7 border-t border-slate-100 dark:border-border overflow-auto">
          <div className="flex-1">
            <Skeleton className="w-[232px] max-w-full" />
          </div>
          <div className="flex items-center space-x-6 lg:space-x-8">
            <div className="flex items-center">
              <p>
                <Skeleton className="w-[128px] max-w-full" />
              </p>
              <div className="flex items-center justify-between border border-input px-3 py-2 [&amp;>span]:line-clamp-1 h-8 w-[60px] border-none shadow-none">
                <span>
                  <Skeleton className="w-[16px] max-w-full" />
                </span>
                <SVGSkeleton className="w-[15px] h-[15px]" />
              </div>
            </div>
            <div className="flex w-[100px] items-center justify-center">
              <Skeleton className="w-[104px] max-w-full" />
            </div>
            <div className="flex items-center space-x-2">
              <div className="items-center justify-center transition-colors border border-input hidden h-8 w-8 p-0 lg:flex">
                <SVGSkeleton className="w-[15px] h-[15px]" />
              </div>
              <div className="inline-flex items-center justify-center transition-colors border border-input h-8 w-8 p-0">
                <SVGSkeleton className="w-[15px] h-[15px]" />
              </div>
              <div className="inline-flex items-center justify-center transition-colors border border-input h-8 w-8 p-0">
                <SVGSkeleton className="w-[15px] h-[15px]" />
              </div>
              <div className="items-center justify-center transition-colors border border-input hidden h-8 w-8 p-0 lg:flex">
                <SVGSkeleton className="w-[15px] h-[15px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

const SandboxClient = () => (
  <>
    <LoadingSkeleton />
  </>
);

export default SandboxClient;