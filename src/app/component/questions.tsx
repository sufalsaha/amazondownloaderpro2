// /* eslint-disable react/no-unescaped-entities */
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionDemo() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full flex flex-col gap-[20px] "
    >
      <AccordionItem value="item-1 ">
        <AccordionTrigger className="text-[#fff] bg-[#272C31] data-[state=open]:bg-red-400 px-[20px] rounded-[5px] data-[state=open]:rounded-b-none hover:no-underline cursor-pointer relative group">
          <span className="text-[#fff] text-[18px] font-[600] leading-[26px]">
            Correction Analysis Design
          </span>
          <div className="w-[35px] h-[35px] bg-[#FF6467] absolute right-[14px] top-[12px] rounded-[50px] opacity-30 group-data-[state=open]:bg-gray-700  "></div>
        </AccordionTrigger>
        <AccordionContent className=" bg-[#272C31] px-[20px] rounded-t-[0px] rounded-b-[5px] p-[30px] ">
          <span className="text-[#E2E6EC] text-[16px] font-[400] leading-[28spx]">
            Yes. It adheres to the WAI-ARIA design pattern. Yes. It adheres to
            the WAI-ARIA design pattern. Yes. It adheres to the WA-ARIA design
            pattern. Yes. It adheres to the WAI-ARIA design pattern. Yes. It
            adheres to the WAI-ARIA design pattern. Yes. It adheres to the
            WAI-ARIA design pattern. Yes. It adheres to the WAI-ARIA design
            pattern. Yes. It adheres to the WAI-ARIA design pattern. Yes. It
            adheres to the WAI-ARIA design pattern. Yes. It adheres to the
            WAI-ARIA design pattern. Yes. It adheres to the WAI-ARIA design
            pattern. Yes. It adheres to the WAI-ARIA design pattern.
          </span>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2 ">
        <AccordionTrigger className="text-[#fff] bg-[#272C31] data-[state=open]:bg-red-400 px-[20px] rounded-[5px] data-[state=open]:rounded-b-none hover:no-underline cursor-pointer relative group">
          <span className="text-[#fff] text-[18px] font-[600] leading-[26px]">
            Correction Analysis Design
          </span>
          <div className="w-[35px] h-[35px] bg-[#FF6467] absolute right-[14px] top-[12px] rounded-[50px] opacity-30 group-data-[state=open]:bg-gray-700  "></div>
        </AccordionTrigger>
        <AccordionContent className=" bg-[#272C31] px-[20px] rounded-t-[0px] rounded-b-[5px] p-[30px] ">
          <span className="text-[#E2E6EC] text-[16px] font-[400] leading-[28spx]">
            Yes. It adheres to the WAI-ARIA design pattern. Yes. It adheres to
            the WAI-ARIA design pattern. Yes. It adheres to the WA-ARIA design
            pattern. Yes. It adheres to the WAI-ARIA design pattern. Yes. It
            adheres to the WAI-ARIA design pattern. Yes. It adheres to the
            WAI-ARIA design pattern. Yes. It adheres to the WAI-ARIA design
            pattern. Yes. It adheres to the WAI-ARIA design pattern. Yes. It
            adheres to the WAI-ARIA design pattern. Yes. It adheres to the
            WAI-ARIA design pattern. Yes. It adheres to the WAI-ARIA design
            pattern. Yes. It adheres to the WAI-ARIA design pattern.
          </span>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3 ">
        <AccordionTrigger className="text-[#fff] bg-[#272C31] data-[state=open]:bg-red-400 px-[20px] rounded-[5px] data-[state=open]:rounded-b-none hover:no-underline cursor-pointer relative group">
          <span className="text-[#fff] text-[18px] font-[600] leading-[26px]">
            Correction Analysis Design
          </span>
          <div className="w-[35px] h-[35px] bg-[#FF6467] absolute right-[14px] top-[12px] rounded-[50px] opacity-30 group-data-[state=open]:bg-gray-700  "></div>
        </AccordionTrigger>
        <AccordionContent className=" bg-[#272C31] px-[20px] rounded-t-[0px] rounded-b-[5px] p-[30px] ">
          <span className="text-[#E2E6EC] text-[16px] font-[400] leading-[28spx]">
            Yes. It adheres to the WAI-ARIA design pattern. Yes. It adheres to
            the WAI-ARIA design pattern. Yes. It adheres to the WA-ARIA design
            pattern. Yes. It adheres to the WAI-ARIA design pattern. Yes. It
            adheres to the WAI-ARIA design pattern. Yes. It adheres to the
            WAI-ARIA design pattern. Yes. It adheres to the WAI-ARIA design
            pattern. Yes. It adheres to the WAI-ARIA design pattern. Yes. It
            adheres to the WAI-ARIA design pattern. Yes. It adheres to the
            WAI-ARIA design pattern. Yes. It adheres to the WAI-ARIA design
            pattern. Yes. It adheres to the WAI-ARIA design pattern.
          </span>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4 ">
        <AccordionTrigger className="text-[#fff] bg-[#272C31] data-[state=open]:bg-red-400 px-[20px] rounded-[5px] data-[state=open]:rounded-b-none hover:no-underline cursor-pointer relative group">
          <span className="text-[#fff] text-[18px] font-[600] leading-[26px]">
            Correction Analysis Design
          </span>
          <div className="w-[35px] h-[35px] bg-[#FF6467] absolute right-[14px] top-[12px] rounded-[50px] opacity-30 group-data-[state=open]:bg-gray-700  "></div>
        </AccordionTrigger>
        <AccordionContent className=" bg-[#272C31] px-[20px] rounded-t-[0px] rounded-b-[5px] p-[30px] ">
          <span className="text-[#E2E6EC] text-[16px] font-[400] leading-[28spx]">
            Yes. It adheres to the WAI-ARIA design pattern. Yes. It adheres to
            the WAI-ARIA design pattern. Yes. It adheres to the WA-ARIA design
            pattern. Yes. It adheres to the WAI-ARIA design pattern. Yes. It
            adheres to the WAI-ARIA design pattern. Yes. It adheres to the
            WAI-ARIA design pattern. Yes. It adheres to the WAI-ARIA design
            pattern. Yes. It adheres to the WAI-ARIA design pattern. Yes. It
            adheres to the WAI-ARIA design pattern. Yes. It adheres to the
            WAI-ARIA design pattern. Yes. It adheres to the WAI-ARIA design
            pattern. Yes. It adheres to the WAI-ARIA design pattern.
          </span>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5 ">
        <AccordionTrigger className="text-[#fff] bg-[#272C31] data-[state=open]:bg-red-400 px-[20px] rounded-[5px] data-[state=open]:rounded-b-none hover:no-underline cursor-pointer relative group">
          <span className="text-[#fff] text-[18px] font-[600] leading-[26px]">
            Correction Analysis Design
          </span>
          <div className="w-[35px] h-[35px] bg-[#FF6467] absolute right-[14px] top-[12px] rounded-[50px] opacity-30 group-data-[state=open]:bg-gray-700  "></div>
        </AccordionTrigger>
        <AccordionContent className=" bg-[#272C31] px-[20px] rounded-t-[0px] rounded-b-[5px] p-[30px] ">
          <span className="text-[#E2E6EC] text-[16px] font-[400] leading-[28spx]">
            Yes. It adheres to the WAI-ARIA design pattern. Yes. It adheres to
            the WAI-ARIA design pattern. Yes. It adheres to the WA-ARIA design
            pattern. Yes. It adheres to the WAI-ARIA design pattern. Yes. It
            adheres to the WAI-ARIA design pattern. Yes. It adheres to the
            WAI-ARIA design pattern. Yes. It adheres to the WAI-ARIA design
            pattern. Yes. It adheres to the WAI-ARIA design pattern. Yes. It
            adheres to the WAI-ARIA design pattern. Yes. It adheres to the
            WAI-ARIA design pattern. Yes. It adheres to the WAI-ARIA design
            pattern. Yes. It adheres to the WAI-ARIA design pattern.
          </span>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
