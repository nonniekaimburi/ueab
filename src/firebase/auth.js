import {ref, useRouter } from "vue";
import {GoogleAuthProvider, getAuth,signInWithPopup} from "firebase/auth"

export  function firbaseGoogleAuth(){
    const isLoggedIn = ref(false)
    const user= ref(null)
    const auth = getAuth();
    const errorCode = ref('')
    auth.useDeviceLanguage();
    const provider = new GoogleAuthProvider();
    auth.useDeviceLanguage();
    const router = useRouter();
  
    const signIn = async () => {
      signInWithPopup(auth, provider).then(result => {
        user.value = result.user;
        router.push('/')
      }).catch(error => {
        errorCode.value = error.code;
      });
    }
    const authState = () => onAuthStateChanged(auth, (adminUser) => {
      if (adminUser) {
        isLoggedIn.value = true;
        user.value = adminUser;
      } else {
        isLoggedIn.value = false;
        user.value = null;
      }
    });
  
    return {user, auth, signIn,authState, isLoggedIn, errorCode}
  
}