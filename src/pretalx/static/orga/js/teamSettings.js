const dependents = ["limit_tracks"]
const checkboxDependents = ["force_hide_speaker_names", ]
const updateVisibility = () => {
  if (document.querySelector("input#id_is_reviewer").checked) {
    dependents.forEach(element => document.querySelector(`#id_${element}`).parentElement.parentElement.classList.remove("d-none"))
    checkboxDependents.forEach(element => document.querySelector(`#id_${element}`).parentElement.parentElement.parentElement.classList.remove("d-none"))
    document.querySelector("#review-settings").parentElement.parentElement.classList.remove("d-none")
  } else {
    dependents.forEach(element => document.querySelector(`#id_${element}`).parentElement.parentElement.classList.add("d-none"))
    checkboxDependents.forEach(element => document.querySelector(`#id_${element}`).parentElement.parentElement.parentElement.classList.add("d-none"))
    document.querySelector("#review-settings").parentElement.parentElement.classList.add("d-none")
  }
}
document.querySelector("input#id_is_reviewer").addEventListener("change", (event) => {updateVisibility()})
updateVisibility()
