var btn=document.getElementById('btn')
var animal = document.getElementById('animal-info')
var counter=1
btn.addEventListener('click',function(){
  var ourRequest = new XMLHttpRequest()
  ourRequest.open('GET','https://learnwebcode.github.io/json-example/animals-'+counter+'.json');
  ourRequest.onload = function(){
  var ourData=JSON.parse(ourRequest.responseText)
    console.log(ourData)
    rendreHtml(ourData)
  }
  counter++;
  if(counter>3){
    btn.style.visibility='hidden'
  }
  ourRequest.onerror=function(){
    console.log('connection error')
  }
  ourRequest.send()
})
function rendreHtml(data){
  var htmlString=''
  for(var i=0;i<data.length;i++){
    htmlString+="<P>"+data[i].name+"is a "+data[i].species+'that like to eat '
    for(j= 0; j < data[i].foods.likes.length; j++){
      if(j==0){
        htmlString+=data[i].foods.likes[j]
      }else {
        htmlString += ' and ' + data[i].foods.likes[j]
      }

      }
      htmlString+=' and dislike '
      for(var k=0;k<data[i].foods.dislikes.length;k++){
        if(k==0){
        htmlString+=data[i].foods.dislikes[k]
      }else{
        htmlString+=' and '+data[i].foods.dislikes[k]
      }

    }
      htmlString+='</p>'
  }
  animal.insertAdjacentHTML('beforeend',htmlString)
}
