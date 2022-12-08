import { useEffect, useState } from "react"

export const ClassNameChange = (select: string[]) => {

    const [state, setState] = useState('0')

    useEffect(() => {

        const allElements = document.querySelectorAll(select[0])

        function toggleClass (this: HTMLButtonElement) {
            const attribute = this.getAttribute(select[2]) as string
            allElements.forEach((element) => {
                const newAtt = element.getAttribute(select[2]) as string
                if(newAtt !== attribute){
                    setState(attribute)
                    element.classList.remove(select[1])
                }else
                    element.classList.add(select[1])
            })
        }

        if(allElements.length > 0)
            allElements.forEach((element, idx) => {
                element.setAttribute(select[2], idx.toString())
                element.addEventListener('click', toggleClass)
            })
        
        return () => {
            allElements.forEach(element => element.removeEventListener('click', toggleClass))
        }

    }, [state, setState, select])

    return [state]

}