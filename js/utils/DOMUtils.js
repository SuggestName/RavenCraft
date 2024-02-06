class DOMUtils {
    static clearElement(elementId) {
        const element = document.getElementById(elementId);
        if (element) element.innerHTML = '';
    }

    static createElement(type, attributes = {}, textContent = '', children = []) {
        const element = document.createElement(type);
        Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
        if (textContent) element.textContent = textContent;
        children.forEach(child => element.appendChild(child));
        return element;
    }

    static appendChild(parentId, child) {
        const parent = document.getElementById(parentId);
        if (parent) parent.appendChild(child);
    }
}
