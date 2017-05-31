var log, byId, select, selectAll, parseObserveHandle;

log = function log(val) {
    "use strict";
    window.console.log(val);
};

byId = function byId(id) {
    "use strict";
    return document.getElementById(id);
};

select = function select(sCSS) {
    "use strict";
    return document.querySelector(sCSS);
};

selectAll = function selectAll(sCSS) {
    "use strict";
    return document.querySelectorAll(sCSS);
};

parseObserveHandle = function parseObserveHandle(list, eventType, handler) {
    "use strict";
    log("ici");
    var i, found, nodeListProto = ["[object NodeList]","[object NodeListPrototype]"];
    
    try{
        found = nodeListProto.indexOf(Object.getPrototypeOf(list).toString());
        if (!list || found === -1) {
            throw new Error("first argument must be a nodeList");
        }
        if (!eventType || typeof eventType !== "string") {
            throw new Error("second argument must be a string (event type)");
        }
        if (!handler || typeof handler !== "function") {
            throw new Error("third argument must be a function");
        }
        
        for ( i = 0 ; i < list.length ; i += 1) {
                        list[i].addEventListener = (eventType, handler);
                    }
    } catch (error) {
        log("error @utility/parseObserve");
            window.console.error(error);
    }
}