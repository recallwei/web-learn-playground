class User {
  constructor(user) {
    this.name = user.name
    this.email = user.email
  }
  getName = () => this.name

  getEmail() {
    return this.email
  }
}

const user = new User({ name: 'Bruce', email: 'recall4056@gmail.com' })
user.getName()
user.getEmail()
