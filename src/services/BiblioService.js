import authors from "../data/authors";

export function getAllAuthors() {
    return new Promise((resolve) => resolve([...authors]));
}

export function getAuthorById(id) {
    return new Promise((resolve, reject) => {
        const author = authors.find(a => a.id === parseInt(id));
        if (author) {
            resolve({ ...author });
        } else {
            reject(new Error(`Auteur avec l'id ${id} introuvable`));
        }
    });
}

export function addAuthor(author) {
    return new Promise((resolve) => {
        const newAuthor = {
            ...author,
            id: Math.max(...authors.map(a => a.id), 0) + 1
        };
        authors.push(newAuthor);
        resolve({ ...newAuthor });
    });
}

export function updateAuthor(id, updatedData) {
    return new Promise((resolve, reject) => {
        const index = authors.findIndex(a => a.id === parseInt(id));
        if (index !== -1) {
            authors[index] = { ...authors[index], ...updatedData };
            resolve({ ...authors[index] });
        } else {
            reject(new Error(`Auteur avec l'id ${id} introuvable`));
        }
    });
}

export function deleteAuthor(id) {
    return new Promise((resolve, reject) => {
        const index = authors.findIndex(a => a.id === parseInt(id));
        if (index !== -1) {
            const deleted = authors.splice(index, 1)[0];
            resolve({ ...deleted });
        } else {
            reject(new Error(`Auteur avec l'id ${id} introuvable`));
        }
    });
}

export function searchAuthors(keyword) {
    return new Promise((resolve) => {
        const results = authors.filter(a => 
            a.name.toLowerCase().includes(keyword.toLowerCase()) ||
            a.technology.toLowerCase().includes(keyword.toLowerCase()) ||
            a.country.toLowerCase().includes(keyword.toLowerCase())
        );
        resolve([...results]);
    });
}

export function getAuthorsByCountry(country) {
    return new Promise((resolve) => {
        const results = authors.filter(a => 
            a.country.toLowerCase() === country.toLowerCase()
        );
        resolve([...results]);
    });
}

export function getAuthorsByTechnology(technology) {
    return new Promise((resolve) => {
        const results = authors.filter(a => 
            a.technology.toLowerCase().includes(technology.toLowerCase())
        );
        resolve([...results]);
    });
}