const { nanoid } = require('nanoid');

const notes = [];
const id = nanoid(16);
const createdAt = new Date().toISOString();
const updatedAt = createdAt;

const newNote = {
  id, createdAt, updatedAt,
};

notes.push(newNote);
const isSuccess = notes.filter((note) => note.id === id).length;

const index = notes.findIndex((note) => note.id === id);

const { halo } = 'halo';

console.log(notes[index].id);
console.log(isSuccess);
console.log(typeof (halo));
