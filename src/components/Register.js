import { useState } from "react";

export function Register () {

  const [user, setUser] = useState({
    email: '',
    password:''
  });

  return (
    <>
      <form>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" placeholder="yuri1413@hotmail.com"/>
      </form>
    </>
  );
}
