const selectForm = document.querySelector("#filter");
const options = selectForm.options;

for (let option of options) {
  option.selected = option.value === selected ? true : false;
}
