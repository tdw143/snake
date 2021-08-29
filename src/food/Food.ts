// 定义食物类
class Food{
  // 定义一个属性 表示食物所对应的元素
  element: HTMLElement;

  constructor() {
    // 获取页面中的 food 元素 并将其赋值给 element
    this.element = document.getElementById('food')!
  }

  // 定义一个获取食物 X 轴坐标的方法
  get X() {
    return this.element.offsetLeft
  }
  // 定义一个获取食物 Y 轴坐标的方法
  get Y() {
    return this.element.offsetTop
  }

  // 修改食物的位置
  change() {
    // 生成一个随机的位置
    // 食物位置最小是 0， 最大是 290, 所以食物的坐标必须是整10
    let left = Math.round(Math.random() * 29) * 10
    let top = Math.round(Math.random() * 29) * 10

    this.element.style.left = `${left}px`
    this.element.style.top = `${top}px`
  }
}

export default Food
