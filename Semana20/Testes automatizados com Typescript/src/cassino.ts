import { Casino, LOCATION, NACIONALITY, Result, User1 } from "./model/cassinoModel";

export function verifyAge(casino: Casino, users: User1[]): Result {
    const allowed: User1[] = [];
    const unallowed: User1[] = [];

    for (const user of users) {
        if (casino.location === LOCATION.EUA) {
            if (user.age >= 21) {
                allowed.push(user);
            } else {
                unallowed.push(user);
            }
        } else if (casino.location === LOCATION.BRAZIL) {
            if (user.age >= 18) {
                allowed.push(user);
            } else {
                unallowed.push(user);
            }
            break;
        }
    }

    return {
        brazilians: {
            allowed: allowed
                .filter((user) => user.nacionality === NACIONALITY.BRAZILIAN)
                .map((u) => u.name),
            unallowed: unallowed
                .filter((user) => user.nacionality === NACIONALITY.BRAZILIAN)
                .map((u) => u.name),
        },
        americans: {
            allowed: allowed
                .filter((user) => user.nacionality === NACIONALITY.AMERICAN)
                .map((u) => u.name),
            unallowed: unallowed
                .filter((user) => user.nacionality === NACIONALITY.AMERICAN)
                .map((u) => u.name),
        },
    };
}

export default verifyAge