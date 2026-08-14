import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
} from 'firebase/firestore';
import { database } from '../firebase';
import {
  DEFAULT_HOME,
  DEFAULT_ABOUT,
  DEFAULT_CONTACT,
} from '../constants/defaults';

const portfolioDoc = (section) => doc(database, 'portfolio', section);

export async function getHomeContent() {
  const snapshot = await getDoc(portfolioDoc('home'));
  return snapshot.exists() ? { ...DEFAULT_HOME, ...snapshot.data() } : DEFAULT_HOME;
}

export async function getAboutContent() {
  const snapshot = await getDoc(portfolioDoc('about'));
  return snapshot.exists() ? { ...DEFAULT_ABOUT, ...snapshot.data() } : DEFAULT_ABOUT;
}

export async function getContactContent() {
  const snapshot = await getDoc(portfolioDoc('contact'));
  return snapshot.exists()
    ? { ...DEFAULT_CONTACT, ...snapshot.data() }
    : DEFAULT_CONTACT;
}

export async function saveHomeContent(data) {
  await setDoc(portfolioDoc('home'), data, { merge: true });
}

export async function saveAboutContent(data) {
  await setDoc(portfolioDoc('about'), data, { merge: true });
}

export async function saveContactContent(data) {
  await setDoc(portfolioDoc('contact'), data, { merge: true });
}

export async function getProjects() {
  const projectCol = collection(database, 'projects');
  const queryProjects = query(projectCol, orderBy('importance', 'asc'));
  const snapshot = await getDocs(queryProjects);
  return snapshot.docs.map((item) => ({
    id: item.id,
    ...item.data(),
  }));
}

export async function createProject(data) {
  const projectCol = collection(database, 'projects');
  const docRef = await addDoc(projectCol, data);
  return docRef.id;
}

export async function updateProject(id, data) {
  await updateDoc(doc(database, 'projects', id), data);
}

export async function deleteProject(id) {
  await deleteDoc(doc(database, 'projects', id));
}

export function hasValue(value) {
  if (value === null || value === undefined) return false;
  if (typeof value === 'string') return value.trim().length > 0;
  if (Array.isArray(value)) return value.length > 0;
  return true;
}
