import Matrix3 from '../../../Library/Math/Matrix3.js'
import TestMatrix from './TestMatrix.js'

/** Class for testing the Matrix3 class. */
export default class TestMatrix3 extends TestMatrix {
    /**
     * Create and run the tests.
     */
    constructor() {
        super()
        console.info('testing Matrix3')
        this.testAdd()
        this.testSub()
        this.testMul()
        this.testMulIdentity()
        this.testRot()
    }

    /**
     * Test the addition method.
     */
    testAdd() {
        console.info('test Matrix3.add()')
        const a = [
            1, 2, 3,
            4, 5, 6,
            7, 8, 9,
        ]
        const b = [
            3, 4, 5,
            6, 7, 8,
            9, 10, 11,
        ]
        const expected = [
            4, 6, 8,
            10, 12, 14,
            16, 18, 20
        ]
        const m = new Matrix3(a)
        m.add(b)
        const actual = m.elements
        this.assertIdentical(actual, expected)
    }

    /**
     * Test the subtraction method.
     */
    testSub() {
        console.info('test Matrix3.sub()')
        const a = [
            1, 2, 3,
            4, 5, 6,
            7, 8, 9,
        ]
        const b = [
            9, 8, 7,
            6, 5, 4,
            3, 2, 1,
        ]
        const expected = [
            -8, -6, -4,
            -2, 0, 2,
            4, 6, 8,
        ]
        const m = new Matrix3(a)
        m.sub(b)
        const actual = m.elements
        this.assertIdentical(actual, expected)
    }

    /**
     * Test the multiplication method.
     */
    testMul() {
        console.info('test Matrix3.mul()')
        const a = [
            1, 2, 3,
            4, 5, 6,
            7, 8, 9,
        ]
        const b = [
            -1, 2, -3,
            4, -5, 6,
            -7, 8, -9,
        ]
        const expected = [
            -14, 16, -18,
            -26, 31, -36,
            -38, 46, -54,
        ]
        const m = new Matrix3(a)
        m.mul(b)
        const actual = m.elements
        this.assertIdentical(actual, expected)
    }

    /**
     * Test the multiplication method with an identity matrix.
     */
    testMulIdentity() {
        console.info('test Matrix3.mul() by identity matrix')
        const a = [
            1, 2, 3,
            4, 5, 6,
            7, 8, 9,
        ]
        const i = [
            1, 0, 0,
            0, 1, 0,
            0, 0, 1
        ]
        const expected = [
            1, 2, 3,
            4, 5, 6,
            7, 8, 9,
        ]
        const m = new Matrix3(a)
        m.mul(i)
        const actual = m.elements
        this.assertIdentical(actual, expected)
    }

    /**
     * Test the rotation method.
     * 
     * werkt niet correct :(
     * 
     */
    testRot() {
        console.info('test Matrix3.rot()')
        const α = 90
        const y = 0
        const z = 90
        const a = [
            3, 0, 0,
            1, 0, 0,
            2, 0, 0,
        ]
        const expected = [
            
        ]
        const m = new Matrix3(a)
        m.rot(α, y, z)
        const actual = m.elements
        this.assertIdenticalRounded(actual, expected)
    }
}