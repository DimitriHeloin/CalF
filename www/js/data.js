var codropsEvents = {
	  // '05-08-2014' : '<span>1er test</span>',
	  // '05-29-2014' : '<span>2eme test</span>'
	};


	function getAlerts(){




		html5sql.openDatabase("NemtysAppDB8", "NemtysAppDB8", 3 * 1024 * 1024);

		html5sql.process(
			[{
				sql:"SELECT * FROM alertes;",

			}],
			function(transaction, results, rowsArray){

				for(var i = 0; i < rowsArray.length; i++){
					var date=""+rowsArray[i].date_debut_alerte;
					var titre=""+rowsArray[i].titre_alerte;
					codropsEvents[date]='<span>'+titre+'</span>';
				}


			},
			function(error, statement){
			}
			);

		return codropsEvents;

	}


