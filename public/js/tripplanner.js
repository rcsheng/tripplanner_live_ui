
var node;
for (var i = 0; i< hotels.length; i++)
{
  node = document.createElement("option");
  node.innerHTML = hotels[i].name;
  document.getElementById('hotel-choices').appendChild(node);
}


for (var i = 0; i< restaurants.length; i++)
{
node = document.createElement("option");
node.innerHTML = restaurants[i].name;
document.getElementById('restaurant-choices').appendChild(node);
}


for (var i = 0; i< activities.length; i++)
{
node = document.createElement("option");
node.innerHTML = activities[i].name;
document.getElementById('activity-choices').appendChild(node);
}


//var option = document.getElementById('options-panel');
 
//console.log($("#options-panel").find('select'));

//console.log(option.children('select').dataset.type); // "3"



$("#options-panel div button").on( "click", function( event ) {
    event.preventDefault();
    var type = $(this).prev().attr('data-type');
    var name = $(this).prev().find('option:selected').val();
    // console.log( $(this).prev().attr('data-type'));
    // console.log( $(this).prev().find('option:selected').index());
    // console.log( $( this ).text() );
    var htmlToAppend = "<span class=\"title\">"+name+"</span>";
    var closeButton = "<button class=\"btn btn-xs btn-danger remove btn-circle\">x</button>"
    $('#itinerary').find('.'+type+'-list-group').find('.itinerary-item').prepend(closeButton);
    $('#itinerary').find('.'+type+'-list-group').find('.itinerary-item').prepend(htmlToAppend);
});