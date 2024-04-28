export async function getRestaurants() {

    const res = await fetch('http://localhost:3005/api/restaurants');

    if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
    }

    return await res.json();
}

export async function getRestaurantById(restaurantId) {

    const res = await fetch(`http://localhost:3005/api/restaurant/${restaurantId}`);

    if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
    }

    return await res.json();
}

export async function getMenu(restaurantId) {

    const res = await fetch(`http://localhost:3005/api/dishes?restaurantId=${restaurantId}`);

    if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
    }

    return await res.json();
}

export async function getReviews(restaurantId) {

    const res = await fetch(`http://localhost:3005/api/reviews?restaurantId=${restaurantId}`, {
        cache: "no-cache"
    });

    if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
    }

    return await res.json();
}

export async function getUsers() {

    const res = await fetch("http://localhost:3005/api/users/");

    return await res.json();
}

export async function createReview(restaurantId, newReview) {

    try {
        const res = await fetch(`http://localhost:3005/api/review/${restaurantId}`, {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify(newReview)
        });

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        return await res.json();

    } catch (error) {
        console.error("Failed to submit review:", error);

        throw error;
    }
}

export async function getDish(dishId) {

    const res = await fetch(`http://localhost:3005/api/dish/${dishId}`);

    if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
    }

    return await res.json();
}
