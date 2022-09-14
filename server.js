// const AdminJS = require('adminjs');
// const AdminJSExpress = require('@adminjs/express');
// const AdminJSSequelize = require('@adminjs/sequelize');
// AdminJS.registerAdapter(AdminJSSequelize);

const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// Create express router for AdminJS package routes
const adminJs = new AdminJS({ databases: [], rootPath: '/admin' });
const router = AdminJSExpress.buildRouter(adminJs);

//! Do we need to set up Handlebars.js engine with custom helpers?
const hbs = exphbs.create({ helpers });

//! What does sess do?
const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict'
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Use adminJS package routing
app.use(adminJs.options.rootPath, router);
app.listen(8080, () => console.log('AdminJS is under localhost:8080/admin'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
