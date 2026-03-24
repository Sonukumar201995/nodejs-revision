//for loop

let a=10;
for(let i=1; i<=10; i++)
{
    console.log(i);
}

// while loop

let a1=1;
while(a1<=10)
{
    console.log(a1);
    a1++;
}


// dowhile loop

let a2=1;
do{
    console.log(a2);
    a2++;
}
while(a2<=10);

// switch loop

let days="1";
switch(days)
{
    case "1":
    console.log("monday");
    break;

    case "2":
    console.log("tuesday");
    break;

    case "3":
        console.log("wednesday");
        break;

     case "4":
        console.log("thursday");
        break;
        
    case "5":
        console.log("friday");
        break;

    case "6":
        console.log("saturday");
        break;

     case "7" :
        console.log("sunday");
        break;
        
        default:
            console.log("invailid input");
}