import Image from "next/image";
import main from './style/main.module.scss'
export default function Home() {
  return (
    <main className={main.background}>
      <div className={main.text}>
     <h1>흐음 여긴 메인임</h1>

      </div>
    </main>
  );
}
