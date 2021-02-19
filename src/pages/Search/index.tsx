import React, { useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { Result } from '../../core/assets/styles/Result';
import ButtonIcon from '../../core/components/ButtonIcon';
import InfoLoader from './components/Loaders/ContentLoader';
import ImageLoader from './components/Loaders/ImageLoader';
import './styles.scss';

const Search = () => {
    const [search, setSearch] = useState('')
    const [userData, setUserData] = useState<Result>()
    const [isLoading, setIsLoading] = useState(false);
 
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
       event.preventDefault();
 
       setIsLoading(true);
 
       fetch(`https://api.github.com/users/${search}`)
          .then(response => response.json())
          .then(userResponse => setUserData(userResponse))
          .finally(() => {
             setIsLoading(false)
          })
    }
 
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
       setSearch(event.target.value)
    }
 
    return (
       <div className="search-base-form card-base">
          <div className="search-box">
             <h2 className="text-title">Encontre um perfil Github</h2>
             <form onSubmit={handleSubmit}>
                <input
                   type="text"
                   className="form-control"
                   required
                   value={search}
                   onChange={handleChange}
                   placeholder="Usuário Github"
                />
                <div className="btn-search base-search-action">
                   <ButtonIcon text="Encontrar" />
                </div>
             </form>
          </div>
       
          {userData && (
             <div className="bg-result">
                {isLoading ?
                   <div className="loaders">
                      <ImageLoader />
                      <InfoLoader />
                   </div> : (
                      <div>
                         <div className="user-data-cont">
                            <img
                               src={userData.avatar_url}
                               alt=""
                               className="photo-perfil"
                            />
                            <div className="user-data">
                               <div className="user-stats">
                                  <span>Repertorios Publicos: {userData.public_repos}</span>
                                  <span>Seguidores: {userData.followers}</span>
                                  <span>Seguindo: {userData.following}</span>
                               </div>
                               <div className="user-info">
                                  <h3 className="user-title">Informações</h3>
                                  <div><strong>Empresa:</strong> {userData.company}</div>
                                  <div><strong>Website/Blog:</strong> {userData.blog}</div>
                                  <div><strong>Localidade:</strong> {userData.location}</div>
                                  <div><strong>Membro desde:</strong> {userData.created_at}</div>
                               </div>
                            </div>
                         </div>
                         <div className="btn-profile">
                            <a
                               href={userData.html_url}
                               target="_new"
                            >
                               <ButtonIcon text="Ver Perfil" />
                            </a>
                         </div>
                      </div>
                   )}
             </div>
          )}
       </div>
    )
 }
 
 export default Search