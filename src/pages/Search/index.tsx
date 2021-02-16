import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ButtonIcon from '../../core/components/ButtonIcon';
import './styles.scss';

const Search = () => (
//const [isLoading, setIsLoanding] = useState(false);



<div className="search-base-form card-base">       
    
    <h2 className="text-title">
        Encontre um perfil Github
    </h2>
<div>
    <input type="text" className="form-control"/>
</div>
<Link to="/UserDetail" className="base-search-action">
        <ButtonIcon text="Encontrar" />
</Link>
       

</div>

);

export default Search;