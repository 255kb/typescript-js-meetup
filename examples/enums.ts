/** Enum: be careful of human error 🤓 **/

enum Status {
  Enabled = 'enabled',
  Disabled = 'enabled', // Oops 🤬
}

console.log(Status.Enabled === Status.Disabled); // true 🧐
