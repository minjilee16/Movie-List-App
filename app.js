var movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

// make a class called App 
// create new method init 
// create new mothod box 

class App {

  init() {
    this.addMovieInputBox();
    this.searchBox();
    this.box(movies); 
    $('#searchBoxes').on('submit', this.alertMatchTitle ); 
    $('#addNewMoiveButton').on('click', this.addNewMovieTitle ); 
  }


  searchBox() {
    var $search= $('<form id="searchBoxes"> </form>'); 
    var $inputText = $('<input id="inputText" type="text" placeholder="Search..." autocomplete="off"/>')
    var $button = $('<input id="button" type="submit" value="Go!"/ >')
    $search.append($inputText);
    $search.append($button);
    $('body').append($search);
  }


  alertMatchTitle (event) {
    // address titleName 
    var titleName =  $('#inputText').val(); 
    // iterate the movies array and find if titleName matches any in the array 
    var storeTitleName =[];
    for(var i = 0; i < movies.length; i++) {
      // check if the titlename matches title in the array 
      if(movies[i].title === titleName) {
      // push the titlename to the store array
       storeTitleName.push(titleName);
      }
    }
    // if store array length is greater than 0
    if( storeTitleName.length > 0 ) {
    // alert the element 
      alert('Yay! we found ' + storeTitleName[0]); 
    } else {
      // else alert not found! 
      alert('not Found'); 
    }
    // stay rendering the changed boxes 
    // this.box();
    // this.addNewMovieTitle();
    $('#inputText').val('');
    event.preventDefault();

  }

  box(data) {
    // iterate the movies array 
    // declare new variable to new dom 
    // new dom will be div, class will be defined to boxes and input text will be movies titiles 
    // boxes is going to be appeneded to body dom 
    var $divBoxes= $('<div id="box"> </div>')
    for(var i = 0; i < data.length; i ++) {
      var $boxes = $('<div class="boxes">' + data[i].title + '<br></div>'); 
      $divBoxes.append($boxes); 
    }
    $('body').append($divBoxes);
  } 

  addMovieInputBox () {
    // declare new variable form which will contain the newMovie input text box and button 
    var $addMovieBoxGroupDiv = $('<form id="addMovieBoxGroupDiv"></form>');
    // create input text box
    var $newMoiveInputText = $('<input id="newMoiveInputText" type="text" placeholder="Add movie title here..." autocomplete="off"/>')
    // create add new moive button 
    var $addNewMoiveButton = $('<input id="addNewMoiveButton" type="button" value="Add"/>')
   // apeend newMoive input to moive group div 
    $addMovieBoxGroupDiv.append($newMoiveInputText);
    // apeend newMoive button to moive group div 
    $addMovieBoxGroupDiv.append($addNewMoiveButton);
    // append form dom to body html 
    $('body').append($addMovieBoxGroupDiv);
    //invoke the addmoivebox 
  }


  clearAddInputMessage () {
    // after invoking the addMovie method then clear the previous input text 
   $('#newMoiveInputText').val('');
    console.log('clear LOOK here')
  }


  addNewMovieTitle() {
    // console.log('it will pop out this message in console when you click');


    // address input text value 
    var $newInputTextValue = $('#newMoiveInputText').val(); 
    
    // add the input text value to movies object
    var newtextValue = { 'title': $newInputTextValue };
    movies.push(newtextValue);  
    // invoke the box moethod  
    //append the movies last element 

    var $newMovieTitleBox = $('<div class="boxes">' + movies[movies.length-1].title + '<br></div>'); 
    $('#box').prepend($newMovieTitleBox);
    $('#newMoiveInputText').val('');
    // console.log('clearAddInputMessage',this.clearAddInputMessage() ); 
  }


}

const app = new App(); 
app.init(); 





// Q : when you trigger `submit` if the function has alert method, then it works but others the function doesn't get invoked 
// but when you trigger `click` the function gets invoked  
// Q: clear messsage when I invoke a method in another method it returns undefined or the method is not a function 
