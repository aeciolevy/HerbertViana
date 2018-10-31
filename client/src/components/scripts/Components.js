class Components {

    static callAll (...fns) {
        return function (...args) {
            return fns.forEach(fn => fn && fn(...args))
        };
    }  
}

export default Components;
