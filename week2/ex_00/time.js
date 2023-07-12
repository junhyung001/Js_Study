//const 상수를 어떤방법으로 값을 변경할 수 있는지 코드로 표현해라

const month = [];
let day = 17;
const timeWarp = (newMonth, newDay) => {
    month.push(newMonth);
    day = newDay;
}

timeWarp(5, 10)
console.log(month[0], day)

timeWarp(11, 20)
console.log(month[1], day)


//상수의 값을 직접적으로 변경 할 수 없기때문에 배열을 선언하여 배열의 값을 변경해준다