class Person {

    constructor(favoriteColor) {
        this.health = 100
        this.favoriteColor = favoriteColor
    }

    nap() {
        console.log('...zzzzzzz 😴')
    }
}



class Teacher extends Person {

    static all = []
    constructor(firstName, lastName) {
        super("blue") // will invoke Person's constructor
        this.firstName = firstName
        this.lastName = lastName
        Teacher.all.push(this)
    }

    introduce() {
        console.log(`Hi, my name is ${this.firstName}`)
    }

    // overriding Person's nap method
    nap() {
        console.log('I want to take a nap!!!')
    }

    static findTeacherByName(name) {
        return Teacher.all.find(teacher => teacher.firstName === name)
    }

}

const raffy = new Teacher("Rafferty", "Rios")
const michelle = new Teacher("Michelle", "Rios")
