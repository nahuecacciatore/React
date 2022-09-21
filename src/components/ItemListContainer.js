const ItemListContainer = ( {greeting}) => {
    let styles = {
        border: `solid 2px red`
    }
  return (
    <div style={styles}>{greeting}</div>
  )
}
export default ItemListContainer