const testController = {

}

testController.get=(request,response)=>{
    response.send('Method testController get functional');
}

testController.post=(request,response)=>{
    response.send('Method testController post functional');
}

testController.update=(request,response)=>{
    response.send('Method testController update functional');
}

testController.destroy=(request,response)=>{
    response.send('Method testController delete functional');
}

module.exports = testController;