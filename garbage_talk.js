function random(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

function garbageTalk(options) {
  let target = ""
  const task = {
    engineer: [
      "加個按鈕",
      "加新功能",
      "切個版",
      "改一點 code",
      "重新排版",
      "帶點動畫"
    ],
    designer: [
      "畫一張圖",
      "改個 logo",
      "順便幫忙設計一下",
      "隨便換個設計",
      "補個顏色",
      "加個幾筆",
      "畫個陰影"
    ],
    entrepreneur: [
      "週末加班",
      "要能賺錢",
      "想個 business model",
      "找 VC 募錢",
      "自己當老闆"
    ]
  }

  const phrase = ["很簡單", "很容易", "很快", "很正常", "不用很久", "明明不難"]
  let sentence = ""

  if (options.target === "engineer") {
    target = "工程師"
    targetTask = random(task.engineer)
    sentence = `身為一個${target}，${targetTask}，${random(phrase)}吧!`
  } else if (options.target === "designer") {
    target = "設計師"
    targetTask = random(task.designer)
    sentence = `身為一個${target}，${targetTask}，${random(phrase)}吧!`
  } else if (options.target === "entrepreneur") {
    target = "創業家"
    targetTask = random(task.entrepreneur)
    sentence = `身為一個${target}，${targetTask}，${random(phrase)}吧!`
  } else {
    sentence = `你沒有選擇對象唷!`
  }

  return sentence
}

module.exports = garbageTalk
