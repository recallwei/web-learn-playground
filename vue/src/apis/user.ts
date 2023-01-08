import { request } from "@/modules"

const fetchUsers = () => request.get("/user")

const fetchUser = (id: string) => request.get(`/user/${id}`)

export default { fetchUser, fetchUsers }
