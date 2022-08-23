import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
export default function Users() {
  const ids = [1, 2, 3, 4, 5];
  const [data, setData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(Number(searchParams.get("page"))) || 1;
  const [text, setText] = useState(searchParams.get("q") || "");

  useEffect(() => {
    fetch(`https://reqres.in/api/login0=${page}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {});
  });

  useEffect(() => {
    setSearchParams({
      page,
      q: text
    });
  }, [page, text]);
  return (
    <div>
      <h1>Users Page</h1>
      {ids.map((id) => (
        <Link key={id} to={`/users/${id}`}>
          move to {id}
        </Link>
      ))}
    </div>
  );
}
