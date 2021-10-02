function editIconHandler(){
    console.log('a');
}
var title ='';
var content = '';
var author = '';
let allBlogArr = [];
var classdivOne = 'card';
var classdiv = 'card-body';
var classh5 = 'card-title';
var classh6 = 'card-subtitle mb-2 text-muted';
var classC = 'card-text';
function titleHandler(event){
    title = event.target.value;
    console.log('title>>>',title);
    console.log('content>>>',content);
    console.log('author>>>',author);
    if((title && content && author)&&(title!=undefined && content!=undefined && author!=undefined)){
        document.getElementById('saveButton').removeAttribute('disabled');
    }else{
        document.getElementById('saveButton').setAttribute('disabled',true);
    }
}

function contentHandler(event){
    content = event.target.value;
    console.log('title>>>',title);
    console.log('content>>>',content);
    console.log('author>>>',author);
    if((title && content && author)&&(title!=undefined && content!=undefined && author!=undefined)){
        document.getElementById('saveButton').removeAttribute('disabled');
    }else{
        document.getElementById('saveButton').setAttribute('disabled',true);
    }
}

function authorHandler(event){
    author = event.target.value;
    console.log('title>>>',title);
    console.log('content>>>',content);
    console.log('author>>>',author);
    if((title && content && author)&&(title!=undefined && content!=undefined && author!=undefined)){
        document.getElementById('saveButton').removeAttribute('disabled');
    }else{
        document.getElementById('saveButton').setAttribute('disabled',true);
    }
}

function saveHandler(){
    const obj = {};
    obj.title = title;
    obj.content = content;
    obj.author = author;

    allBlogArr.push(obj);

    document.getElementById("iconP").innerHTML= "My Blogs";
    var blogMain = document.createElement("div");
    blogMain.setAttribute('class',classdivOne);
    blogMain.setAttribute('style',"width: 95%;margin-bottom: 10px;margin-left: 35px;margin-right: 10px;");
    var blog = document.createElement("div");
    blog.setAttribute("class",classdiv);
    var blogP = document.createElement("h5");
    var blogC = document.createElement("p");
    var blogA = document.createElement("h6");
    var blogPTitle = document.createTextNode(obj.title);
    var blogPContent = document.createTextNode(obj.content);
    var blogPAuthor = document.createTextNode('by-'+obj.author);
    blogP.appendChild(blogPTitle);
    blogP.setAttribute("class",classh5);
    blogP.setAttribute('style','text-align:center;');
    blogC.appendChild(blogPContent);
    blogC.setAttribute("class",classC);
    blogC.setAttribute('style','text-align:center;');
    blogA.appendChild(blogPAuthor);
    blogA.setAttribute('style','font-family:cursive;text-align:center;');
    blogC.setAttribute("class",classh6);

    blog.appendChild(blogP);
    blog.appendChild(blogA);
    blog.appendChild(blogC);
    
    blogMain.appendChild(blog);
    document.getElementById("main").appendChild(blogMain);
    title = undefined;
    author = undefined;
    content = undefined;
    
    // document.getElementsByTagName('input').value='';
    // document.getElementsByTagName('textarea').value='';
    document.getElementById("myForm").reset();
    document.getElementById('saveButton').setAttribute('disabled',true);
    document.querySelector('button[data-bs-dismiss="modal"]').click();
    

}
