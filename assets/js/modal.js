const modallogin = document.getElementById('modal-login');
const loginbtn = document.getElementById('login-btn')
// Open login form
loginbtn.addEventListener('click',showLogInForm)
    function showLogInForm() {
        modallogin.style.display = 'flex'
    }
// Close login form
const closelgbtn = document.getElementById('close-login-btn')
closelgbtn.addEventListener('click', function() {
    modallogin.style.display = 'none'
})
closelgbtn.addEventListener('click', function() {
    modallogin.style.display = 'none'
})

const modalsignup = document.getElementById('modal-signup');
const modalbody = document.querySelector('.modal-body')
const signupbtn = document.getElementById('signup-btn')
// Open signup form
signupbtn.addEventListener('click',function() {
        modalsignup.style.display = "flex"
    })
// Close signup form
const closesubtn = document.getElementById('close-signup-btn')
closesubtn.addEventListener('click', function() {
    modalsignup.style.display = 'none'
})
    
const backbtn = document.getElementById('back-btn')
backbtn.addEventListener('click', function(){     
        modalsignup.style.display = 'none'
})

const searchinput = document.getElementById('search-ipt');
const searchhistoryitems = document.querySelectorAll('.search-history-item');
for(const searchhistoryitem of searchhistoryitems ){
    searchhistoryitem.addEventListener('mousedown', function(){
        searchinput.value = this.innerHTML;
    })
}

// Active 
