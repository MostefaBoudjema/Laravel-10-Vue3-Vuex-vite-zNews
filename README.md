# My App

This is a web app built with Laravel 10 backend and Vue 3 frontend. It uses Vuex for state management and Bootstrap 5 for styling.

## Features

- Laravel 10 backend with REST APIs
- Vue 3 frontend with Vue Router and Vuex 
- Authentication using Laravel Sanctum
- Bootstrap 5 for responsive styling

## Installation

1. Clone the repo
2. Run `composer install`
3. Copy `.env.example` to `.env` and configure your environment variables
4. Run `php artisan key:generate` 
5. Run `npm install`
6. Run `php artisan migrate`
7. Run `php artisan db:seed` to seed the database
8. Run `npm run dev` to compile assets

## Usage

- Run `php artisan serve` to run the Laravel app
- Run `npm run dev` to compile Vue assets on change
- Access the app at `http://localhost:8000`

## Vuex Store

The app uses Vuex to manage application state. The store is defined in `resources/js/store.js`. It contains:

- auth module - manages auth state
- alert module - manages alert messages 
- etc

## Laravel APIs

The Laravel backend provides REST APIs for the Vue frontend. The APIs are defined in `app/Http/Controllers/API` and use Laravel Sanctum for authentication.

## Frontend Structure 

- `resources/js/router/index.js` - Vue Router instance
- `resources/js/app.js` - Main Vue app component
- `resources/js/components/` - Reusable Vue components 
- `resources/js/views/` - Vue view components for each page
- `resources/js/store/index.js` - Vuex store

## Testing API

- Run `php artisan test` to run backend API tests

## Testing Frontend

- Run `npm run test` for JS unit tests
- Run `npm run test:e2e` for frontend E2E tests