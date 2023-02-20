import {atomFamily} from "recoil";

export enum RepoCode {
  THREE = 'three',
  BASIC = 'basic',
}

type projectsStateArgs = {
  repoCode: string,
  page?: number|null,
  path?: string|null,
}

class Api {
  cachedItems: any[] = []

  async getProjects(url: string) {
    if(this.cachedItems.length === 0) {
      const res = await fetch(url)

      if(res.status === 404) throw Error('projects not found')

      this.cachedItems = await res.json()
    }

    return this.cachedItems
  }
}

const api = new Api()

export const projectsState = atomFamily<string[], projectsStateArgs>({
  key: 'projectsState',
  default: [],
  effects: ({repoCode, page, path}) => [
    ({setSelf}) => {
      let url = `${import.meta.env[`VITE_GIT_REPO`]}`

      if(page) url = `${url}/src/${repoCode}/${page}`
      if(path) url = `${url}/${path}`

      api.getProjects(url).then(r => setSelf(r))
    },
  ],
})
