import React from 'react';
import CustomCard from '../../common/customCard';

const NewList = props => {
  return (
    <CustomCard link="/Criar-Lista" containerClass="new-list-container">
        <div>
          <p className="title">Adicionar novas listas</p>
        </div>
      </CustomCard>
  )
}
export default NewList