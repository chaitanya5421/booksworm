var genres=[];
var bookArray=[];

var genreSelect = document.querySelector('select#genres');
var bookSelect = document.querySelector('select#book');

var bookDetails= document.querySelector('.book-details');

    genreSelect.addEventListener("change",genreChange);
  bookSelect.addEventListener("change",bookChange);

var books = {   
    "book1":{
        name : 'you can win',
        author : 'shiv khera',
        genre : 'horror',
        summary:'Taking the reader from ancient wisdom to contemporary thinking, this work aims to dispel the confusion in daily life and clarify values. It aims to make the reader evaluate whether they are going through life by inspiration (playing to win) or desperation (playing not to lose).'
    },

    "book2":{
        name : 'two states',
        author : 'bill gates',
        genre : 'novel',
        summary:'Taking the reader from ancient wisdom to contemporary thinking, this work aims to dispel the confusion in daily life and clarify values. It aims to make the reader evaluate whether they are going through life by inspiration (playing to win) or desperation (playing not to lose).'

    },

    "book3":{
        name : 'tom and jerry',
        author : 'jerry',
        genre : 'comedy',
        summary:'Taking the reader from ancient wisdom to contemporary thinking, this work aims to dispel the confusion in daily life and clarify values. It aims to make the reader evaluate whether they are going through life by inspiration (playing to win) or desperation (playing not to lose).'

    },

    "book4":{
        name : 'no one can survive',
        author : 'no one',
        genre : 'horror',
        summary:'Taking the reader from ancient wisdom to contemporary thinking, this work aims to dispel the confusion in daily life and clarify values. It aims to make the reader evaluate whether they are going through life by inspiration (playing to win) or desperation (playing not to lose).'

    },
    "book5":{
        name : 'think and grow rich',
        author : 'ironman',
        genre : 'comedy',
        summary:'Taking the reader from ancient wisdom to contemporary thinking, this work aims to dispel the confusion in daily life and clarify values. It aims to make the reader evaluate whether they are going through life by inspiration (playing to win) or desperation (playing not to lose).'

    },
}

    for ( book in books) {
        if(books.hasOwnProperty(book))
        {
            var bookGenre = books[book].genre;
            console.log(bookGenre);
            if(genres.indexOf(bookGenre)==-1)
            {
                genres.push(bookGenre);
                var bookOpt = document.createElement('option');
                bookOpt.innerHTML = bookGenre;
                genreSelect.appendChild(bookOpt);
            }
        }
    }

    function genreChange(){
        
        var length = bookSelect.options.length;
        bookDetails.style.display = 'none';
        bookSelect.innerHTML = "<option>Select Books</option>";
        for(i=1;i<length;i++)
        {
            bookSelect.options[i] = null;
        }
        var selectedGenre = genreSelect.options[genreSelect.selectedIndex].value;
        console.log(selectedGenre);
        if(selectedGenre != "Select Genre"){
            console.log("not select genre");
            bookSelect.style.display='block';
        }
        else{
            bookSelect.style.display='none';
            }

            
        for ( book in books) {
            if(books.hasOwnProperty(book))
            {
                var bookGenre = books[book].genre;
                var bookName = books[book].name;
                if(bookGenre == selectedGenre)
                {
                    var Opt = document.createElement('option');
                    Opt.innerHTML = bookName;
                    bookSelect.appendChild(Opt);
                    
                }
            }
        }
    }



    function bookChange(){
        
        var selectedBook = bookSelect.options[bookSelect.selectedIndex].value;
        var bookNames = document.querySelector('#name');
        var bookAuthor = document.querySelector('#author');
        var bookGenre = document.querySelector('#book-genres');
        var bookSummary = document.querySelector('#summary');


        console.log("selected book is   "+selectedBook);
        if(selectedBook != "Select book"){
            bookDetails.style.display='block';
           
            for ( book in books) {
                if(books.hasOwnProperty(book))
                {
                    var bookName = books[book].name;
                    if(bookName == selectedBook)
                    {
                        bookNames.innerHTML=bookName;
                        bookAuthor.innerHTML=books[book].author;
                        bookGenre.innerHTML=books[book].genre;
                        bookSummary.innerHTML=books[book].summary;

                    }
                }
            }
            }
            else{
                bookDetails.style.display='none';
            }
        }

    