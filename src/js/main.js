document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {
        edge: "right"
    });

    console.log(1);
    
    new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log(2);
            resolve("ok")
            reject("Eror 404")
        },1000)

    }).then(
        function(response){
            console.log(3);
        }).catch(
            function(error){
                console.log(error);
            }
        )

});