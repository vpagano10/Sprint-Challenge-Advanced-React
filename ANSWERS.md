- [ ] Why would you use class component over function components (removing hooks from the question)?
    - If you need to have state on your comopnent you need to make a class component, otherwise if your using a functional component you would need to pass the state down from the parent component. Also, by using class components you get access to lifecycle hooks.

- [ ] Name three lifecycle methods and their purposes.
    - 1). Mounting = the birth or start of the component and implementation into the code 2). Updating = growth of the component to perhaps include new features as time goes on in order to imporove the code, maybe a new feature elsewhere in the code breaks it, so you need to update the component 3).Unmounting = the death or discontinued use of the component

- [ ] What is the purpose of a custom hook?
    - A custom hook allows you to write functional code/turn component logic into functions one time and continuously use it by calling it the same way you would call predefined hooks in react like useState or useEffect. You have the ability to make the custom hook exactly how you want it to perform such as the example we did this week with darkmode for pages and using local storage for your data.

- [ ] Why is it important to test our apps?
    - 1). It can let you know down to the specific unit what parts of your code are working. 2). It can let you know if there is an issue with different functions or parts of your code in their communication with one another that can affect how your code runs as a whole. 3). It can help to act as a form of documentation for your code so that if another developer needs to make chages or updates, they know what each part of the code is supposed to be doing.