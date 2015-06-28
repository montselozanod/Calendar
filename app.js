var date = new Date();
var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";

document.getElementById('yearCaption').innerHTML=date.getFullYear();
document.getElementById('monthCaption').innerHTML=month[date.getMonth()];
document.getElementById('dayCaption').innerHTML=date.getDate();

  console.log("hello");
  var quotes = 24;
  Parse.initialize("CgPYspW53sotqoc1JeQfSS0PKyHq8wSIv46ODRN5", "6xQ056pcsVfjD1977ixHWqewmM9RJM5V8c8dnwoP");
  var Quote = Parse.Object.extend("Quote");
  var query = new Parse.Query(Quote);
  query.skip(Math.floor(Math.random()*quotes));
  query.limit(1);
  query.find({
    success: function(result){
      console.log(result[0].attributes.Author);
      document.getElementById('text-quote').innerHTML=result[0].attributes.Text;
      document.getElementById('author').innerHTML=result[0].attributes.Author;

    },
    error: function(error){

    }
  });
