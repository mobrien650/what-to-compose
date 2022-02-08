export class DefaultViewModel {
    actionMappings = {}    

    constructor() {
        this.reduce = this.reduce.bind(this)
    }

    initialState() {
        throw new Error("Initial state not set correctly")
    }

    reduce(state, action) {
        if(this.actionMappings[action.type]) {
            return this.actionMappings[action.type].call(this, state, action.payload)
        } else {
            throw new Error("Unhandled Action Received")
        }
    }
}