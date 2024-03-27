export { userInfo }

interface UserInfo {
  name: string
	homeworld: string
}

interface PlanetInfo {
  name: string
  terrain: string
}

async function userInfo({ userId }: { userId: number }) {

  const userInfo: UserInfo = await fetch(`https://swapi.dev/api/people/${userId}/`)
    .then((res) => res.json())

  const planetInfo: PlanetInfo = await fetch(userInfo.homeworld)
    .then((res) => res.json())

  const message: string = `We welcome ${userInfo.name} from ${planetInfo.name}`

  return { message }
}
