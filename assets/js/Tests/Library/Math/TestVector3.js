import Vector3 from '../../../Library/Math/Vector3.js'

/** Class for testing the Vector3 class. */
export default class TestVector3{
    /**
     * Create and run the tests.
     */
    constructor() {
        // super()
        console.info('testing Vector3')
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
        console.log('test: Vector3.add;')
        const x1 = 2
        const y1 = 1
        const z1 = 3
        const x2 = 2
        const y2 = 1
        const z2 = 3
        console.log('x1:', x1, 'y1:', y1, 'z1', z1, 'x2:', x2, 'y2:', y2, 'z2:', z2)
        const expectedx = 4
        const expectedy = 2
        const expectedz = 6
        const v1 = new Vector3(x1, y1, z1)
        const v2 = new Vector3(x2, y2, z2)
        v1.add(v2)
        const actualx = v1.x
        const actualy = v1.y
        const actualz = v1.z
        this.assertIdentical(actualx, actualy, actualz, expectedx, expectedy, expectedz)
    }

    /**
     * Test the subtraction method.
     */
    testSub()
    {
        console.log('test: Vector3.sub;')
        const x1 = 8
        const y1 = 4
        const z1 = 3
        const x2 = 2
        const y2 = 1
        const z2 = 3
        console.log('x1:', x1, 'y1:', y1, 'z1', z1, 'x2:', x2, 'y2:', y2, 'z2:', z2)
        const expectedx = 6
        const expectedy = 3
        const expectedz = 0
        const v1 = new Vector3(x1, y1, z1)
        const v2 = new Vector3(x2, y2, z1)
        v1.sub(v2)
        const actualx = v1.x
        const actualy = v1.y
        const actualz = v1.z
        this.assertIdentical(actualx, actualy, actualz, expectedx, expectedy, expectedz)
    }

    /**
     * Test the scalar method.
     */
    testScalar()
    {
        console.log('test: Vector3.scalar;')
        const x = 2
        const y = 3
        const z = 4
        const a = 2
        console.log('x:', x, 'y:', y, 'z:', z, 'a:', a)
        const expectedx = 4
        const expectedy = 6
        const expectedz = 8
        const v = new Vector3(x, y, z)
        v.scalar(a)
        const actualx = v.x
        const actualy = v.y
        const actualz = v.z
        this.assertIdentical(actualx, actualy, actualz, expectedx, expectedy, expectedz)
    }

    /**
     * Test the rotation method.
     */
    testRot()
    {
        console.log('test: Vector3.rot;')
        const x = 2
        const y = 3
        const z = 2
        const α = 2
        console.log('x:', x, 'y:', y, 'z:', z, 'α:', α)
        const expectedx = 2
        const expectedy = 0
        const expectedz = 2
        const v = new Vector3(x, y, z)
        v.rot(α)
        const actualx = v.x
        const actualy = v.y
        const actualz = v.z
        this.assertIdentical(actualx, actualy, actualz, expectedx, expectedy, expectedz)
    }

    assertIdentical(actualx, actualy, actualz, expectedx, expectedy, expectedz) {
        const actualroundx = Math.round(actualx)
        const actualroundy = Math.round(actualy)
        const actualroundz = Math.round(actualz)
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
    }
}