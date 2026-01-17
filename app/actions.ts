// 'use server';

// import { db } from '@/lib/firebase';
// import {
//   collection,
//   addDoc,
//   deleteDoc,
//   doc,
//   updateDoc,
// } from 'firebase/firestore';

// const addHolerite = async (targetUid, holeriteData) => {
//   try {
//     // holeriteData deve conter: { data, natureza, imagem }
//     await addDoc(collection(db, 'holerites'), {
//       uid: targetUid,
//       ...holeriteData,
//       createdAt: new Date().toISOString(),
//     });
//   } catch (e) {
//     console.error('Erro ao adicionar holerite:', e);
//     throw e;
//   }
// };

// const removeHolerite = async (holeriteId) => {
//   try {
//     await deleteDoc(doc(db, 'holerites', holeriteId));
//   } catch (e) {
//     console.error('Erro ao remover holerite:', e);
//     throw e;
//   }
// };

// const addRecado = async (targetUid, recadoData) => {
//   try {
//     // recadoData deve conter: { titulo, texto, tipo }
//     await addDoc(collection(db, 'recados'), {
//       uid: targetUid,
//       ...recadoData,
//       createdAt: new Date().toISOString(),
//     });
//   } catch (e) {
//     console.error('Erro ao adicionar recado:', e);
//     throw e;
//   }
// };

// const removeRecado = async (recadoId) => {
//   try {
//     await deleteDoc(doc(db, 'recados', recadoId));
//   } catch (e) {
//     console.error('Erro ao remover recado:', e);
//     throw e;
//   }
// };

// const markHoleriteAsViewed = async (holeriteId) => {
//   try {
//     // Referência ao documento específico na coleção 'holerites'
//     const holeriteRef = doc(db, 'holerites', holeriteId);

//     // Atualiza apenas o campo 'view' para true
//     await updateDoc(holeriteRef, {
//       view: true,
//     });
//   } catch (e) {
//     console.error('Erro ao marcar holerite como visualizado:', e);
//     throw e;
//   }
// };
