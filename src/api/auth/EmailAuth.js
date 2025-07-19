import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from '@react-native-firebase/auth'

const auth = getAuth()
export async function createUser(name ,email, password){
    try {
        console.log("Before creation api");
            
        const creation = await createUserWithEmailAndPassword(auth, email, password)
        console.log("after Creation api name",name);
        
        const user = auth.currentUser
        console.log("User in api before update", user);
        
        await user.updateProfile( {
            displayName: name,
            // photoURL: //add this later
        })

        console.log("After update api", auth?.currentUser?.displayName);

        // // This code is for sending email verification
        // if(auth.currentUser){
        //     await auth.currentUser.sendEmailVerification()
        //     console.log("verification");
            
        // }
        return auth.currentUser
        
            
    } catch (error) {   
        // console.log("Error in account Creation", error);
        throw error
        
    }
    
}


export async function loginUser(email, password) {
    // console.log("autho", auth);
    
    try {
        console.log("Before login api");
        
        const userLogin = await signInWithEmailAndPassword(auth, email, password)
        return userLogin.user
        
        
    } catch (error) {
        console.log("error in user login api", error);
        throw error.message
        
    }
}