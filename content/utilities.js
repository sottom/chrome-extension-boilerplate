/**
 * Takes a css selector and tries to find it on the page.
 * If the selector can't be found, it waits 500 ms and then runs again.
 * @param selector a string in the form of a valid css selector (e.g. #mainContent)
 * @returns a promise with the found element in a jquery object.
 */
function recurse(selector){
    return new Promise((resolve, reject) => {
        $(selector).length == 0 
            ? setTimeout(() => recurse(selector), 500) 
            : resolve($(selector));
    })
}

/**
 * Injects and runs a chrome content script inside the context of the browser window, 
 * not the context script's window.
 * @param fn function to be executed in page context
 * @param arguments these arguements are not listed in the function definition,
 * but parameters of the fn function parameter that will be used are supplied to the
 * executeInPageContext function.
 * 
 * NOTE: arguments should be passed as separate parameters 
 * from the function itself (e.g. executeInPageContext(function(param1){}, param1))
 */
function executeInPageContext(fn) {
    var args = '';
    if (arguments.length > 1) {
        for (var i = 1, end = arguments.length - 2; i <= end; i++) {
        args += typeof arguments[i]=='function' ? arguments[i] : JSON.stringify(arguments[i]) + ', ';
        }
        args += typeof arguments[i]=='function' ? arguments[arguments.length - 1] : JSON.stringify(arguments[arguments.length - 1]);
    }

    var script = document.createElement('script');
    script.setAttribute("type", "application/javascript");
    script.textContent = '(' + fn + ')(' + args + ');';
    document.documentElement.appendChild(script); // run the script
    document.documentElement.removeChild(script); // clean up
};


/**
 * creates and adds the draggable div box to the browser
 * @param request request object sent in message to the content scripts
 * @returns a css selector for the created item
 */
function addHelperToPage(request){
    return new Promise(resolve => {
        let div                   = document.createElement('div');
        div.style.border          = 'solid black 2px';
        div.style.position        = 'absolute';
        div.style.top             = '0px';
        div.style.left            = '0px';
        div.style.color           = '#ccc'; // these three colors are learning suite blues and whites
        // div.style.color           = '#c0d7ed';
        div.style.backgroundColor = '#036';
        div.style.display         = 'none';
        div.id                    = request.helperId.slice(1);
        div.innerHTML             = `
                                    <div id="ext-drag-title">
                                        <span>${request.helperTitle}</span>
                                    </div>
                                    <div id="ext-drag-options">
                                        <span class="ext-drag-option">Hello</span>
                                        <span class="ext-drag-option">Hello</span>
                                        <span id="ext-drag-option-end" class="ext-drag-option">Hello</span>
                                    </div>
                                    `
        document.body.appendChild(div);
        resolve(`#${div.id}`);
    });
}
