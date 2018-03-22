const global = {}

global.helper = {
  'initialized' : false,
  'hidden' : true,
  'title' : 'LearningSuite Helper',
  'id' : '#ext-drag',
};

chrome.browserAction.onClicked.addListener(function(tab){
    handleLearningSuiteHelper(tab)
});


// chrome.runtime.onMessage.addListener(
//     function(request, sender, sendResponse) {
//     }
// );

// //
// // sendToTab
// //
// // descr - routes a message to tab of choice.
// function sendToTab(which_tab, request){
//     chrome.tabs.query({}, function(tabs){
//         console.log(tabs);
//       for (var i = 0; i < tabs.length; i++) {
  
        
//         if(tabs[i].id === which_tab.id){
//           console.log("Sending message to " + which_tab.title);
//           chrome.tabs.sendMessage(tabs[i].id, request)
//         }   
//       }
//     });
//   }

//   //
// // getTabID
// //
// // descr - routes a message to tab of choice.
// function getTabID (which_tab) {
//     return new Promise( (resolve, reject) => {
//       chrome.tabs.query({}, function(tabs){
//         for (var i = 0; i < tabs.length; i++) {
//           console.log(tabs[i]);
//           var context = getContext(tabs[i].url);
//           console.log('context:');
//           console.log(context);
          
//           if (context === which_tab){
//             console.log('GOTCHA!');
//             resolve(tabs[i].id);
//           }   
//         }
//       });
//     });
//   }

//   //
// // focusTab
// //
// // descr - returns a promise; sets focus to the tab object
// // passed in as an argument
// function focusTab(tab) {
//     return new Promise(function(resolve, reject) {
//       chrome.tabs.update(tab.id, { active: true }, function() {
//         console.log('just focused the tab');
//         resolve();
//       });
//     });
//   }
  
//   //
//   // focusQAWindow
//   //
//   // descr - sets the focus to the window that is opened by the extension
//   function focusWindow(windowID) {
//     return new Promise(function(resolve, reject) {
//       chrome.windows.update(windowID, { focused : true }, function() {
//         console.log('just focused the window');
//         resolve();
//       });
//     });
//   }

//   chrome.tabs.sendMessage(drTab.id, { //to avondale
//     "message" : "ocrData",
//     "data"    : oldStuff
//   });

//   chrome.windows.create({
//     height: monitor1.bounds.height,
//     width: monitor1.bounds.width,
//     left: 0,
//     top: 0,
//     url: [
//       'https://uti.blackboard.com/webapps/login/?action=relogin' //blackboard
//     ]
//   });

//   chrome.windows.create({
//     height: monitor2.bounds.height,
//     width: monitor2.bounds.width,
//     left: monitor1.bounds.width,
//     top: 0,
//     url: [
//     'https://prdtfs.uticorp.com/UTI-ALM/IT/BMS/_backlogs?level=Stories&showParents=true&_a=backlog', //tfs backlog
//     'https://prdtfs.uticorp.com/UTI-ALM/IT/BMS/_backlogs/board/Features?scrollToQA=true', //tfs board
//     'http://avondale-iol/' // DR site
//     ]
//   })
