import Image from "next/image";
import { IBM_Plex_Mono } from "next/font/google";
import ster from "@/static/icon/download.svg";

const ibm_plex_mono = IBM_Plex_Mono({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export function ReviewComponent() {
  return (
    <div className="">
      <div className=" h-[360px] max-w-[358px] w-full bg-[#272C31] border-2 border-[#FFE275] p-[32px] rounded-[8px] ">
        <div className=" flex flex-col gap-[20px] h-full ">
          <div className="flex gap-[5px] ">
            <Image src={ster} alt="ster" className="fill-[#00BB00]  " />
            <Image src={ster} alt="ster" className="fill-[#00BB00]  " />
            <Image src={ster} alt="ster" className="fill-[#00BB00]  " />
            <Image src={ster} alt="ster" className="fill-[#00BB00]  " />
            <Image src={ster} alt="ster" className="fill-[#00BB00]  " />
          </div>
          <div className="flex flex-col justify-between gap-[16px] h-full ">
            <div>
              <p className="text-[#fff] text-[17px] font-[400] leading-[22px] ">
                {`"This is actually the best service that I've downloaded for
              browser, great work guys."`}
              </p>
            </div>
            <div className="flex justify-between ">
              <span
                className={`${ibm_plex_mono.className} text-[#fff] text-[16px] font-[500] leading-[24px] `}
              >
                Mhamad Mstafa
              </span>
              <span
                className={`${ibm_plex_mono.className} text-[#fff] text-[16px] font-[500] leading-[24px] hover:underline `}
              >
                Chrome store
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
