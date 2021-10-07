//1
let user = {};
    user.name ='John',
    user.surname ='Smith',
    console.log(user);
    user.name = 'Pete';
    console.log(user);
delete user.name
    console.log(user);

//2 
// Можно ли изменить объект, объявленный с помощью const? - нельзя, переменную user изменять нельзя изменять.

const user = {
    name: 'John'
};
// это будет работать? - будет.
user.name = 'Pete';

//3
let salaries = {

  John: 100,

  Ann: 160,

  Pete: 130
}
console.log(salaries);
let sum = salaries.John + salaries.Ann + salaries.Pete;
console.log(sum); //суммирования всех зарплат