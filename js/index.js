var siteName=document.getElementById("SiteName");
var siteUrl=document.getElementById("SiteUrl");
var productContainer=[];

if(localStorage.getItem("list") !== null)
{
  productContainer=JSON.parse(localStorage.getItem("list"));
  display();
}


function addproduct() {
  if(validatename()){

 
    var prouduct={
        WebsiteName:siteName.value,
        WebsiteUrl:siteUrl.value,
    }
    productContainer.push(prouduct);
    clearForm();
    display();
    localStorage.setItem('list',JSON.stringify(productContainer));
    
    
}
}
function clearForm(){
siteName.value=null;
siteUrl.value=null;
}
function display(){
    var x="";
for (var i=0; i<productContainer.length;i++)
  {
   x+=` <tr class="text-center">
   <th>`+(+i+1)+`</th>
   <th>`+productContainer[i].WebsiteName +`</th>
   <th><button class="btn btn-success">Visit</button></th>
   <th><button onclick='deleteProduct(${i})' class="btn btn-danger">Delete</button></th>
</tr>`
  } 
  document.getElementById("data").innerHTML=x; 
}
function deleteProduct(index){
  productContainer.splice(index,1);
  display();
  localStorage.setItem('list',JSON.stringify(productContainer));
  
}

function validatename(){
  var regex=/^[a-zA-Z0-9]{3,}$/;
 if( regex.test(siteName.value)){
  siteName.classList.add("is-valid")
  siteName.classList.remove("is-invalid")
  return true;
 }
 else{
  siteName.classList.add("is-invalid")
  return false;
 }
}