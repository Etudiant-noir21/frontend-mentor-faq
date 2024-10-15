const faqs = document.querySelectorAll('.faq');
console.log(faqs)

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('active');
// selectionner l'image dans le faq
        const icone = faq.querySelector('img');

        // changer l'image en fonction de la presence de la class active
        if(icone.getAttribute('src') == 'faq-accordion-main (1)/faq-accordion-main/assets/images/icon-plus.svg'){
            icone.setAttribute('src', 'faq-accordion-main (1)/faq-accordion-main/assets/images/icon-minus.svg');
        } else {
            icone.setAttribute('src', 'faq-accordion-main (1)/faq-accordion-main/assets/images/icon-plus.svg');
        }
    })
})