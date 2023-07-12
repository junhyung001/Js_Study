//20% 확률로 실패 확률을 만들어준다
function randomFail() {
    if (Math.random() < 0.2) throw "제작 실패..!(월급이 삭감되었다 ㅜㅜ)";
}


function makeDough() {
    console.log("반죽 만들기 시작!");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                randomFail();
                resolve();
                console.log("반죽 완성!")
            } catch (error) {
                console.log("반죽 만들기 실패...");
                reject(error);
            }
        }, 3000);
    });
}

//위 makeDough와 같은 형식이지만 시간이 5초로 변경되었다
function firstFermentation() {
    console.log("1차 발효 시작!");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                randomFail();
                resolve();
                console.log("1차 발효 완료!");
            } catch (error) {
                console.log("1차 발효 실패...");
                reject(error);
            }
        }, 5000);
    });
}

//위 makeDough와 같은 형식이지만 시간이 4.2초로 변경되었다
function shape() {
    console.log("성형하기 시작!");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                randomFail();
                resolve();
                console.log("성형 완료!");
            } catch (error) {
                console.log("성형 실패...");
                reject(error);
            }
        }, 4200);
    });
}

//위 makeDough와 같은 형식이지만 시간이 2초로 변경되었다
function secondFermentation() {
    console.log("2차 발효 시작!");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                randomFail();
                resolve();
                console.log("2차 발효 완료!");
            } catch (error) {
                console.log("2차 발효 실패...");
                reject(error);
            }
        }, 2000);
    });
}

//위 makeDough와 같은 형식이지만 시간이 5초로 변경되었다
function fry() {
    console.log("튀기기 시작!");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                randomFail();
                resolve();
                console.log("튀김 완료!");
            } catch (error) {
                console.log("튀김 실패...");
                reject(error);
            }
        }, 5000);
    });
}

// 꽈배기 제작
async function make() {
    //try-catch문 에러가 없다면 try구문을 실행 에러가 발생하면 catch 구문을 실행
    try {
        await makeDough();
        await firstFermentation();
        await shape();
        await secondFermentation();
        await fry();
        console.log("꽈배기 제작 완료!");
    } catch (error) {
        console.log(error);
    }
}

make();