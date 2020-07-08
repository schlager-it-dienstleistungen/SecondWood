require('dotenv').config();

const functions = require('firebase-functions');
const admin = require("firebase-admin")
const nodemailer = require('nodemailer');

admin.initializeApp()

let transporter = nodemailer.createTransport({
	service: 'gmail',
	host: 'smtp.gmail.com',
	port: 465,
	secure: true,
	auth: {
		user: process.env.SENDER_EMAIL,
		pass: process.env.SENDER_PASSWORD
	}
});

exports.sendEmail = functions
		.region('europe-west3')
		.firestore
    .document('products/{docId}')
    .onCreate((snap, context) => {
			console.log('snap.data(): ' + snap.data());

        const mailOptions = {
            from: `robert.schlager@gmail.com`,
						to: 'dagobert.profanter@gmail.com, roman.zoechling@icloud.com',
						cc: 'robert.schlager@gmail.com',
						subject: 'rewood - neues Produkt angelegt',
						text: 'Neues Produkt angelegt, ' + snap.data().title + 'Preis: ' + snap.data().price + '\nKategorie: ' + snap.data().category,
            html: `<h1>Neues Produkt angelegt, ${snap.data().title}</h1>
                                <p>
																	 <b>${snap.data().title}, Preis: ${snap.data().price}</b></br>
																	 <b>Kategorie:</b> ${snap.data().category}, <b>Unterkategorie:</b> ${snap.data().subcategory}</br>
																	 <b>Beschreibung: </b> ${snap.data().description}
                                </p>`
        };


        return transporter.sendMail(mailOptions, (error, data) => {
            if (error) {
                console.log(error)
                return
            }
            console.log("Sent, with data: " + data);
        });
    });


/*let mailOptions = {
	from: 'robert.schlager@gmail.com',
	to: 'schlager.robert@gmx.at',
	subject: 'Test',
	text: 'it works'
}

transporter.sendMail(mailOptions, function(err, data) {
	if(err){
		console.log('Error: ' + err);
	}else{
		console.log('EMail sent: ' + data);
	}
});*/

/*const functions = require('firebase-functions');
const admin=require('firebase-admin');
const nodemailer = require('nodemailer');

admin.initializeApp()
require('dotenv').config()

const {SENDER_EMAIL, SENDER_PASSWORD} = process.env;

exports.sendEmailNotification=functions.firestore.document('products/{docId}')
.onCreate((snap,ctx)=>{
	const data=snap.data();

	console.log('data: ' + data);

	let authData=nodemailer.createTransport({
		service: 'gmail',
		host:'smtp.gmail.com',
		port:465,
		secure:true,
		auth:{
			user: SENDER_EMAIL,
			pass: SENDER_PASSWORD
		}
	});

	authData.sendMail({
		from: 'robert.schlager@gmail.com',
		to: 'schlager.robert@gmx.at',
		subject: 'Test with nodemailer',
		text: 'message',
		html: 'message'
	})
	.then(res=>console.log('successfully sent that mail'))
	.catch(err=>console.log(err));
})*/

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });