
// Create a function that will allow you to pass in a site URL and then asynchronously access data from that site. The site will return data in the form of an array of objects. Also, pass a property into the function that will be used to retrieve that property data from each object. Return the resulting data as an array. Use the test site https://jsonplaceholder.typicode.com/  

/* const getAsyncDataObjArray = async function(url, prop) {
  let result = await fetch(url);
  let json = await result.json();
  return json.map(obj => obj[prop]);
}; */

const getAsyncDataObjArray = async function(url, prop) {
  let result = await fetch(url).then(resp => resp.json());
  return result.map(obj => obj[prop]);
};























  getAsyncDataObjArray('https://jsonplaceholder.typicode.com/comments?postId=1', 'name').then(result => console.log(result));

// Testing getAsyncDataObjArray...

getAsyncDataObjArray('https://jsonplaceholder.typicode.com/comments?postId=1', 'name')
  .then(result => JSON.stringify(result))
  .then(str => console.assert(str === JSON.stringify(['id labore ex et quam laborum', 'quo vero reiciendis velit similique earum', 'odio adipisci rerum aut animi', 'alias odio sit', 'vero eaque aliquid doloribus et culpa']), `Retrieve comment names for postId 1.`));

  getAsyncDataObjArray('https://jsonplaceholder.typicode.com/posts?userId=2', 'title')
    .then(result => JSON.stringify(result))
    .then(str => console.assert(str === JSON.stringify(['et ea vero quia laudantium autem', 'in quibusdam tempore odit est dolorem', 'dolorum ut in voluptas mollitia et saepe quo animi', 'voluptatem eligendi optio', 'eveniet quod temporibus', 'sint suscipit perspiciatis velit dolorum rerum ipsa laboriosam odio', 'fugit voluptas sed molestias voluptatem provident', 'voluptate et itaque vero tempora molestiae', 'adipisci placeat illum aut reiciendis qui', 'doloribus ad provident suscipit at']), `Retrieve post titles for userId 2.`));
