import axios from 'axios'
import { map } from 'ramda'

export interface IPackage {
  title: string
  description: string
  id: string
  url: string
}

type setItemsFunc = (items: IPackage[]) => void
const fetchData = async (setData: setItemsFunc, setFilteredData: setItemsFunc) => {
  const result = await axios({
    method: 'post',
    url: 'https://api.github.com/graphql',
    headers: { Authorization: 'bearer e4ed0fb51ef797f89549da18ac1e41cab26415ee' },
    data: {
      query: `
        query {
          organization(login: "astrocoders") {
            repositories(first: 100) {
              nodes {
                name
                description
                id
                url
              }
            }
          }
      }
      `,
    },
  })

  const data: IPackage[] = map(
    repo => ({ title: repo.name, description: repo.description, id: repo.id, url: repo.url }),
    result.data.data.organization.repositories.nodes,
  )

  setData(data)
  setFilteredData(data)
}

export default fetchData
