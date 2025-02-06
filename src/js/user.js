document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
        var instances = M.Collapsible.init(elems, {});
    
        const addUserButton = document.getElementById('btnn')
        addUserButton.addEventListener('click', ()=>{
            document.querySelector('.user-modal').classList.add('show')
            document.querySelector('.modal-back').classList.remove('dis-none')
        })
        document.querySelector('.modal-back').addEventListener('click', (e)=>{
            document.querySelector('.user-modal').classList.remove('show')
            e.target.classList.add('dis-none')
        })
    
    });