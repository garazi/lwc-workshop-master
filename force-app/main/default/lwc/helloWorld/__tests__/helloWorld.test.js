import { createElement } from 'lwc';
import HelloWorld from 'c/helloWorld';

describe('c-hello-world', () => {
    afterEach(() => {
        // Clean up any DOM that might be left in jsdom
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('check for "Hello, World!" text', () => {
        const element = createElement('c-hello-world', {
            is: HelloWorld
        });

        document.body.appendChild(element);
        const textElem = element.shadowRoot.querySelector('div');

        expect(textElem.textContent).toBe('Hello, World!');
    });
});
