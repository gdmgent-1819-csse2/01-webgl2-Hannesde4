import Vector4 from '../../../Library/Math/Vector4.js'

/** Class for testing the Vector4 class. */
export default class TestVector4{
    /**
     * Create and run the tests.
     */
    constructor() {
        // super()
        console.info('testing Vector4')
        this.testAdd()
        this.testSub()
        this.testScalar()
        this.testRot()
    }

    /**
     * Test the addition method.
     */
    testAdd()
    {
        console.log('test: Vector4.add;')
        const x1 = 2
        const y1 = 1
        const z1 = 3
        const w1 = 1
        const x2 = 2
        const y2 = 1
        const z2 = 3
        const w2 = 5
        console.log('x1:', x1, 'y1:', y1, 'z1', z1, 'w1:', w1, 'x2:', x2, 'y2:', y2, 'z2:', z2, 'w2', w2)
        const expectedx = 4
        const expectedy = 2
        const expectedz = 6
        const expectedw = 6
        const v1 = new Vector4(x1, y1, z1, w1)
        const v2 = new Vector4(x2, y2, z2, w2)
        v1.add(v2)
        const actualx = v1.x
        const actualy = v1.y
        const actualz = v1.z
        const actualw = v1.w
        this.assertIdentical(actualx, actualy, actualz, actualw, expectedx, expectedy, expectedz, expectedw)
    }

    /**
     * Test the subtraction method.
     */
    testSub()
    {
        console.log('test: Vector4.sub;')
        const x1 = 8
        const y1 = 4
        const z1 = 3
        const w1 = 2
        const x2 = 2
        const y2 = 1
        const z2 = 3
        const w2 = 4
        console.log('x1:', x1, 'y1:', y1, 'z1', z1, 'w1:', w1, 'x2:', x2, 'y2:', y2, 'z2:', z2, 'w2:', w2)
        const expectedx = 6
        const expectedy = 3
        const expectedz = 0
        const expectedw = -2
        const v1 = new Vector4(x1, y1, z1, w1)
        const v2 = new Vector4(x2, y2, z1, w2)
        v1.sub(v2)
        const actualx = v1.x
        const actualy = v1.y
        const actualz = v1.z
        const actualw = v1.w
        this.assertIdentical(actualx, actualy, actualz, actualw, expectedx, expectedy, expectedz, expectedw)
    }

    /**
     * Test the scalar method.
     */
    testScalar()
    {
        console.log('test: Vector4.scalar;')
        const x = 2
        const y = 3
        const z = 4
        const w = 1
        const a = 2
        console.log('x:', x, 'y:', y, 'z:', z, 'w:', w, 'a:', a)
        const expectedx = 4
        const expectedy = 6
        const expectedz = 8
        const expectedw = 2
        const v = new Vector4(x, y, z, w)
        v.scalar(a)
        const actualx = v.x
        const actualy = v.y
        const actualz = v.z
        const actualw = v.w
        this.assertIdentical(actualx, actualy, actualz, actualw, expectedx, expectedy, expectedz, expectedw)
    }

    /**
     * Test the rotation method.
     */
    testRot()
    {
        console.log('test: Vector4.rot;')
        const x = 2
        const y = 3
        const z = 2
        const w = 4
        const α = 2
        console.log('x:', x, 'y:', y, 'z:', z, 'w:', w, 'α:', α)
        const expectedx = 2
        const expectedy = 3
        const expectedz = 2
        const expectedw = 4
        const v = new Vector4(x, y, z, w)
        v.rot(α)
        const actualx = v.x
        const actualy = v.y
        const actualz = v.z
        const actualw = v.w
        this.assertIdentical(actualx, actualy, actualz, actualw, expectedx, expectedy, expectedz, expectedw)
    }

    assertIdentical(actualx, actualy, actualz, actualw, expectedx, expectedy, expectedz, expectedw) {
        const actualroundx = Math.round(actualx)
        const actualroundy = Math.round(actualy)
        const actualroundz = Math.round(actualz)
        const actualroundw = Math.round(actualw)
        if (actualroundx === expectedx) {
            console.log('PASS', `actual: ${actualroundx}`)
        } else {
            console.error('FAIL', `actual: ${actualroundx}`)
        }
        if (actualroundy === expectedy) {
            console.log('PASS', `actual: ${Math.round(actualroundy)}`)
        } else {
            console.error('FAIL', `actual: ${actualroundy}`)
        }
        if (actualroundz === expectedz) {
            console.log('PASS', `actual: ${Math.round(actualroundz)}`)
        } else {
            console.error('FAIL', `actual: ${actualroundz}`)
        }
        if (actualroundw === expectedw) {
            console.log('PASS', `actual: ${Math.round(actualroundw)}`)
        } else {
            console.error('FAIL', `actual: ${actualroundw}`)
        }
    }
}