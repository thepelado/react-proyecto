import React, { useState } from 'react';
import ItemCount from './itemcount';
import './itemdetail.css';

const ItemDetail = ({item}) => {
    
    const [quantity, setQuantity] = useState(1);

    return (
        <>
        <div className="col-md-6 photo-container">
            <img className='photo img-fluid' src={item.photo} alt={item.title}></img>
        </div>
        <div className="col-md-6 item-detail">
            <div className='h-100'>
                {item.stock < 10 &&
                    <div className="position-absolute bg-danger px-2 py-1 rounded" style={{ "right": "0" }}>
                        <span className="text-white">¡Últimas unidades!</span>
                    </div>
                }
                <h5 className='card-title'>{item.title}</h5>
                <p className='card-text'>
                    <span className='categories'>{item.category} / {item.brand}</span>
                    <hr/>
                    <span className='price'>$ {item.price}</span>
                    <hr/>
                    <span className='stock'><b>Disponibilidad:</b> {item.stock} {item.stock > 1 ? "unidades disponibles" : "última unidad disponible"}.</span>
                    <hr/>
                    <div className="item-count">
                        <ItemCount stock={item.stock} initialValue={quantity} item={item} />
                    </div>
                    <div className="shipping-options">
                        <p><span><i className="fa fa-shipping-fast"></i> Entrega Express</span> Recíbelo en 2 horas o cuando tú quieras</p>
                        <p><span><i className="fa fa-truck"></i> Envío Estándar</span> Recíbelo en 1-2 días</p>
                        <p><span><i className="far fa-clock"></i> Recogida Express</span> Recógelo en 1 hora</p>
                        <p><span><i className="fa fa-archive"></i> Recogida</span> Recógelo en 1-2 días</p>
					</div>
                </p>                
            </div>
        </div>
        <div className="col-md-12 item-data mt-2">
            <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item" role="presentation">
                    <a className="nav-link active" id="description-tab" data-toggle="tab" href="#description" role="tab" aria-controls="description" aria-selected="true">Descripción</a>
                </li>
            </ul>
            <div className="tab-content">
                <div className="tab-pane fade show active" id="description" role="tabpanel" aria-labelledby="description-tab">
                    <p>{item.description}</p>
                    <p><b>SKU: </b>{item.sku} / <b>Categorías: </b>{item.category} / <b>Marca: </b>{item.brand}</p>
                </div>
            </div>
        </div>
        </>
    );
}

export default ItemDetail;