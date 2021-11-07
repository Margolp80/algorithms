module.exports = (...fns)=>x=>fns.reduce((acc,curr)=>curr(acc),x)

