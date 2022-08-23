import { useNavigate } from 'react-router-dom';
export default function Home() {
  let navigate = useNavigate();
  return (
    <div>
      <h1>This is from Home Page</h1>
      <button
        onClick={() => {
          navigate('/products/I Phone');
        }}
      >
        Submit
      </button>
    </div>
  );
}
