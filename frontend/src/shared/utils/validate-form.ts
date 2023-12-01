

export function validateForm(form: any, type: string = 'register'): object {
    const emailReg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const passwordReg = /[a-zA-Z]/g;
    let errors: any = {
        success: true,
        fields: [],
    }
    
    if (form.password.length < 8 || !form.password.match(passwordReg)) {
        errors.success = false;
        errors.fields.push('password');
    }
    
    if (!form.email.length || !form.email.match(emailReg)) {
        errors.success = false;
        errors.fields.push('email');
    }

    if (type === 'login') {
        return errors;
    }
    
    if (form.name.length < 4) {
        errors.success = false;
        errors.fields.push('name');
    }
    return errors;
}