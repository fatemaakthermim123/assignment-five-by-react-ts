### DevStack

##  Project Description
DevStack is an interactive and organized web application that helps developers explore and build their ideal using technologies. Users can browse through various frontend, backend, database, and DevOps technologies, view detailed information about each one (category, difficulty level, rating), and add their preferred choices to a personal "stack" — making it easy to compare and plan technology combinations for a project.

##  Technologies Used
- React
- TypeScript
- Tailwind CSS
- daisyUI
- Vite
- React Icons
- React Toastify
- google Font

##  Key Features
- **Explore Technologies** — Browse a  list of technologies with details like description, difficulty level, and rating.
- **Build Your Stack** — Add technologies to a personal stack with a single click; added items are instantly reflected with toast notifications and disabled buttons to prevent duplicates.
- **Manage Your Stack** — Remove individual technologies or clear the entire stack at once, with the UI updating in real time and an empty-state message when no technologies are selected.

---

## Answering Questions

**1. What is JSX, and why is it used in React?**
JSX (Javascript XML) is a syntax extension for JavaScript that lets us write HTML-like code inside our JavaScript files. It is used in React because it makes it much easier to visualize and write the UI structure, instead of writing complicated code.

**2. What is the difference between props and state?**
Props are data passed from a parent component to a child component, and the child cannot change them . State is data that a component manages and can change.

**3. What does the `useState` hook do, and where did you use it in this project?**
`useState` lets a component create and manage its own local state that can change and trigger a re-render when updated. In this project, I used it in `Technologies.tsx`.

**4. What does the `useEffect` hook do, and why did you need it to load the JSON data?**
`useEffect` lets us run side effects (like fetching data) after a component renders. In this project, instead of `useEffect`, I used the `use()` hook together with a Promise created inside `useState` to fetch and load the `data.json` file when the `Technologies` component first renders.

**5. Why does every item in a `.map()` list need a unique `key` prop?**
The `key` prop helps React identify which specific item in a list has changed, been added, or removed. Without a unique key, React cannot efficiently track list items, which can cause bugs or incorrect re-renders when the list updates.

**6. What is conditional rendering? Show one place you used it (example: the empty stack message).**
Conditional rendering means showing different UI based on a condition. For example, in `SelectedStack.tsx`, I used it to display "Your stack is empty" when `selectedStacks.length === 0`.

**7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**
Data is passed from parent to child using props.the parent passes values as attributes on the child component, and the child receives them as function parameters. To send data back to the parent, the parent passes a function (like `setSelectedStacks`) as a prop, and the child calls that function with new data, which updates the parent's state.