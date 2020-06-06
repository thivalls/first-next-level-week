import React, { useState, useEffect } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import './styles.css';

import logo from '../../assets/logo.svg';

const CreatePoint: React.FC = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function loadItems() {
      const response = await api.get('items');
      setItems(response.data);
    }

    loadItems();
  }, [])

  return (
    <div id="page-create-point">
      <header>
        <img src={logo} alt="Ecoleta" />
        <Link to="/">
          <FiArrowLeft />
          Voltar para Home
        </Link>
      </header>

      <form>
        <h1>Cadastro de Ponto de Coleta</h1>
        <fieldset>
          <legend>
            <h2>Dados</h2>
          </legend>

          <div className="field-group">
            <div className="field">
              <label htmlFor="">Nome da entidade</label>
              <input type="text" />
            </div>
          </div>

          <div className="field-group">
            <div className="field leaf">
              <label htmlFor="">Endereço</label>
              <input type="text" />
            </div>
            <div className="field">
              <label htmlFor="">Numero</label>
              <input type="number" />
            </div>
          </div>

          <div className="field-group">
            <div className="field leaf">
              <label htmlFor="">Cidade</label>
              <input type="text" />
            </div>
            <div className="field">
              <label htmlFor="">Estado</label>
              <select name="" id="">
                <option value="">Teste</option>
                <option value="">Teste</option>
                <option value="">Teste</option>
                <option value="">Teste</option>
              </select>
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>
            <h2>Endereço</h2>
          </legend>
        </fieldset>

        <fieldset>
          <legend>
            <h2>Itens de Coleta</h2>
          </legend>
        </fieldset>
      </form>

      <div className="items-grid">
        <ul>
          {/* {
            items.map(item => (
              <li>{item.title}</li>
            ))
          } */}
        </ul>
      </div>
    </div>
  );
}

export default CreatePoint;