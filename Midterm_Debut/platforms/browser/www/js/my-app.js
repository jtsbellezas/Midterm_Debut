var app = new Framework7({
// App root element
root: '#app',
// App Name
name: 'My App',
// App id
id: 'com.myapp.test',
// Enable swipe panel
panel: {
swipe: 'left',
},
// Add default routes
routes: [
{
path: '/about/',
url: 'about.html',
},
{
  path: '/program/',
  url: 'program.html',
},
{
  path: '/18list/',
  url: '18list.html',
},
{
  path: '/clothing/',
  url: 'clothing.html',
},
{
  path: '/venue/',
  url: 'venue.html',
},
{
  path: '/menu/',
  url: 'menu.html',
},
{
  path: '/main/',
  url: 'main.html',
},
{
  path: '/map/',
  url: 'map.html',
},
{
  path: '/menu2/',
  url: 'menu2.html',
},
{
  path: '/developers/',
  url: 'developers.html',
},
],
// ... other parameters
});
var mainView = app.views.create('.view-main');
