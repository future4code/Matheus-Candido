import React from 'react'
import { useHistory } from 'react-router-dom'
import { useTripList } from '../../Hooks/useTripsList';
import './styles.scss'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Main, DivMenu, DivMap, Buttons, ButtonsMenu } from './styles'

export default function ListTripsPage() {
    const trips = useTripList()

    const history = useHistory()
    const token = window.localStorage.getItem("token")

    const goToback = () => {
        history.goBack()
    }
    const goToHome = () => {
        history.push("/")
    }
    const goToDetailsTrip = (history, id) => {
        history.push(`/trips/details/${id}`)
        console.log(id)
    }
    const goToApplicationForm = (history, id) => {
        history.push(`/application-form/${id}`)
        console.log(id)
    }

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            paritialVisibilityGutter: 60
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            paritialVisibilityGutter: 50
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            paritialVisibilityGutter: 30
        }
    };
    const settings = {
        infinite: true,
        autoPlay: true
    }
    return (
        <Main>
            <DivMenu>
                <span>ListTripsPage</span>
                <ButtonsMenu onClick={goToback} >Voltar</ButtonsMenu>
                <ButtonsMenu onClick={goToHome}>Home</ButtonsMenu>
            </DivMenu>
            <div>
                <Carousel
                    responsive={responsive}
                    {...settings}
                >
                    {trips.map(t => {
                        return (
                            <DivMap key={t.id}>
                                <h1>{t.name}</h1>
                                <h2>Planeta: {t.planet}</h2>
                                {
                                    token ?
                                        <Buttons onClick={() => goToDetailsTrip(history, t.id)}>Detalhes</Buttons> :
                                        <Buttons onClick={() => goToApplicationForm(history, t.id)}>Me inscrever</Buttons>
                                }
                            </DivMap>
                        )
                    })}
                </Carousel>
            </div>
        </Main >
    )
}