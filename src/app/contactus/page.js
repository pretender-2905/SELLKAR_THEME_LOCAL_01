import ContactMapSection from "@/components/ContactMapSection/ContactMapSection";
import { CarouselBanner } from "@/components/CrouselDynamicBanner";
import ContactForm2 from "@/components/Form/ContactForm2";
import NewsLetterEmailSection from "@/components/NewsLetterEmailSection/NewsLetterEmailSection";




export default function ContactUs() {
    return (
        <div className="">

            <CarouselBanner
                title="Contact Us"
                backgroundImage="/ThemePictures/bigsofa.webp"
                showCategory={false}
                minHeight="320px"
            />
        
           
            <div className="mt-14 px-4">
                <ContactMapSection />
            </div>

            <div>
                <ContactForm2 />
            </div>

             <div className="mt-10">
                 <NewsLetterEmailSection />
            </div>

        </div>
    )
}