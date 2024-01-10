/**
 * Function to get and change innerHTML of an element
 * @param {string} query
 * @param {string} content - optional
 * @returns {string}
 */
function ih(query, content){
    if(content){
        document.querySelector(query).innerHTML = content;
    }else{
        return document.querySelector(query).innerHTML;
    } 
}

/**
 * Function to get and change value of an element
 * @param {string} query
 * @param {string} value - optional
 * @returns {string}
 */
function val(query, value){
    if(value){
        document.querySelector(query).value = value;
    }else{
        return document.querySelector(query).value;
    } 
}

/**
 * Function that adds a list item to a list
 * @param {string} query - query of the list
 * @param {string} content - content of the list item
 */
function addLi(query, content){
    let li = document.createElement("li");
    li.innerHTML = content;
    document.querySelector(query).appendChild(li);
}

/**
 * Function to add event listener to an element
 * @param {string} query - query of the element
 * @param {string} event - event to listen to
 * @param {function} func - function to execute
 */
function addEvent(query, event, func){
    document.querySelector(query).addEventListener(event, func);
}

