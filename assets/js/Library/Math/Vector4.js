import Matrix4 from './Matrix4.js'
/**
 * Four dimensional vector
 */
export default class Vector4 {
  /**
   * Create a four dimensional vector
   * @param {Number} xpos - position on X-axis
   * @param {Number} ypos - position on Y-axis
   * @param {Number} zpos - position on Z-axis
   * @param {Number} wpos - position on W-axis
   */
  constructor(xpos, ypos, zpos, wpos) {
    this.x = Number(xpos) || 0
    this.y = Number(ypos) || 0
    this.z = Number(zpos) || 0
    this.w = Number(wpos) || 0
  }

  /**
   * Addition of 2 vectors
   * @param {Vector4} v - Second vector
   */
  add(v) {
    this.x += v.x
    this.y += v.y
    this.z += v.z
    this.w += v.w
  }

  /**
   * Subtraction of two vectors
   * @param {Vector4} v - Second vector
   */
  sub(v) {
    this.x -= v.x
    this.y -= v.y
    this.z -= v.z
    this.w -= v.w
  }

  /**
   * Scalar multiplication
   * @param {Number} a - Number to multiply by
   */
  scalar(a) {
    this.x *= a
    this.y *= a
    this.z *= a
    this.w *= a
  }

  /**
   * Length of the vector
   */
  norm() {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2) + Math.pow(this.z, 2) + Math.pow(this.w, 2))
  }

  /**
   * Dot multiplication?
   * @param {Vector4} v - Second vector
   */
  dot(v) {
    return (this.x * v.x) + (this.y * v.y) + (this.z * v.z) + (this.w * v.w)
  }

  /**
   * Rotate vector around origin
   * @param {Number} α - Anticlockwise angle (degrees)
   */
  rot(α) {
    const m = new Matrix4([
      this.x, 0, 0, 0,
      this.y, 0, 0, 0,
      this.z, 0, 0, 0,
      this.w, 0, 0, 0,
    ])
    m.rot(α)
    console.log(m)
    this.x = m.elements[0]
    this.y = m.elements[4]
    this.z = m.elements[8]
    this.w = m.elements[12]
  }
}