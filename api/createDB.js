const User = require('./models')("Users");

(async () => {
 
let user = [];
    console.log();

	let Users = [
        ["עובד","208994535","אלכס כהן","Alex","12121212","alex@gmail.com","050-4736633","ירושלים עזה 18","/assets/images/avatar2.png"],
        ["עובד","208994535","אלכס כהן","Alex","12121212","alex@gmail.com","050-4736633","ירושלים עזה 18","/assets/images/avatar2.png"]
               ];

    //console.log(Users);           
    try {
		Users.forEach(async item => await User.CREATE(item));
        console.log("sssssssssssssssssssssssss");
		} catch(err) {  }
})();
