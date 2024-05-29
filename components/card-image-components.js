class Card extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        // Attributes
        const imageCardURL = this.getAttribute('URL');
        const meaning = this.getAttribute('meaning');
        const paragraph = this.getAttribute('paragraph');
        const h3 = this.getAttribute('h3'); 
        const buttonName= this.getAttribute('buttonName');

        // Set class for styling
        this.setAttribute('class', 'size-full relative');

        // Inner HTML structure
        this.innerHTML = `
            <img class="w-full h-full object-cover" src="${imageCardURL}" alt="${meaning}">
            <div class="absolute bottom-[50px] left-[50px]">
                <p class="text-white text-[16px] font-medium">${paragraph}</p>
                <h3 class="text-white text-[24px]">${h3}</h3>
                <div class="mt-[10px]">
                    <button class="rounded-[50px] border border-solid bg-[white] opacity-1 w-auto py-[8px] px-[20px]">
                        <a class="text-black text-[18px] cursor-pointer font-medium" href="#">${buttonName}</a>
                    </button>
                </div>
            </div>
        `;
    }
}

// Define the new element
customElements.define('image-card', Card);