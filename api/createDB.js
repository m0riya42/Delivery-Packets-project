const User = require('./models')("users");
const Package = require('./models')("packages");
const Blog = require('./models')("blog");



(async () => {

  console.log();

  let Users = [
    ["עובד", "208994535", "אלכס כהן", "Alex", "12121212", "alex@gmail.com", "050-4736633", "ירושלים עזה 18", "/assets/images/avatar2.png"],
    ["עובד", "203447557", "טל מרום", "Tal", "34343434", "tal@gmail.com", "050-4432212", "ירושלים הנביאים 45", "/assets/images/avatar2.png"],
    ["מנהל", "20432129", "אריאלה יחזקאל", "Ariela", "99999999", "ariela@gmail.com", "050-4711133", "ירושלים חגי 22", "/assets/images/avatar3.png"],
    ["עובד", "201001044", "דניאל יצחקי", "Daniel", "88778877", "daniel@gmail.com", "050-3338212", "ירושלים גלבר 20", "/assets/images/avatar7.png"]
  ];
  let Packages = [
    ['209934566', 'שלום ברוך', 'shalom@walla.co.il', '053-8899767', 'ירושלים עזה 36'],
    ['203411224', 'רוני דוני', 'roniD224@gmail.com', '050-3322857', 'ירושלים הנביאים 72'],
    ['202991001', 'תמר לוי', 'tamar@gmail.com', '054-7732233', 'ירושלים אגריפס 42'],
    ['309827183', 'אוהד טוהר', 'ohad183@gmail.com', '050-1192847', 'ירושלים חגי 22']
  ];

  let Posts = [
    /*  title: post[0],
            titleDescription: post[1],
            date: post[2],
            text: post[3],
            images: post[4],*/


    // ["פתיחת שנה", "חבילות לראש השנה", new Date(2020, 08, 25), "", []]
    // ["פתיחת שנה", "חבילות לראש השנה", "", []]
    ["פתיחת שנה", "חבילות לראש השנה", ""]
  ]
  //console.log(Users);           

  // try {
  //   Users.forEach(async item => await User.CREATE(item));
  // } catch (err) { }
  try {
    Packages.forEach(async item => await Package.CREATE(item));
    Posts.forEach(async item => await Blog.CREATE(item));
  } catch (err) { }
})();
