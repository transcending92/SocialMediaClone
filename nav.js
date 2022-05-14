// // Selectors - use to Post, Put, Patch, Delete, Get from firebase 
// const $getBtn = $("#getBtn");
// const $postBtn = $("#postBtn");
// const $deleteBtn = $("#deleteBtn");
// const $patchBtn = $("#patchBtn");
// const $putBtn = $("#putBtn");

// let firebaseURL = "https://snackgram-63aca-default-rtdb.firebaseio.com/";
// let jsonEXT = ".json";

// //GET Method
// $getBtn.click(() => {
//     $.ajax({
//         type: "GET",
//         url: `${firebaseURL}${jsonEXT}`,
//         success: (username == ture || password == true)=> {
//             console.log("Access Granted");
//         }
//         error: (error) => {
//             console.log("Invalid Username or password!")
//         }
// })
// })



// -----------------------------------------------
// potential JSON
//     },{
//       "Melissa" : {
//             "username" : "Livingmybestlife",
//             "password" : "Codeexample2",
//             "nickname" : "Fefe",
//             "posts" :{
//                 "image" :,
//                 "time" : "18:34:40",
//                 "content": "",
//                 "likes" : "120",
//                 "comments" : [{
//                     "username" : "SillyRabbit",
//                     "comment" : "Tricks are for kids"
//                 }]
//         }  
//     },
//         "Merline" : {
//              "username" : "TrinityVibesFire",
//             "password" : "Codeexample3",
//             "nickname" : "Trini",
//             "posts" :{
//                 "image" :,
//                 "time" : "12:00:00",
//                 "content": "Come travel with me",
//                 "likes" : "1920",
//                 "comments" : [{
//                     "username" : "_Hi_Lady_",
//                     "comment" : "Nice photo"
//                     }]
//         }  
//     },
//         "Candace"
//                 "username" : "Love>HateAnyday",
//                 "password" : "Codeexample4",
//                 "nickname" : "Monique",
//                 "posts" :{
//                     "image" :,
//                     "time" : "12:00:00",
//                     "content": "Living my best life",
//                     "likes" : "2022",
//                     "comments" : [
//                         "username" : "Precious",
//                         "comment" : "That's cool",
//                 ]
//             }
//         }
//     }
// }