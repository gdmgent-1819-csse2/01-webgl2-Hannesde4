import Matrix3 from './Matrix3.js'
/**
 * Three dimensional vector
 */
export default class Vector3 {

  /**
   * Create a three dimensional vector
   * @param {Number} xpos - position on X-axis
   * @param {Number} ypos - position on Y-axis
   * @param {Number} zpos - position on Z-axis
   */
  constructor(xpos, ypos, zpos) {
    this.x = Number(xpos) || 0
    this.y = Number(ypos) || 0
    this.z = Number(zpos) || 0
  }

  /**
   * Addition of 2 vectors
   * @param {Vector3} v - Second vector
   */
  add(v) {
    this.x += v.x
    this.y += v.y
    this.z += v.z
  }

  /**
   * Subtraction of 2 vectors
   * @param {Vector3} v - Second vector
   */
  sub(v) {
    this.x -= v.x
    this.y -= v.y
    this.z -= v.z
  }

  /**
   * Scalar multiplication
   * @param {Number} a - Number to multiply by
   */
  scalar(a) {
    this.x *= a
    this.y *= a
    this.z *= a
  }

  /**
   * Length of the vector
   */
  norm() {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2) + Math.pow(this.z, 2))
  }

  /**
   * Dot product of two vectors
   * @param {Vector2} v - Second vector
   */
  dot(v) {
    return (this.x * v.x) + (this.y * v.y) + (this.z * v.z)
  }

  /**
   * Rotate vector around origin
   * @param {Number} α - Anticlockwise angle (degrees)
   */
  rot(α) {
    const m = new Matrix3([
      this.x, 0, 0,
      this.y, 0, 0,
      this.z, 0, 0
    ])
    m.rot(α)
    console.log(m)
    this.x = m.elements[0]
    this.y = m.elements[3]
    this.z = m.elements[6]
  }
}