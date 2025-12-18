import ProductCarousel from "@/components/ProductCardCarousel/ProductCarousel";
import { products } from "@/components/ProductsCard/ProductsData";
import ShoppingCartTable from "@/components/ShoppingCart/ShoppingCartTable";
import SpecialInstructionsCard from "@/components/ShoppingCart/SpecialInstructionCard";


export default function ShoppingCart(){
    return(
        <div className="min-h-screen container mx-auto">
            
            <div>
                <ShoppingCartTable />
                <div className="mt-20"> 
                     <ProductCarousel products={products.slice(0, 12)} title="You May Also Like" />
                </div>
               
                
            </div>
        </div>
    )
}