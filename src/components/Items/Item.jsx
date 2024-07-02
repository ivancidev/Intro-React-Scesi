export const Item = ({title, completed}) => {
    return (
        <li>{title}{completed ? "✅" : "❌"}</li>
    )
}