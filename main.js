function handleSubmit() {
  var messageInput = document.querySelector('.chatForm__text');
  if (messageInput.value === '') return;
  var messageList = document.querySelector('.chatArea');
  var baseNode = document.querySelector('.chatArea__item_right');
  var pendingMessage = document.querySelectorAll('.chatArea__item_left')[1];
  var messageList = pendingMessage.parentNode;
  var messageItem = baseNode.cloneNode(true);
  messageItem.querySelector('.chatArea__text').innerText = messageInput.value;
  messageItem.querySelector('.chatArea__time_right').innerText =
    'in a few seconds ago';
  messageList.insertBefore(messageItem, pendingMessage);
  messageInput.value = '';
}

window.addEventListener('DOMContentLoaded', function () {
  var submitButton = document.querySelector('.chatForm__btnSubmit');
  submitButton.addEventListener('click', handleSubmit);
});
