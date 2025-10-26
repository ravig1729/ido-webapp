import TopBanner from "@/components/layouts/TopBanner.tsx";
import TopBar from "@/components/layouts/TopBar";
import CtaArea from "@/components/layouts/CtaArea.tsx";
import Footer from "@/components/layouts/Footer";
import {ChildrenType} from "@/types/component-props.ts";
import BackToTop from "@/components/BackToTop.tsx";
import FloatingVolunteerButton from "@/components/FloatingVolunteerButton.tsx";
import {Suspense} from "react";
import Loader from "@/components/Loader.tsx";

const MainLayout = ({children}: ChildrenType) => {
    return (
        <>
            <Suspense fallback={<Loader/>}>
                <TopBanner/>
                <TopBar/>
                {children}
                <CtaArea/>
                <Footer/>
                <BackToTop/>
                <FloatingVolunteerButton/>
            </Suspense>
        </>
    )
}

export default MainLayout