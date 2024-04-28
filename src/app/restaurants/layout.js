import s from "@/styles/layouts/restaurants/style.module.scss";
import {getRestaurants} from "@/services/api";
import Tab from "@/components/tab/component";

export default async function RestaurantsPageLayout({children}) {

    const restaurants = await getRestaurants();

    return (
        <div>
            <div className={"container"}>

                <div className={s.restaurants}>
                    <div className={s.description}>
                        <h2 className={s.title}>Наши лучшие рестораны</h2>
                        <p className={s.text}>
                            Выбирайте и наслаждайтесь: от изысканных блюд до домашних вкусов, доставленных прямо к вашей
                            двери.
                            Ваше следующее кулинарное приключение начинается здесь, с нашей коллекцией лучших
                            ресторанов.
                        </p>
                    </div>

                    <div className={s.restaurantTabs}>
                        {restaurants.map(restaurant => (
                            <div key={restaurant.id}>
                                <Tab path={`/restaurants/${restaurant.id}`}
                                     name={restaurant.name}
                                     navigate={'/menu'}
                                />
                            </div>
                        ))}
                    </div>

                    {children}

                </div>
            </div>
        </div>
    );
};