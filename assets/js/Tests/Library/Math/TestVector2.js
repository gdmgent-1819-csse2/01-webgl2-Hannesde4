import Vector2 from '../../../Library/Math/Vector2.js'


/** Class for testing the Vector2 class. */
export default class TestVector2 {
    /**
     * Create and run the tests.
     */
    constructor() {
        console.info('testing Vector2')
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
        console.log('test: Vector2.add;')
        const x1 = 2
        const y1 = 1
        const x2 = 2
        const y2 = 1
        console.log('x1:', x1, 'y1:', y1, 'x2:', x2, 'y2:', y2)
        const expectedx = 4
        const expectedy = 2
        const v1 = new Vector2(x1, y1)
        const v2 = new Vector2(x2, y2)
        v1.add(v2)
        const actualx = v1.x
        const actualy = v1.y
        this.assertIdentical(actualx,actualy, expectedx, expectedy)
    }

    /**
     * Test the subtraction method.
     */
    testSub()
    {
        console.log('test: Vector2.sub;')
        const x1 = 8
        const y1 = 4
        const x2 = 2
        const y2 = 1
        console.log('x1:', x1, 'y1:', y1, 'x2:', x2, 'y2:', y2)
        const expectedx = 6
        const expectedy = 3
        const v1 = new Vector2(x1, y1)
        const v2 = new Vector2(x2, y2)
        v1.sub(v2)
        const actualx = v1.x
        const actualy = v1.y
        this.assertIdentical(actualx,actualy, expectedx, expectedy)
    }

    /**
     * Test the scalar method.
     */
    testScalar()
    {
        console.log('test: Vector2.scalar;')
        const x = 2
        const y = 3
        const a = 2
        console.log('x1:', x, 'y1:', y, 'a:', a)
        const expectedx = 4
        const expectedy = 6
        const v = new Vector2(x, y)
        v.scalar(a)
        const actualx = v.x
        const actualy = v.y
        this.assertIdentical(actualx, actualy, expectedx, expectedy)
    }

    /**
     * Test the rotation method.
     */
    testRot()
    {
        console.log('test: Vector2.rot;')
        const x = 2
        const y = 3
        const α = 2
        console.log('x1:', x, 'y1:', y, 'α:', α)
        const expectedx = 2
        const expectedy = 3
        const v = new Vector2(x, y)
        v.rot(α)
        const actualx = v.x
        const actualy = v.y
        this.assertIdentical(actualx, actualy, expectedx, expectedy)
    }

    /**
     * Assert that two vectors are identical.
     * @param {Number} actualx - The actual x result.
     * @param {Number} expectedx - The expected x result.
     * @param {Number} actualy - The actual y result.
     * @param {Number} expectedy - The expected y result.
     */
    assertIdentical(actualx, actualy, expectedx, expectedy) {
        const actualroundx = Math.round(actualx)
        const actualroundy = Math.round(actualy)
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
    }
}