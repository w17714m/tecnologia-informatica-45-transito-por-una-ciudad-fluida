import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from "angularfire2/database";
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

/*
  Generated class for the ServiciosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
  */
  @Injectable()
  export class ServiciosProvider {

  	private db: AngularFireDatabase;
  	constructor(db: AngularFireDatabase,private afAuth :  AngularFireAuth) {    
  		this.db = db;
  	}

  	//Informacion DB
  	getInformacionDB(){
  		let ref = this.db.database.ref('usuarios/');
  		ref.on("value",(snapshot)=>{
		  //valueDB = snapshot.toJSON();         
		},(errorObject)=>{

		});
  		return '1';
  	}

    // Funciones para autenticacion y registro
    registroUsuario(email:string, password:string){
    	return this.afAuth.auth.createUserWithEmailAndPassword( email, password).then((res:any)=>{
    		res=>Promise.resolve(res)
    	})
    	.catch(err=> Promise.reject(err))
    }
    login(email:string, password:string){
    	return this.afAuth.auth.signInAndRetrieveDataWithEmailAndPassword(email, password)
    	.then(user=>Promise.resolve(user))
    	.catch(err=>Promise.reject(err))
    }

    doGoogleLogin() {
    	return new Promise<any>((resolve, reject) => {
    		let provider = new firebase.auth.GoogleAuthProvider();
    		provider.addScope('profile');
    		provider.addScope('email');
    		provider.addScope('https://www.googleapis.com/auth/contacts');
    		provider.addScope(' https://www.googleapis.com/auth/drive');
    		this.afAuth.auth
    		.signInWithPopup(provider)
    		.then(res => {
    			console.log("res", res);
    			res['tokenRest'] = res.credential
    			resolve(res);
    		}, err => {
    			reject(err);
    		})
    	})
    }

		logoutUser(){
			this.afAuth.auth.signOut();
		}
		// Devuelve la session
		get Session(){
			return this.afAuth.authState;
		}
	}