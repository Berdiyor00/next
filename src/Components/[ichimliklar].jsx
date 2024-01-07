
const AlbumDetails = ({ drink }) => {
    return (
      <div>
        <h1>{drink.strDrink}</h1>
     
        <img src={drink.strDrinkThumb} alt={drink.strDrink} />
       
      </div>
    );
  };
  
  export async function getServerSideProps({ params }) {
    const { id } = params;
  
    // 'id' orqali belgilangan ichimlik ma'lumotlarini olish
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
    const data = await response.json();
  
    return {
      props: {
        drink: data.drinks[0],
      },
    };
  }
  
  export default AlbumDetails;