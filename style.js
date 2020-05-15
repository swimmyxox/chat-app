function handleSubmit() {
      var messageInput = document.querySelector(".msg");
      if (messageInput.value === "") return;
      var messageList = document.querySelector(".container__talk");
      var baseNode = document.querySelector(".talk__item-right");
      var pendingMessage = document.querySelectorAll(".talk__item-left")[1];
      var messageList = pendingMessage.parentNode;
      var messageItem = baseNode.cloneNode(true);
      messageItem.querySelector('.item_talk-text').innerText = messageInput.value;
      messageItem.querySelector('.item_talk-time-right').innerText = "in a few seconds ago";
      //var article = document.createElement("article");
      //article.classList.add("list__item-r");
      //article.innerText = messageInput.value;
      messageList.insertBefore(messageItem, pendingMessage);
      messageInput.value = "";
    };

    window.addEventListener("DOMContentLoaded", function() {
      var submitButton = document.querySelector(".btn-send");
      submitButton.addEventListener("click", handleSubmit);
    });