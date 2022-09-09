import { addDoc, collection, getDocs, getFirestore, onSnapshot, Timestamp } from "firebase/firestore";
import { ref, type Ref } from "vue";
import { type Student } from "../types/student";
const students:Ref<Array<Student>> = ref([])

export function getStudents(){
    const db = getFirestore() // get firestore instance
    const gettingData= ref(false)
   

const collectionRef = collection(db, 'students') // get collection reference

    // get all students
    function getAllStudents(){
        onSnapshot(collectionRef, (querySnapshot)=> {
    gettingData.value = true // set the loading state to true
    querySnapshot.forEach((doc) => {
        students.value.push(doc.data() as Student ) // add doc objects to students array
        console.log(doc.id, " => ", doc.data());
        });
        gettingData.value = false // set the loading state to true
    });
    
}

const student:Ref<Student> = ref({
    id:'',
    Lastname: '',
    Firstname: '',
    Middlename: '',
    school: '',
    createdAt: Timestamp.now()
})

// add a new student
const addStudent = async () => { 
    const docRef = await addDoc(collection(db, "students"), student.value);
    student.value={
    id:'',
    Lastname: '',
    Firstname: '',
    Middlename: '',
    school: '',
    createdAt: Timestamp.now()
    }}
    
    return {students, gettingData, addStudent, getAllStudents, student}
}