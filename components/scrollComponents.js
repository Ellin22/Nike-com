class Cardd extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        // Attributes
        const imageCardURL1 = this.getAttribute('URL1');
        const imageCardURL2 = this.getAttribute('URL2');
        const imageCardURL3 = this.getAttribute('URL3');
        const imageCardURL4 = this.getAttribute('URL4');
        const imageCardURL5 = this.getAttribute('URL5');
        const imageCardURL6 = this.getAttribute('URL6');

        // Set class for styling
        this.setAttribute('class',  'scroll-carousel-container');

        // Inner HTML structure
        this.innerHTML = `
        <div class="flex w-full overflow-x-scroll box-border mt-[12px] des:px-[40px]">
            <img class="mr-[16px] w-[350px] h-[338px] des:w-[500px] des:h-[538px]" src="${imageCardURL1}" >
            <img class="mr-[16px] w-[350px] h-[338px] des:w-[500px] des:h-[538px]" src="${imageCardURL2}" >
            <img class="mr-[16px] w-[350px] h-[338px] des:w-[500px] des:h-[538px]" src="${imageCardURL3}" >
            <img class="mr-[16px] w-[350px] h-[338px] des:w-[500px] des:h-[538px]" src="${imageCardURL4}" >
            <img class="mr-[16px] w-[350px] h-[338px] des:w-[500px] des:h-[538px]" src="${imageCardURL5}" >
            <img class="mr-[16px] w-[350px] h-[338px] des:w-[500px] des:h-[538px]" src="${imageCardURL6}" >
        </div>
        `;
    }
}



// Define the new element
customElements.define('scroll-carousel', Cardd);

