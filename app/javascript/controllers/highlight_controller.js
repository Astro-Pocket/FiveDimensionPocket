import { Controller } from "stimulus"
import Rails from "@rails/ujs"
import Swal from 'sweetalert2'

function placeTooltip(xPos, yPos, type, highlightId) {
  var d = document.getElementById('tooltip');
  if (type === "new") {
    d.setAttribute("my-data-type", "add");
    d.innerHTML = `<i class="fas fa-pen"></i>HighLight`;
  } else {
    d.setAttribute("my-data-type", "delete");
    d.setAttribute("highlight-id", highlightId);
    d.innerHTML = `<i class="far fa-trash-alt"></i>刪除`;
  }
  d.style.position = "absolute";
  d.style.left = xPos + 'px';
  d.style.top = (yPos - 40) + 'px';
}

function highlightRange(range, counter, articleId, id) {
  let newNode = document.createElement("span");
  newNode.classList.add('highlight');
  newNode.id = (`highlight${counter}`);
  range.surroundContents(newNode);
  let el = document.getElementById(`highlight${counter}`).parentElement;
  let index = [].indexOf.call(el.parentElement.children, el);
  let myData = {
    content: document.getElementById(`highlight${counter}`).innerText,
    paragraph_index: index
  }
  Rails.ajax({
    url: `/api/v1/articles/${articleId}/highlight`,
    type: 'POST',
    data: new URLSearchParams(myData).toString(),
    success: resp => {
      newNode.setAttribute("highlight-id", resp.id);
      newNode.setAttribute("data-action", "mouseover->highlight#showTooltip");
    },
    error: err => {
      console.log(err);
    }
  })
}

function deleteHighlight(articleId, highlightId) {
  let myData = { highlight_id: highlightId }
  Rails.ajax({
    url: `/api/v1/articles/${articleId}/highlight`,
    type: 'DELETE',
    data: new URLSearchParams(myData).toString(),
    success: resp => {
    },
    error: err => {
      console.log(err);
    }
  })
  $("p").find("span[highlight-id = " + highlightId + "]").contents().unwrap();
}

export default class extends Controller {
  static targets = ["articleId"]
  connect() {
    let articleId = this.articleIdTarget.value
    var selObj = null;
    var selRange = null;
    var rect = null;
    var x = 0;
    var y = 0;
    var oContent = document.getElementById('content');
    var counter = 0
    // 載入頁面時先透過ajax要標記資料
    var article_child = document.getElementById('content').querySelectorAll('p');
    Rails.ajax({
      url: `/api/v1/articles/${articleId}/highlight`,
      type: 'GET',
      success: resp => {
        // 更新本頁標記數量
        counter = resp.highlights.length
        resp.highlights.forEach(function (data, index) {
          let p_index = data.paragraph_index
          let words = data.content
          let id = data.id
          article_child[p_index].innerHTML = article_child[p_index].innerHTML.replace(new RegExp(words, "g"), `<span class="highlight" data-action="mouseover->highlight#showTooltip" highlight-id="${id}">${words}</span>`);
        });
      },
      error: err => {
        console.log(err);
      }
    })

    oContent.onmouseup = (e) => {
      selObj = window.getSelection();
      selRange = selObj.getRangeAt(0);
      rect = selRange.getBoundingClientRect();
      x = e.pageX;
      y = e.pageY + 5;
      if (rect.width > 20) {
        placeTooltip(x, y, "new", null);
        document.getElementById("tooltip").classList.remove('notDisplayed');
      }
      else {
        document.getElementById("tooltip").classList.add('notDisplayed');
        document.getElementById("tooltip").style = '';
      }
    };
    document.getElementById("tooltip").addEventListener("click", function (event) {
      let type = document.getElementById("tooltip").getAttribute("my-data-type")
      // 選三筆之後就不能標記
      if (type === "add") {
        if (counter > 3) {
          Swal.fire('一般會員只能標記三筆喔')
        } else {
          highlightRange(selRange, counter++, articleId);
        }
      } else if (type === "delete") {
        let highlightId = event.target.getAttribute("highlight-id")
        deleteHighlight(articleId, highlightId)
      }
      document.getSelection().removeAllRanges()
      document.getElementById("tooltip").classList.add('notDisplayed');
      document.getElementById("tooltip").style = '';
    }, false);
    // 參考資料:https://stackoverflow.com/questions/25695212/jquery-how-to-tag-selected-text-using-textbox-as-tooltip
  }
  showTooltip(e) {
    // 觸發的時候把觸發highlight id抓出來
    let highlightId = e.target.getAttribute("highlight-id")
    let x = e.pageX;
    let y = e.pageY + 5;
    placeTooltip(x, y, "delete", highlightId);
    document.getElementById("tooltip").classList.remove('notDisplayed');
  }
}
