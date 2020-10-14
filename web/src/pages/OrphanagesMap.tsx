import React from 'react'
import {Link} from 'react-router-dom'
import {FiPlus} from 'react-icons/fi'
import {Map,TileLayer} from 'react-leaflet'

import 'leaflet/dist/leaflet.css'

import mapMakerImg from '../images/mapmake.svg'
import "../styles/pages/orphanegasMap.css"
function OrphanagesMap(){
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMakerImg} alt="map"/>

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas criancas estao esperando a sua visita :)</p>
                </header>



                <footer>
                    <strong>Rio do Sul</strong>
                    <span>Santa catarina</span>
                </footer>

            </aside>
                    <Map center={[-20.5359768,-54.6180158]} zoom={15} style={{
                        width:'100%',
                        height:'100%',
                    }}>
                        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                    </Map>
                    <Link to="" className="create-orphanage">
                        <FiPlus size={32} color="#fff"/>
                    </Link>
        </div>
    )
}

export default OrphanagesMap