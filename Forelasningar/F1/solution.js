'use strict';

class GameData  {

    timerId = null;

    imgRefs = [
        'https://openclipart.org/download/282127/Die1.svg',
        'https://openclipart.org/download/282128/Die2.svg',
        'https://openclipart.org/download/282129/Die3.svg',
        'https://openclipart.org/download/282130/Die4.svg',
        'https://openclipart.org/download/282131/Die5.svg',
        'https://openclipart.org/download/282132/Die6.svg'
    ];

    createImgElements() {

        console.log('Create');

        //this.imgRefs innehåller sökvägarna till bilderna (se ovan).

        let rndValue = 0; //Slumptalet mellan 0 och 5
        let mainRef = document.querySelector('main'); //Referensen till main elementet
        let imgRef = null; //Referensen till som används för att skapa nya img-element
    
        //Skapa sex img-element och placera i DOM:en
        for(let i = 0; i <= 5; i++) {
            //Slumpa tal mellan 0 och 5.
            //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
            rndValue = Math.random();
            //console.log( rndValue );

            rndValue = rndValue * 6;
            //console.log( rndValue );

            rndValue = Math.floor( rndValue );
            //console.log( rndValue );

            //Den korta varianten är : rndValue = Math.floor( Math.random() * 6);

            //För att hämta ut rätt sökväg till bilden som matchar rndValue
            //console.log( this.imgRefs[rndValue] );

            //skapa ett nytt img-element.
            imgRef = document.createElement('img');

            //Ändra src- och alt-attributen för det nya img-elementet. -> setAttribute()
            imgRef.setAttribute('src', this.imgRefs[rndValue]);

            //alt-attributet...
            imgRef.setAttribute('alt', 'Dice ' + (rndValue + 1));
            //Ändra css-egenskaperna width och height för det nya elementet. 
            //De tvp css-egenskaperna... style.width, style.height

            imgRef.style.height = '10%';
            imgRef.style.width = '10%';
            //Placera det nya img-elementet i DOM:en
            mainRef.appendChild(imgRef);
        }
    }

    removeImgElements() {

        console.log('Remove');

        let imgRefs = document.querySelectorAll('main img');
        console.log( imgRefs.length );
        
        //om det finns ngt i imgRefs ta bort alla element i en iteration

        if(imgRefs.length !== 0) {
            for(let i = 0; i < imgRefs.length; i++) {
                imgRefs.item(i).remove();
            }
        }

    }

};

let oGameDataObject = new GameData();

/*
window.addEventListener('load', function() {
    console.log( Date.now(), 'load' );
});
*/

window.addEventListener('DOMContentLoaded', function() {
    console.log( Date.now(), 'DOMContentLoaded' );

    //alert('Tryck b||B för att börja och e||E för att avsluta!');

    //https://developer.mozilla.org/en-US/docs/Web/API/Element/keypress_event
    document.addEventListener('keydown', function( e ) {

        //e är Eventobjektet som innehåller t ex key-attributet.
        console.log(e.key);

        if(e.key === 'b' || e.key === 'B') {
            //console.log('Begin');

            //timer -> clearInterval, setInterval

            //Är det redan en timer igång avsluta den.
            if(this.timerId !== null) {
                clearInterval(this.timerId);
            }

            //Starta en ny timer
            this.timerId = setInterval( function() {
                oGameDataObject.removeImgElements();
                oGameDataObject.createImgElements();
            }, 2000);
            
        }

        if(e.key === 'e' || e.key === 'E') {
            //console.log('End');
            
            //timer -> clearInterval
            //Är det en timer igång avsluta den och sätt timerid till null.
            if(this.timerId !== null) {
                clearInterval(this.timerId);
                this.timerId = null;
            }
        }

    });
    


   

        /*
            1. Lägg till en lyssnar för tangentbordet 
            2. Kontrollera om bokstaven b resp. B är tryckt
            3. Om så är fallet anropa metoderna removeImgElements() resp. createImgElements()
           
            5. Skriv koden för metoden createImgElements() i vilken du skall skapa sex img-element.
            5.1 Img-elementen skall skapas i en iteration och dess src-attribut skall bestå av värdet i ngn av planserna i vektorn imgRefs.
            5.2 slumpa ett tal mellan 1-6 (floor() och random())
            5.3 Skapa ett img-element
            5.4 Lägg till src- och alt-attributen till det nya img-elementet.
            5.5 ändra css-egenskaperna width och height till 10% för det nya img.elementet.
            5.6 lägg det nya img-elementet sist i main-elementet.

            4. Skriv koden för metoden removeImgElements() i vilken du skall ta bort alla img-element som finns i main img.
            
            Om tid finnes...
            6. Ändra din lösning så att nya täningar visas med ett intervall på två sekunder.
            7. Ändra så att bara en timer kan vara igång åt gången.
            8. Lägg till kod som gör att timern avslutas om användaren trycker på e eller E på tangentbordet.
        */
});
