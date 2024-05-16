// http://latentflip.com/loupe/?code=c2V0VGltZW91dChmdW5jdGlvbiB0aW1lcigpIHsKICBjb25zb2xlLmxvZygnWW91IGNsaWNrZWQgdGhlIGJ1dHRvbiEnKTsKfSwgMjAwMCk7IAoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogIGNvbnNvbGUubG9nKCJDbGljayB0aGUgYnV0dG9uISIpOwp9LCA1MDAwKTsKCmNvbnNvbGUubG9nKCJXZWxjb21lIHRvIGxvdXBlLiIpOw%3D%3D!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D

console.log('This is about event loop in JS');
setTimeout(function timer() {
    console.log('You clicked the button!');
}, 2000);

console.log("Hi!");

setTimeout(function timeout() {
    console.log("Click the button!");
}, 5000);

console.log("Welcome to loupe.");