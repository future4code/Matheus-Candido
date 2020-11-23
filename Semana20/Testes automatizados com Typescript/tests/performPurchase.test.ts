import { User } from "../src/model/user"
import performPurchase from "../src/performPurchase"

describe("Holla mundo", () => {
    test("Testing balance greater than value", () => {
        const user: User = {
            name: "Astrodev",
            balance: 100
        }

        const result = performPurchase(user, 70)

        expect(result).toEqual({
            ...user,
            balance: 30
        })
    })

    test("Testing balance greater than value", () => {
        const user: User = {
            name: "Astrodev",
            balance: 50
        }

        const result = performPurchase(user, 50)

        expect(result).toEqual({
            ...user,
            balance: 0
        })
    })

    test("Testing balance greater than value", () => {
        const user: User = {
            name: "Astrodev",
            balance: 30
        }

        const result = performPurchase(user, 50)

        expect(result).toEqual(undefined)
    })
})