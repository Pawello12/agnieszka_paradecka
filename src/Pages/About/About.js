import React from 'react';
import './About.scss';
import List from './List/List';
import {motion} from 'framer-motion';
import pageTransition from '../../config/pageTransition';

const content = {
    introduction: "(ur.1993, Bełchatów) ukończyła Liceum Plastyczne im. Katarzyny Kobro w Zduńskiej Woli. W latach 2013-2018 studiowała na Wydziale Tkaniny i Ubioru na Akademii Sztuk Pięknych w Łodzi – w 2016 obroniła pracę dyplomową w Pracowni Tkaniny Unikatowej prof. Włodzimierza Cygana, aneks w Pracowni Rysunku i Malarstwa prof. Andrzeja Sadowskiego." ,
    individualExhibitions : {
        name: "Wystawy indywidualne",
        items: ["2020 - „Tkanka snu”, Muzeum Historii Miasta Zduńska Wola, Zduńska Wola", "2019- Festiwal Sztuki Jabłka, Muzeum Regionalne, Bełchatów", "2016 – Wystawa Rysunku i Malarstwa; Miejska i Powiatowa Biblioteka Publiczna w Bełchatowie, Bełchatów"]
    },
    collectiveExhibitions: {
        name: "Wystawy zbiorowe",
        items: ["2020 - 5 Niezależny Salon Łódzkich Twórców, Galeria ASP, ul. Piotrkowska 68, Łódź", "2019 – „Wiele jest druk II etc. etc. etc.”, Ośrodek Działań Artystycznych, Piotrków Trybunalski", "2017 - Projekt „Na dwa koła”, Liceum Plastyczne im. Katarzyny Kobro w Zduńskiej Woli, Zduńska Wola", "2017 - Wystawa prac studentów Wydziału Tkaniny i Ubioru „Nowa przestrzeń – t+dt”; Filharmonia Łódzka, ul. Narutowicza 20/22, Łódź", "2016 - Wystawa prac studentów Pracowni Podstaw Kompozycji Wydziału Tkaniny i Ubioru, Galeria Kobro, Akademia Sztuk Pięknych, Łódź", "2016 - Expo Mazury, Ostróda 2016", "2016 - Tkaniny studentów ASP w Łodzi, Galeria Kobro, Akademia Sztuk Pięknych, Łódź"]
    },
    paragraphs: [
    //     `Swoją twórczość prezentowała na wystawach zbiorowych: „Tkaniny studentów ASP w Łodzi", Galeria Kobro, ASP
    // w Łodzi (2016); Targi Expo Mazury, Ostróda (2016); „Nowa przestrzeń” - wystawa prac studentów Wydziału
    // Tkaniny i Ubioru, Filharmoniia Łódzka (2017); Projekt „Na dwa koła”, Galeria Liceum Plastycznego im.
    // Katarzyny Kobro, Zduńska Wola (2017); „Wiele jest druk II etc. etc. etc.”, Ośrodek Działań
    // Artystycznych, Piotrków Trybunalski (2019). Ma również w dorobku artystycznym trzy wystawy indywidualne:
    // "Tkanka snu", Muzeum Historii Miasta Zduńska Wola (2020); „Koszmary i marzenia senne”, Festiwal Sztuki
    // Jabłka, Muzeum Regionalne, Bełchatów (2019) oraz wystawę rysunku i malarstwa w Miejskiej i Powiatowej
    // Bibliotece Publicznej w Bełchatowie (2016).`,

    `„W malarstwie inspiruję się rzeczywistością.
    Maluję miejsca, które są dla mnie ważne i pełne wspomnień. W mojej twórczości obok realistycznych
    pejzaży pojawiają się również obrazy abstrakcyjne inspirowane naturą. Podczas malowania stosuję przede
    wszystkim farby akrylowe."`,

    `"W tkaninie unikatowej skupiam się na konkretnym tworzywie, z którego wykonuje dany obiekt. W projektach tkanin drukowanych opieram się zazwyczaj na szkicach akwarelowych - na ich podstawie tworzę tkaninę."`
    ]
}

const About = () => {
    let key = 0;
    const paragraphs = content.paragraphs.map(paragraph => {
        key++;
        return(
            <p key={key} className="about__p">{paragraph}</p>
        )
    })

    return(

        <motion.main className="main main-about" initial={pageTransition.initial} animate={pageTransition.animate} exit={pageTransition.exit} transition={pageTransition.duration} >
            <section className="about" style={{overflowX: 'hidden'}}>
                <div className="about__image"></div>
                <article className="about__article">
                    <p className="about__introduction clearfix">{content.introduction}</p>
                    <List content={content.individualExhibitions} />
                    <List content={content.collectiveExhibitions} />
                    {paragraphs}
                </article>
            </section>
        </motion.main>

    )
}

export default About;