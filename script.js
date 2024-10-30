const tabLinks=document.querySelectorAll(".title-links");
const tabContents=document.querySelectorAll(".tab-content");
const succMsg=document.querySelector("#success");


function hide(name){
    for(let tablink of tabLinks){
        tablink.classList.remove("active-link");
    }
    for(let tabContent of tabContents){
        tabContent.classList.remove("active-tab")
    }
    document.getElementById(name).classList.add("active-tab");
}
const scriptURL = 'https://script.google.com/macros/s/AKfycbxA4iZ4GIYS0pBlRwyvFo1g-vG8JfpB9nbdWNqCE61jVFYsPJ-zaGlO_NfXPcxaMDTQ/exec'
            const form = document.forms['submit-google']
          
            form.addEventListener('submit', e => {
              e.preventDefault()
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response =>{succMsg.innerHTML="message sent successfully"
                    setTimeout(function(){
                        succMsg.innerHTML=""
                    },5000)
                    form.reset();
                     })
                            
                        
                .catch(error => console.error('Error!', error.message))

            })