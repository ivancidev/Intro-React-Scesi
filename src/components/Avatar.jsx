import './App.css';
//Uso de props
function Avatar({title = "Sin titulo", year}) {
  // const title = props.title // 1 forma de obtener props
  // const { title, year } = props; 2 forma de obtener props
  return (
    <>
      <h1>{title}</h1>
      <p>Año de estreno {year}</p>
      <img
        className="avatar"
        src="https://th.bing.com/th/id/R.261733dcb6fcf51af4fc93e310bcf79a?rik=%2f3pDByGpjyFXbg&pid=ImgRaw&r=0"
        alt="Lin Lanying"
      />
    </>
  );
}

export default function App() {
  return <Avatar year={2022} title='Avengers' />;
}
