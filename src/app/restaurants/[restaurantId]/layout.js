import s from "@/styles/layouts/reatauraunt/style.module.scss";
import Tab from "@/components/tab/component";
import {getRestaurantById} from "@/services/api";

export default async function RestaurantPageLayout({children, params: {restaurantId}}) {

    const restaurant = await getRestaurantById(restaurantId);

    return (
        <div>

            <div className={s.restaurant}>

                <h2>{restaurant.name}</h2>

                <p className={s.description}>{restaurant.description}</p>

                <div className={s.tabs}>

                    <Tab path={`/restaurants/${restaurant.id}/menu`} name={'Меню'}/>

                    <Tab path={`/restaurants/${restaurant.id}/reviews`} name={'Отзывы'}/>

                </div>

            </div>

            {children}

        </div>
    )
}