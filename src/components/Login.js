import { useState } from "react";

export function Login() {

  const [user, setUser] = useState({
    email: '',
    password:''
  })

  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <button className="loginGoogle" >Iniciar sesión con Google</button>

    </>
  );
}
