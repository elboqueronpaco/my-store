import { request, response } from "express";

export const allUsers = async (req = request, res = response) => {
    res.status(200).json({ msg: 'Todos los usuarios' })
}
export const oneUser = async (req = request, res = response) => {
    const { id } = req.params
    res.status(200).json({ msg: `usuario ${id}` })
}
