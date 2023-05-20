import { Link } from 'react-router-dom'
import products from '../data'

const Products = () => {
  return (
    <>
      <section className='section'>
        <div className="products">
          {products.map(prod => {
            const { id, image, name } = prod

            return <article key={id}>
              <h5>{name}</h5>
              <Link to={`/products/${id}`}>More Info</Link>
            </article>
          })}
        </div>
      </section >
    </>
  );
};

export default Products;
