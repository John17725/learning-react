const { response } = require("express");

const testController = {

}

testController.get = (request, response) => {
    response.send('Method testController get functional');
}

testController.post = async (req, res) => {
    const { name, lastname, salary } = req.body
    const newInput = new Employee({
        name,
        lastname,
        salary
    })
    await newInput.save()
    res.json({
        message: 'Employee saved'
    })
    // console.log('Method testController post functional')
    // res.send('Method testController post functional');
}

testController.update = (request, response) => {
    response.send('Method testController update functional');
}

testController.destroy = (request, response) => {
    response.send('Method testController delete functional');
}

module.exports = testController;