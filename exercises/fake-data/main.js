var ul = document.querySelector("ul");

async function getTodos() {
  let response = await fetch("https://jsonplaceholder.typicode.com/todos"
  );
  let data = response.json();
  return data;
}

getTodos().then((response) => {
    console.log(response);
    var text="";
    response.forEach(element => {
        var tag = document.createElement ("li");
        var text = document.createTextNode (element.title);
        if (element.completed != false) {
            tag.style.color = "#a5c1d9";
        }

        var el = document.getElementById("result");
        tag.appendChild(text);
        el.appendChild(tag);
        });
    })

getTodos();
