import React, { Fragment, useEffect, useState, useRef } from 'react';
import Loader from '../layout/Loader/Loader';
import { useSelector, useDispatch } from 'react-redux';
import ProductCard from '../Home/ProductCard';
import { clearErrors, getProduct } from '../../actions/productAction';
import { useParams } from 'react-router-dom'
import Pagination from 'react-js-pagination';
import {useAlert} from 'react-alert';
import './Products.css';


const categories = [
  "Logo Design",
  "Business Card Design",
  "Letterhead Design",
  "Signage Design",
  "Flyer Design",
  "Postcard Design",
  "Brchure Design",
  "Poster Design",
  "Advertisement Design",
  "Catalogue Design",
  "Envelope Design",
  "Magazine Design",
  "Menu Design",
  "Newspaper Ad Design",
  "Print Design",
  "Sticker Design",
  "Resume Design",
  "Word Temlate Design",
]

const Products = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const [ category, setCategory ] = useState( "" );
  const [ open, setOpen ] = useState( 0 );
  const filterRef = useRef()

  const dispatch = useDispatch();
  const alert = useAlert()
  const { loading, error, products, productsCount, resultPerPage, filteredProductsCount } = useSelector( state => state.products );
  const params = useParams();
  const keyword = params.keyword

  const setCurrentPageNo = (e) => {
    setCurrentPage(e)
  }

  const openFilter = () => {
    setOpen(prev => !prev)
  }

  const closeFilter = (e) => {
    if ( filterRef.current !== e.target ) {
      setOpen(false)
    }
    if ( filterRef.current === e.target ) {
      setOpen(false)
    }
  }

  useEffect( () => {
    if ( error ) {
      alert.error(error)
      dispatch(clearErrors())
    }
    dispatch(getProduct(keyword, currentPage, category))
  }, [dispatch, keyword, currentPage, category, alert, error] )
  

  let count = filteredProductsCount;

  return (
    <Fragment>
      {
        loading ? ( <Loader /> ) : (
          <div className="hero-products">
            <h2 className="productsHeading">Products</h2>
            <button className="btn-filter" onClick={ openFilter }>Filter</button>
            <div className="products">
              {
                products && products.map( ( product ) => (
                  <ProductCard key={product._id} product={product}/>
                ))
              }
            </div>
              {
                !open ? null : (
                  <div className="filter" ref={filterRef} onClick={closeFilter}>
                    <div className="filterBox">
                      <div className="productsHeading">Category</div>
                      <ul className="categoryBox">
                        {
                          categories.map( category => (
                            <li
                              className="category-link"
                              key={ category }
                              onClick={ () => setCategory(category) }
                            >
                              {category}
                            </li>
                          ))
                        }
                      </ul>
                    </div>
                  </div>
                  
                )
              }
            {
              resultPerPage < count && (
                <div className="paginationBox">
                  <Pagination
                    activePage={ currentPage }
                    itemsCountPerPage={ resultPerPage }
                    totalItemsCount={ productsCount }
                    onChange={ setCurrentPageNo }
                    nextPageText="Next"
                    prevPageText="Prev"
                    firstPageText="1st"
                    lastPageText="Last"
                    itemClass="page-item"
                    linkClass="page-link"
                    actvieClass="pageItemActive"
                    activeLinkClass="pageLinkActive"
                  />
                </div>
              )
            }
          </div>
        )
      }
    </Fragment>
  );
};

export default Products;
