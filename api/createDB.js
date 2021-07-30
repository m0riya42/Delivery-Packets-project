const User = require('./models')("users");
const Package = require('./models')("packages");
const RightPosts = require('./models')("rightPosts");
const LeftPosts = require('./models')("leftPosts");



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

  let rPosts = [
    ["פתיחת שנה ביד לחבר",  "חבילות לראש השנה", new Date(2020, 8, 25), `
    <p><img style="display: block; margin-left: auto; margin-right: auto;" src="https://i.pinimg.com/originals/74/67/21/746721e4f831240a660d7a389bebb5a1.png" alt="מתנות לראש השנה - צפו במארזי מתנה, חבילות שי לראש השנה - פרלינה | Perlina" /></p>
    <p>בשעה טובה נפתח את פעילותנו במשלוח מיוחד לכבוד ראש השנה.</p>
    <p ><strong>עובדים יקרים! </strong>יש לעדכן את שעות הפעילות בהם לא תוכלו לעבוד.</p>
    <p><span style="color: #ff0000;"><strong>שנה טובה לכולנו!</strong></span></p>`],
    ["מעבר כתובת",  "שינוי כתובת העמותה",  new Date(2020, 8, 31), `<p>&nbsp;</p>
    <p>&nbsp;</p>
    <p><img src="https://icon-library.com/images/position-icon/position-icon-8.jpg" width="184" height="184" /></p>
    <p><strong>שימו לב!&nbsp;</strong>עברנו לכתובת חדשה:</p>
    <p>&nbsp;בית הדפוס 7, גבעת שאול, ירושלים</p>
    <p>&nbsp;</p>`],
    ['שעות חלוקה בשבוע הקרוב',  'עדכון שעות',  new Date(2020, 9, 4), `<p><img src="https://www.ynet.co.il/PicServer5/2019/04/11/9180259/917944801000100980651no.jpg" alt="היכן נתנדב השבוע?" width="343" height="213" /></p>
    <p>בשבוע הקרוב החלוקות ייתקיימו בין השעות:</p>
    <p>15:30-20:00</p>
    <p>נסיעה טובה!</p>`]
     //["פתיחת שנה", "חבילות לראש השנה", new Date(2020, 08, 25), ""]
    // ["פתיחת שנה", "חבילות לראש השנה", "", []]
    //["פתיחת שנה", "חבילות לראש השנה", "",""]
  ]

  let lPosts = [

    [` <img src="/assets/images/yadToFriend.svg" alt="יד לחבר" />
      <h4>עמותת עזרה לנזקקים</h4>`], 
     [` <h3><b>בית הדפוס 7, גבעת שאול, ירושלים</b></h3>`]
  ]
 

  //console.log(Users);           

  // try {
  //   Users.forEach(async item => await User.CREATE(item));
  // } catch (err) { }
  try {
    //Packages.forEach(async item => await Package.CREATE(item));
    //rPosts.forEach(async item => await RightPosts.CREATE(item));
    lPosts.forEach(async item => await LeftPosts.CREATE(item));
  } catch (err) { }
})();
