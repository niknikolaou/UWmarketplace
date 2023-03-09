import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import {
  MediaRenderer,
  useActiveListings,
  useContract,
} from "@thirdweb-dev/react";
import { useRouter } from "next/router";
import { marketplaceContractAddress } from "../addresses";

const Home: NextPage = () => {
  const router = useRouter();
  const { contract: marketplace } = useContract(marketplaceContractAddress, "marketplace");
  const { data: listings, isLoading: loadingListings } = useActiveListings(marketplace);

  return (
    <>
      {/* Content */}
      <div className={styles.container}>
        {/* Top Section */}
        <h1 className={styles.h1}>Unchained Wolfs Marketplace</h1>
        <p className={styles.explain}>
          List your ERC721 and ERC1155 tokens for auction or for direct sale.
        </p>
        <p>
                <a href="https://diamondhands.unchainedwolfs.com" className={styles.hoverablelink}>
                  Game
                </a>
                <span> | </span>
                <a href="https://www.unchainedwolfs.com/diamondHands" className={styles.hoverablelink}>
                  Mint NFT
                </a>
                <span> | </span>
                <a href="https://www.unchainedwolfs.com/diamondHands" className={styles.hoverablelink}>
                  Scores
                </a>
              </p>

        <hr className={styles.divider} />

        <div style={{ marginTop: 32, marginBottom: 32 }}>
          <Link href="/create" className={styles.mainButton} style={{ textDecoration: "none" }}>
            Create A Listing
          </Link>
        </div>

        <div className="main">
          {
            // If the listings are loading, show a loading message
            loadingListings ? (
              <div>Loading listings...</div>
            ) : (
              // Otherwise, show the listings
              <div className={styles.listingGrid}>
                {listings?.map((listing) => (
                  <div
                    key={listing.id}
                    className={styles.listingShortView}
                    onClick={() => router.push(`/listing/${listing.id}`)}
                  >
                    <MediaRenderer
                      src={listing.asset.image}
                      style={{
                        borderRadius: 16,
                        // Fit the image to the container
                        width: "20%",
                        height: "20%",
                      }}
                    />
                    <h2 className={styles.nameContainer}>
                      <Link href={`/listing/${listing.id}`} className={styles.name}>
                        {listing.asset.name}
                      </Link>
                    </h2>

                    <p>
                      <b>{listing.buyoutCurrencyValuePerToken.displayValue}</b>{" "}
                      {listing.buyoutCurrencyValuePerToken.symbol}
                    </p>
                  </div>
                ))}
              </div>
            )
          }
        </div>
      </div>
    </>
  );
};

export default Home;
