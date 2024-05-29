class Card extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        // Attributes
        const imageCardURL = this.getAttribute('URL');

        // Set class for styling
        this.setAttribute('class', 'flex w-full overflow-auto mt-[30px]');

        // Inner HTML structure
        this.innerHTML = `
            <img src="${imageCardURL}" alt="">
            <img src="${imageCardURL}" alt="">
            <img src="${imageCardURL}" alt="">
            <img src="${imageCardURL}" alt="">
            <img src="${imageCardURL}" alt="">
            <img src="${imageCardURL}" alt="">
        `;
    }
}

// Define the new element
customElements.define('scroll-carousel', Card);