import axios from 'axios'
import { map } from 'ramda'

export interface IPackage {
  title: string
  description: string
  id: string
  url: string
}

type setItemsFunc = (items: IPackage[]) => void
export const fetchData = async (setData: setItemsFunc, setFilteredData: setItemsFunc) => {
  const result = await axios({
    method: 'post',
    url: 'https://api.github.com/graphql',
    headers: { Authorization: `bearer dbfbc99985a0031582ffabc4562e58c4a48d80fe` },
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
