import { CarouselBanner } from "@/components/CrouselDynamicBanner";
import EmailSubscription2 from "@/components/EmailSubscription/EmailSubscription2";
import AccordionFaqs from "@/components/Shadcn/Accordian/accordion-09";
import { Separator } from "@/components/ui/separator";





export default function Faqs() {
    return (
        <div className="">

          
            <CarouselBanner
                title="Faqs"
                backgroundImage="/ThemePictures/bigsofa.webp"
                showCategory={false}
                minHeight="320px"
            />


          <div className="flex flex-col jutify-center items-center mt-10">
                <p className="text-gray-400  text-1xl tracking-[0.1em]">Ask Us Anything</p>
                <h1 className="text-4xl text-center ">Frequently Asked <br /> Questions</h1>
            </div>
            <div className="px-8 mt-12">
                 <AccordionFaqs />
            </div>


            <div>
                <EmailSubscription2 />
            </div>
           

           <div>
            <Separator />
           </div>
        
           
           

            
        </div>
    )
}