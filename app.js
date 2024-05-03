(function(){

    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');
    let back = document.querySelector('.btn-back');
    

    buttons.forEach(function(button){
        button.addEventListener('click', function(e){
            let value = e.target.dataset.num;
            screen.value += value;
        })
    });

    equal.addEventListener('click', function(e){
        if(screen.value === ''){
            screen.value = '';
        }else{
        let num = eval(screen.value);
            screen.value = num;
        }
    });

    clear.addEventListener('click', function(e){

            screen.value = '';
    
    });

    back.addEventListener('click', function(e){
           let arr = screen.value;
           screen.value = arr.slice(0, -1);
    });




})();