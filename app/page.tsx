import Image from "next/image";
import main from './styles/main.module.scss'
import {useBearStore} from "./store/store";


export default function Home() {
// const store = useBearStore()
  // console.log(store)
  return (
    <main className={main.background}>
      <div className={main.text}>
     <h1>흐음 여긴 메인임</h1>

      </div>
    </main>
  );
}
