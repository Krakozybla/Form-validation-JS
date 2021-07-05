window.addEventListener('load', ()=>{
    let form = document.querySelector('.form');
    let inputs = document.querySelectorAll('.form__input');
    console.log(inputs);

    let pattern = {
        name: /.+/,
        phone: /\d{7,15}/,
        email: /.+@.+\..+/
    }

    let formValidationRules = {
        name: {
            rule: 'name',
            msg: 'Please, write a correct name!'
        },
        phone: {
            rule: 'phone',
            msg: 'Please, writte a correct phone number!'
        },
        email: {
            rule: 'email',
            msg: 'Please, writte a correct email adress'
        }
    }

    form.addEventListener('submit', (e)=>{
        let isErr = false
        inputs.forEach(item=>{

            let validationRules = formValidationRules[item.name];
            let validType = validationRules.rule;
            let patterns = pattern[validType];
            let val = item.value.trim();
            let errMsg = item.nextElementSibling;


            if(!patterns.test(val)){
                item.classList.add('err');
                errMsg.innerHTML = validationRules.msg
                isErr = true
            }else{
                item.classList.remove('err');
                errMsg.innerHTML = 'Success'
            }
        })
        if(isErr){
            e.preventDefault();
        }


    })
})