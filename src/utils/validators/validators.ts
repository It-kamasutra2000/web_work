export const required = (value: string) => {
    let error;
    if(!value) {
        error = 'filed is required'
    }
    return error;
}