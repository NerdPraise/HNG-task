data = [
    {
        "principal": 2500,
        "time": 1.8
    },
    {
        "principal": 1000,
        "time": 5
    },
    {
        "principal": 3000,
        "time": 1
    },
    {
        "principal": 2000,
        "time": 3
    },
];

function interestCalculator(data) {
    let interestData = data.map(obj=> {
        let newelement = {};
        let principal = obj.principal;
        let time = obj.time;
        if (principal >= 2500 && time > 1 && time < 3) {
            rate = 3;
        }
        else if (principal >= 2500 && time >= 3) {
            rate = 4;
        }
        else if (principal < 2500 || time <=1 ) {
            rate = 2;
        }
        else {
            rate = 1;
        }
        interest = (principal * rate * time) / 100;
        newelement= {"principal": principal, "rate": rate, "time":time, "interest": interest};
        return (newelement);
    })
    console.log(interestData);
    return interestData;

    // USING A "FOR" STATEMENT
    // let interestData = []
    // for (let element of data) {
    //     let newelement = {}
    //     let principal = element.principal;
    //     let time = element.time;
    //     if (principal >= 2500 && time > 1 && time < 3) {
    //         rate = 3;
    //     }
    //     else if (principal >= 2500 && time >= 3) {
    //         rate = 4;
    //     }
    //     else if (principal < 2500 || time <=1 ) {
    //         rate = 2;
    //     }
    //     else {
    //         rate = 1;
    //     }
    //     interest = (principal * rate * time) / 100;
    //     newelement= {"principal": principal, "rate": rate, "time":time, "interest": interest};
    //     interestData.push(newelement);
        
    // }
    // console.log(newdata)
}

interestCalculator(data)
