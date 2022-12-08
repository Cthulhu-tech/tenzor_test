export const ChangeElements = (elementsClass: string, childNode: Node) => {

    const element = document.querySelector(elementsClass) as Element;

    element.replaceChildren()
    
    element.appendChild(childNode)

}