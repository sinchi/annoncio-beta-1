/*let template;

let _getFileFromInput = ( event ) => event.target.files[0];

let _setPlaceholderText = ( string = "Click or Drag a File Here to Upload" ) => {
  template.find( ".alert span" ).innerText = string;
};
*/
let _addUrlToDatabase = ( url , annonceId) => {
  Meteor.call( "storeUrlInDatabase", url, annonceId,  ( error ) => {
    if ( error ) {
      Bert.alert( error.reason, "warning" );
     // _setPlaceholderText();
    } else {
      Bert.alert( "File uploaded to Amazon S3!", "success" );
     // _setPlaceholderText();
    }
  });
};

let _uploadFileToAmazon = ( files , annonceId) => {
  const uploader = new Slingshot.Upload( "uploadToAmazonS3" );

 _.each(files, function(file){
     uploader.send( file, ( error, url ) => {
      if ( error ) {
        Bert.alert( error.message, "warning" );
        _setPlaceholderText();
      } else {
        _addUrlToDatabase( url , annonceId);
      }
    });
   });

  /*Router.go('annoncePage', {_id: result._id});*/

};

let upload = ( options ) => {
  annonceId = options.annonceId;
  files = options.files;
 /* let file = _getFileFromInput( options.event );

  _setPlaceholderText( `Uploading ${file.name}...` );*/
  _uploadFileToAmazon( files , annonceId);
};

Modules.client.uploadToAmazonS3 = upload;