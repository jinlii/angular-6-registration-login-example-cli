# angular-6-registration-login-example-cli

Angular 6 - User Registration and Login Example with Angular CLI


# HttpInterceptor
## custom interceptor to catch all error responses from the server
## JWT Interceptor to add Authorization for the http request if localStorage exists
## FakeBackendInterceptor for authentication and CRUD methods
```
if (request.url.endsWith('/users/authenticate') && request.method === 'POST') {

```
