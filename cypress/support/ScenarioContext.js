class ScenarioContext {
    constructor() {
        this.context = {};
    }

    // Set value for a specific key
    setValue(key, value) {
        this.context[key] = value;
    }

    // Get value for a specific key
    getValue(key) {
        return this.context[key];
    }

    // Clear context after a scenario (optional)
    clearContext() {
        this.context = {};
    }
}

// Export a single instance of ScenarioContext
module.exports = new ScenarioContext();
