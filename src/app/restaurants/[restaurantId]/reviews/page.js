import {getReviews, getUsers} from "@/services/api";
import {Reviews} from "@/components/reviews/component";

export default async function ReviewsPage({params: {restaurantId}}) {

    const reviews = await getReviews(restaurantId);
    const users = await getUsers();

    return (
        <div>
            <Reviews data={reviews} users={users} restaurantId={restaurantId}/>
        </div>
    );
};