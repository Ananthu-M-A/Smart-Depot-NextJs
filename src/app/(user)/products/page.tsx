import Filters from "@/components/Filters";
import ProductsList from "@/components/ProductsList";
import Sort from "@/components/Sort";

export default function Products() {
    return (
        <div className="flex">
            <Sort />
            <Filters />
            <ProductsList />
        </div>
    );
}
