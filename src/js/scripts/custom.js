$( document ).ready(function() {

    // ES6
    class User {
        constructor(username, email, password) {
            this.username = username;
            this.email = email;
            this.password = password;
        }

        register() {
            console.log(`${this.username} is now registered`);
        }
    }

    let andrey = new User('Andrey', 'andrey@ya.ru', '123');

    andrey.register();
});