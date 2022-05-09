// material
import { Box, Grid, Container, Typography } from '@mui/material';
// components
import Page from './page';
import './doctor/product.css';
import axios from 'axios';

import React from 'react';
import Navbar from '../components/navbar';

import { Component } from 'react';
import { Link } from 'react-router-dom';


// ----------------------------------------------------------------------

const loadScript = (src) => {
  return new Promise(function (resolve, reject) {
    var script = document.createElement('script')
    script.src = src
    script.addEventListener('load', function () {
      resolve()
    })
    script.addEventListener('error', function (e) {
      reject(e)
    })
    document.body.appendChild(script)
    document.body.removeChild(script)
  })
}

export default class Shop extends Component {
  
    state = {
        persons: []
      }

      componentDidMount() {
        loadScript(`${process.env.PUBLIC_URL}js/main.js`)

        axios.get(`http://localhost:8080/products`)
          .then(res => {
            const persons = res.data;
            this.setState({ persons });
            
          })
      }

    render(){

  return (

    <div>
  <Navbar />
<section className="home-slider owl-carousel">
  <div className="slider-item bread-item" style={{backgroundImage: 'url("images/shop.jpg")'}} data-stellar-background-ratio="0.5">
    <div className="overlay" />
    <div className="container" data-scrollax-parent="true">
      <div className="row slider-text align-items-end">
        <div className="col-md-7 col-sm-12 ftco-animate mb-5">
          <p className="breadcrumbs" data-scrollax=" properties: { translateY: '70%', opacity: 1.6}"><span className="mr-2"><a href="index.html">Home</a></span> <span>Shop</span></p>
          <h1 className="mb-3 navbar-brand" data-scrollax=" properties: { translateY: '70%', opacity: .9}"> <span style={{ fontWeight : 'bold'  }}>Nearest</span><span style={{color : '#009efb', fontWeight : 'bold' }}>Doctor</span> Shop</h1>

        </div>
      </div>
    </div>
  </div>
</section>
    <Page title="Shop">
      <Container maxWidth="xl">
      <div className="container">
        <div>
          <input type="text" placeholder='Search' onChange={this.handleChange}/>
          { this.state.persons.map((person) => {
            return <div className="product" key={person}>
              </div>
          }
          )}
        </div>
           <div className="row">
        { this.state.persons.map(person => 
       

             <div className="col-md-3">
               <div className="ibox">
                   <div className="ibox-content product-box">
                      <div className="product-imitation" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/products/'+ `${person.imageUrl}`+''})`  }}>
          </div>
          <div className="product-desc">
            <span className="product-price">
            {person.price} TND
            </span>
            <a href="#" className="product-name">{person.name}</a>
            <small className="text-muted">{person.description}</small>
            <div className="small m-t-xs">
            </div>
            <div className="m-t text-righ">
            <Link className="nav-link" underline="none" variant="subtitle2" component={Link} to="/product-view">
              <a href="#" className="btn btn-xs btn-outline btn-primary">View More<i className="fa fa-long-arrow-right" /> </a>
              </Link>  

            </div>
          </div>
        </div>
      </div>
          </div>
 
        
        )}
           </div>
    </div>


      </Container>
    </Page>
  </div>

  );

  }
}