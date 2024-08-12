

const SearchInput = ({filteredArr}) => {


  const handleSearch = (e) => {

    filteredArr(e.target.value);
  }
  return (
    <div className='search-block'>
    <input onChange={handleSearch} type="text" placeholder='search by title' />
    <button >Search</button>
    </div>
  )
}

export default SearchInput