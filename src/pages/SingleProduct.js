import { useParams, Link } from "react-router-dom";
import products from "../data";

const SingleProduct = () => {

  const { id } = useParams()

  const product = products.find(prod => prod.id === id)

  const { image, name } = product

  return (
    <section className='section product'>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <Link to="/products" > back to products</Link>
    </section>
  );
};

export default SingleProduct;
