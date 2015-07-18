function createObjectFromJSON(file)
{
	/*$.ajax({
		url: file,
		success: function (data) {
			console.log('successfully loaded '+file);
			var obj=JSON.parse(data);
			obj.FillData=new Function("return ("+obj.fillData+")")();
			obj.HideSections=new Function("return ("+obj.hideSections+")")();
			obj.FillData();
			obj.HideSections();
		},
		error: function (data) {
	  		console.log('could not load '+file);
		}
	});*/
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function(){
  	if(xmlhttp.status == 200 && xmlhttp.readyState == 4){
	    var obj=JSON.parse(xmlhttp.responseText);
		obj.FillData=new Function("return ("+obj.fillData+")")();
		obj.HideSections=new Function("return ("+obj.hideSections+")")();
		obj.FillData();
		obj.HideSections();
	  }
	};
	xmlhttp.open("GET",file,true);
	xmlhttp.send();
}

var bio=createObjectFromJSON('data/bio.json');
var work=createObjectFromJSON('data/work.json');
var work=createObjectFromJSON('data/projects.json');
var education=createObjectFromJSON('data/education.json');

// INTERACTIVE MAP
$('#map-div').append(googleMap);

