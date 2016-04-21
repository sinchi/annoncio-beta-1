   smtp = {
     username: 'ayoub.sinchi@gmail.com', // eg: bvjebin@meteorapp.com
     password: '3afritto', // eg: adfdouafs343asd123
     server: 'smtp.gmail.com', // eg: mail.gmail.com
     port: 587
   }
   process.env.MAIL_URL = 'smtp://' +
   encodeURIComponent(smtp.username) + ':' +
   encodeURIComponent(smtp.password) + '@' +
   encodeURIComponent(smtp.server) + ':' + smtp.port;

   process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;
