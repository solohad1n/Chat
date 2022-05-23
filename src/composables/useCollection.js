import { ref } from "vue"
import { firestore } from '../firebase/config'
import { collection, addDoc, getDocs } from 'firebase/firestore'



const useCollection = () => {
  const addDocument = async (newDocument) => {
    const error = ref(null)
    try {
      const collectionRef = collection(firestore, 'messages')
      await addDoc(collectionRef, newDocument)
      error.value = null
    }
    catch (err) {
      error.value = err.message
    }
    return { error }
  }

  const getCollection = async () => {
    const documents = ref([])
    const error = ref(null)

    try {
      const collectionRef = collection(firestore, 'messages')
      const response = await getDocs(collectionRef)

      response.forEach(doc => {
        documents.value.push({ ...doc.data(), id: doc.id })
      })
    }
    catch (err) {
      error.value = err.message
    }
    return { documents, error }
  }


  return { addDocument, getCollection }
}

export default useCollection