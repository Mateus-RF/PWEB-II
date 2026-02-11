export default function isValidForm(formData) {
  for (let data in formData) {
    if (!formData[data]) {
      return false;
    }
  }
  return true;
}
