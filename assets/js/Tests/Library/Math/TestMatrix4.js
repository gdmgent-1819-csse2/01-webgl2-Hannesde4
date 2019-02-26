import Matrix4 from '../../../Library/Math/Matrix4.js'
import TestMatrix from './TestMatrix.js'

/** Class for testing the Matrix4 class. */
export default class TestMatrix4 extends TestMatrix {
    /**
     * Create and run the tests.
     */
    constructor() {
        super()
        console.info('testing Matrix4')
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
        console.info('test Matrix4.add()')
        const a = [
            1, 2, 3, 4, 
            5, 6, 7, 8,
            9, 10, 11, 12,
            13, 14, 15, 16,
        ]
        const b = [
            3, 4, 5, 6, 
            7, 8, 9, 10,
            11, 12, 13, 14,
            15, 16, 17, 18,
        ]
        const expected = [
            4, 6, 8, 10,
            12, 14, 16, 18,
            20, 22, 24, 26,
            28, 30, 32, 34,
        ]
        const m = new Matrix4(a)
        m.add(b)
        const actual = m.elements
        this.assertIdentical(actual, expected)
    }

    /**
     * Test the subtraction method.
     */
    testSub() {
        console.info('test Matrix4.sub()')
        const a = [
            1, 2, 3, 4, 
            5, 6, 7, 8,
            9, 10, 11, 12,
            13, 14, 15, 16,
        ]
        const b = [
            16, 15, 14, 13,
            12, 11, 10, 9,
            8, 7, 6, 5,
            4, 3, 2, 1,
        ]
        const expected = [
            -15, -13, -11, -9,
            -7, -5, -3, -1,
            1, 3, 5, 7,
            9, 11, 13, 15,
        ]
        const m = new Matrix4(a)
        m.sub(b)
        const actual = m.elements
        this.assertIdentical(actual, expected)
    }

    /**
     * Test the multiplication method.
     */
    testMul() {
        console.info('test Matrix4.mul()')
        const a = [
            1, 2, 3, 4,
            5, 6, 7, 8,
            9, 10, 11, 12,
            13, 14, 15, 16,
        ]
        const b = [
            -1, 2, -3, 4,
            -5, 6, -7, 8,
            -9, 10, -11, 12,
            -13, 14, -15, 16
        ]
        const expected = [
            -90, 100, -110, 120,
            -202, 228, -254, 280,
            -314, 356, -398, 440,
            -426, 484, -542, 600,
        ]
        const m = new Matrix4(a)
        m.mul(b)
        const actual = m.elements
        this.assertIdentical(actual, expected)
    }

    /**
     * Test the multiplication method with an identity matrix.
     */
    testMulIdentity() {
        console.info('test Matrix4.mul() by identity matrix')
        const a = [
            1, 2, 3, 4,
            5, 6, 7, 8, 
            9, 10, 11, 12,
            13, 14, 15, 16,
        ]
        const i = [
            1, 0, 0, 0,
            0, 1, 0, 0, 
            0, 0, 1, 0,
            0, 0, 0, 1,
        ]
        const expected = [
            1, 2, 3, 4, 
            5, 6, 7, 8,
            9, 10, 11, 12,
            13, 14, 15, 16,
        ]
        const m = new Matrix4(a)
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
        console.info('test Matrix4.rot()')
        const α = 90
        const a = [
            4, 0, 0, 0,
            0, 3, 0, 0,
            0, 0, 2, 0,
            0, 0, 0, 1,
        ]
        const expected = [
            
        ]
        const m = new Matrix4(a)
        m.rot(α)
        const actual = m.elements
        this.assertIdenticalRounded(actual, expected)
    }
}