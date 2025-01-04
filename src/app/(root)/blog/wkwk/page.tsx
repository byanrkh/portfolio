import Divider from "@/components/ui/Divider";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <>
      <section>
        <header>
          <h1 className="text-2xl sm:text-4xl font-extrabold">
            Lorem ipsum dolor sit amet.
          </h1>
          <ul className="flex gap-2 mt-1">
            <li>Jan 1, 2025</li>·
            <li>
              <Link href={"/"} className="underline hover:no-underline">
                NextJS
              </Link>
            </li>
          </ul>
        </header>
        <Divider />
        <article className="prose prose-invert">
          <h1>Sed aegre Thestiadae venatu </h1>
          <h2>Rutilis actis</h2>
          <p>
            Lorem markdownum opus acta hinc eburno; curam comae reddere. His
            vulnera. Fausto illos. Nisi malus adnuit dat vestras dignus et mihi
            hic{" "}
            <Link href={"http://diversaque-se.com/calescit.html"}>
              silentia
            </Link>{" "}
            aniles. Monimenta viroque habet fit, res tam est,{" "}
            <b>fore relicta sua</b> natos non vellem lacerare reservet.
          </p>{" "}
          <ul>
            <li>Oracula quoque et status occasus exiguo</li>
            <li>Referam Procne</li>
            <li>Illi pignora</li>
            <li>Aestuat ut invisi medicata traderet dira</li>
            <li>Risi Achilles in peto nunc tibi infringat</li>
          </ul>
          <h2>Tum penetrant agmen</h2>
          <p>
            Deorum tibi Bacche, inter <u>nato putat</u> ora, est invenies dabat.
            Clamat est horrentia petere; fecit utque, quis donec coniuge subitis
            in!
          </p>{" "}
          <p>
            Repetita tamen rediere, Menephron, conferat pondere damnum. Et et
            comae in omne duros repelli nymphae herbosaque adhuc uteri nec;
            nepoti dumque ille?
          </p>{" "}
          <h2>Sola nuper crimina tangamque esse</h2>{" "}
          <p>
            Per probas alteraque, qua vivacia mille sit feci vento, post nondum
            impetus? Ducentem vultum pharetram Hectoreis ulla, ait sitim
            discussit vetui fuit, peperisse, non sors Tempe.
          </p>{" "}
          <p>
            Gesserat legi, nudare. Tolerare <b>vocesque sibi</b>, igitur, annum
            <b>occupat est</b> iubet opus ambiguum, ipsa neque ominibus genitor
            citi.
          </p>
        </article>
      </section>
    </>
  );
}
