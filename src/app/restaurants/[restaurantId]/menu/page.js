import {getMenu} from "@/services/api";
import {Menu} from "@/components/menu/component";

export default async function MenuPage({params: {restaurantId}}) {

    const dishes = await getMenu(restaurantId);

    return (
        <div>
            <Menu dishes={dishes}/>
        </div>
    );
};
