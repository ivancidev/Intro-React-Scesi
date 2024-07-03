import "./App.css";
const text = "Hello World";
const number = 2
const numbers = [1,2,3,4,5, "23"]
const obj = {
  name: "John",
  age: 30,
}

function greet(){
  console.log("Hello World in console");
}

function Variable() {
  return (
    <>
    <h1>{text} is number {number}</h1>
    <p>{numbers}</p>
    <p>{JSON.stringify(obj)}</p>
    <p>{greet()}</p>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
          voluptatibus nesciunt non atque praesentium asperiores qui minus
          necessitatibus quasi! Cum animi nostrum, molestiae totam dolore
          voluptatibus? Blanditiis excepturi cupiditate hic!
        </p>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
          debitis architecto mollitia officia doloribus harum repellat fugiat
          repudiandae hic accusantium dolorem quasi aliquid modi voluptates
          nobis, id optio eligendi ex?
        </p>
      </div>
    </>
  );
}

export default Variable;
