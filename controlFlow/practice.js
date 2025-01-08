// define the user
/* 
1 = Employee
2 = Enrolled Member
3 = Subscriber
4 = Non-Subscriber
*/

let user = 44;

// logic for autherization

if (user == 1) {
    console.log("You are authorized")
} else if (user == 2) {
    console.log("You have accessed and one-on-one interaction with a dietician")
} else if (user == 3) {
    console.log(" You have accessed Dietarty Services Only")
} else if(user == 4) {
    console.log("You need to enroll or at least subscribe first to avail this facility.")
} else {
    console.log("invalid");
}
