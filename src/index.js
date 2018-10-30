
let template = (
  <main>
    <header>
      <img src="images/logo_128.png" class="logo"/>
    </header>
    <div id="content">
      <h4>List of latest notifications:</h4>
    <div class="notify">
      <b>Title</b>
    <span class="date">28 Oct</span>
      <br></br>
      Some text here
    </div>
    <div class="notify">
      <b>Title 2</b>
    <span class="date">28 Oct</span>
      <br></br>
      Another text here
    </div>
    </div>
  </main>
);

let appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
