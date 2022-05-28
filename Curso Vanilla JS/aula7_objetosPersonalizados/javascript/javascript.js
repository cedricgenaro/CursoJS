let person1 = {
    name: 'Thiago'
}
let person2 = {
    name: 'Webdesign',
    age: 10,
    status: false,
    array: ['profissional', 'design', 'website'],
    work: function() {
        alert('work');
    },
    suporte: person1,
    useThis: function(){
        return this.age;
    }

}

console.log(person2.useThis());