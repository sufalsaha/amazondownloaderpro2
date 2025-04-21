/* eslint-disable react/no-unescaped-entities */
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full ">
      <AccordionItem value="item-1 ">
        <AccordionTrigger className=" bg-[#82ec0a] px-[20px] rounded-[3px]  ">
          Is it accessible?
        </AccordionTrigger>
        <AccordionContent className=" bg-[#fff] px-[20px] rounded-t-[0px] rounded-b-[5px] ">
          Yes. It adheres to the WAI-ARIA design pattern. Yes. It adheres to the
          WAI-ARIA design pattern. Yes. It adheres to the WA-ARIA design
          pattern. Yes. It adheres to the WAI-ARIA design pattern. Yes. It
          adheres to the WAI-ARIA design pattern. Yes. It adheres to the
          WAI-ARIA design pattern. Yes. It adheres to the WAI-ARIA design
          pattern. Yes. It adheres to the WAI-ARIA design pattern. Yes. It
          adheres to the WAI-ARIA design pattern. Yes. It adheres to the
          WAI-ARIA design pattern. Yes. It adheres to the WAI-ARIA design
          pattern. Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It's animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
