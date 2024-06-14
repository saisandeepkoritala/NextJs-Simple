import Link from "next/link"
import Links from "./links/Links"
import styles from "./navbar.module.css"


const Navbar = async () => {

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
      <img src="https://imgs.search.brave.com/ehAxzdlAiafW2Z5sUqNKbcEWrhC6zmPsrIcNMbx6x8U/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/MjAyMDExNjM5ODEt/OGNjOTUwMDdkZDJh/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TW54OGNH/bDZlbUVsTWpCemJH/bGpaWHhsYm53d2ZI/d3dmSHg4TUE9PQ" alt="" width={50} height={50} className={styles.img}/>
      </Link>
      <div>
        <Links />
      </div>
    </div>
  )
}

export default Navbar