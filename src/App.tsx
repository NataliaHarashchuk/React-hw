import './App.scss'

function App() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const usernameInput = form.elements.namedItem("username") as HTMLInputElement;

    console.log(usernameInput.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Введи ім'я" />
        <button type="submit">Відправити</button>
      </form>
    </>
  )
}

export default App
