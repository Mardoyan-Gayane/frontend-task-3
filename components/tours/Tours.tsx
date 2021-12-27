import {Tour, TourBlock} from "./Tour";
import {useState} from "react"


const ourTours: TourBlock[] = [
    {
        class: "tour",
        title: "Название",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium orci at rutrum pellentesque.",
        price: "10000",
    },
    {
        class: "tour",
        title: "Название",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium orci at rutrum pellentesque.",
        price: "10000",
    },
    {
        class: "tour",
        title: "Название",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium orci at rutrum pellentesque.",
        price: "10000",
    },
    {
        class: "tour   tour--hidden",
        title: "Название",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium orci at rutrum pellentesque.",
        price: "10000",
    },
    {
        class: "tour   tour--hidden",
        title: "Название",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium orci at rutrum pellentesque.",
        price: "10000",
    },
    {
        class: "tour   tour--hidden",
        title: "Название",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium orci at rutrum pellentesque.",
        price: "10000",
    }
]

export function Tours() {

    const [buttonName, setButtonName] = useState("Больше")
    const [clickButtonMoreTours, setclickButtonMoreTours] = useState(false)
    const ClickMoreTours = () => {
        if (buttonName == "Больше") {
            setButtonName("Меньше")
            setclickButtonMoreTours(!clickButtonMoreTours)
        } else {
            setButtonName("Больше")
            setclickButtonMoreTours(!clickButtonMoreTours)
        }
    }

    return (
        <section id="tours" className="tours">
            <h3 className="tours__title">
                Туры
            </h3>
            <div className={`tours__list${clickButtonMoreTours ? ' tours_list--all-hidden-visible' : ''}`}>
                {
                    ourTours.map((item: TourBlock, index: number) =>
                        <Tour tour={item} key={`tours_${index}`}/>
                    )
                }
                    <button type="button" className="btn--toggle-items" onClick={ClickMoreTours}>{buttonName} туров</button>
            </div>
        </section>
    )
}