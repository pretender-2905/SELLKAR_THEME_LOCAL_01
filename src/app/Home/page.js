"use client"
import HeroCarousel from "@/components/BootStrap/HeroCarousel/HeroCarousel.jsx";
import { heroSlides } from "@/components/BootStrap/HeroCarousel/HeroData.js";
import ImageOverlayCard from "@/components/BootStrap/ImageOverlayCard/ImageOverlayCard";
import EmailSubscription from "@/components/EmailSubscription/EmailSubscription";
import Carouselimages from "@/components/PictureCarousel/CarouselImages";
import PictureCarousel from "@/components/PictureCarousel/PictureCarousel";
import ProductList from "@/components/ProductList/ProductList";
import ProductTabs from "@/components/ProductTabs/ProductTabs";
import { products } from '@/components/ProductsCard/ProductsData.js'
import ShippingFeatures from "@/components/ShippingFeatures/ShippingFeatures";
import { Separator } from "@/components/ui/separator";
import { SelectSeparator } from "@radix-ui/react-select";




export default function Home() {
    return (
        <div className="px-4">

            <HeroCarousel
                slides={heroSlides}
                autoPlay={false}
                interval={5000}
                showIndicators={true}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 ">

                <div>
                    <ImageOverlayCard
                        image="/ThemePictures/chair1.jpeg"
                        title="Chair Collection"
                        buttonText="SHOP NOW"
                        overlayPosition="bottom-left"
                        onButtonClick={() => alert("Button clicked!")}
                    />
                </div>

                <div>
                    <ImageOverlayCard
                        image="/ThemePictures/Lamp.jpeg"
                        title="Lamp Collection"
                        buttonText="SHOP NOW"
                        overlayPosition="center"
                        onButtonClick={() => alert("Button clicked!")}
                    />

                </div>

                <div>

                    <ImageOverlayCard
                        image="/ThemePictures/Desk.jpeg"
                        title="Desk Collection"
                        buttonText="SHOP NOW"
                        overlayPosition="bottom-right"
                        onButtonClick={() => alert("Button clicked!")}
                    />

                </div>
            </div>


            <div className="container mx-auto px-4 py-10">
                <ProductTabs products={products} />
            </div>


            <ProductList products={products} />

            <PictureCarousel images={Carouselimages} />

            <EmailSubscription />

            <ShippingFeatures  />


            <Separator />

         


        </div>

    )
}