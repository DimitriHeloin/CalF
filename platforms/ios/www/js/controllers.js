////////////////////
////
/// La récupération des données se fait
/// en décalé (function settimeout, pour laisser
/// le temps à la requette sql de s'effectuer. à améliorer)
///
///
//////////////////




angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {

    // ajout du Css calendar et suppression de celui de la liste
    $("LINK[href*='css/customListe.css']").remove();
    $("head").append($("<link rel='stylesheet' href='css/customCalendar.css' type='text/css'/>"));

    getAlerts();
    setTimeout(function() {

        var hauteur = $(".main").height() - 120;
        $(".fc-calendar-container").css("height", hauteur);
        $(window).resize(function(){
        hauteur = $(".main").height() - 120; // récupère la hauteur du main sans les menus
        $(".fc-calendar-container").css("height", hauteur); // défini la taille du calendrier
    });

        $(function() {
            var transEndEventNames = {
                'WebkitTransition' : 'webkitTransitionEnd',
                'MozTransition' : 'transitionend',
                'OTransition' : 'oTransitionEnd',
                'msTransition' : 'MSTransitionEnd',
                'transition' : 'transitionend'
            },
            transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
            $wrapper = $( '#custom-inner' ),
            $calendar = $( '#calendar' ),
            cal = $calendar.calendario( {
                onDayClick : function( $el, $contentEl, dateProperties ) {

                    if( $contentEl.length > 0 ) {
                        showEvents( $contentEl, dateProperties );
                    }

                },
                caldata :codropsEvents,
                displayWeekAbbr : true
            } ),
            $month = $( '#custom-month' ).html( cal.getMonthName() ),
            $year = $( '#custom-year' ).html( cal.getYear() );

            $( '#custom-next' ).on( 'click', function() {
                cal.gotoNextMonth( updateMonthYear );
            } );
            $( '#custom-prev' ).on( 'click', function() {
                cal.gotoPreviousMonth( updateMonthYear );
            } );

            function updateMonthYear() {
                $month.html( cal.getMonthName() );
                $year.html( cal.getYear() );
            }

                // just an example..
                function showEvents( $contentEl, dateProperties ) {

                    hideEvents();

                    var $events = $( '<div id="custom-content-reveal" class="custom-content-reveal"><h4>Events for ' + dateProperties.monthname + ' ' + dateProperties.day + ', ' + dateProperties.year + '</h4></div>' ),
                    $close = $( '<span class="custom-content-close"></span>' ).on( 'click', hideEvents );

                    $events.append( $contentEl.html() , $close ).insertAfter( $wrapper );

                    setTimeout( function() {
                        $events.css( 'top', '0%' );
                    }, 25 );

                }
                function hideEvents() {

                    var $events = $( '#custom-content-reveal' );
                    if( $events.length > 0 ) {

                        $events.css( 'top', '100%' );
                        Modernizr.csstransitions ? $events.on( transEndEventName, function() { $( this ).remove(); } ) : $events.remove();

                    }

                }

            });}, 500);
})

