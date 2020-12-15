let form = document.getElementById('form');

form.addEventListener('submit', function(e){
    e.preventDefault()
    let isValid = false
    let formData = {}
    ;[...this.elements].forEach(element =>{
        if(element.type !== 'submit'){
            isValid = validator(element)
            if(isValid){
                formData[element.name] = element.value
            }else{
                element.classList.add('is-invalid')
                alert(`${element.name} is Required`)
            }
        }
    })
    if(isValid){
        console.log(formData)
        this.reset()
    }

})

function validator(element){
    if(!element.value){
        return false
    }else{
        return true;
    }
}