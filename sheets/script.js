const scriptURL = 'https://script.google.com/macros/s/AKfycbz7hsG-0oULjtOxDlZPwZAx5_CFYH1SaMb2DBkH_l2dkddKdH0DzfF2UYkrsB9rUV15/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! Form is submitted" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})