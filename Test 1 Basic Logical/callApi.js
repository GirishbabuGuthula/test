// Let’s see we an api url https://my-json-server.typicode.com/typicode/demo/posts
// Write a sample code to call this rest api and display the result.

const callApi = async () => {
    const result = await fetch('https://my-json-server.typicode.com/typicode/demo/posts').then(res => res.json()).then(data => data);
    console.log(result);
}

callApi();