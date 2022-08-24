import Users from "../model/user"

export async function getUsers(req, res){
    try {
        const users = await Users.find({})
        !users ? res.status(404).json({ error: "Users not found" }) : res.status(200).json(users)
    } catch (error) {
        res.status(404).json({ error: "Error while fetching data" })
    }
}