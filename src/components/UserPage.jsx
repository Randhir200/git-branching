import { useParams } from 'react-router-dom';
export default function UserPage() {
  const params = useParams();
  console.log(params);
  return (
    <div>
      <h1>User {params.users_id}</h1>
    </div>
  );
}
