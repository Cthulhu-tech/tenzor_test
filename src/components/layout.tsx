import { Description } from "./description/description"
import { WorkingInfo } from "./workingInfo/workingInfo"
import { Gallery } from "./gallery/gallery"
import { Footer } from "./footer/footer"
import { Header } from "./header/header"
import { Screen } from "./screen/screen"
import { About } from "./about/about"
import { Menu } from "./menu/menu"

export const Layout = () => {
    return <>
        <Header/>
        <main>
            <Screen/>
            <About/>
            <Menu/>
            <WorkingInfo/>
            <Gallery/>
            <Description/>
            <Footer/>
        </main>
    </>
}
