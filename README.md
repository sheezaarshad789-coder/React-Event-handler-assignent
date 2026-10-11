# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:


# Event Handler Assignment

## What Is an Event Handler?

An event handler is a function that runs in response to an event, such as a button click, a key press, or a form submission. In React, event handlers are passed to elements through event props such as `onClick` and `onChange`.

## Event Handlers Used in This Assignment

This project is a counter built with React. It demonstrates click event handlers:

- **Increase:** The `increase` function runs when the **Increase** button is clicked and adds 1 to the counter.
- **Decrease:** The `decrease` function runs when the **Decrease** button is clicked and subtracts 1 from the counter.
- **Reset:** The `reset` function runs when the **Reset** button is clicked and sets the counter back to 0.

Each function is connected to its button with the React `onClick` prop. The counter value is stored in React state using `useState`, and calling `setCount` updates the displayed value.

## Run Locally

Install dependencies and start the Vite development server:

```bash
npm install
npm run dev
```

To check the project, run:

```bash
npm run lint
npm run build
```
