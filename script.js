//
let newsa=document.getElementById('news');

let apikey=`0fe8b973cbc5420794067c692aa0a829`;
const req = new XMLHttpRequest() ;
req.open('GET','https://newsapi.org/v2/top-headlines?country=in&apiKey=0fe8b973cbc5420794067c692aa0a829',true);
req.onload = function() {
	if(this.status === 200)
	{
		let json = JSON.parse(this.responseText);
		let articles=json.articles;
		//console.log(articles);
		let newsHtml ="";
		
			// body...
		
		articles.forEach(function(element,index) {
		
					let news=`<div class="card">
				    <div class="card-header" id="heading${index}">
				      <h2 class="mb-0">
				        <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
				         <b> Breaking News ${index+1}</b> ${element["title"]}
				        </button>
				      </h2>
				    </div>

				    <div id="collapse${index}" class="collapse show" aria-labelledby="headingOne" data-parent="#news">
				      <div class="card-body">
				      ${element["content"]}. <a href="${element['url']}" target = "_blank" >Read More at.. </a>
				      </div>
				    </div>
				  </div>`;
				  newsHtml += news;


		});
		newsa.innerHTML = newsHtml;
		//console.log(json);
	}
	else
	{
		console.log("Some error occured");
	}
}
req.send();

