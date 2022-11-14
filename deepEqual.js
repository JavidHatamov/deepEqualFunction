let frontendDeveloper={
    name:"Javid",
    nickname:"Boss",
    motto:'NeverGiveUp',
    doneTasks:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
    salary:5000,
};
let SeniorDeveloper={
    name:"Jamel",
    nickname:"Hugo",
    motto:'NeverGiveUp',
    doneTasks:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
    salary:5000,
};

let backendDeveloper=frontendDeveloper;
//This can be something that is confuseable, I mean when we do this action then, when we change one property in one object then this property also change in another object.
function deepequal(a, b){
let flag=0;
    for(key in backendDeveloper){
       if(a[key]===b[key]){
            flag++;
        }
    }
if(flag===5){
    console.log("Yes");
}else{
    console.log("No");
}
}
deepequal(backendDeveloper,frontendDeveloper);