const parent = document.querySelector(".list-wrapper")
function handleAddItem() {
  const count = parent.childElementCount
  for (let i = 0; i < 10; i++) {
    const div = document.createElement("div")
    div.classList.add("list-wrapper-item")
    div.id = `item${count + i + 1}`
    div.style.cssText = `background: ${rgb()}`
    div.innerHTML = count + i + 1
    parent.appendChild(div)
    if (i === 8) {
      observer()
    }
  }
}

function observer() {
  const children = parent.children
  const obItem = children[parent.childElementCount - 1]
  const options = {
    root: null,
    threshold: 1,
  }
  const intersectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((item) => {
      if (item.isIntersecting) {
        console.log("进入可视区域")
        handleAddItem()
        observer.unobserve(obItem)
      }
    })
  }, options)

  intersectionObserver.observe(obItem)
}

function rgb() {
  var r = Math.floor(Math.random() * 256)
  var g = Math.floor(Math.random() * 256)
  var b = Math.floor(Math.random() * 256)
  return `rgba(${r},${g},${b}, .5)`
}

observer()
