# StudentPortal

# Student Portal — Angular 18

A simple web app I built to manage student records. You can add, view, edit, 
and delete students, and the data stays saved even after you close the app.

---

## What it does

- Add new students with their details
- View all students in a table
- Edit any student's information
- Delete students you no longer need
- Data is saved to a local JSON file so nothing is lost when you restart

---

## Built with

- Angular 18
- Bootstrap 5
- json-server (for saving data)
- TypeScript

---

## How to run it

You will need Node.js installed on your machine. If you don't have it, 
download it from nodejs.org first.

**Step 1 — Clone the project**
```bash
git clone https://github.com/RaiTahidkharl/Angular-18-Student-Portal-CRUD.git
cd Angular-18-Student-Portal-CRUD
```

**Step 2 — Install everything**
```bash
npm install
```

**Step 3 — Open two terminals and run both of these**

Terminal 1 (this saves your data):
```bash
npx json-server --watch db.json --port 3000
```

Terminal 2 (this runs the app):
```bash
ng serve
```

**Step 4 — Open your browser and go to**

http://localhost:4200

That's it. The app should be running.

---

## How to check data is actually saving

Once the app is running, open your browser and go to:


http://localhost:3000/students


You will see your student data there in JSON format. If you add a student 
in the app, it will show up here too. Close everything, reopen it, and 
the data will still be there.

---

## Author

Built by Rai Tahid Kharl  
GitHub: github.com/RaiTahidkharl



This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
