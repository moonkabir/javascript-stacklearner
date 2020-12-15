let form = document.getElementById('form');

form.addEventListener('submit', function(e){
    e.preventDefault()
    let formData = {}
    ;[...this.elements].forEach(element =>{
        if(element.type !== 'submit'){
            formData[element.name] = element.value
        }
    })
    console.log(formData)
    this.reset()
})