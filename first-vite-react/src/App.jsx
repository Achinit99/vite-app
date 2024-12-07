function App() {

  function hello1() {
    console.log("hello 1");
  }

  const hello2 = () => {
    console.log("hello 2");
  }

  const hello3 = (name) => {
    console.log("hello 3" + name);
  }


  return (
    <>
      <div>
        <button onClick={hello1}>Click 1</button>
        <button onClick={hello2}>Click 2</button>
        <button onClick={
          () => {
            hello3("Achini")
          }

        }>Click 3</button>

      </div>
    </>
  )
}

export default App
