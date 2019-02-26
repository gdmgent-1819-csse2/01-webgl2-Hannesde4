/** Class representing a 3x3 matrix. */
export default class Matrix3 {
    /**
     * Create a 3x3 matrix.
     * @param {Array} elements - The matrix elements.
     */
    constructor(elements) {
        this.elements = elements || [
            0, 0, 0,
            0, 0, 0,
            0, 0, 0,
        ]
    }

    /**
     * Addition of a matrix to the current matrix.
     * @param {Array} b - The second matrix.
     */
    add(b) {
        const a = this.elements
        this.elements = [
            a[0] + b[0], a[1] + b[1], a[2] + b[2],
            a[3] + b[3], a[4] + b[4], a[5] + b[5],
            a[6] + b[6], a[7] + b[7], a[8] + b[8],
        ]
    }

    /**
     * Subtraction of a matrix from the current matrix.
     * @param {Array} b - The second matrix.
     */
    sub(b) {
        const a = this.elements
        this.elements = [
            a[0] - b[0], a[1] - b[1], a[2] - b[2],
            a[3] - b[3], a[4] - b[4], a[5] - b[5],
            a[6] - b[6], a[7] - b[7], a[8] - b[8],
        ]
    }

    /**
     * Multiplication of the current matrix by another matrix.
     * @param {Array} b - The second matrix.
     */
    mul(b) {
        const a = this.elements
        const c = []
        c[0] = a[0] * b[0] + a[1] * b[3] + a[2] * b[6]
        c[1] = a[0] * b[1] + a[1] * b[4] + a[2] * b[7]
        c[2] = a[0] * b[2] + a[1] * b[5] + a[2] * b[8]

        c[3] = a[3] * b[0] + a[4] * b[3] + a[5] * b[6]
        c[4] = a[3] * b[1] + a[4] * b[4] + a[5] * b[7]
        c[5] = a[3] * b[2] + a[4] * b[5] + a[5] * b[8]
        
        c[6] = a[6] * b[0] + a[7] * b[3] + a[8] * b[6]
        c[7] = a[6] * b[1] + a[7] * b[4] + a[8] * b[7]
        c[8] = a[6] * b[2] + a[7] * b[5] + a[8] * b[8]

        this.elements = c
    }

    /**
     * Rotate the matrix around the origin.
     * @param {Number} α - The anticlockwise angle in degrees.
     * 
     * werkt niet correct :(
     * 
     */
    rot(α, b, y) {
        α *= Math.PI / 180
        const cosα = Math.cos(α)
        const sinα = Math.sin(α)
        const cosb = Math.cos(b)
        const sinb = Math.sin(b)
        const cosy = Math.cos(y)
        const siny = Math.sin(y)
        const a = this.elements
        const Rx = [
            1, 0, 0, 0,
            0, cosα, -sinα, 0,
            0, sinα, cosα, 0,
            0, 0, 0, 1,
        ]
        const Ry = [
            cosb, 0, sinb, 0,
            0, 1, 0, 0,
            -sinb, 0, cosb, 0,
            0, 0, 0, 1,
        ]
        const Rz = [
            cosy, -siny, 0, 0,
            siny, cosy, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1,
        ]
        this.elements = [Rx, Ry, Rz]
        this.mul(a);
    }
}