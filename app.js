let friends =  ["Bob", "Carl", "Matt", "David", "James"];

for (friend of friends)
{
    console.log(friend+": ");
    for (let i=99; i>0; i--)
    {
        console.log(i+" lines of code, "+ i+ " lines of code;    " + friend + " strikes one out! "+ (i-1)+ " lines of code left..");
    }
}