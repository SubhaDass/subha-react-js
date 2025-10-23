
function customRender(reactEle, container){
    /*
    const domElement = document.createElement(reactEle.type)
    domElement.innerHTML = reactEle.children

    domElement.setAttribute('href', reactEle.props.href)
    domElement.setAttribute('target', reactEle.props.target)

    container.appendChild(domElement)
    */

    const domElement = document.createElement(reactEle.type)
    domElement.innerHTML = reactEle.children
    for (const _prop in reactEle.props) {
        if (_prop === 'children') continue; 
        domElement.setAttribute(_prop, reactEle.props[_prop])
    }
    container.appendChild(domElement)
}

const reactElement = {
    type: 'A',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
        children: 'click to visit google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)
