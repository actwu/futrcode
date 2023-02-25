txt = document.querySelector("#snip")
codeset = document.getElementById("code")
runset = document.getElementById("run")
preset = document.getElementById("preview")
sureset = document.getElementById("sure")


htmlcode =   
  `
  
<html lang="en">
  <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
                
          <meta name="theme-color" content="#191919">
          <meta name="apple-mobile-web-app-capable" content="yes">
          <title>My site</title>
          <meta property="og:title" content="site">
          <meta property="og:description" content="My Site">
          <meta property="og:image" content="img/banner.png">
          <meta name="twitter:card" content="summary">
          <meta name="twitter:title" content="Me">
          <meta name="twitter:description" content="My Site">
          <meta name="twitter:image" content="img/banner.png">
          <meta name="twitter:image:alt" content="banner name">
      
      <meta property="title" content="Me">
      <meta property="author" content="Me">
      <meta property="image" content="/img/banner.png">
      <meta property="description" content="My Site">
          
      <link rel="shortcut icon" href="/img/icon.png" type="image/x-icon"> 
      
  </head>
  <body>
  
  <script>
  const config = [css = 'default', icon = 'fontawesome']
  const configstate = 'defined'
    </script>
   <script src="https://futr.web.app/f.js">
  </script> 
  
  </body>
  </html>`


function datarevert() {
txt.value = localStorage.getItem("saved");
}

saver = setInterval(() => {
save()
}, 5000)
function save() {
localStorage.setItem("saved", txt.value)
  }

function backup() {
  
  localStorage.setItem("backup", txt.value)
   
     }
function load() {
  txt.value = localStorage.getItem("backup");
  }

function starthtml() {
  txt.value += htmlcode;
  }

function code() {
   
  codeset.classList.remove("hide");
  runset.classList.add("hide");
  sureset.classList.add("hide");
  
  }

function sure() {
   
  codeset.classList.add("hide");
  runset.classList.add("hide");
  sureset.classList.remove("hide");
  
  }

function run() {
   
  runset.classList.remove("hide");
  codeset.classList.add("hide");
  sureset.classList.add("hide");
  
  runset.innerHTML = txt.value 
  
  }

function preview() {
   
  preset.innerHTML = localStorage.getItem("saved");
 
  
  }
