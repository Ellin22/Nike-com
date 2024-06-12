class Card extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        // Attributes declare the variable and put the meaning what are we going to use it for for e.g. imageCardURL = URL we need to put URL there
        const imageCardURL = this.getAttribute('URL');
        const meaning = this.getAttribute('meaning');
        const paragraph = this.getAttribute('paragraph');
        const h3 = this.getAttribute('h3'); 
        const buttonName= this.getAttribute('buttonName');

        // Set class for styling the div that set as a container which contain everything will be use in SetAttribute
        this.setAttribute('class', 'size-full relative');

        // Inner HTML structure : We need to paste our HTML code here and replace those with ${something that you want it to change}
        this.innerHTML = `
            <img class="w-full h-full object-cover " src="${imageCardURL}" alt="${meaning}">
            <div class=" absolute bottom-[50px] left-[50px]">
                <p class="font-sans text-white text-[16px] font-medium">${paragraph}</p>
                <h3 class="font-sans text-white text-[24px]">${h3}</h3>
                <div class="mt-[10px]">
                    <button class="rounded-[50px] border border-solid bg-[white] opacity-1 w-auto py-[8px] px-[20px]">
                        <a class="font-sans text-black text-[18px] cursor-pointer font-medium" href="#">${buttonName}</a>
                    </button>
                </div>
            </div>
        `;
    }
}

// Define the new element : we have to give a proper name and not the key for the 'it has to use hyphen since it is for HTML ', and the last one you can use the camelCase
customElements.define('image-card', Card);