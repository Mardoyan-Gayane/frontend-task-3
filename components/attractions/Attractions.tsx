import {Attraction, AttractionBlock} from "./Attraction";

const ourAttractions: AttractionBlock[] = [
    {
        title: "Тропа предков",
        image: "img/sightseens.png",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero velitodit ipsum, necessitatibus labore culpa voluptas, placeat iusto eos magni cumque ex numquamdeserunt quam quod deleniti molestias earum perspiciatis?Minima eum id nisi impedit eligendi porro amet, tenetur ipsam veritatis, sequi nam quas delenitiminus at esse vitae repellat nulla reprehenderit labore ipsa illum sint! Exercitationem officiadeserunt amet.Eum expedita enim velit exercitationem esse voluptatum sapiente, aut rem molestias istedoloribus neque? Nisi delectus est perferendis vel vero commodi quaerat error tempora quasi,tempore molestias blanditiis expedita mollitia?Quidem nemo ullam dicta dolor voluptas?"
    },
    {
        title: "Озеро Беле",
        image: "img/sightseens.png",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero velitodit ipsum, necessitatibus labore culpa voluptas, placeat iusto eos magni cumque ex numquamdeserunt quam quod deleniti molestias earum perspiciatis?Minima eum id nisi impedit eligendi porro amet, tenetur ipsam veritatis, sequi nam quas delenitiminus at esse vitae repellat nulla reprehenderit labore ipsa illum sint! Exercitationem officiadeserunt amet.Eum expedita enim velit exercitationem esse voluptatum sapiente, aut rem molestias istedoloribus neque? Nisi delectus est perferendis vel vero commodi quaerat error tempora quasi,tempore molestias blanditiis expedita mollitia?Quidem nemo ullam dicta dolor voluptas?"
    },
    {
        title: "Сундуки",
        image: "img/sightseens.png",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero velitodit ipsum, necessitatibus labore culpa voluptas, placeat iusto eos magni cumque ex numquamdeserunt quam quod deleniti molestias earum perspiciatis?Minima eum id nisi impedit eligendi porro amet, tenetur ipsam veritatis, sequi nam quas delenitiminus at esse vitae repellat nulla reprehenderit labore ipsa illum sint! Exercitationem officiadeserunt amet.Eum expedita enim velit exercitationem esse voluptatum sapiente, aut rem molestias istedoloribus neque? Nisi delectus est perferendis vel vero commodi quaerat error tempora quasi,tempore molestias blanditiis expedita mollitia?Quidem nemo ullam dicta dolor voluptas?"
    },

]

export function Attractions() {
    return (
        <section id="attractions" className="block">
            <h2 className="block__title">Достопримечательности</h2>
            <div className="block__container">
                {
                    ourAttractions.map((item: AttractionBlock, index: number) =>
                        <Attraction attraction={item} key={`attraction_${index}`} />
                    )
                }
            </div>
        </section>
    )
}