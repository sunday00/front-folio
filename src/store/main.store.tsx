import {selectorFamily} from "recoil";

export const threeProjectsStates = selectorFamily({
  key: 'threeProjects',
  get: () => async () => {
    const res = await fetch(import.meta.env.VITE_GIT_THREE_REPO)

    if(res.status === 404) throw Error('projects not found')

    return res.json()
  }
})


