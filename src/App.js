import axios from "axios";
import { useEffect, useState } from "react";
import {ChakraProvider} from "@chakra-ui/react"
import Card2 from "./components/Card2/Card2";

export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);
  console.log(users)
  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      setUsers(response.data);
    } catch (error) {
      console.log("Erro ao buscar usuários");
      console.log(error);
    }
  };

  return (
    <ChakraProvider>
    {users.map((user)=>{
      return (
      <Card2
        key={user.id}
        id={user.id}
        name={user.name}
        username={user.username}
      />
      )
    })}
    </ChakraProvider>
  );
}
