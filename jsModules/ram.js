//first way to export a function
// export const nitin = 100;
// export function display() {
//   console.log(nitin);
// }
//second way to export a function
const nitin = 100;
function display() {
  console.log(nitin);
}
export { nitin, display };
//Note
//export default is only one in entire files
