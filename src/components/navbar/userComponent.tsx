import { logOutFetch } from "@/src/pages/Login/utils/loginUtils"
import { getUser } from "@/src/utils/utils"
import { Avatar } from "primereact/avatar"
import { Button } from "primereact/button"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
interface User {
  _id: string,
  username: string,
  email: string,
}
function UserComponent() {
  const [user, setUser] = useState<User | null>(null)
  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUser()
      setUser(user)
    }
    fetchUser()
  }, [])
  return (
    <>
      {user ? (

        <div className="flex align-items-center gap-2">
          <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" shape="circle" />
          <h4>{user.username}</h4>
          <Button label="Log out" onClick={() => {
            logOutFetch()
            setUser(null)
          }} />
        </div>
      ) : (
        <Link to="/login" className="p-button font-bold no-underline" target="_blank" rel="noopener noreferrer" >Log in</Link>
      )
      }
    </>
  )
}

export default UserComponent
