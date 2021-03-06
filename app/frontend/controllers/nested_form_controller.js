// Visit The Stimulus Handbook for more details 
// https://stimulusjs.org/handbook/introduction
// 
// This example controller works with specially annotated HTML like:
//
// <div data-controller="hello">
//   <h1 data-target="hello.output"></h1>
// </div>

import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "links", "template" ]

  connect() {  
  }
  add_new_giveback(event) {
    event.preventDefault()

    let content = this.templateTarget.innerHTML.replace(/new_record/g, new Date().getTime())
    this.linksTarget.insertAdjacentHTML('beforebegin', content)
  }

  remove_giveback(event) {
    event.preventDefault()
    
    let wrapper = event.target.closest('.nested_field')
    if (wrapper.dataset.newRecord == 'true'){
      wrapper.remove()
    }else{
      wrapper.querySelector("input[name*='_destroy']").value = 'true'
      wrapper.style.display = 'none'
    }

  }
}
