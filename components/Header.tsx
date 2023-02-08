import { useAddress, useMetamask, useDisconnect, ConnectWallet } from "@thirdweb-dev/react";
import Link from "next/link";
import React from "react";
import styles from "../styles/Home.module.css";

export default function Header() {
  // Helpful thirdweb hooks to connect and manage the wallet from metamask.
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  const disconnectWallet = useDisconnect();

  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <div>
          <Link href="/" passHref role="button">
            <img
              src={`/logo.png`}
              alt="Thirdweb Logo"
              width={400}
              style={{ cursor: "pointer" }}
            />
          </Link>
        </div>
      </div>
      <div className={styles.right}>
        <ConnectWallet/>
      </div>
    </div>
  );
}
