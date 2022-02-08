export function build(type, payload) {
    const action = {
        type: type
    }

    if(payload) {
        action.payload = payload
    }
    
    return action
}