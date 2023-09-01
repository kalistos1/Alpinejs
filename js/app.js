// reusable alpine js
document.addEventListener("alpine:init",() => {

    Alpine.data('dropdown',()=>({
        open : false,
        toggle(){
            this.open =!this.open;
        }
        
    }));

    // alpine js store
    Alpine.store('user',{
         username: 'joe',
         posts: ['post1','post2']
    });
    
});





