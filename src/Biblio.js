import BiblioLayout from './BiblioLayout';
import AuthorsList from './components/AuthorsList';
import Home from './components/Home';
import SearchAuthors from './components/SearchAuthors';
import './css/Biblio.css';
import { HashRouter, Route, Routes } from 'react-router-dom'; 

export default function Biblio() {
  
    return (
        <HashRouter>
            <Routes>
                <Route path='/' element={<BiblioLayout />}>
                    <Route index element={<Home />} /> 
                    <Route path='authors' element={<AuthorsList />} />
                    <Route path='search-author' element={<SearchAuthors />} />
                </Route>
                <Route path='*' element={<Home />} />
            </Routes>
        </HashRouter>
    )
}