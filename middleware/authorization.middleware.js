const isAdmin = (req, res, next) => {
    if (req.user.role === "admin") {
        next()
    } else {
        res.status(401).json({ message: "Unauthorized" })
    }
}
const isUser = (req, res, next) => {
    if (req.user.role === "user") {
        next()
    } else {
        res.status(401).json({ message: "Unauthorized" })
    }
}

export default { isAdmin, isUser }

