const global = {};

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {

        if(request.msg == 'initHelper'){
            addHelperToPage(request).then(selector => {
                recurse(selector).then($elem => {
                    // make the element draggable
                    $elem.draggable({ handle: '#ext-drag-title'});
                    $elem.fadeIn();
                    sendResponse({'msg': 'got the message thanks!'});
                });
            })
        }
        else if (request.msg == 'hideOrShowHelper'){
            if(request.hidden) {
                console.log('show')
                $(request.helperId).fadeIn() 
                sendResponse({'msg': 'show'});
            }
            else {
                console.log('hide')
                $(request.helperId).fadeOut()
                sendResponse({'msg': 'hide'});
            }
        }

        // send response back
    }
);



//   //
//   // saveCoursesToStorage
//   //
//   // descr - saves new slide course and web information to chrome local storage 
//   // @params
//   //    tab - blackboard course page tab information from Chrome (currently unused)
//   global.saveCoursesToStorage = function(tab){
//     // console.log('save-in-storage');
//     //get course name and webs within it
//     var descriptions = document.getElementsByClassName('vtbegenerated');
//     var course_name = document.querySelector('span#pageTitleText>span').textContent; //e.g. Course AD-102
//     var values = [];

//     //get new slides from local storage, add more, and upload new copy of local storage 
//     chrome.storage.local.get(function(storage){
//       for (var i = 0; i < descriptions.length; i++) {
//         var txt = descriptions[i].textContent; 

//         var obj = {
//           course: course_name.trim(),
//           title: txt.split(/-\s\d{4,}/)[0].trim(),
//           webNumber: txt.match(/\d{2}/)[0],
//           link: getUncleLink(descriptions[i])
//         };
//         values.push(obj);
//         getUncleLink(descriptions[i]); //do we need this?
//       }

//       function getUncleLink(el) {
//         return el
//           .parentNode
//           .parentNode
//           .getElementsByTagName('a')[0]
//           .href;    
//       }

//       //if no courses have been uploaded yet, create object for them and set them in the object
//       if(!storage.hasOwnProperty('bb_courses')){
//         storage['bb_courses'] = {};    
//       }
//       storage.bb_courses[course_name] = values;
      
//       //set new storage
//       chrome.storage.local.set(storage);
//       //reset the global variable courseNavData to newly uploaded slides
//       global.getCourseNavData();
//     });
//   };


//     //
//   // Executing a script in the context of the page
//   //
//   // NOTE: arguments should be passed as separate parameters from
//   // the function itself (e.g. executeInPageContext(function(param1){}, param1))
//   global.executeInPageContext = function(fn) {
//     var args = '';
//     if (arguments.length > 1) {
//       for (var i = 1, end = arguments.length - 2; i <= end; i++) {
//         args += typeof arguments[i]=='function' ? arguments[i] : JSON.stringify(arguments[i]) + ', ';
//       }
//       args += typeof arguments[i]=='function' ? arguments[arguments.length - 1] : JSON.stringify(arguments[arguments.length - 1]);
//     }

//     var script = document.createElement('script');
//     script.setAttribute("type", "application/javascript");
//     script.textContent = '(' + fn + ')(' + args + ');';
//     document.documentElement.appendChild(script); // run the script
//     document.documentElement.removeChild(script); // clean up
//   };


//   chrome.storage.local.get(function(storage){
//     // console.log(storage);
//   });

//   chrome.runtime.sendMessage({message: 'compare-cc', data: input_text});

