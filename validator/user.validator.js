module.exports.createUser =(request,response,next)=> {
    let err = [];
    if(!request.body.name){
        err.push("Name is required ! ")
    }
    if(err.length){
        response.render('users/createUser.pug',{
            err: err
        });
        return;
    }
    next();
}