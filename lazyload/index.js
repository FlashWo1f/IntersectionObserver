function insert(el) {
  function loadImage() {
    el.addEventListener('load', () => {
      // 加载完成添加class可以实现淡入动画
      el.classList.add('loaded')
    });

    // 加载 data-original 的图片地址
    el.src = el.dataset.original;
  }

  function handleIntersect(entries, observer) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        // 绑定元素进入视口后触发加载图片
        loadImage();
        // 并停止观察可见性变化, 防止再次加载图像。
        observer.unobserve(el);
      }
    });
  }

  function createObserver() {
    const options = {
      root: null,
      // 阈值
      threshold: '0'
    };

    const observer = new IntersectionObserver(handleIntersect, options);

    // 订阅观察当前绑定图片元素
    observer.observe(el);
  }

  createObserver();
}

for (let i = 1; i < 13; i++) {
  insert(document.getElementById(`test${i}`))
}
