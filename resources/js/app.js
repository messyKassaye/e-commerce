/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');

 /* 
  we have to types of route.
  1. default route for non authenticated users
  2.Authenticated route for users who are logged in and access resources
  based on this when the app starts it checks the token existency or user authentication
  if user is logged in which means if there is stored data on localstorage or cookies it
   will let them to dashboard
  if users are not logged in then it redirects them to home page
 */
require('./routes/Routes');

