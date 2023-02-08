import {Routes, Route} from 'react-router-dom'
import {useSetRecoilState} from 'recoil'
import Home from '@v/Home'
import Nav from "@c/Nav"
import {useEffect} from "react"
import {GIT_AUTH} from "@s/common_store";
import Vanilla from "@v/three/Vanilla";

function App() {
  const setGIT_AUTH = useSetRecoilState(GIT_AUTH)

  useEffect(() => {
    const pre_decode = atob(import.meta.env.VITE_GIT_SEC_PER)
    const sec = atob(pre_decode).replace(import.meta.env.VITE_GIT_SEC_SALT, '')

    setGIT_AUTH(sec)
  }, [])

  return (
    <div className="App" data-theme="pastel">
      <Nav/>
      <div>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/item/three/:page/:date/:no/vanilla/:name" element={<Vanilla />}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
