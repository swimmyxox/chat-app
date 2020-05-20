function handleSubmit() {
  var messageInput = document.querySelector('.chatText');
  if (messageInput.value === '') return;
  var messageList = document.querySelector('.chat');
  var baseNode = document.querySelector('.chat_item_right');
  var pendingMessage = document.querySelectorAll('.chat_item_left')[1];
  var messageList = pendingMessage.parentNode;
  var messageItem = baseNode.cloneNode(true);
  messageItem.querySelector('.text').innerText = messageInput.value;
  messageItem.querySelector('.time_right').innerText = 'in a few seconds ago';
  messageList.insertBefore(messageItem, pendingMessage);
  messageInput.value = '';
}

window.addEventListener('DOMContentLoaded', function () {
  var submitButton = document.querySelector('.btnSubmit');
  submitButton.addEventListener('click', handleSubmit);
});
