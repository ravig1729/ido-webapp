import glightbox from 'glightbox'
import {ReactNode, useEffect} from 'react'

type PropsType = {
    children: ReactNode
}

const GlightBox = ({children}: PropsType) => {

    useEffect(() => {
        const instance = glightbox({
            openEffect: 'fade',
            closeEffect: 'fade',
        })

        return () => instance.destroy()
    }, [])

    return (
        <>
            {children}
        </>
    )
}
export default GlightBox
