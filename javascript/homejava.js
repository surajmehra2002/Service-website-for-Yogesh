
function back(){
    let click = document.getElementById('click');
    click.checked = false;
}


function service(){
    let menu= document.getElementById('menu-show-hide');
    if(menu.style.display=='block'){
        menu.style.display="none"
    }
    else{
        menu.style.display="block"
    }
}



        let history1= document.getElementById('history1')
        let history2= document.getElementById('history2')
        let history3= document.getElementById('history3')
        let history4= document.getElementById('history4')
        let history5= document.getElementById('history5')
            history1.style.display='none'
            history2.style.display='none'
            history3.style.display='none'
            history4.style.display='none'
            history5.style.display='none'
        function function1(){
            
            if(history1.style.display=='none'){
                history1.style.display='block'
               

                history2.style.display='none'
                history3.style.display='none'
                history4.style.display='none'
                history5.style.display='none'
                }
            else{
                history1.style.display='none'
            }
            
        }

        function function2(){
            if(history2.style.display=='none'){
            history2.style.display='block'

            history1.style.display='none'
            history3.style.display='none'
            history4.style.display='none'
            history5.style.display='none'
            }
            else{
                history2.style.display='none'
            }
        }

        function function3(){
            if(history3.style.display=='none'){
            history3.style.display='block'

            history2.style.display='none'
            history1.style.display='none'
            history4.style.display='none'
            history5.style.display='none'
            }
            else{
                history3.style.display='none'
            }
        }

        function function4(){
            if(history4.style.display=='none'){
            history4.style.display='block'

            history2.style.display='none'
            history3.style.display='none'
            history1.style.display='none'
            history5.style.display='none'
        }
        else{
            history4.style.display='none'
        }
        }

        function function5(){
            if(history5.style.display=='none'){
                history5.style.display='block'

                history2.style.display='none'
                history3.style.display='none'
                history4.style.display='none'
                history1.style.display='none'
            }
            else{
                history5.style.display='none'
            }
        }

