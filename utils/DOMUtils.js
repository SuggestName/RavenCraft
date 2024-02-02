class DOMUtils {
    static clearElement(elementId) {
        const element = document.getElementById(elementId);
        if (element) {
            element.innerHTML = '';
        }
    }
    static createElement(type, attributes, textContent) {
        const element = document.createElement(type);
        Object.keys(attributes).forEach(attr => element.setAttribute(attr, attributes[attr]));
        if (textContent) {
            element.textContent = textContent;
        }
        return element;
    }

    static appendChild(parentId, child) {
        const parent = document.getElementById(parentId);
        if (parent) {
            parent.appendChild(child);
        }
    }
}