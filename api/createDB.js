const User = require('./models')("users");

(async () => {
 
let user = [];
    console.log();

	let Users = [
        ["עובד","208994535","אלכס כהן","Alex","12121212","alex@gmail.com","050-4736633","ירושלים עזה 18","/assets/images/avatar2.png"],
        ["עובד","203447557","טל מרום","Tal", "34343434","tal@gmail.com", "050-4432212","ירושלים הנביאים 45","/assets/images/avatar2.png"],
        ["מנהל","20432129","אריאלה יחזקאל","Ariela", "99999999","ariela@gmail.com","050-4711133","ירושלים חגי 22","/assets/images/avatar3.png"],
        ["עובד","201001044","דניאל יצחקי","Daniel","88778877","daniel@gmail.com","050-3338212","ירושלים גלבר 20","/assets/images/avatar7.png"]
               ];
    //console.log(Users);           
  
    try {
		Users.forEach(async item => await User.CREATE(item));
		} catch(err) {  }
})();
