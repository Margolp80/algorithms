const customReduce = function (func, initVal) {
    let currentVal = initVal;

    for(let i = 0; i < this.length; i++) {
        currentVal = func(currentVal, this[i], this);
    }
    return currentVal;
};

const customFilter = function (func) {
    return this.customReduce(
        (last, current) =>
            func(current) ? last.concat([current]) : last,
        []);
};

const composeFunctions = (...fns)=>
    x=>fns.customReduce((last,current)=>current(last),x)

Array.prototype.customReduce = customReduce;
Array.prototype.customFilter = customFilter;

const filteredResult = ['asdf', 'asd', 'dfsad'].
                       customFilter((val) => val.length > 4);
const reducedResult = [1, 2, 3].
                      customReduce((last, current, arr) => last ** current);



