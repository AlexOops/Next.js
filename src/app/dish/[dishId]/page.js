import {DishFullDescription} from "@/components/dishFullDescription/component";
import {getDish} from "@/services/api";

export default async function DishPage({params: {dishId}}) {

    const dish = await getDish(dishId);

    return (
        <div>
            <DishFullDescription dish={dish}/>
        </div>
    );
};