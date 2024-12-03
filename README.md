# Ideal Solutions Assessment (Angular)

This is a simple Angular application built with **PrimeNG** for UI components. The app fetches data from a **JSON Server** that uses a `db.json` file as its mock database.

---

## Features

- **PrimeNG** for rich UI components.
- **JSON Server** as a lightweight REST API for mock data.
- Example integration with Angular's **HTTP Client** to fetch and display data.

## Demo video
https://github.com/user-attachments/assets/73b7dbe2-2b88-4faa-af07-b0b13c116e2e

---

## Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or later)
- [Angular CLI](https://angular.io/cli)
- npm or yarn for dependency management

---

### Installation

1. Clone the repository:

    ```bash
    git clone git@github.com:SarmadKhoja95/ideal-solutions-fe-test.git
    ```

2. Install dependencies:

    ```bash
    cd ideal-solutions-fe-test
    npm install
    ```

3. Start the mock server (json-server):

    ```bash
   npx json-server db.json
    ```

    
4. Start the Angular application:

    ```bash
   npm run start
    ```

## Folder structure

```plaintext
src/
├── app/
│   ├── layout/             # Layout components
│   ├── services/           # Services for API calls
│   ├── views/              # Views or pages
│   ├── app.component.ts    # Root component
│   ├── app.config.ts       # Configuration file
│   ├── app.routes.ts       # Routing configuration
├── environments/           # Environment-specific configurations
├── index.html              # Main HTML file
├── main.ts                 # Entry point of the application
├── styles.scss             # Global styles
```

 
