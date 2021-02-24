class RecursiveInjection {

    static get inject() {
        return ['test/modules/InjectSimpleClass']
    }

    constructor(injectsSimpleClass) {
        this.injectsSimpleClass = injectsSimpleClass
    }
}

module.exports = RecursiveInjection