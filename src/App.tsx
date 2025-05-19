import './App.scss'
import Articles from './views/Articles/Articles'
import Footer from './views/Footer/Footer'
import Header from './views/Header/Header'
import Sidebar from './views/Sidebar/Sidebar';

type Article = {
  title: string;
  text: string;
  link: string;
};

const articles: Article[] = [
  {
    title: "Rendering Elements",
    text: "In React, elements are the smallest building blocks of the UI. When you create an element using JSX, it describes what the UI should look like. React updates and changes only the parts of the DOM that have actually changed. This approach ensures high performance and efficiency. It’s important to remember that elements are immutable after creation.",
    link: "https://react.dev/learn/rendering-elements",
  },
  {
    title: "Components and Props",
    text: "Components are independent and reusable pieces of UI. They can be either functional or class-based. Props allow you to pass data to components similarly to function arguments. Components can be nested inside each other to build more complex UIs. This is the foundation of React’s component-based architecture.",
    link: "https://react.dev/learn/your-first-component",
  },
  {
    title: "State: A Component’s Memory",
    text: "State lets a component remember information between renders. This is useful when the UI needs to respond to user actions or change over time. For example, a counter uses state to store its current value. Changing state causes the component to re-render. Using the useState hook is the basic way to manage state in React.",
    link: "https://react.dev/learn/state-a-components-memory",
  },
  {
    title: "Responding to Events",
    text: "Events in React work similarly to DOM events but offer cross-browser compatibility. Components can respond to events such as clicks, form submissions, or text input. To handle an event, simply add an event handler via JSX. Event handlers usually pass a function that updates the state. This enables creating interactive and dynamic user interfaces.",
    link: "https://react.dev/learn/responding-to-events",
  },
  {
    title: "Conditional Rendering",
    text: "React lets you render different elements based on conditions. This can be done using if-else statements, ternary operators, or logical &&. For example, you can display an error message only when it exists. This approach makes the UI adaptive to the app’s state. It also simplifies component structure by separating logic and rendering.",
    link: "https://react.dev/learn/conditional-rendering",
  },
  {
    title: "Rendering Lists",
    text: "Rendering lists in React involves using the map function to transform arrays into elements. Each list item should have a unique key to help React identify which items have changed. Keys improve performance and reduce bugs when updating lists. You can render any type of data this way, such as posts, users, or comments. This technique is essential for building dynamic, data-driven apps.",
    link: "https://react.dev/learn/rendering-lists",
  },
];



function App() {
    return (
    <>
      <Header/>
      <main>
        <Articles articles={articles}/>
        <Sidebar topices={articles}/>
      </main>
      <Footer/>
    </>
  )
}

export default App
