// import AboutUsCard from "@/components/Card/AboutUsCard";

import { CarouselBanner } from "@/components/CrouselDynamicBanner";
import HeroContactPageSection from "@/components/HeroContactPageSection/HeroContactPageSection";
import NewsLetterEmailSection from "@/components/NewsLetterEmailSection/NewsLetterEmailSection";


import TeamCard from "@/components/TeamCard/TeamCard";
import TextImageSection from "@/components/TextImageSection/TextImageSection";


export default function AboutUs() {
    return (
        <div className="">

            <CarouselBanner
                title="About Us"
                backgroundImage="/ThemePictures/bigsofa.webp"
                showCategory={false}
                minHeight="320px"
            />
            <div className="px-4">
                <TextImageSection
                    flexReversed={false}
                    title={"Our Story"}
                    subtitle={"THE HIGH STRESS FAVOURITE"}
                    image={"ThemePictures/girl1.webp"}
                    description={"Praesent metus tellus, elementum eu, semper a, adipiscing nec, purus. Vestibulum volutpat pretium libero. In ut quam vitae odio lacinia tincidunt. Etiam ut purus mattis mauris sodales aliquam. Aenean massa.   In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Vivamus consectetuer hendrerit lacus. In hac habitasse platea dictumst. Ut tincidunt tincidunt erat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit."}
                />
            </div>


            <div className="px-4">
                <TextImageSection
                    flexReversed={true}
                    title={"Who Are We ?"}
                    subtitle={"THE HIGH STRESS FAVOURITE"}
                    image={"ThemePictures/girl2.webp"}
                    description={"Praesent metus tellus, elementum eu, semper a, adipiscing nec, purus. Vestibulum volutpat pretium libero. In ut quam vitae odio lacinia tincidunt. Etiam ut purus mattis mauris sodales aliquam. Aenean massa.   In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Vivamus consectetuer hendrerit lacus. In hac habitasse platea dictumst. Ut tincidunt tincidunt erat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit."}
                />


            </div>

            <div className="mt-15">
                <HeroContactPageSection />

            </div>

            <div className="flex flex-col mt-22 items-center justify-center text-center px-4 sm:px-8 md:px-16 lg:px-32">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4">
                    Behind The Brands
                </h1>

                <p className="text-sm sm:text-base md:text-md text-gray-600 max-w-6xl leading-relaxed">
                    We are a female-founded, 100% woman-led team of collaborative dreamers who value innovation,
                    curiosity and free-thinking fearlessness in everything that we do. We take immeasurable pride
                    in our work, intentionally stitching love into the very fiber and fabric of our designs. We are
                    small, but we are a mighty group of talented individuals dedicated to bringing you otherworldly
                    designs with imagery to match.
                </p>

                <span className="block h-[2px] mt-4 w-12 bg-black"></span>
            </div>


            <div className="flex gap-4  flex-col md:flex-row px-4 justify-between items-center mt-15">
                <TeamCard
                    image="ThemePictures/team1.png"
                    name="Ferguson"
                    role="Designer"
                    socials={{
                        facebook: "https://facebook.com/username",
                        twitter: "https://twitter.com/username",
                        instagram: "https://instagram.com/username",
                        linkedin: "https://linkedin.com/in/username"
                    }}
                />
                <TeamCard
                    image="ThemePictures/team2.png"
                    name="Saga Noren"
                    role="Developer"
                    socials={{
                        facebook: "https://facebook.com/username",
                        twitter: "https://twitter.com/username",
                        instagram: "https://instagram.com/username",
                        linkedin: "https://linkedin.com/in/username"
                    }}
                />
                <TeamCard
                    image="ThemePictures/team3.png"
                    name="Karen Ryan"
                    role="Designer"
                    socials={{
                        facebook: "https://facebook.com/username",
                        twitter: "https://twitter.com/username",
                        instagram: "https://instagram.com/username",
                        linkedin: "https://linkedin.com/in/username"
                    }}
                />
            </div>

            <div className="mt-10">
                 <NewsLetterEmailSection />
            </div>
           


        </div>
    )
}