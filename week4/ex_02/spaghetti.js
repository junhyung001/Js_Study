function boilNoodles() {
    console.log("면 삶기 시작");
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("면 삶기 완료");
        resolve();
      }, 10000); // 10초
    });
  }
  
  function processB1() {
    console.log("브로콜리 대치기 시작");
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("브로콜리 대치기 완료");
        resolve();
      }, 1000); // 1초
    });
  }
  
  function processB2() {
    console.log("마늘과 양파 볶기 시작");
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("마늘과 양파 볶기 완료");
        resolve();
      }, 2000); // 2초
    });
  }
  
  function processB3() {
    console.log("배이컨과 햄 볶기 시작");
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("배이컨과 햄 볶기 완료");
        resolve();
      }, 2000); // 2초
    });
  }
  
  function processB4() {
    console.log("소스, 남은 야채 넣고 다같이 볶기 시작");
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("소스, 남은 야채 넣고 다같이 볶기 완료");
        resolve();
      }, 3000); // 3초
    });
  }
  
  async function processB() {
    await processB1();
    await processB2();
    await processB3();
    await processB4();
    console.log("B 작업 모두 완료");
  }
  
  function mixAllTogether() {
    console.log("면까지 넣고 다 같이 볶기 시작");
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("면까지 넣고 다 같이 볶기 완료");
        resolve();
      }, 3000); // 3초
    });
  }
  
  async function makeSpaghetti() {
    const [] = await Promise.all([boilNoodles(), processB()]);
    await mixAllTogether();
  }
  
  makeSpaghetti();  