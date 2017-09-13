var db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024);

db.transaction(function (tx) {
   tx.executeSql('CREATE TABLE IF NOT EXISTS NOTES (log)');
   tx.executeSql('INSERT INTO NOTES (log) VALUES ("zdr")');
   tx.executeSql('INSERT INTO NOTES (log) VALUES ("Another Note")');
});

db.transaction(function (tx) {
   tx.executeSql('SELECT * FROM NOTES', [], function (tx, results) {
      msg = "<p>Found Table!</p>"
      document.querySelector('#displayNotes').innerHTML +=  msg;
  
      for (i = 0; i < len; i++){
        msg = "<p><b>" + results.rows.item(i).log + "</b></p>";
        document.querySelector('#displayNotes').innerHTML +=  msg;
     }
	
   }, null);
});
