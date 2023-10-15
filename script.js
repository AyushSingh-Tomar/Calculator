async function init () {
    const node = document.querySelector("#type-text")
    
    await sleep(1000)
    node.innerText = ""
    await node.type('.')
    
    while (true) {
      await node.type('')
      await sleep(2000)
      await node.delete('')
      await node.type('Basic')
      await sleep(2000)
      await node.delete('Basic')
      await node.type('Scientific')
      await sleep(2000)
      await node.delete('Scientific')
      await node.type('Financial')
      await sleep(2000)
      await node.delete('Financial')
      await node.type('Age')
      await sleep(2000)
      await node.delete('Age')
      await node.type('')
      await sleep(2000)
      await node.delete('')
    }
  }
  
 
  
  const sleep = time => new Promise(resolve => setTimeout(resolve, time))
  
  class TypeAsync extends HTMLSpanElement {
    get typeInterval () {
      const randomMs = 100 * Math.random()
      return randomMs < 50 ? 10 : randomMs
    }
    
    async type (text) {
      for (let character of text) {
        this.innerText += character
        await sleep(this.typeInterval)
      }
    }
    
    async delete (text) {
      for (let character of text) {
        this.innerText = this.innerText.slice(0, this.innerText.length -1)
        await sleep(this.typeInterval)
      }
    }
  }
  
  customElements.define('type-async', TypeAsync, { extends: 'span' })
  
  
  init()
  
var screen = document.querySelector('#screen');
var btnCalc = document.querySelectorAll('.btn-calc');

for(item of btnCalc) {
    item.addEventListener('click', (e) =>{
     btnText=e.target.innerText;
     if(btnText=='X')
     {
        btnText='*'
     }
     if(btnText=='/')
     {
        btnText=='/'
     }
    
     screen.value+=btnText;

    });
}

function sin() {
    screen.value=Math.sin(screen.value)
}
function cos() {
    screen.value=Math.cos(screen.value)
}
function tan() {
    screen.value=Math.tan(screen.value)
}
function pow() {
    screen.value=Math.pow(screen.value,2)
}
function sqrt() {
    screen.value=Math.sqrt(screen.value,2)
}
function log() {
    screen.value=Math.log(screen.value,2)
}
function pi() {
    screen.value=3.1415926265359;

}
function e() {
  screen.value=2.71828182846;
}
function fact() {
  var i,num,f;
  f=1
  num=screen.value;
  for(i=i;i<=num;i++)
  {
    f =f*i
  }
  i=i-1;
  screen.value=f
}

function backspc()
{
  screen.value=screen.value.substr(0,screen.value.length-1);
}