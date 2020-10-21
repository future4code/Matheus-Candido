import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import { countries, country } from './countries'
import { AddressInfo } from 'net'

const app: Express = express()
app.use(express.json())
app.use(cors())

app.get("/countries/all", (req: Request, res: Response) => {
    res.status(200).send(countries)
})


app.get("/countries/search", (req: Request, res: Response) => {
    try {
        if (req.query.name) {
            const result: country[] = countries.filter(
                country => country.name.includes(String(req.query.name))
            )
            res.status(200).send(result)
        }
        if (req.query.capital) {
            const result: country[] = countries.filter(
                country => country.capital.includes(String(req.query.capital))
            )
            res.status(200).send(result)
        }
        if (req.query.continent) {
            const result: country[] = countries.filter(
                country => country.continent.includes(String(req.query.continent))
            )
            res.status(200).send(result)
        }
    } catch (error) {
        res.status(404).send("Country not found")
    }
})

app.get("/countries/:id", (req: Request, res: Response) => {
    const result: country | undefined = countries.find(
        country => country.id === Number(req.params.id)
    )
    if (result) {
        res.status(200).send(result)
    } else {
        res.status(404).send("Not found")
    }
})
app.put("/countries/edit/:id", (req: Request, res: Response) => {
    let errorCode: number = 400
    try {
        if (!req.body.name && !req.body.capital) {
            errorCode = 401
            throw new Error("Erro");
        }
        else if (req.body.name && req.body.capital) {
            const result: country | undefined = countries.find(
                country => country.id === Number(req.params.id)
            )
            res.status(200).send(countries)
        }
    }
    catch (error) {
        res.status(errorCode).send(countries)
    }
})

app.delete("/countries/:id", (req: Request, res: Response) => {
    let errorCode: number = 400
    try {
        if (!req.headers.authorization) {
            errorCode = 401
            throw new Error()
        }
        const countryIndex: number = countries.findIndex(
            (country) => country.id === Number(req.params.id)
        )
        if (countryIndex === -1) {
            errorCode = 404
            throw new Error();

        }
        if (req.headers.authorization === "hsoeu460173") {
            countries.splice(countryIndex, 1)

            res.status(200).end()
        }

    } catch (error) {
        res.status(errorCode).end()
    }
})

app.post("/countries/create", (req: Request, res: Response) => {
    let errorCode: number = 400
    try {
        if (!req.headers.authorization) {
            errorCode = 401
            throw new Error()
        }
        // const countryIndex: number = countries.findIndex(
        //     (country) => country.id === Number(req.params.id)
        // )
        // if (countryIndex === -1) {
        //     errorCode = 404
        //     throw new Error();
        // }
        if (req.headers.authorization === "hsoeu460173") {
            countries.push(req.body)
            res.status(200).send(`message: Sucess! ${ req}`)
        }
    } catch (error) {
        res.status(errorCode).end()
    }
})

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`)
    } else {
        console.error(`Failure upon starting server.`)
    }
})