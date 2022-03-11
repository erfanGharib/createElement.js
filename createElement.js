const createElement = ({
        tagName = 'div', // tag name
        target = 'body', // target element
        targetIndex = 0, // element index
        insertType = 'child', // append as child, insert before, insert after
        inner = '', // inner html
        cls = '', // classes
        id = '',
        style = '',
        type = 'text',
        placeholder = '',
        eventName = '', // event name
        eventFunc = () => console.log('hello world!'), // function
        exeOnce = false // run once
    }) => {

    let target_element = document.querySelector(target);
    if(targetIndex !== 0) target_element = document.querySelectorAll(target)[targetIndex];
    const element = document.createElement(tagName);
    const insertType_ = insertType.toLowerCase();

    if (target_element === null) throw 'Can not set properties of null: target_element'

    element.innerHTML = inner;
    if (id !== '') element.id = id;
    if (style !== '') element.style = style;
    if (type !== '' && tagName === ('input' || 'button')) element.type = type;
    if (placeholder !== '' && tagName === ('input' || 'textarea')) element.placeholder = placeholder;
    if (typeof cls !== 'object' && cls !== '') element.classList.add(cls);
    else if (typeof cls === 'object') cls.forEach(value => element.classList.add(value));

    switch (insertType_) {
        case 'child':
            target_element.appendChild(element);
            break;
            
        case 'before':
            target_element.parentNode.insertBefore(element, target_element);
            break;
            
        case 'after':
            target_element.parentNode.insertBefore(element, target_element.nextSibling);
            break;

        default:
            throw 'Unknown append type. Accepted: "child", "before", "after"';
    }

    if(eventName !== '')
        element.addEventListener(eventName, eventFunc, {once: exeOnce});
}

export default createElement;