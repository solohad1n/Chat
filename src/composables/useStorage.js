import { ref } from "vue"
import { storage } from "../firebase/config"
import { user } from './useUser.js'


const useStorage = () => {
  const uploadImage = async (image) => {
    const error = ref(null)
    const url = ref(null)
    const filePath = ref(null)

    try {
      filePath.value = `avatars/${user.value.uid}/${image.name}`
      const storageRef = storage.ref(filePath.value)
      const res = await storageRef.put(image)

      url.value = await res.ref.getDownloadURL()
    }
    catch (err) {
      error.value = err.message
    }
    return { error, url, filePath }
  }
  return { uploadImage }
  // const deleteImage = () => { }
}

export default useStorage