import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from '@react-native-firebase/auth'

const auth = getAuth()
export async function createUser(name ,email, password){
    try {
        console.log("Before creation api");
            
        const creation = await createUserWithEmailAndPassword(auth, email, password)
        console.log("after Creation api");
        
        const user = creation.user
        await updateProfile(user, {
            displayName: name,
            // photoURL: //add this later
        })
        console.log("After update api");
        
        return creation.user
        // const see = await getAuth().currentUser
        // console.log("create user see", see);
        
            
    } catch (error) {   
        // console.log("Error in account Creation", error);
        throw error.message
        
    }
    
}


export async function loginUser(email, password) {
    try {
        console.log("Before login api");
        
        const userLogin = await signInWithEmailAndPassword(auth, email, password)
        return userLogin.user
        
        
    } catch (error) {
        console.log("error in user login api", error);
        throw error.message
        
    }
}