# Hi there :smiley: <br>
This is the repo of Team MasterOfNone

How to run the project:

## 1. Clone this repo

`$ git clone https://github.com/mitchelljphayes/subman.git`

move into the subman directory

`$ cd subman`

## 2. Set up environment
make sure you have pipenv installed using pip or pip3 depending on your system.

`$ pip install pipenv`

install from pipfile using pipenv

`$ pipenv install`

Then activate the virtual environment with 

`$ pipenv shell`

This should set up a local python environment inside your repo so we can all keep insync

If you install any dependencies make sure you do so via pipenv, so it gets added to the pipfile.


add .env file
you should have recieved a .env file with our SECRETS ;) add that to the root directory and re run`$ pipenv install`

## 3. Set up database

install mysql -> https://dev.mysql.com/downloads/mysql/ (don't be a sucker get the community edition)

make sure you set a root user password. 

after installing MySQL launch the server either with mySQL workbench or however you prefer. CLI instructions bellow. 

`$ mysql.server start`

login

`$ mysql -u root -p`

you will be propted to enter your root user password, so do that.

create a new database called subman

`-> CREATE DATABASE subman;`
`-> exit`

return to your pipenv environment and the root directory of subman

run `$ pipenv install` to make sure you have the mysql package

add your mySQL root password to the .env file

`DB_PASSWORD = <password>`

run the migrations  

`$ python manage.py makemigrations`
`$ python manage.py migrate`

Django will now have generated the tables in the database. Verify with your favourite DBMS tool like mySQL server or DataGrip or with CLI if you're into that kind of thing. 

# How to run React 
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

