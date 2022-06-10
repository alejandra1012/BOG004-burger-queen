import { useAuth } from "../context/authContext";



export function Home() {

  const authContext = useAuth()
  // const authContext = useContext(context)

  console.log(authContext);

  return (
    <div>Home</div>
  );
}
