const subheading = document.querySelector('.select-price-sort-subheading')
const sortoptions = document.querySelectorAll('.select-price-sort-option')
const ultag_sortoption = document.querySelector('.select-price-sort-list')
for(const sortoption of sortoptions) {
    sortoption.addEventListener('mousedown', function() {
        subheading.innerHTML = this.innerHTML
        document.getElementById('select-price-sort-list').style.display = 'none'
        setTimeout(() => {
            document.getElementById('select-price-sort-list').style.removeProperty('display')
        }, 100);
} )
}

const pricelevel_options = document.querySelectorAll('.select-price-level-option')


for(const pricelevel_option of pricelevel_options) {
    pricelevel_option.addEventListener('mousedown', function() {
        document.querySelector('.select-price-level-subheading').innerHTML = this.innerHTML
        document.getElementById('select-price-level-list').style.display = 'none'
        setTimeout(() => {
            document.getElementById('select-price-level-list').style.removeProperty('display')
        }, 100);
} )
}

const product_names = document.querySelectorAll('.product-name')
for(const product_name of product_names ) {
    const L = String(product_name.innerHTML)   
    if(L.length > 48) {
        product_name.innerHTML = L.slice(0,44) + '...'
}
}
