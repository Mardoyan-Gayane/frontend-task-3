export interface AttractionBlock {
    title: string
    image: string
    description: string
}

export interface AttractionProps {
    attraction: AttractionBlock
}

export function Attraction(props: AttractionProps) {
    return (
        <div className="block__item">
            <div className="block__boximg">
                <img className="block__img" src={props.attraction.image}/>
            </div>
            <div className="block__boxtext">
                <h3 className="block__nameItem">{props.attraction.title}</h3>
                <p className="block__textItem">{props.attraction.description}</p>
            </div>
        </div>
    )
}