.controller('AjoutCtrl', function($scope) {
    $('#quotidien').hide();
    $('#hebdomadaire').hide();
    $('#mensuelle').hide();
    $('#annuelle').hide();
    $titre_alerte="";
    $date_debut_alerte="";
    $date_fin_alerte="";
    $description_alerte="";
    $prorite_alerte="";
    $delai_alerte=14;
    $id_categorie=0;
    $id_utilisateur=0;
    $id_saviez=0;
    $id_periodicite=0;



    $( '#periodicite' ).mouseout( function() {

        $selection = $("#periodicite option:selected").text();

        if ($selection == "Quotidien")
        {
            $('#quotidien').show("slow");
            $('#hebdomadaire').hide("slow");
            $('#mensuelle').hide("slow");
            $('#annuelle').hide("slow");


        }
        else if ($selection == "Hebdomadaire")
        {
            $('#quotidien').hide("slow");
            $('#hebdomadaire').show("slow");
            $('#mensuelle').hide("slow");
            $('#annuelle').hide("slow");
        }
        else if ($selection == "Mensuelle")
        {
            $('#quotidien').hide("slow");
            $('#hebdomadaire').hide("slow");
            $('#mensuelle').show("slow");
            $('#annuelle').hide("slow");
        }
        else if ($selection == "Annuelle")
        {
            $('#quotidien').hide("slow");
            $('#hebdomadaire').hide("slow");
            $('#mensuelle').hide("slow");
            $('#annuelle').show("slow");
        }
        else
        {
            $('#quotidien').hide("slow");
            $('#hebdomadaire').hide("slow");
            $('#mensuelle').hide("slow");
            $('#annuelle').hide("slow");
        }

    });
$("#enregistrerRappel").click(function(){

    var prioriteselected = document.getElementById("priorite");
    var categorieselected=document.getElementById("categorie");
    $titre_alerte=$("#titre").val();
    $dateRecupereeMauvaisFormat=$("#dateDebut").val();
    $date_debut_alerte=""+$dateRecupereeMauvaisFormat.substring(5,7)+"-"
    +$dateRecupereeMauvaisFormat.substring(8)+"-"
    +$dateRecupereeMauvaisFormat.substring(0,4);
    $dateFinRecupereeMauvaisFormat=$("#dateFin").val();
    $date_fin_alerte=""+$dateFinRecupereeMauvaisFormat.substring(5,7)+"-"
    +$dateFinRecupereeMauvaisFormat.substring(8)+"-"
    +$dateFinRecupereeMauvaisFormat.substring(0,4);        
    $description_alerte=$("#description").val();
    $prorite_alerte=prioriteselected.options[prioriteselected.selectedIndex].value;
/*    $delai_alerte=$("#rappel").val();
$id_categorie=categorieselected.options[categorieselected.selectedIndex].value;*/
$delai_alerte=0;
$id_categorie=0;
$id_utilisateur=0;
$id_saviez=0;
$id_periodicite=0;


html5sql.openDatabase("NemtysAppDB8", "NemtysAppDB8", 3 * 1024 * 1024);
html5sql.process(
 [

 "INSERT INTO alertes (titre_alerte,date_debut_alerte,date_fin_alerte,description_alerte,prorite_alerte,delai_alerte,id_categorie,id_utilisateur,id_saviez,id_periodicite) VALUES ('"+$titre_alerte+"','"+$date_debut_alerte+"','"+$date_fin_alerte+"','"+$description_alerte+" ','"+$prorite_alerte+"',"+$delai_alerte+","+$id_categorie+","+$id_utilisateur+","+$id_saviez+","+$id_periodicite+");",
 "INSERT INTO alertes_temp (titre_alerte_temp,date_debut_alerte_temp,date_fin_alerte_temp,description_alerte_temp,prorite_alerte_temp,delai_alerte_temp,id_categorie,id_utilisateur,id_saviez,id_periodicite) VALUES ('"+$titre_alerte+"','"+$date_debut_alerte+"','"+$date_fin_alerte+"','"+$description_alerte+" ','"+$prorite_alerte+"',"+$delai_alerte+","+$id_categorie+","+$id_utilisateur+","+$id_saviez+","+$id_periodicite+");"
 ],
 function(){
                //alert("ajout fait");
            },
            function(error, statement){
             alert(error);
         }
         );



});


})

