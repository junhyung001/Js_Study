const stackCreate = () => ({
    arr: [],
    top: -1,
});
//위 코드는 새로운 스택을 만들어주는 코드, top값도 추가해줌

function stackEmpty(stack) {
    if (stack.top === -1) {
        console.log("스택이 비어있습니다.");
        return true;
    }
    return false;
}
//빈 스택 판별하는 함수 스택이 비어있다면 -1과 같기 때문에 같을때에는 true 번환, 다를때에는 false반환

function stackPush(stack, data) {
    stack.top++;
    stack.arr[stack.top] = data;
}
//스택의 top값을 증가시키고 스택에 추가할 데이터를 stack의 top값을 넣어준다

function stackPeek(stack) {
    return stack.arr[stack.top];
}
//Peek 최상단의 스택값을 반환해주는 함수

function stackPop(stack) {
    if (!stackEmpty(stack)) {
        return stack.arr[stack.top--];
    }
}
//스택은 FIFO형식의 자료구조이기 때문에 top값을 하나 제외시켜주면 최상단의 데이터가 삭제된다.

// 스택 생성
const myStack = stackCreate();

// 데이터 추가
stackPush(myStack, 10);
stackPush(myStack, 20);
stackPush(myStack, 30);

// 스택 상단 데이터 확인
console.log(stackPeek(myStack)); // 출력: 30

// 데이터 삭제
console.log(stackPop(myStack)); // 출력: 30
console.log(stackPop(myStack)); // 출력: 20

// 스택 상단 데이터 확인
console.log(stackPeek(myStack)); // 출력: 10

// 데이터 삭제
console.log(stackPop(myStack)); // 출력: 10

// 스택이 비어있는지 확인
console.log(stackEmpty(myStack)); // 출력: true

// 비어있는 스택에서 데이터 삭제 시도
console.log(stackPop(myStack)); // 출력: 스택이 비어있습니다.