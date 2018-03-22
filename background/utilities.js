function handleLearningSuiteHelper(tab){
    if(!global.helper.initialized){
        chrome.tabs.sendMessage( tab.id, { 'msg' : 'initHelper', 'helperId': global.helper.id, 'helperTitle' : global.helper.title }, 
            function(response){
                // global.helper is initialized
                global.helper.initialized = true;
                global.helper.hidden = false;
                console.log(global.helper)
            }
        );
    }
    else {
        chrome.tabs.sendMessage( tab.id, { 'msg' : 'hideOrShowHelper', 'hidden' : global.helper.hidden, 'helperId': global.helper.id }, 
            function(response){
                if(response.msg == 'hide'){ global.helper.hidden = true; }
                else                      { global.helper.hidden = false; }
                console.log(global.helper)
            }
        );
    }
}
