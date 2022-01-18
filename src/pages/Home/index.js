import './styles.css'

function Detail(props) {
  return (
    <div>
      Detalhe
      <br />
      {props.data}
    </div>
  );
}

function Home(){

  const name = 'teste'

  const myPhrase = `Olá mundo ${name}`
  
  return (
    <div class="container">
      <h1>Home</h1>

     <Detail data={myPhrase} />

    </div>
  );
}

export default Home;