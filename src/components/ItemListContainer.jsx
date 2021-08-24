const ItemListCustom = ({greeting, greeting2, greeting3}) => {
  return (
    <p style={{backgroundColor: "#FF0000"}}>{greeting} , {greeting2}, {greeting3}</p>
  );
};

export const ItemListContainer = () => {
  return (
    <div>
        <ItemListCustom greeting="Hola" greeting2="Saludos" greeting3= "hello"/>
        <ItemListCustom greeting="Hola2" greeting2="Saludos2" greeting3= "hello2"/>
        <ItemListCustom greeting="Hola3" greeting2="Saludos3" greeting3= "hello3"/>
    </div>
  );
};
