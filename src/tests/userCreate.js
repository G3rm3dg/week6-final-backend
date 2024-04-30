const User = require("../models/User")

const userCreate = async()=>{

    const user = {
        firstName: "Jaime",
        lastName: "Gonzalez",
        email: "jaime12345@gmail.com",
        password: "jaime12345",
        phone: "123123"
    }

    await User.create(user)

}

module.exports = userCreate