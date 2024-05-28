class Card extends HTMLElement {
    constructor() {
        super()
    }
    connectedCallback() {
        const title = this.getAttribute('cardTitle');
        const content = this.getAttribute('bodyContent');
        const titleBg = this.getAttribute('titleBg'); // no default value
        let headingSize = this.getAttribute('headingSize') || 'text-5xl'; // has default value
        this.setAttribute('class', 'bg-blue-300 flex flex-col justify-center items-center');

        this.innerHTML = `
           
        `;
    }
}

customElements.define('item-card', Card);