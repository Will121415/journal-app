import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import { FirebaseAuth } from './config';



const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async() => {

    try {
        
        const result = await signInWithPopup( FirebaseAuth, googleProvider );
        // const credentials = GoogleAuthProvider.credentialFromResult( result );

        const { uid, displayName, email, photoURL  } = result.user;

        return {
            ok: true,
            uid, displayName, email, photoURL
        }
        
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;

        return {
            ok: false,
            errorCode,
            errorMessage
        }
    }
}

export const registerUserWithEmailAndPassword = async({displayName, email, password}) => {

    try {
        
        const result = await createUserWithEmailAndPassword( FirebaseAuth, email, password );
        const { uid, photoURL } = result.user;

        updateProfile(FirebaseAuth.currentUser, { displayName });

        return {
            ok: true,
            uid, displayName, email, photoURL
        }
        
    } catch (error) {
        
        return {
            ok: false,
            errorMessage: error.message
        }
    }

}

export const loginWithEmailAndPassword = async({ email, password }) => {

    try {
        const result = await signInWithEmailAndPassword( FirebaseAuth, email, password );

        const { uid, displayName, photoURL } = result.user;

        return {
            ok: true,
            uid, email, displayName, photoURL
        }
        
    } catch (error) {

        let errorMessage;

        switch(error.code) {
            case 'auth/user-not-found':
                errorMessage = 'El usuario no existe';
                break;
            default:
                errorMessage = error.message
        }
        
        return {
            ok: false,
            errorMessage
        }
    }
}