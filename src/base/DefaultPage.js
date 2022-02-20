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
            // TODO: Call a map function to return a view state from the inner state
            //       Also state needs to be converted and saved on an inner state (and made immutable)
            return this.actionMappings[action.type].call(this, {...state}, action.payload)
        } else {
            throw new Error("Unhandled Action Received")
        }
    }
}