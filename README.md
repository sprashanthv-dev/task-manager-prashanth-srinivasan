# Task Manager - Prashanth Srinivasan

#### 1. Introduction

A Task management application that supports adding new tasks, edit existing tasks, mark tasks as complete and delete tasks. The application also has a task list and task detail page and users can freely navigate between these two pages.

#### 2. Tools, Technologies and Libraries

- **React.js**
- **TypeScript** for type safety
- **Vite** as the scaffolding and build tool
- **ESLint** to maintain code quality
- **Prettier** to maintain consistent code formatting
- **React Router** to enable navigation capabilities
- **uuid** to generate unique id's for tasks

#### 3. Steps to Run the App

- Requires `Node.js` and `npm` installed before proceeding
- Clone the repository locally
- Navigate to `task-manager` folder
- Once inside the `task-manager` folder, run `npm i` (or) `npm install`
- Once the dependencies have been installed, run `npm run dev` to start the local development server on port `5173`, which is the default port

#### 4. Additional Commands

- `npm run lint` - Runs code quality check in all `.ts` and `.tsx` files according to the rules specified in `eslint.config.js`
- `npm run format` - Formats all `.ts` and `.tsx` files according to the rules specified in `.prettierrc`

#### 5. Core Features and How to use

- Add a task that contains a title and an optional description. This is done by clicking on the `New Task` button in the home page. By default, all tasks are assigned a unique `uuid` upon creation and their completion status is `false`.

- Edit an existing task that allows updating the title and description. This is done by clicking on the pencil icon located on the right side of each task.

- Task Detail page which shows the information associated with each task (i.e. title, description and completion status). This is done by clicking on the `i` (information) icon located on the right side of each task. This operation automatically navigates to the Task Detail page for that task. To return back to the home page the `Go back` button is used.

- Ability to toggle a task's completion status using the checkbox located to the left side of the task title.
  
- Delete a task by clicking on the trash can icon on the right side of the task.

#### 6. Extras
- The operations performed on a task are persisted across browser refreshes and page navigations using local storage.
- All of the UI elements are responsive and works well across all screen sizes from mobile to TV.
- The modal that pops up on adding and editing a task is designed from scratch using plain `HTML` and `CSS` without the use of any component libraries. It is closed using the close icon and can be reused across the entire application for varied use cases since it accepts any component as its template.
- The form component inside the modal supports validation -- Does not accept titles greater than 30 characters and descriptions greater than 500 characters.

#### 7. Design Considerations
- Modal was used for adding and editing tasks rather than creating new pages for these actions. Modals help the user to retain the context of their current page and prevents unnecessary redirections especially considering that `Add` and `Edit` might be frequently performed operations.
- Local storage was used for easier management of task data across pages. Together with modals, it prevented the hassles of passing state information across various components of the application, enabling predictable data flow.

#### 8. Future Enhancements and thoughts
- Local storage works fine for small amounts of data. However, it is not a good fit for storing sensitive information and large data sizes. A centralized state management such as `Redux` or `Zustand` is better suited for maintaining application state across multiple components in larger applications.
- Though modals help to retain user context preventing too many navigations, too many of them can impact user experience and accessibility. Depending on the future requirements, modals can be dropped and individual pages is desirable for additional features.
- Currently, the `App` Component maintains all of the state and also the modal interactions. This can be refactored by creating a `TaskManager` component that performs all functionalities related to tasks enabling the `App` component to be leaner as the application grows.