import { useAuth } from "../context/authContext";



export function Error() {

  const { user} = useAuth()
  console.log(user);

  return (
    <div>Error 404</div>
  );
}
