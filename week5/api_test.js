async function api() {
    try {
        const result = await fetch('https://jsonplaceholder.typicode.com/todos/').then(res => res.json());
        console.log(result);
        return result;
    }
    catch (error){
        console.log(error);
    }
}

async function api_01() {
    try {
        const result = await fetch('https://jsonplaceholder.typicode.com/comments').then(res => res.json());
        console.log(result);
        return result;
    }
    catch (error){
        console.log(error);
    }
}

async function api_02() {
    try {
        const result = await fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json());
        console.log(result);
        return result;
    }
    catch (error){
        console.log(error);
    }
}

async function api_03() {
    try {
        const result = await fetch('https://jsonplaceholder.typicode.com/albums').then(res => res.json());
        console.log(result);
        return result;
    }
    catch (error){
        console.log(error);
    }
}

async function api_04() {
    try {
        const result = await fetch('https://jsonplaceholder.typicode.com/photos').then(res => res.json());
        console.log(result);
        return result;
    }
    catch (error){
        console.log(error);
    }
}

async function api_05() {
    try {
        const result = await fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());
        console.log(result);
        return result;
    }
    catch (error){
        console.log(error);
    }
}


api();
api_01();
api_02();
api_03();
api_04();
api_05();