import TestMatrix2 from './Library/Math/TestMatrix2.js'
import TestMatrix3 from './Library/Math/TestMatrix3.js'
import TestMatrix4 from './Library/Math/TestMatrix4.js'

import TestVector2 from './Library/Math/TestVector2.js'
import TestVector3 from './Library/Math/TestVector3.js'
import TestVector4 from './Library/Math/TestVector4.js'

/** Class to run tests. */
export default class Tests {
    /**
     * Create the tests.
     */
    constructor() {
        console.log('Running Tests…')
        new TestVector2()
        console.log("================================================")
        new TestVector3()
        console.log("================================================")
        new TestVector4()
        console.log("================================================")


        new TestMatrix2()
        console.log("================================================")
        new TestMatrix3()
        console.log("================================================")
        new TestMatrix4()
    }
}