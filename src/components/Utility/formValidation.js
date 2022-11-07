const formValidation = (state) => {
    let errors = {};

    if(!state.firstName){
        errors.firstName = "Name is required"
    }

    if(!state.lastName){
        errors.lastName = "Last Name is required"
    }

    if(!state.email){
        errors.email = "Email is required"
    } else if(!/\S+@\S+.\S+/.test(state.email)){
        errors.email = "Email is invalid"
    }

    if(!state.phone){
        errors.phone = "Phone is required"
    } else if(!/^[0-9]{9,15}$/.test(state.phone)){
            errors.phone = "Phone is invalid"
    }

    return errors;

};

export default formValidation;