
import Link from 'next/link';
export default async function Album() {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`);
    const albumsData = await response.json();

    if (!albumsData.drinks) {
        return <div>No data available</div>;
    }

    return (
        <ul className="drinckdata">
        {albumsData.drinks.map((album, index) => (
          <div key={index} style={{ color: '#fff' }}>
            <Link href={`/${album.idDrink}`}>
              
                <img src={album.strDrinkThumb} alt="" />
                <li>{album.strDrink}</li>
              
            </Link>
          </div>
        ))}
      </ul>
    );
}
