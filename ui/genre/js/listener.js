
/* events listener */


function cardListener(e){

    /*
    window.location.href="/ui/title/title.html?imdbId="+e.parentNode.id;
    */

    title_url = window.location.origin+"/ui/title/title.html?imdbId="+e.parentNode.id;
    UI.Title(title_url);

}



