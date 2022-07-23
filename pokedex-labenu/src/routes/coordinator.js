export const goToListPage = (navigate) => {
    navigate("/")
}

export const goToPokedexPage = (navigate) => {
    navigate("/pokedex")
}

export const goToDetailPage = (navigate, name) => {
    navigate(`/pokemon/${name}`)
}