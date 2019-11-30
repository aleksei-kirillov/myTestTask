class Validator {

  validateInputs(inputData) {
    let errorMsg = "";
    if(!inputData.name) {
      errorMsg +="Please enter name of this item.\n"
    }
    if(!inputData.summary) {
      errorMsg +="Please enter summary of this item.\n"
    }
    if(errorMsg.length === 0){
      return true;
    } else {
      alert(errorMsg);
      return false;
    }
  }
}

export default Validator;
