function addData() {
  const parent = document.querySelector('list-wrapper') 
  const count = parent.childElementCount
  for (let i = 0; i < 10; i++) {
    const div = document.createElement('div')
    div.classList.add('list-wrapper-item')
    div.id = `item${count + i + 1}`
    div.innerHTML = count + i + 1
  }
}

function observer() {
  
}
