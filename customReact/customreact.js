function customRender(reactElement, container) {
    /*
    const domElement = document.createElement(reactElement.type);   // modular function
    domElement.innerHTML = reactElement.children;
    domElement.setAttribute('href', reactElement.props.href);
    domElement.setAttribute('target', reactElement.props.target);

    container.appendChild(domElement);
    */


    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;

    for(const prop in reactElement.props) {
        if(prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop]);

    }

    container.appendChild(domElement);
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_black',
        children: 'Hello world'
    },
    children: 'Click me to visit google'
}

const mainContainer = document.getElementById('root');

customRender(reactElement, mainContainer);
// render method used to inject the elements(reactElement) in the maincontainer