import { useParams } from 'react-router-dom';
export default function Products() {
  const value = useParams();
  console.log(value);
  return <h1>Products: {value.id}</h1>;
}
