const request = (attempt, seq,depth) => {
    const mappedAttempt = attempt.map(rep => seq[rep]).slice(0,depth).join('')
    console.log(`ATTEMPTING ${mappedAttempt}: \n`);
};

const bruteForce = (seq,depth) => {
    const rep = new Array(seq.length).fill(0);
    let index = 0;
    while (rep[depth]!==seq[1]) {

        for(let i = 0; i < seq.length; i++) {
            request(rep, seq,depth);
            rep[index]++;
        }
        rep[index]--;
        while (rep[index] === seq.length - 1) {
            rep[index] = 0;
            if(rep[index + 1] === seq.length - 1) {
                index++;
            } else {
                rep[index + 1]++;
            }
        }
        index = 0;
    }
};

//input an array of options and depth range
//output all attempts in range

const range = (arr,startRange,endRange)=>{
    for(let i = startRange; i <=endRange ; i++) {
        bruteForce(arr,i)
    }
}
range(['q',2,'~',4,'Q'],2,4)
