let frontendDeveloper={
    name:"Javid",
    nickname:"Boss",
    motto:'NeverGiveUp',
    salary:5000,
};
let seniorDeveloper={
    name:"Jamel",
    nickname:"Hugo",
    motto:'NeverGiveUp',
    salary:5000,
};
let backendDeveloper={
    name:"Javid",
    nickname:"Boss",
    motto:'NeverGiveUp',
    salary:5000,
};
//let backendDeveloper=frontendDeveloper;
//This can be something that is confuseable, I mean when we do this action then, when we change one property in one object then this property also change in another object.
function deepequal(a, b){
let flag=0;
    for(key in backendDeveloper){
       if(a[key]===b[key]){
            flag++;
        }
    }
if(flag===4){
    console.log("Yes");
}else{
    console.log("No");
}
}
deepequal(backendDeveloper,seniorDeveloper);
