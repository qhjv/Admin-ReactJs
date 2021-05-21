import firebase from 'firebase/app'
import Candidate from '../models/candidate'


const firestore=firebase.firestore()
export const getCandidates = async()=>{
    try {

        const response= await firestore.collection("candidates")
        const data= await response.get()
        let array = [];
        data.forEach(doc =>{
            const candidate = new Candidate(
                doc.id,
                doc.data().fullname,
                doc.data().position,
                doc.data().avatar,
                doc.data().favorite,
                doc.data().calendar,
                doc.data().time
            );

            array.push(candidate)
        })
        return array
    } catch (error) {
        console.log("failed:",error) 
    }
}
export const addCandidate =async (candidate)=>{
    try {
        await firestore.collection('candidates').doc().set(candidate)
        
    } catch (error) {
        console.log('failed',error)
    }
}
export const getCandidate = async (id) => {
    try {
        const candidate = await firestore.collection('candidates').doc(id);
        const data = await candidate.get();
        return data.data();
    } catch (error) {
        console.log('failed',error)

    }
}
export const updateCandidate = async (id, data) => {
    try {
        const candidate = await firestore.collection('candidates').doc(id);
        await candidate.update(data)
    } catch (error) {
        console.log('failed',error)
    }
}
export const deleteCandidate = async (id) => {
    try {
        await firestore.collection('candidates').doc(id).delete();
    } catch (error) {
        throw error;
    }
}
