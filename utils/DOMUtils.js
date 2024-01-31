class DOMUtils {
    static clearInnerHTML(elementId) {
        document.getElementById(elementId).innerHTML = '';
    }

    static setInnerHTML(elementId, htmlContent) {
        document.getElementById(elementId).innerHTML = htmlContent;
    }

    static getValue(elementId) {
        return document.getElementById(elementId).value;
    }

    static setValue(elementId, value) {
        document.getElementById(elementId).value = value;
    }

    static showElement(elementId) {
        const element = document.getElementById(elementId);
        if (element) {
            element.style.display = 'block';
        }
    }
}