.controller('ListeCtrl', function($scope) {
    // ajout du Css calendar et suppression de celui de la liste
    $("LINK[href*='css/customCalendar.css']").remove();
    $("head").append($("<link rel='stylesheet' href='css/customListe.css' type='text/css'/>"));

    getAlerts();
    setTimeout(function() {

        var hauteur = $(window).height()-120;
        $("#calendar").css("height", hauteur);
        $(window).resize(function(){
        hauteur = $(window).height()-120; // récupère la hauteur du main sans les menus
        $("#calendar").css("height", hauteur); // défini la taille du calendrier
    });

        $(function() {
            var transEndEventNames = {
                'WebkitTransition' : 'webkitTransitionEnd',
                'MozTransition' : 'transitionend',
                'OTransition' : 'oTransitionEnd',
                'msTransition' : 'MSTransitionEnd',
                'transition' : 'transitionend'
            },
            transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
            $wrapper = $( '#custom-inner' ),
            $calendar = $( '#calendar' ),
            cal = $calendar.calendario( {
                onDayClick : function( $el, $contentEl, dateProperties ) {

                    if( $contentEl.length > 0 ) {
                        showEvents( $contentEl, dateProperties );
                    }

                },
                caldata :codropsEvents,
                displayWeekAbbr : true
            } ),
            $month = $( '#custom-month' ).html( cal.getMonthName() ),
            $year = $( '#custom-year' ).html( cal.getYear() );

            $( '#custom-next' ).on( 'click', function() {
                cal.gotoNextMonth( updateMonthYear );
            } );
            $( '#custom-prev' ).on( 'click', function() {
                cal.gotoPreviousMonth( updateMonthYear );
            } );

            function updateMonthYear() {
                $month.html( cal.getMonthName() );
                $year.html( cal.getYear() );
            }

                // just an example..
                function showEvents( $contentEl, dateProperties ) {

                    hideEvents();

                    var $events = $( '<div id="custom-content-reveal" class="custom-content-reveal"><h4>Events for ' + dateProperties.monthname + ' ' + dateProperties.day + ', ' + dateProperties.year + '</h4></div>' ),
                    $close = $( '<span class="custom-content-close"></span>' ).on( 'click', hideEvents );

                    $events.append( $contentEl.html() , $close ).insertAfter( $wrapper );

                    setTimeout( function() {
                        $events.css( 'top', '0%' );
                    }, 25 );

                }
                function hideEvents() {

                    var $events = $( '#custom-content-reveal' );
                    if( $events.length > 0 ) {

                        $events.css( 'top', '100%' );
                        Modernizr.csstransitions ? $events.on( transEndEventName, function() { $( this ).remove(); } ) : $events.remove();

                    }

                }

            });}, 500);
})

.controller('ParamCtrl', function($scope) {
    $('#param').hide();

    $("#ModifInfoBtn").click(function(){
   html5sql.process(
          [{
            sql:"select reglage_fait from reglages  ;"

        }],

        function(transaction, results, rowsArray){

           if(rowsArray[0].reglage_fait="oui")
           {
               html5sql.process(
                  [{
                    sql:"UPDATE reglages set nom='"+$("#nom").val()+"', prenom='"+$("#prenom").val()+"', email='"+$("#email").val()+"', date_naissance='"+$("#date").val()+"'  ;"


                }],

                function(){
                    updateUtilisateur();

                },
                function(error, statement){
                    alert(error + "//"+ statement);
                }
                );
           }

           else
           {
                     
             }

          }
          );

    });

    $( '#submitButton' ).click( function() {
        $('#identification').hide("slow");
        $('.tabs').css("visibility","visible");
        $('#param').show("slow");




        html5sql.process(
          [{
            sql:"select reglage_fait from reglages  ;"

        }],

        function(transaction, results, rowsArray){

           if(rowsArray[0].reglage_fait="non")
           {
               html5sql.process(
                  [{
                    sql:"UPDATE reglages set nom='"+$("#nomIdentification").val()+"', prenom='"+$("#prenomIdentification").val()+"', email='"+$("#emailIdentification").val()+"', date_naissance='"+$("#dateIdentification").val()+"', reglage_fait='oui'  ;"


                }],

                function(){
                    createUtilisateur();
                },
                function(error, statement){
                    alert(error + "//"+ statement);
                }
                );
           }

           else
           {
                     
            }

          }
          );





html5sql.process(
  [{
    sql:"select regid from reglages  ;"

}],

function(transaction, results, rowsArray){

   console.log(rowsArray[0].regid);

}
);







});

$( '.supCritere' ).click( function() {
    $(this).parent().hide("slow");
});

$( '#ajoutCrit' ).click( function() {

    selectAjout = $("#newCrit option:selected").text();
    if(selectAjout != "...")
    {
        $(this).parent().parent().prepend(
            '<div class="item item-button-right">'+selectAjout+'<button class="button button-assertive supCritere"><i class="icon ion-close-round"></i></button></div>'
            ).show("slow");
    }
});
})

.controller('ConCtrl', function($scope) {
});
